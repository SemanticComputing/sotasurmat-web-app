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
      label: 'Nimi',
      desc: `
        Nimi
      `,
      valueType: 'object',
      makeLink: true,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 100
    },
    {
      id: 'party',
      externalLink: true,
      label: 'Osapuoli',
      desc: `
        Osapuoli
      `,
      valueType: 'object',
      makeLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 100
    },
    {
      id: 'registeredMunicipality',
      externalLink: true,
      label: 'Kirjoillaolokunta',
      desc: `
        Kirjoillaolokunta
      `,
      valueType: 'object',
      makeLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 150
    },
    {
      id: 'deathMunicipality',
      externalLink: true,
      label: 'Kuolinkunta',
      desc: `
        Kuolinkunta
      `,
      valueType: 'object',
      makeLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 150
    },
    {
      id: 'occupation',
      externalLink: true,
      label: 'Ammatti',
      desc: `
        Ammatti
      `,
      valueType: 'object',
      makeLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 125
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
      id: 'birthDate',
      externalLink: true,
      label: 'Syntymäpäivä',
      desc: `
        Henkilön syntymäpäivä. Epäselvissä tapauksissa on annettu arvion mukaan aikaisin mahdollinen päivämäärä.
      `,
      valueType: 'object',
      makeLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 125
    },
    {
      id: 'deathDate',
      externalLink: true,
      label: 'Kuolinpäivä',
      desc: `
        Henkilön kuolinpäivä. Epäselvissä tapauksissa on annettu arvion mukaan aikaisin mahdollinen päivämäärä.
      `,
      valueType: 'object',
      makeLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 125
    },
  ],
};

const resultClasses = new Set([
  'surmatut',
  'csvDeaths',
  'personExtras'
]);

const surmatut = (state = INITIAL_STATE, action) => {
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

export default surmatut;
