/* TODO:
  labelPath is only used when sorting results, so it should removed from
  facet configs
*/
export const facetConfigs = {
  manuscripts: {
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
  },
  works: {
    rdfType: 'frbroo:F1_Work',
    label: {
      id: 'label',
      type: 'text',
      textQueryProperty: 'skos:prefLabel'
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
    // for sorting facet results
    prefLabel: {
      labelPath: 'skos:prefLabel',
    },
  },
  people: {
    rdfType: 'mmm-schema:Person',
    label: {
      id: 'label',
      type: 'text',
      textQueryProperty: 'skos:prefLabel'
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
    // for sorting facet results
    prefLabel: {
      labelPath: 'skos:prefLabel',
    },
  },
  organizations: {
    rdfType: 'mmm-schema:Organization',
    label: {
      id: 'label',
      type: 'text',
      textQueryProperty: 'skos:prefLabel'
    },
    source: {
      id: 'source',
      facetValueFilter: '',
      labelPath: 'dct:source/skos:prefLabel',
      predicate: 'dct:source',
      type: 'list',
    },
    // for sorting facet results
    prefLabel: {
      labelPath: 'skos:prefLabel',
    },
  },
  places: {
    rdfType: 'crm:E53_Place',
    label: {
      id: 'label',
      type: 'text',
      textQueryProperty: 'skos:prefLabel'
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
    // for sorting facet results
    prefLabel: {
      labelPath: 'skos:prefLabel',
    },
  },
};
