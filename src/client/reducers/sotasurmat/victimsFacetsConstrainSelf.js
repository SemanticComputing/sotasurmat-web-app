import { handleFacetConstrainSelfAction } from '../general/facetsConstrainSelf'

export const INITIAL_STATE = {
  updatedFacet: null,
  facetUpdateID: 0,
  updatedFilter: null,
  facets: {
    prefLabel: {
      id: 'prefLabel',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: null,
      sortDirection: null,
      sortButton: false,
      spatialFilterButton: false,
      isFetching: false,
      searchField: false,
      containerClass: 'one',
      filterType: 'textFilter',
      textFilter: null,
      priority: 1
    },
    // familyName: {
    //   id: 'familyName',
    //   // predicate: defined in backend
    //   distinctValueCount: 0,
    //   values: [],
    //   flatValues: [],
    //   sortBy: null,
    //   sortDirection: null,
    //   sortButton: false,
    //   spatialFilterButton: false,
    //   isFetching: false,
    //   searchField: false,
    //   containerClass: 'one',
    //   filterType: 'textFilter',
    //   textFilter: null,
    //   priority: 1
    // },
    // firstName: {
    //   id: 'firstName',
    //   // predicate: defined in backend
    //   distinctValueCount: 0,
    //   values: [],
    //   flatValues: [],
    //   sortBy: null,
    //   sortDirection: null,
    //   sortButton: false,
    //   spatialFilterButton: false,
    //   isFetching: false,
    //   searchField: false,
    //   containerClass: 'one',
    //   filterType: 'textFilter',
    //   textFilter: null,
    //   priority: 1
    // },
    birthTimespan: {
      id: 'birthTimespan',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: null,
      sortDirection: null,
      sortButton: false,
      spatialFilterButton: false,
      isFetching: false,
      searchField: false,
      containerClass: 'three',
      filterType: 'dateFilter',
      min: '1800-01-01',
      max: '1922-12-31',
      timespanFilter: null,
      type: 'date'
    },
    deathTimespan: {
      id: 'deathTimespan',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: null,
      sortDirection: null,
      sortButton: false,
      spatialFilterButton: false,
      isFetching: false,
      searchField: false,
      containerClass: 'three',
      filterType: 'dateFilter',
      min: '1914-01-01',
      max: '1922-12-31',
      timespanFilter: null,
      type: 'date'
    },
    age: {
      id: 'age',
      label: 'Ikä',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'instanceCount',
      sortDirection: 'desc',
      sortButton: true,
      spatialFilterButton: false,
      isFetching: false,
      searchField: true,
      containerClass: 'three',
      type: 'integer',
      filterType: 'integerFilter',
      integerFilter: null
    },
    party: {
      id: 'party',
      label: 'Osapuoli',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'instanceCount',
      sortDirection: 'desc',
      sortButton: true,
      spatialFilterButton: false,
      isFetching: false,
      searchField: false,
      containerClass: 'three',
      filterType: 'uriFilter',
      uriFilter: null
    },
    occupation: {
      id: 'occupation',
      label: 'Ammatti',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'prefLabel',
      sortDirection: 'asc',
      sortButton: true,
      spatialFilterButton: false,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null
    },
    // ammoOccupation: {
    //   id: 'ammoOccupation',
    //   label: 'AMMO Ammatti',
    //   // predicate: defined in backend
    //   distinctValueCount: 0,
    //   values: [],
    //   flatValues: [],
    //   sortBy: 'prefLabel',
    //   sortDirection: 'asc',
    //   sortButton: true,
    //   spatialFilterButton: false,
    //   isFetching: false,
    //   searchField: true,
    //   containerClass: 'ten',
    //   filterType: 'uriFilter',
    //   uriFilter: null,
    // },

    causeOfDeath: {
      id: 'causeOfDeath',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'prefLabel',
      sortDirection: 'asc',
      sortButton: true,
      spatialFilterButton: false,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null
    },
    registeredMunicipality: {
      id: 'registeredMunicipality',
      label: 'Kirjoillaolokunta',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'prefLabel',
      sortDirection: 'asc',
      sortButton: true,
      spatialFilterButton: false,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null
    },
    registeredProvince: {
      id: 'registeredProvince',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'prefLabel',
      sortDirection: 'asc',
      sortButton: true,
      spatialFilterButton: false,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null
    },
    registeredCountry: {
      id: 'registeredCountry',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'prefLabel',
      sortDirection: 'asc',
      sortButton: true,
      spatialFilterButton: false,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null
    },
    deathMunicipality: {
      id: 'deathMunicipality',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'prefLabel',
      sortDirection: 'asc',
      sortButton: true,
      spatialFilterButton: false,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null
    },
    deathProvince: {
      id: 'deathProvince',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'prefLabel',
      sortDirection: 'asc',
      sortButton: true,
      spatialFilterButton: false,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null
    },
    deathCountry: {
      id: 'deathCountry',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'prefLabel',
      sortDirection: 'asc',
      sortButton: true,
      spatialFilterButton: false,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null
    },
    gender: {
      id: 'gender',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'prefLabel',
      sortDirection: 'asc',
      sortButton: false,
      spatialFilterButton: false,
      isFetching: false,
      searchField: false,
      containerClass: 'two',
      filterType: 'uriFilter',
      uriFilter: null,
      priority: 8
    },
    militaryOrganization: {
      id: 'militaryOrganization',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'prefLabel',
      sortDirection: 'asc',
      sortButton: false,
      spatialFilterButton: false,
      isFetching: false,
      searchField: false,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null,
      priority: 8
    },
    maritalStatus: {
      id: 'maritalStatus',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'prefLabel',
      sortDirection: 'asc',
      sortButton: false,
      spatialFilterButton: false,
      isFetching: false,
      searchField: false,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null,
      priority: 8
    },
    numberOfChildren: {
      id: 'numberOfChildren',
      label: 'Lasten määrä',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'instanceCount',
      sortDirection: 'desc',
      sortButton: true,
      spatialFilterButton: false,
      isFetching: false,
      searchField: true,
      containerClass: 'three',
      type: 'integer',
      filterType: 'integerFilter',
      integerFilter: null
    },
    hisclass7: {
      id: 'hisclass7',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'prefLabel',
      sortDirection: 'asc',
      sortButton: true,
      spatialFilterButton: false,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null
    },
    coo1980: {
      id: 'coo1980',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'prefLabel',
      sortDirection: 'asc',
      sortButton: true,
      spatialFilterButton: false,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null,
      type: 'hierarchical'
    },
    deathLikelihood: {
      id: 'deathLikelihood',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'prefLabel',
      sortDirection: 'asc',
      sortButton: false,
      spatialFilterButton: false,
      isFetching: false,
      searchField: false,
      containerClass: 'four',
      filterType: 'uriFilter',
      uriFilter: null,
      priority: 8
    }
  }
}

const victimsFacetsConstrainSelf = (state = INITIAL_STATE, action) => {
  if (action.facetClass === 'victims') {
    return handleFacetConstrainSelfAction(state, action, INITIAL_STATE)
  } else return state
}

export default victimsFacetsConstrainSelf
