import {
  deathsProperties,
  personProperties
} from '../sparql_queries/SparqlQueriesVictims'
import { prefixes } from '../sparql_queries/SparqlQueriesPrefixes'

export const victimsPerspectiveConfig = {
  endpoint: {
    url: 'http://ldf.fi/siso/sparql',
    prefixes,
    useAuth: false
  },
  facetClass: 'siso-schema:Death_record',
  paginatedResults: {
    properties: deathsProperties
  },
  instance: {
    properties: personProperties,
    relatedInstances: ''
  },
  facets: {
    prefLabel: {
      id: 'prefLabel',
      facetValueFilter: '',
      label: 'Title',
      labelPath: 'skos:prefLabel',
      textQueryPredicate: '', // empty for querying the facetClass
      textQueryProperty: 'skos:prefLabel', // limit only to prefLabels
      type: 'text'
    },
    familyName: {
      id: 'familyName',
      facetValueFilter: '',
      label: 'familyName',
      labelPath: 'siso-s:familyName',
      textQueryPredicate: '', // empty for querying the facetClass
      textQueryProperty: 'siso-s:familyName', // limit only to prefLabels
      type: 'text'
    },
    firstName: {
      id: 'firstName',
      facetValueFilter: '',
      label: 'firstName',
      labelPath: 'siso-s:firstName',
      textQueryPredicate: '', // empty for querying the facetClass
      textQueryProperty: 'siso-s:firstName', // limit only to prefLabels
      type: 'text'
    },
    party: {
      id: 'party',
      facetValueFilter: '',
      labelPath: 'siso-schema:party/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:party'
    },
    occupation: {
      id: 'occupation',
      facetValueFilter: '',
      labelPath: 'siso-schema:occupation/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:occupation'
    },
    livingMunicipality: {
      id: 'livingMunicipality',
      facetValueFilter: '',
      labelPath: 'siso-schema:living_municipality/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:living_municipality'
    },
    gender: {
      id: 'gender',
      facetValueFilter: '',
      labelPath: 'siso-schema:gender/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:gender'
    },
    registeredPlace: {
      id: 'registeredPlace',
      facetValueFilter: '',
      labelPath: 'siso-schema:registered_place/skos:prefLabel',
      type: 'hierarchical',
      predicate: 'siso-schema:registered_place',
      parentPredicate: 'siso-schema:registered_place/skos:broader+',
      parentProperty: 'skos:broader'
    },
    deathTimespan: {
      id: 'deathTimespan',
      facetValueFilter: '',
      sortByAscPredicate: 'siso-schema:death_time/crm:P82a_begin_of_the_begin',
      sortByDescPredicate: 'siso-schema:death_time/crm:P82b_end_of_the_end',
      predicate: 'siso-schema:death_time',
      startProperty: 'crm:P82a_begin_of_the_begin',
      endProperty: 'crm:P82b_end_of_the_end',
      type: 'timespan'
    },
    birthTimespan: {
      id: 'birthTimespan',
      facetValueFilter: '',
      sortByAscPredicate: 'siso-schema:birth_time/crm:P82a_begin_of_the_begin',
      sortByDescPredicate: 'siso-schema:birth_time/crm:P82b_end_of_the_end',
      predicate: 'siso-schema:birth_time',
      startProperty: 'crm:P82a_begin_of_the_begin',
      endProperty: 'crm:P82b_end_of_the_end',
      type: 'timespan'
    },
    causeOfDeath: {
      id: 'causeOfDeath',
      facetValueFilter: '',
      labelPath: 'siso-schema:cause_of_death/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:cause_of_death'
    },
    registeredMunicipality: {
      id: 'registeredMunicipality',
      facetValueFilter: '',
      labelPath: 'siso-schema:registered_municipality/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:registered_municipality',
      parentPredicate: 'siso-schema:registered_municipality/skos:broader+'
    },
    registeredProvince: {
      id: 'registeredProvince',
      facetValueFilter: '',
      labelPath: 'siso-schema:registered_province/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:registered_province',
      parentPredicate: 'siso-schema:registered_province/skos:broader+'
    },
    registeredCountry: {
      id: 'registeredCountry',
      facetValueFilter: '',
      labelPath: 'siso-schema:registered_country/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:registered_country',
      parentPredicate: 'siso-schema:registered_country/skos:broader+'
    },
    deathMunicipality: {
      id: 'deathMunicipality',
      facetValueFilter: '',
      labelPath: 'siso-schema:death_municipality/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:death_municipality',
      parentPredicate: 'siso-schema:death_municipality/skos:broader+'
    },
    deathProvince: {
      id: 'deathProvince',
      facetValueFilter: '',
      labelPath: 'siso-schema:death_province/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:death_province',
      parentPredicate: 'siso-schema:death_province/skos:broader+'
    },
    deathCountry: {
      id: 'deathCountry',
      facetValueFilter: '',
      labelPath: 'siso-schema:death_country/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:death_country',
      parentPredicate: 'siso-schema:death_country/skos:broader+'
    },
    ammoOccupation: {
      id: 'ammoOccupation',
      labelPath: 'siso-schema:ammo_occupation/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:ammo_occupation',
      facetValueFilter: `
        `,
      facetLabelFilter: 'FILTER(LANG(?prefLabel_) = \'fi\')'
    },
    hisclass7: {
      id: 'hisclass7',
      labelPath: 'siso-schema:ammo_occupation/ammo-s:hisclass7/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:ammo_occupation/ammo-s:hisclass7',
      facetValueFilter: `
        `,
      facetLabelFilter: 'FILTER(LANG(?prefLabel_) = \'fi\')'
    },
    coo1980: {
      id: 'coo1980',
      labelPath: 'siso-schema:ammo_occupation/ammo-s:coo1980_code/skos:prefLabel',
      type: 'hierarchical',
      predicate: 'siso-schema:ammo_occupation/ammo-s:coo1980_code',
      facetValueFilter: `
        `,
      facetLabelFilter: 'FILTER(LANG(?prefLabel_) = \'fi\')',
      parentPredicate: 'siso-schema:ammo_occupation/ammo-s:coo1980_code/skos:broader+',
      parentProperty: 'skos:broader'
    },
    birthPlace: {
      id: 'birthPlace',
      facetValueFilter: '',
      labelPath: 'siso-schema:birth_place/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:birth_place',
      parentPredicate: 'siso-schema:birth_place/skos:broader+'
    },

    // hisco: {
    //   id: 'hisco',
    //   labelPath: 'siso-schema:ammo_occupation/ammo-s:hisco_code/skos:prefLabel',
    //   type: 'hierarchical',
    //   predicate: 'siso-schema:ammo_occupation/ammo-s:hisco_code',
    //   facetValueFilter: `
    //     `,
    //   facetLabelFilter: `FILTER(LANG(?prefLabel_) = 'en')`,
    //   parentPredicate: 'siso-schema:ammo_occupation/ammo-s:hisco_code/skos:broader+',
    //   parentProperty: 'skos:broader'
    // },
    hisco: {
      id: 'hisco',
      labelPath: 'siso-schema:ammo_occupation/ammo-s:hisco_code/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:ammo_occupation/ammo-s:hisco_code',
      facetValueFilter: `
        `,
      facetLabelFilter: 'FILTER(LANG(?prefLabel_) = \'en\')'
    },
    age: {
      id: 'age',
      facetValueFilter: '',
      labelPath: 'siso-schema:age',
      predicate: 'siso-schema:age',
      type: 'integer'
    },
    numberOfChildren: {
      id: 'numberOfChildren',
      facetValueFilter: '',
      labelPath: 'siso-schema:num_of_children',
      predicate: 'siso-schema:num_of_children',
      type: 'integer'
    },
    militaryOrganization: {
      id: 'militaryOrganization',
      facetValueFilter: '',
      labelPath: 'siso-schema:rank/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:military_organization'
    },
    maritalStatus: {
      id: 'maritalStatus',
      facetValueFilter: '',
      labelPath: 'siso-schema:marital_status/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:marital_status'
    },
    // familyWelfare: {
    //   id: 'familyWelfare',
    //   facetValueFilter: '',
    //   labelPath: 'siso-schema:family_welfare/skos:prefLabel',
    //   type: 'list',
    //   predicate: 'siso-schema:family_welfare',
    // },
    deathLikelihood: {
      id: 'deathLikelihood',
      facetValueFilter: '',
      labelPath: 'siso-schema:death_likelihood/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:death_likelihood'
    }
  }
}
