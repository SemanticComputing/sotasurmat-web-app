/* TODO:
  labelPath is only used when sorting results, so it should removed from
  facet configs
*/
export const facetConfigs = {
  deaths: {
    rdfType: 'siso-schema:Death_record',
    label: {
      id: 'label',
      type: 'text',
      textQueryProperty: 'skos:prefLabel'
    },
    prefLabel: {
      id: 'prefLabel',
      facetValueFilter: '',
      label: 'Title',
      labelPath: 'skos:prefLabel',
      type: 'text',
      predicate: 'text:query'
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
      type: 'list',
      predicate: 'siso-schema:registered_place',
    },
  },
};
