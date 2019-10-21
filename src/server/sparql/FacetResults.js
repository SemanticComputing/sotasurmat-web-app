import { runSelectQuery } from './SparqlApi';
import { prefixes } from './SparqlQueriesPrefixes';
import {
  endpoint,
  countQuery,
  facetResultSetQuery,
  instanceQuery
} from './SparqlQueriesGeneral';
import {
  deathsProperties,
  personProperties,
  birthYearsQuery,
  ageQuery, deathDateQuery,
  csvDeathsQuery,
  extrasTemplate,
  extrasTypeList,
  deathPlacesQuery,
  deathsAt
} from './SparqlQueriesDeaths';
import {
  battleProperties, battlePlacesQuery, battlePlaceQuery, battlePropertiesInfoWindow
} from './SparqlQueriesBattles';
import {
  actorProperties,
  placesActorsQuery,
} from './SparqlQueriesActors';
import {
  placePropertiesInstancePage,
  placePropertiesFacetResults,
  placePropertiesInfoWindow,
  manuscriptsProducedAt,
  actorsAt,
  allPlacesQuery,
} from './SparqlQueriesPlaces';
import { facetConfigs } from './FacetConfigsMMM';
import { mapCount, mapPlaces, mapBirthYearCount, mapAgeCount, mapCountGroups } from './Mappers';
import { makeObjectList } from './SparqlObjectMapper';
import { generateConstraintsBlock } from './Filters';

export const getPaginatedResults = async ({
  resultClass,
  page,
  pagesize,
  constraints,
  sortBy,
  sortDirection,
  resultFormat
}) => {
  const response = await getPaginatedData({
    resultClass,
    page,
    pagesize,
    constraints,
    sortBy,
    sortDirection,
    resultFormat
  });
  if (resultFormat === 'json') {
    return {
      resultClass: resultClass,
      page: page,
      pagesize: pagesize,
      data: response.data,
      sparqlQuery: response.sparqlQuery
    };
  } else {
    return response;
  }
};

export const getAllResults = ({
  resultClass,
  facetClass,
  constraints,
  resultFormat
}) => {
  let q = '';
  let filterTarget = '';
  let mapper = makeObjectList;
  //console.log(resultClass)
  switch (resultClass) {
    case 'battlePlaces':
      q = battlePlacesQuery;
      filterTarget = 'id';
      break;
    case 'birthYearCount':
      q = birthYearsQuery;
      mapper = mapBirthYearCount;
      filterTarget = 'id';
      break;
    case 'placesAll':
      q = allPlacesQuery;
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
    case 'csvDeaths':
      q = csvDeathsQuery;
      filterTarget = 'id';
      break;
    case 'deathPlaces':
      q = deathPlacesQuery;
      mapper = mapPlaces;
      filterTarget = 'deathRecord';
      break;
  }
  if (constraints == null) {
    q = q.replace('<FILTER>', '# no filters');
  } else {
    q = q.replace('<FILTER>', generateConstraintsBlock({
      resultClass: resultClass,
      facetClass: facetClass,
      constraints: constraints,
      filterTarget: filterTarget,
      facetID: null
    }));
  }
  //console.log(prefixes + q)
  return runSelectQuery({
    query: prefixes + q,
    endpoint,
    resultMapper: mapper,
    resultFormat
  });
};

export const getResultCount = async ({
  resultClass,
  constraints,
  resultFormat
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
  const response = await runSelectQuery({
    query: prefixes + q,
    endpoint,
    resultMapper: mapCount,
    resultFormat
  });
  return({
    resultClass: resultClass,
    data: response.data,
    sparqlQuery: response.sparqlQuery
  });
};

const getPaginatedData = ({
  resultClass,
  page,
  pagesize,
  constraints,
  sortBy,
  sortDirection,
  resultFormat
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
    case 'surmatut':
      resultSetProperties = deathsProperties;
      break;
    case 'taistelut':
      resultSetProperties = battleProperties;
      break;
    default:
      resultSetProperties = '';
  }
  q = q.replace('<RESULT_SET_PROPERTIES>', resultSetProperties);
  // console.log(prefixes + q);
  return runSelectQuery({
    query: prefixes + q,
    endpoint,
    resultMapper: makeObjectList,
    resultFormat
  });
};

export const getByURI = ({
  resultClass,
  facetClass,
  constraints,
  uri,
  resultFormat
}) => {
  let q;
  let properties;
  switch (resultClass) {
    case 'surmatut':
      properties = personProperties.concat(createExtrasQueryBlock(extrasTypeList));
      q = instanceQuery;
      q = q.replace('<PROPERTIES>', properties);
      q = q.replace('<RELATED_INSTANCES>', '');
      break;
    case 'taistelut':
      q = instanceQuery;
      q = q.replace('<PROPERTIES>', battleProperties);
      q = q.replace('<RELATED_INSTANCES>', '');
      break;
    case 'battlePlaces':
      q = instanceQuery;
      q = q.replace('<PROPERTIES>', battleProperties);
      q = q.replace('<RELATED_INSTANCES>', '');
      break;
    case 'deathPlaces':
      q = instanceQuery;
      q = q.replace('<PROPERTIES>', placePropertiesInfoWindow);
      q = q.replace('<RELATED_INSTANCES>', deathsAt);
      break;

  }

  if (constraints == null) {
    q = q.replace('<FILTER>', '# no filters');
  } else {
    q = q.replace('<FILTER>', generateConstraintsBlock({
      resultClass: resultClass,
      facetClass: facetClass,
      constraints: constraints,
      filterTarget: 'related__id',
      facetID: null}));
  }

  q = q.replace('<ID>', `<${uri}>`);
  // console.log(prefixes + q)
  return runSelectQuery({
    query: prefixes + q,
    endpoint,
    resultMapper: makeObjectList,
    resultFormat
  });
};

function createExtrasQueryBlock(types) {
  let block = '';
  let unionBlock = '';
  types.forEach(function(item) {
    block = extrasTemplate.replace(/<TYPENAME>/g, item[0]);
    block = block.replace(/<TYPE>/g, item[1]);
    unionBlock = unionBlock.concat(block);
  });
  return unionBlock;
}
