import { handleDataFetchingAction } from '../general/results'

export const INITIAL_STATE = {
  results: null,
  resultUpdateID: 0,
  resultsSparqlQuery: null,
  paginatedResults: [],
  paginatedResultsSparqlQuery: null,
  resultCount: 0,
  page: -1,
  pagesize: 25,
  sortBy: 'prefLabel',
  sortDirection: 'asc',
  fetching: false,
  fetchingResultCount: false,
  facetedSearchHeaderExpanded: true,
  instancePageHeaderExpanded: false,
  instanceTableData: null,
  instanceTableExternalData: null,
  instanceSparqlQuery: null,
  maps: {
    deathPlaces: {
      center: [64.00, 30.00],
      zoom: 5
    }
  },
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
    }
  ]
}

const resultClasses = new Set([
  'victims',
  'csvDeaths',
  'personExtras',
  'ageCount',
  'birthYearCount',
  'deathDateCount',
  'deathPlaces'
])

const victims = (state = INITIAL_STATE, action) => {
  if (resultClasses.has(action.resultClass)) {
    return handleDataFetchingAction(state, action, INITIAL_STATE)
  } else return state
}

export default victims
