import { runSelectQuery } from './SparqlApi';
import { prefixes } from './SparqlQueriesPrefixes';
import {
  endpoint,
  countQuery,
  facetResultSetQuery,
  instanceQuery
} from './SparqlQueriesGeneral';
import {
  deathsProperties, personQuery, birthYearsQuery, ageQuery, deathDateQuery,
} from './SparqlQueriesDeaths';
import {
  battleProperties, battlePlacesQuery, battlePlaceQuery
} from './SparqlQueriesBattles';
import { facetConfigs } from './FacetConfigs';
import { mapCount, mapBirthYearCount, mapAgeCount, mapCountGroups } from './Mappers';
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
  // resultClass, // TODO: handle other classes than manuscripts
  facetClass,
  constraints,
  variant,
  resultFormat
}) => {
  //console.log(variant);
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
    // case 'actorPlaces':
    //   q = actorPlacesQuery;
    //   filterTarget = 'actor__id';
    //   mapper = mapPlaces;
    //   break;
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
  //console.log(prefixes + q);
  // }
  return runSelectQuery(prefixes + q, endpoint, mapper, 'json');
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
  const response = await runSelectQuery(prefixes + q, endpoint, mapCount, resultFormat);
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
  return runSelectQuery(prefixes + q, endpoint, makeObjectList, resultFormat);
};

export const getByURI = ({
  resultClass,
  // facetClass,
  // constraints,
  // variant,
  uri,
  resultFormat
}) => {
  let q;
  switch (resultClass) {
    case 'surmatut':
      q = instanceQuery;
      q = q.replace('<PROPERTIES>', deathsProperties);
      q = q.replace('<RELATED_INSTANCES>', '');
      break;
    case 'taistelut':
      q = instanceQuery;
      q = q.replace('<PROPERTIES>', battleProperties);
      q = q.replace('<RELATED_INSTANCES>', '');
      break;

  }

  q = q.replace('<ID>', `<${uri}>`);
  return runSelectQuery(prefixes + q, endpoint, makeObjectList, resultFormat);
};
