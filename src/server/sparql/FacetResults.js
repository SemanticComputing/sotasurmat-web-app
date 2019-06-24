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
import {
  generateFilter,
  hasFilters
} from './Filters';

export const getPaginatedResults = async ({
  resultClass,
  page,
  pagesize,
  uriFilters,
  spatialFilters,
  textFilters,
  timespanFilters,
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
    timespanFilters,
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
  timespanFilters,
  variant
}) => {
  let q = '';
  let filterTarget = '';
  switch (variant) {
    case 'battlePlaces':
      q = battlePlacesQuery;
      filterTarget = 'id';
      break;
  }
  const hasActiveFilters = hasFilters({
    uriFilters,
    spatialFilters,
    textFilters,
    timespanFilters,
  });
  if (!hasActiveFilters) {
    q = q.replace('<FILTER>', '# no filters');
  } else {
    q = q.replace('<FILTER>', generateFilter({
      facetClass: facetClass,
      uriFilters: uriFilters,
      spatialFilters: spatialFilters,
      textFilters: textFilters,
      timespanFilters: timespanFilters,
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
  textFilters,
  timespanFilters,
}) => {
  let q = countQuery;
  q = q.replace('<FACET_CLASS>', facetConfigs[resultClass].facetClass);
  const hasActiveFilters = hasFilters({
    uriFilters,
    spatialFilters,
    textFilters,
    timespanFilters,
  });
  if (!hasActiveFilters) {
    q = q.replace('<FILTER>', '# no filters');
  } else {
    q = q.replace('<FILTER>', generateFilter({
      resultClass: resultClass,
      facetClass: resultClass,
      uriFilters: uriFilters,
      spatialFilters: spatialFilters,
      textFilters: textFilters,
      timespanFilters: timespanFilters,
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
  timespanFilters,
  sortBy,
  sortDirection
}) => {
  let q = facetResultSetQuery;
  //console.log(resultClass)
  const facetConfig = facetConfigs[resultClass];
  const hasActiveFilters = hasFilters({
    uriFilters,
    spatialFilters,
    textFilters,
    timespanFilters,
  });
  if (!hasActiveFilters) {
    q = q.replace('<FILTER>', '# no filters');
  } else {
    q = q.replace('<FILTER>', generateFilter({
      resultClass: resultClass,
      facetClass: resultClass,
      uriFilters: uriFilters,
      spatialFilters: spatialFilters,
      textFilters: textFilters,
      timespanFilters: timespanFilters,
      filterTarget: 'id',
      facetID: null}));
  }
  q = q.replace('<FACET_CLASS>', facetConfig.facetClass);
  if (sortBy.endsWith('Timespan')) {
    q = q.replace('<ORDER_BY_PREDICATE>',
      sortDirection === 'asc'
        ? facetConfig[sortBy].sortByAscPredicate
        : facetConfig[sortBy].sortByDescPredicate);
  } else {
    q = q.replace('<ORDER_BY_PREDICATE>', facetConfig[sortBy].labelPath);
  }
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
  timespanFilters,
  //variant,
  uri
}) => {
  let q;
  switch (resultClass) {
    case 'battles':
      q = battlePlaceQuery;
      break;
  }
  const hasActiveFilters = hasFilters({
    uriFilters,
    spatialFilters,
    textFilters,
    timespanFilters,
  });
  if (!hasActiveFilters) {
    q = q.replace('<FILTER>', '# no filters');
  } else {
    q = q.replace('<FILTER>', generateFilter({
      resultClass: resultClass,
      facetClass: facetClass,
      uriFilters: uriFilters,
      spatialFilters: spatialFilters,
      textFilters: textFilters,
      timespanFilters: timespanFilters,
      filterTarget: 'manuscript__id',
      facetID: null}));
  }
  q = q.replace('<ID>', `<${uri}>`);
  // if (variant === 'productionPlaces') {
  //   console.log(prefixes + q)
  // }
  return runSelectQuery(prefixes + q, endpoint, makeObjectList);
};
