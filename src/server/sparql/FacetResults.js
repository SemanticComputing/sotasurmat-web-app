import { runSelectQuery } from './SparqlApi';
import { prefixes } from './SparqlQueriesPrefixes';
import { endpoint, countQuery, facetResultSetQuery } from './SparqlQueriesGeneral';
import {
  deathsProperties, personQuery, birthYearsQuery, ageQuery, deathDateQuery,
} from './SparqlQueriesDeaths';
import {
  battleProperties, battlePlacesQuery, battlePlaceQuery
} from './SparqlQueriesBattles';
import { facetConfigs } from './FacetConfigs';
import { mapCount, mapBirthYearCount, mapAgeCount, mapCountGroups } from './Mappers';
import { makeObjectList } from './SparqlObjectMapper';
import {
  generateConstraintsBlock,
} from './Filters';

export const getPaginatedResults = async ({
  resultClass,
  page,
  pagesize,
  constraints,
  sortBy,
  sortDirection
}) => {
  const data = await getPaginatedData({
    resultClass,
    page,
    pagesize,
    constraints,
    sortBy,
    sortDirection
  });
  return {
    pagesize: pagesize,
    page: page,
    results: data
  };
};

export const getAllResults = ({
  // resultClass, // TODO: handle other classes than manuscripts
  facetClass,
  constraints,
  variant
}) => {
  let q = '';
  let filterTarget = '';
  let mapper = makeObjectList;
  switch (variant) {
    case 'battlePlaces':
      q = battlePlacesQuery;
      filterTarget = 'id';
      break;
    case 'birthYearCount':
      q = birthYearsQuery;
      mapper = mapBirthYearCount;
      filterTarget = 'id';
      break;
    case 'ageCount':
      q = ageQuery;
      mapper = mapAgeCount;
      filterTarget = 'id';
      break;
    case 'deathDateCount':
      q = deathDateQuery;
      mapper = mapCountGroups;
      filterTarget = 'id';
      break;
  }
  if (constraints == null) {
    q = q.replace('<FILTER>', '# no filters');
  } else {
    q = q.replace('<FILTER>', generateConstraintsBlock({
      facetClass: facetClass,
      constraints: constraints,
      filterTarget: filterTarget,
      facetID: null
    }));
  }
  //if (variant == 'productionPlaces') {
  // console.log(prefixes + q);
  // }
  return runSelectQuery(prefixes + q, endpoint, mapper);
};

export const getResultCount = ({
  resultClass,
  constraints
}) => {
  let q = countQuery;
  q = q.replace('<FACET_CLASS>', facetConfigs[resultClass].facetClass);
  if (constraints == null) {
    q = q.replace('<FILTER>', '# no filters');
  } else {
    q = q.replace('<FILTER>', generateConstraintsBlock({
      resultClass: resultClass,
      facetClass: resultClass,
      constraints: constraints,
      filterTarget: 'id',
      facetID: null
    }));
  }
  return runSelectQuery(prefixes + q, endpoint, mapCount);
};

const getPaginatedData = ({
  resultClass,
  page,
  pagesize,
  constraints,
  sortBy,
  sortDirection
}) => {
  let q = facetResultSetQuery;
  //console.log(resultClass)
  const facetConfig = facetConfigs[resultClass];
  if (constraints == null) {
    q = q.replace('<FILTER>', '# no filters');
  } else {
    q = q.replace('<FILTER>', generateConstraintsBlock({
      resultClass: resultClass,
      facetClass: resultClass,
      constraints: constraints,
      filterTarget: 'id',
      facetID: null}));
  }
  q = q.replace('<FACET_CLASS>', facetConfig.facetClass);
  if (sortBy == null) {
    q = q.replace('<ORDER_BY_TRIPLE>', '');
    q = q.replace('<ORDER_BY>', '# no sorting');
  } else {
    let sortByPredicate = '';
    if (sortBy.endsWith('Timespan')) {
      sortByPredicate = sortDirection === 'asc'
        ? facetConfig[sortBy].sortByAscPredicate
        : facetConfig[sortBy].sortByDescPredicate;
    } else {
      sortByPredicate = facetConfig[sortBy].labelPath;
    }
    q = q.replace('<ORDER_BY_TRIPLE>',
      `OPTIONAL { ?id ${sortByPredicate} ?orderBy }`);
    q = q.replace('<ORDER_BY>',
      `ORDER BY (!BOUND(?orderBy)) ${sortDirection}(?orderBy)`);
  }
  q = q.replace('<PAGE>', `LIMIT ${pagesize} OFFSET ${page * pagesize}`);
  let resultSetProperties;
  switch (resultClass) {
    case 'deaths':
      resultSetProperties = deathsProperties;
      break;
    case 'battles':
      resultSetProperties = battleProperties;
      break;
    default:
      resultSetProperties = '';
  }
  q = q.replace('<RESULT_SET_PROPERTIES>', resultSetProperties);
  // console.log(prefixes + q)
  return runSelectQuery(prefixes + q, endpoint, makeObjectList);
};

export const getByURI = ({
  resultClass,
  facetClass,
  constraints,
  //variant,
  uri
}) => {
  let q;
  switch (resultClass) {
    case 'battles':
      q = battlePlaceQuery;
      break;
    case 'deaths':
      q = personQuery;
      break;
  }
  q = q.replace('<FILTER>', '# no filters');
  //if (constraints == null) {
  //  q = q.replace('<FILTER>', '# no filters');
  //} else {
  //  q = q.replace('<FILTER>', generateConstraintsBlock({
  //    resultClass: resultClass,
  //    facetClass: facetClass,
  //    constraints: constraints,
  //    filterTarget: 'manuscript__id',
  //    facetID: null}));
  //}
  q = q.replace('<ID>', `<${uri}>`);
  // if (variant === 'productionPlaces') {
  //   console.log(prefixes + q)
  // }
  return runSelectQuery(prefixes + q, endpoint, makeObjectList);
};
