import { facetConfigs } from './FacetConfigs';

export const generateFilter = ({
  facetClass,
  uriFilters,
  spatialFilters,
  textFilters,
  filterTarget,
  facetID,
  inverse,
}) => {
  let filterStr = '';
  let facetProperty = facetID !== null ? facetID : '';
  if (textFilters !== null) {
    for (let property in textFilters) {
      if (property !== facetProperty) {
        const queryString = textFilters[property];
        filterStr += `
          ?${filterTarget} text:query (${facetConfigs[facetClass][property].textQueryProperty} '${queryString}') .
        `;
      }
    }
  }
  if (spatialFilters !== null) {
    for (let property in spatialFilters) {
      if (property !== facetProperty) {
        const { latMin, longMin, latMax, longMax } = spatialFilters[property];
        filterStr += `
          ?${property}Filter spatial:withinBox (${latMin} ${longMin} ${latMax} ${longMax} 1000000) .
          ?${filterTarget} ${facetConfigs[facetClass][property].predicate} ?${property}Filter .
        `;
      }
    }
  }
  if (uriFilters !== null) {
    for (let property in uriFilters) {
      // when filtering facet values, apply filters only from other facets
      if (property !== facetProperty) {
        let addChildren = facetConfigs[facetClass][property].type == 'hierarchical';
        if (addChildren) {
          filterStr += `
              VALUES ?${property}Filter { <${uriFilters[property].join('> <')}> }
              ?${property}FilterWithChildren skos:broader* ?${property}Filter .
          `;
        } else {
          filterStr += `
              VALUES ?${property}Filter { <${uriFilters[property].join('> <')}> }
          `;
        }
        if (inverse) {
          filterStr += `
            FILTER NOT EXISTS {
              ?${filterTarget} ${facetConfigs[facetClass][property].predicate} ?${property}Filter .
              ?${filterTarget} ${facetConfigs[facetClass][facetID].predicate} ?id .
            }
          `;
        } else {
          const filterValue = addChildren
            ? `?${property}FilterWithChildren`
            : `?${property}Filter`;
          filterStr += `
            ?${filterTarget} ${facetConfigs[facetClass][property].predicate} ${filterValue} .
          `;
        }
      }
    }
  }
  return filterStr;
};

export const generateSelectedFilter = ({
  selectedValues,
  inverse
}) => {
  return (`
      FILTER(?id ${inverse ? 'NOT' : ''} IN ( <${selectedValues.join('>, <')}> ))
  `);
};
