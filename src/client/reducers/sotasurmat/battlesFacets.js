import { handleFacetAction } from '../general/facets'

export const INITIAL_STATE = {
  updatedFacet: null,
  facetUpdateID: 0,
  updatedFilter: null,
  facets: {
    prefLabel: {
      id: 'prefLabel',
      label: 'Taistelun nimi',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      // sortBy: 'instanceCount',
      // sortDirection: 'desc',
      sortButton: false,
      spatialFilterButton: false,
      isFetching: false,
      searchField: false,
      containerClass: 'one',
      filterType: 'textFilter',
      textFilter: null,
      priority: 1
    },
    greaterPlace: {
      id: 'greaterPlace',
      label: 'Kunta',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'prefLabel',
      sortDirection: 'asc',
      sortButton: false,
      spatialFilterButton: false,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null,
      type: 'hierarchical'
    }
  }
}

const battlesFacets = (state = INITIAL_STATE, action) => {
  if (action.facetClass === 'battles') {
    return handleFacetAction(state, action, INITIAL_STATE)
  } else return state
}

export default battlesFacets
