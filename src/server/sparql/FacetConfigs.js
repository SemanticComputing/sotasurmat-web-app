/* TODO:
  labelPath is only used when sorting results, so it should removed from
  facet configs
*/
export const facetConfigs = {
  deaths: {
    facetClass: 'siso-schema:Death_record',
    prefLabel: {
      id: 'prefLabel',
      facetValueFilter: '',
      label: 'Title',
      labelPath: 'skos:prefLabel',
      type: 'text',
      predicate: 'text:query',
      textQueryProperty: 'skos:prefLabel',
    },
    party: {
      id: 'party',
      facetValueFilter: '',
      labelPath: 'siso-schema:party/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:party',
    },
    occupation: {
      id: 'occupation',
      facetValueFilter: '',
      labelPath: 'siso-schema:occupation/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:occupation',
    },
    deathDate: {
      id: 'deathDate',
      facetValueFilter: '',
      labelPath: 'siso-schema:death_date',
      type: 'list',
      predicate: 'siso-schema:death_date',
    },
    birthDate: {
      id: 'birthDate',
      facetValueFilter: '',
      labelPath: 'siso-schema:birth_date',
      type: 'list',
      predicate: 'siso-schema:birth_date',
    },
    livingMunicipality: {
      id: 'livingMunicipality',
      facetValueFilter: '',
      labelPath: 'siso-schema:living_municipality/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:living_municipality',
    },
    gender: {
      id: 'gender',
      facetValueFilter: '',
      labelPath: 'siso-schema:gender/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:gender',
    },
    registeredPlace: {
      id: 'registeredPlace',
      facetValueFilter: '',
      labelPath: 'siso-schema:registered_place/skos:prefLabel',
      type: 'hierarchical',
      predicate: 'siso-schema:registered_place',
      parentPredicate: 'siso-schema:registered_place/skos:broader+',
    },
    deathTimespan: {
      id: 'deathTimespan',
      facetValueFilter: '',
      sortByAscPredicate: 'siso-schema:death_time/crm:P82a_begin_of_the_begin',
      sortByDescPredicate: 'siso-schema:death_time/crm:P82b_end_of_the_end',
      predicate: 'siso-schema:death_time',
      startProperty: 'crm:P82a_begin_of_the_begin',
      endProperty: 'crm:P82b_end_of_the_end',
      type: 'timespan',
    },
    birthTimespan: {
      id: 'birthTimespan',
      facetValueFilter: '',
      sortByAscPredicate: 'siso-schema:birth_time/crm:P82a_begin_of_the_begin',
      sortByDescPredicate: 'siso-schema:birth_time/crm:P82b_end_of_the_end',
      predicate: 'siso-schema:birth_time',
      startProperty: 'crm:P82a_begin_of_the_begin',
      endProperty: 'crm:P82b_end_of_the_end',
      type: 'timespan',
    },
    causeOfDeath: {
      id: 'causeOfDeath',
      facetValueFilter: '',
      labelPath: 'siso-schema:cause_of_death/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:cause_of_death',
    },
  },
  battles: {
    facetClass: 'siso-schema:Battle',
    prefLabel: {
      id: 'prefLabel',
      facetValueFilter: '',
      label: 'Title',
      labelPath: 'skos:prefLabel',
      type: 'text',
      predicate: 'text:query',
      textQueryProperty: 'skos:prefLabel',
    },
    startDate: {
      id: 'startDate',
      facetValueFilter: '',
      labelPath: 'siso-schema:start_date',
      type: 'list',
      predicate: 'siso-schema:start_date',
    },
    endDate: {
      id: 'birthDate',
      facetValueFilter: '',
      labelPath: 'siso-schema:end_date',
      type: 'list',
      predicate: 'siso-schema:end_date',
    },
    exactPlace: {
      id: 'exactPlace',
      facetValueFilter: '',
      labelPath: 'siso-schema:exact_place',
      type: 'list',
      predicate: 'siso-schema:exact_place',
    },
    units: {
      id: 'units',
      facetValueFilter: '',
      labelPath: 'siso-schema:units',
      type: 'list',
      predicate: 'siso-schema:units',
    },
    greaterPlace: {
      id: 'greaterPlace',
      facetValueFilter: '',
      labelPath: 'siso-schema:greater_place/skos:prefLabel',
      type: 'hierarchical',
      predicate: 'siso-schema:greater_place',
      parentPredicate: 'siso-schema:greater_place/skos:broader+',
    },
  }
};
