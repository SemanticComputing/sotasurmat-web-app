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
  sortBy: 'startDate',
  sortDirection: 'asc',
  fetching: false,
  fetchingResultCount: false,
  facetedSearchHeaderExpanded: true,
  instancePageHeaderExpanded: false,
  instanceTableData: null,
  instanceTableExternalData: null,
  instanceSparqlQuery: null,
  maps: {
    battlePlaces: {
      center: [64.00, 30.00],
      zoom: 5
    }
  },
  properties: [
    {
      id: 'prefLabel',
      label: 'Taistelun nimi',
      desc: 'Taistelun nimi',
      valueType: 'object',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 170
    },
    {
      id: 'startDate',
      label: 'alkupäivä',
      desc: `
        Taistelun alkupäivä
      `,
      valueType: 'string',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 150
    },
    {
      id: 'endDate',
      label: 'loppupäivä',
      desc: `
        Taistelun loppupäivä
      `,
      valueType: 'string',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 170
    },
    {
      id: 'greaterPlace',
      label: 'Kunta',
      desc: `
        Kunta tai muu suurempi paikka
      `,
      valueType: 'object',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 150
    },
    {
      id: 'exactPlace',
      label: 'Tarkka paikka',
      desc: `
        Taistelun tarkka paikka
      `,
      valueType: 'object',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 190
    },
    {
      id: 'units',
      label: 'Yksiköt',
      desc: `
        Taisteluun osallistuneita (lähinnä valkoisten) yksiköitä
      `,
      valueType: 'string',
      makeLink: false,
      externalLink: false,
      sortValues: true,
      numberedList: false,
      minWidth: 150
    }
  ]
}

const resultClasses = new Set([
  'battles',
  'battlePlaces',
  'battlePlacesAnimation'
])

const battles = (state = INITIAL_STATE, action) => {
  if (resultClasses.has(action.resultClass)) {
    return handleDataFetchingAction(state, action, INITIAL_STATE)
  } else return state
}

export default battles
