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
  SORT_RESULTS,
} from '../actions';
import {
  fetchResults,
  fetchResultsFailed,
  fetchResultCount,
  updateSortBy,
  updateResultCount,
  //updateResults,
  updatePaginatedResults,
  updateInstance,
  updatePage,
} from './helpers';

export const INITIAL_STATE = {
  results: [],
  paginatedResults: [],
  resultCount: 0,
  resultsUpdateID: -1,
  instance: {},
  page: -1,
  pagesize: 25,
  sortBy: 'prefLabel',
  sortDirection: 'asc',
  fetching: false,
  fetchingResultCount: false,
  tableColumns: [
    {
      id: 'prefLabel',
      label: 'Nimi',
      desc: `
        Nimi
      `,
      valueType: 'object',
      makeLink: true,
      sortValues: true,
      numberedList: false,
      minWidth: 100
    },
    {
      id: 'party',
      label: 'Osapuoli',
      desc: `
        Osapuoli
      `,
      valueType: 'object',
      makeLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 20
    },
    {
      id: 'registeredPlace',
      label: 'Kirjoillaolopaikka',
      desc: `
        Kirjoillaolopaikka
      `,
      valueType: 'object',
      makeLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 20
    },
    {
      id: 'occupation',
      label: 'Ammatti',
      desc: `
        Ammatti
      `,
      valueType: 'object',
      makeLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 20
    },
    {
      id: 'livingMunicipality',
      label: 'Asuinkunta',
      desc: `
        Asuinkunta
      `,
      valueType: 'object',
      makeLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 20
    },
    {
      id: 'birthDate',
      label: 'Syntymäpäivä',
      desc: `
        Syntymäpäivä
      `,
      valueType: 'object',
      makeLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 20
    },
    {
      id: 'deathDate',
      label: 'Kuolinpäivä',
      desc: `
        Kuolinpäivä
      `,
      valueType: 'object',
      makeLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 20
    },
  ],
};

const deaths = (state = INITIAL_STATE, action) => {
  if (action.resultClass === 'deaths') {
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
        return  (state, action);
      case UPDATE_PAGINATED_RESULTS:
        return updatePaginatedResults(state, action);
      case UPDATE_INSTANCE:
        return updateInstance(state, action);
      case UPDATE_PAGE:
        return updatePage(state, action);
      default:
        return state;
    }
  } else return state;
};

export default deaths;
