export const facetConfigs = {
  manuscripts: {
    rdfType: 'siso-schema:Death_record',
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
  },
  works: {
    rdfType: 'frbroo:F1_Work',
    prefLabel: {
      id: 'prefLabel',
      facetValueFilter: '',
      labelPath: 'skos:prefLabel',
      type: 'list',
    },
    source: {
      id: 'source',
      facetValueFilter: '',
      labelPath: 'dct:source/skos:prefLabel',
      predicate: 'dct:source',
      type: 'list',
    },
    author: {
      id: 'author',
      facetValueFilter: '',
      label: 'Author',
      labelPath: '^frbroo:R16_initiated/mmm-schema:carried_out_by_as_possible_author/skos:prefLabel',
      predicate: '^frbroo:R16_initiated/(mmm-schema:carried_out_by_as_possible_author|mmm-schema:carried_out_by_as_author)',
      type: 'list'
    },
  },
  people: {
    rdfType: 'mmm-schema:Person',
    prefLabel: {
      id: 'prefLabel',
      facetValueFilter: '',
      labelPath: 'skos:prefLabel',
      type: 'list',
    },
    source: {
      id: 'source',
      facetValueFilter: '',
      labelPath: 'dct:source/skos:prefLabel',
      predicate: 'dct:source',
      type: 'list',
    },
    place: {
      id: 'source',
      facetValueFilter: '',
      labelPath: 'mmm-schema:person_place/skos:prefLabel',
      predicate: 'mmm-schema:person_place',
      //parentPredicate: 'gvp:broaderPreferred+',
      type: 'list',
      //type: 'hierarchical',
    },
  },
  organizations: {
    rdfType: 'mmm-schema:Organization',
    prefLabel: {
      id: 'prefLabel',
      facetValueFilter: '',
      labelPath: 'skos:prefLabel',
      type: 'list',
    },
    source: {
      id: 'source',
      facetValueFilter: '',
      labelPath: 'dct:source/skos:prefLabel',
      predicate: 'dct:source',
      type: 'list',
    },
  },
  places: {
    rdfType: 'crm:E53_Place',
    prefLabel: {
      id: 'prefLabel',
      facetValueFilter: '',
      label: 'Title',
      labelPath: 'skos:prefLabel',
      type: 'list',
    },
    source: {
      id: 'source',
      facetValueFilter: '',
      label: 'Source',
      labelPath: 'dct:source/skos:prefLabel',
      predicate: 'dct:source',
      type: 'list',
    },
    area: {
      id: 'area',
      facetValueFilter: `
      FILTER(?id != <http://ldf.fi/mmm/place/tgn_7026519>)
      `,
      label: 'Area',
      labelPath: 'gvp:broaderPreferred/skos:prefLabel',
      predicate: 'gvp:broaderPreferred',
      parentPredicate: 'gvp:broaderPreferred+',
      type: 'hierarchical',
    },
    placeType: {
      id: 'type',
      facetValueFilter: '',
      label: 'Type',
      labelPath: 'gvp:placeTypePreferred',
      predicate: 'gvp:placeTypePreferred',
      type: 'list',
    },
  },
};
