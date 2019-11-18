import {
  FETCH_RESULTS,
  FETCH_RESULT_COUNT,
  FETCH_RESULTS_FAILED,
  FETCH_PAGINATED_RESULTS,
  FETCH_PAGINATED_RESULTS_FAILED,
  FETCH_BY_URI,
  UPDATE_RESULT_COUNT,
  UPDATE_RESULTS,
  UPDATE_PAGINATED_RESULTS,
  UPDATE_INSTANCE,
  UPDATE_PAGE,
  UPDATE_ROWS_PER_PAGE,
  SORT_RESULTS,
  UPDATE_PERSPECTIVE_HEADER_EXPANDED
} from '../../actions';
import {
  fetchResults,
  fetchResultsFailed,
  fetchResultCount,
  updateSortBy,
  updateResultCount,
  updateResults,
  updatePaginatedResults,
  updateInstance,
  updateInstanceExtra,
  updatePage,
  updateRowsPerPage,
  updateHeaderExpanded
} from '../helpers';

export const INITIAL_STATE = {
  results: [],
  resultsSparqlQuery: null,
  paginatedResults: [],
  resultCount: 0,
  resultsUpdateID: -1,
  paginatedResultsSparqlQuery: null,
  instance: null,
  instanceExtra: null,
  instanceSparqlQuery: null,
  instanceExtraSparqlQuery: null,
  page: -1,
  pagesize: 15,
  sortBy: 'prefLabel',
  sortDirection: 'asc',
  fetching: false,
  fetchingResultCount: false,
  headerExpanded: false,
  sparqlQuery: null,
  facetedSearchHeaderExpanded: false,
  instancePageHeaderExpanded: false,
  properties: [
    {
      id: 'prefLabel',
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 150
    },
    {
      id: 'party',
      externalLink: false,
      valueType: 'object',
      makeLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 150
    },
    {
      id: 'registeredMunicipality',
      externalLink: false,
      valueType: 'object',
      makeLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 190
    },
    {
      id: 'occupation',
      externalLink: true,
      valueType: 'object',
      makeLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 170
    },
    {
      id: 'deathMunicipality',
      externalLink: false,
      valueType: 'object',
      makeLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 170
    },
    // {
    //   id: 'livingMunicipality',
    //   label: 'Asuinkunta',
    //   desc: `
    //     Asuinkunta
    //   `,
    //   valueType: 'object',
    //   makeLink: false,
    //   sortValues: true,
    //   numberedList: false,
    //   minWidth: 125
    // },
    {
      id: 'birthTimespan',
      valueType: 'object',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 170
    },
    {
      id: 'deathTimespan',
      valueType: 'object',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 170
    },
  ],
};

const resultClasses = new Set([
  'victims',
  'csvDeaths',
  'personExtras'
]);

const victims = (state = INITIAL_STATE, action) => {
  if (resultClasses.has(action.resultClass)) {
    switch (action.type) {
      case FETCH_RESULTS:
      case FETCH_PAGINATED_RESULTS:
      case FETCH_BY_URI:
        return fetchResults(state);
      case FETCH_RESULT_COUNT:
        return fetchResultCount(state);
      case FETCH_RESULTS_FAILED:
      case FETCH_PAGINATED_RESULTS_FAILED:
        return fetchResultsFailed(state);
      case SORT_RESULTS:
        return updateSortBy(state, action);
      case UPDATE_RESULT_COUNT:
        return updateResultCount(state, action);
      case UPDATE_RESULTS:
        return updateResults(state, action);
      case UPDATE_PAGINATED_RESULTS:
        return updatePaginatedResults(state, action);
      case UPDATE_INSTANCE:
        if (action.resultClass === 'personExtras') {
          return updateInstanceExtra(state, action);
        } else {
          return updateInstance(state, action);
        }
      case UPDATE_PAGE:
        return updatePage(state, action);
      case UPDATE_ROWS_PER_PAGE:
        return updateRowsPerPage(state, action);
      case UPDATE_PERSPECTIVE_HEADER_EXPANDED:
        return updateHeaderExpanded(state, action);
      default:
        return state;
    }
  } else return state;
};

export default victims;
