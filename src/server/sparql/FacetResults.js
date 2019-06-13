import { runSelectQuery } from './SparqlApi';
import { prefixes } from './SparqlQueriesPrefixes';
import { endpoint, countQuery, facetResultSetQuery } from './SparqlQueriesGeneral';
import {
  deathsProperties,
} from './SparqlQueriesDeaths';
import {
  battleProperties, battlePlacesQuery, battlePlaceQuery
} from './SparqlQueriesBattles';
import { facetConfigs } from './FacetConfigs';
import { mapCount } from './Mappers';
import { makeObjectList } from './SparqlObjectMapper';
import { generateFilter } from './Filters';

export const getPaginatedResults = async ({
  resultClass,
  page,
  pagesize,
  uriFilters,
  spatialFilters,
  textFilters,
  sortBy,
  sortDirection
}) => {
  const data = await getPaginatedData({
    resultClass,
    page,
    pagesize,
    uriFilters,
    spatialFilters,
    textFilters,
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
  uriFilters,
  spatialFilters,
  textFilters,
  variant
}) => {
  let q = '';
  let filterTarget = '';
  switch (variant) {
    case 'battlePlaces':
      q = battlePlacesQuery;
      filterTarget = 'battles';
      break;
  }
  const hasFilters = uriFilters !== null
    || spatialFilters !== null
    || textFilters !== null;
  if (!hasFilters) {
    q = q.replace('<FILTER>', '# no filters');
  } else {
    q = q.replace('<FILTER>', generateFilter({
      facetClass: facetClass,
      uriFilters: uriFilters,
      spatialFilters: spatialFilters,
      textFilters: textFilters,
      filterTarget: filterTarget,
      facetID: null
    }));
  }
  //if (variant == 'productionPlaces') {
  // console.log(prefixes + q);
  // }
  return runSelectQuery(prefixes + q, endpoint, makeObjectList);
};

export const getResultCount = ({
  resultClass,
  uriFilters,
  spatialFilters,
  textFilters
}) => {
  let q = countQuery;
  q = q.replace('<FACET_CLASS>', facetConfigs[resultClass].facetClass);
  const hasFilters = uriFilters !== null
    || spatialFilters !== null
    || textFilters !== null;
  if (!hasFilters) {
    q = q.replace('<FILTER>', '# no filters');
  } else {
    q = q.replace('<FILTER>', generateFilter({
      resultClass: resultClass,
      facetClass: resultClass,
      uriFilters: uriFilters,
      spatialFilters: spatialFilters,
      textFilters: textFilters,
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
  uriFilters,
  spatialFilters,
  textFilters,
  sortBy,
  sortDirection
}) => {
  let q = facetResultSetQuery;
  //console.log(resultClass)
  const facetConfig = facetConfigs[resultClass];
  const hasFilters = uriFilters !== null
    || spatialFilters !== null
    || textFilters !== null;
  if (!hasFilters) {
    q = q.replace('<FILTER>', '# no filters');
  } else {
    q = q.replace('<FILTER>', generateFilter({
      resultClass: resultClass,
      facetClass: resultClass,
      uriFilters: uriFilters,
      spatialFilters: spatialFilters,
      textFilters: textFilters,
      filterTarget: 'id',
      facetID: null}));
  }
  q = q.replace('<FACET_CLASS>', facetConfig.facetClass);
  q = q.replace('<ORDER_BY_PREDICATE>', facetConfig[sortBy].labelPath);
  q = q.replace('<SORT_DIRECTION>', sortDirection);
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
  uriFilters,
  spatialFilters,
  textFilters,
  //variant,
  uri
}) => {
  let q;
  switch (resultClass) {
    case 'battles':
      q = battlePlaceQuery;
      break;
  }
  const hasFilters = uriFilters !== null
    || spatialFilters !== null
    || textFilters !== null;
  if (!hasFilters) {
    q = q.replace('<FILTER>', '# no filters');
  } else {
    q = q.replace('<FILTER>', generateFilter({
      resultClass: resultClass,
      facetClass: facetClass,
      uriFilters: uriFilters,
      spatialFilters: spatialFilters,
      textFilters: textFilters,
      filterTarget: 'manuscript__id',
      facetID: null}));
  }
  q = q.replace('<ID>', `<${uri}>`);
  // if (variant === 'productionPlaces') {
  //   console.log(prefixes + q)
  // }
  return runSelectQuery(prefixes + q, endpoint, makeObjectList);
};
