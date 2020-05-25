import {
  battleProperties
} from '../sparql_queries/SparqlQueriesBattles'
import { prefixes } from '../sparql_queries/SparqlQueriesPrefixes'

export const battlesPerspectiveConfig = {
  endpoint: {
    url: 'http://ldf.fi/siso/sparql',
    prefixes,
    useAuth: false
  },
  facetClass: 'siso-schema:Battle',
  paginatedResults: {
    properties: battleProperties
  },
  instance: {
    properties: battleProperties,
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
    startDate: {
      id: 'startDate',
      facetValueFilter: '',
      labelPath: 'siso-schema:start_date',
      type: 'list',
      predicate: 'siso-schema:start_date'
    },
    endDate: {
      id: 'birthDate',
      facetValueFilter: '',
      labelPath: 'siso-schema:end_date',
      type: 'list',
      predicate: 'siso-schema:end_date'
    },
    exactPlace: {
      id: 'exactPlace',
      facetValueFilter: '',
      labelPath: 'siso-schema:exact_place',
      type: 'list',
      predicate: 'siso-schema:exact_place'
    },
    units: {
      id: 'units',
      facetValueFilter: '',
      labelPath: 'siso-schema:units',
      type: 'list',
      predicate: 'siso-schema:units'
    },
    greaterPlace: {
      id: 'greaterPlace',
      facetValueFilter: '',
      labelPath: 'siso-schema:greater_place/skos:prefLabel',
      type: 'hierarchical',
      predicate: 'siso-schema:greater_place',
      parentPredicate: 'siso-schema:greater_place/skos:broader+',
      parentProperty: 'skos:broader'
    }
  }
}
