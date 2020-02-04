export const endpoint = 'http://ldf.fi/mmm/sparql'
// export const endpoint = 'http://localhost:3050/ds/sparql';

/* TODO:
  labelPath is only used when sorting results, so it should removed from
  facet configs
*/

const invalidActorTimespans = `
        <http://ldf.fi/mmm/time/bibale_element_876634-269>,
        <http://ldf.fi/mmm/time/bibale_element_876940-269>,
        <http://ldf.fi/mmm/time/bibale_element_877018-269>,
        <http://ldf.fi/mmm/time/bibale_element_876634-269>,
        <http://ldf.fi/mmm/time/bibale_element_877167-269>,
        <http://ldf.fi/mmm/time/bibale_element_877167-269>,
        <http://ldf.fi/mmm/time/bibale_element_882490-269>,
        <http://ldf.fi/mmm/time/sdbm_39923_birth_timespan>,
        <http://ldf.fi/mmm/time/sdbm_2814_birth_timespan>,
        <http://ldf.fi/mmm/time/sdbm_4391_birth_timespan>,
        <http://ldf.fi/mmm/time/sdbm_45865_birth_timespan>,
        <http://ldf.fi/mmm/time/sdbm_44872_birth_timespan>,
        <http://ldf.fi/mmm/time/sdbm_45182_birth_timespan>,
        <http://ldf.fi/mmm/time/sdbm_40695_birth_timespan>,
        <http://ldf.fi/mmm/time/sdbm_44762_birth_timespan>,
        <http://ldf.fi/mmm/time/sdbm_726_birth_timespan>,
        <http://ldf.fi/mmm/time/sdbm_754_birth_timespan>,
        <http://ldf.fi/mmm/time/sdbm_41046_birth_timespan>,
        <http://ldf.fi/mmm/time/sdbm_5963_birth_timespan>
`

const invalidTransferOfCustodyTimespans = `
        <http://ldf.fi/mmm/time/bibale_element_478356>,
        <http://ldf.fi/mmm/time/bibale_element_503431>,
        <http://ldf.fi/mmm/time/bibale_element_515064>,
        <http://ldf.fi/mmm/time/bibale_element_515527>,
        <http://ldf.fi/mmm/time/bibale_element_524327>,
        <http://ldf.fi/mmm/time/bibale_element_524686>,
        <http://ldf.fi/mmm/time/bibale_element_526456>,
        <http://ldf.fi/mmm/time/bibale_element_527378>,
        <http://ldf.fi/mmm/time/bibale_element_528274>,
        <http://ldf.fi/mmm/time/bibale_element_530550>,
        <http://ldf.fi/mmm/time/bibale_element_456150>,
        <http://ldf.fi/mmm/time/bibale_element_466496>,
        <http://ldf.fi/mmm/time/bibale_element_471075>
`

const invalidActors = `
        <http://ldf.fi/mmm/actor/sdbm_names/>
`

const invalidLanguages = `
        <http://ldf.fi/mmm/language/sdbm_languages/>
`

const invalidMaterials = `
        <http://ldf.fi/mmm/material/>
`

export const facetConfigs = {
  manuscripts: {
    facetClass: 'frbroo:F4_Manifestation_Singleton',
    prefLabel: {
      id: 'prefLabel',
      labelPath: 'skos:prefLabel',
      textQueryPredicate: '', // empty for querying the facetClass
      textQueryProperty: 'skos:prefLabel', // limit only to prefLabels
      type: 'text'
    },
    author: {
      id: 'author',
      facetValueFilter: `
       FILTER(?id NOT IN (
        ${invalidActors}
       ))
      `,
      label: 'Author',
      labelPath: 'mmm-schema:manuscript_author/skos:prefLabel',
      predicate: 'mmm-schema:manuscript_author',
      type: 'list'
    },
    work: {
      id: 'work',
      labelPath: 'mmm-schema:manuscript_work/skos:prefLabel',
      textQueryPredicate: 'mmm-schema:manuscript_work', // text query for works
      textQueryProperty: '', // query everything in text index
      type: 'text'
    },
    productionPlace: {
      id: 'productionPlace',
      facetValueFilter: `
      ?id dct:source <http://vocab.getty.edu/tgn/> .
      `,
      label: 'Production place',
      labelPath: '^crm:P108_has_produced/crm:P7_took_place_at/skos:prefLabel',
      predicate: '^crm:P108_has_produced/crm:P7_took_place_at',
      parentProperty: 'gvp:broaderPreferred',
      parentPredicate: '^crm:P108_has_produced/crm:P7_took_place_at/gvp:broaderPreferred+',
      type: 'hierarchical'
    },
    productionTimespan: {
      id: 'productionTimespan',
      facetValueFilter: '',
      sortByAscPredicate: '^crm:P108_has_produced/crm:P4_has_time-span/crm:P82a_begin_of_the_begin',
      sortByDescPredicate: '^crm:P108_has_produced/crm:P4_has_time-span/crm:P82b_end_of_the_end',
      predicate: '^crm:P108_has_produced/crm:P4_has_time-span',
      startProperty: 'crm:P82a_begin_of_the_begin',
      endProperty: 'crm:P82b_end_of_the_end',
      type: 'timespan'
    },
    note: {
      id: 'note',
      labelPath: 'crm:P3_has_note',
      textQueryPredicate: '', // empty for querying the facetClass
      textQueryProperty: 'crm:P3_has_note',
      type: 'text'
    },
    transferOfCustodyPlace: {
      id: 'productionPlace',
      facetValueFilter: `
      ?id dct:source <http://vocab.getty.edu/tgn/> .
      `,
      label: 'Transfer of custody place',
      labelPath: '^crm:P30_transferred_custody_of/crm:P7_took_place_at/skos:prefLabel',
      predicate: '^crm:P30_transferred_custody_of/crm:P7_took_place_at',
      parentProperty: 'gvp:broaderPreferred',
      parentPredicate: '^crm:P30_transferred_custody_of/crm:P7_took_place_at/gvp:broaderPreferred+',
      type: 'hierarchical'
    },

    transferOfCustodyTimespan: {
      id: 'transferOfCustodyTimespan',
      facetValueFilter: `
       FILTER(?timespan NOT IN (
         ${invalidTransferOfCustodyTimespans}
       ))
      `,
      sortByAscPredicate: '^crm:P30_transferred_custody_of/crm:P4_has_time-span/crm:P82a_begin_of_the_begin',
      sortByDescPredicate: '^crm:P30_transferred_custody_of/crm:P4_has_time-span/crm:P82b_end_of_the_end',
      predicate: '^crm:P30_transferred_custody_of/crm:P4_has_time-span',
      startProperty: 'crm:P82a_begin_of_the_begin',
      endProperty: 'crm:P82b_end_of_the_end',
      type: 'timespan'
    },
    lastKnownLocation: {
      id: 'lastKnownLocation',
      facetValueFilter: `
      ?id dct:source <http://vocab.getty.edu/tgn/> .
      `,
      label: 'Production place',
      labelPath: 'mmm-schema:last_known_location/skos:prefLabel',
      predicate: 'mmm-schema:last_known_location',
      parentProperty: 'gvp:broaderPreferred',
      parentPredicate: 'mmm-schema:last_known_location/gvp:broaderPreferred+',
      type: 'hierarchical'
    },
    language: {
      id: 'language',
      facetValueFilter: `
       FILTER(?id NOT IN (
        ${invalidLanguages}
       ))
      `,
      label: 'Language',
      labelPath: 'crm:P128_carries/crm:P72_has_language/skos:prefLabel',
      predicate: 'crm:P128_carries/crm:P72_has_language',
      type: 'list'
    },
    material: {
      id: 'material',
      facetValueFilter: `
       FILTER(?id NOT IN (
        ${invalidMaterials}
       ))
      `,
      label: 'Language',
      labelPath: 'crm:P45_consists_of/skos:prefLabel',
      predicate: 'crm:P45_consists_of',
      type: 'list'
    },
    height: {
      id: 'height',
      facetValueFilter: '',
      labelPath: 'mmm-schema:height/crm:P90_has_value',
      predicate: 'mmm-schema:height/crm:P90_has_value',
      type: 'integer'
    },
    width: {
      id: 'width',
      facetValueFilter: '',
      labelPath: 'mmm-schema:width/crm:P90_has_value',
      predicate: 'mmm-schema:width/crm:P90_has_value',
      type: 'integer'
    },
    folios: {
      id: 'folios',
      facetValueFilter: '',
      labelPath: 'mmm-schema:folios/crm:P90_has_value',
      predicate: 'mmm-schema:folios/crm:P90_has_value',
      type: 'integer'
    },
    lines: {
      id: 'lines',
      facetValueFilter: '',
      labelPath: 'mmm-schema:lines/crm:P90_has_value',
      predicate: 'mmm-schema:lines/crm:P90_has_value',
      type: 'integer'
    },
    columns: {
      id: 'columns',
      facetValueFilter: '',
      labelPath: 'mmm-schema:columns/crm:P90_has_value',
      predicate: 'mmm-schema:columns/crm:P90_has_value',
      type: 'integer'
    },
    miniatures: {
      id: 'miniatures',
      facetValueFilter: '',
      labelPath: 'mmm-schema:miniatures/crm:P90_has_value',
      predicate: 'mmm-schema:miniatures/crm:P90_has_value',
      type: 'integer'
    },
    decoratedInitials: {
      id: 'decoratedInitials',
      facetValueFilter: '',
      labelPath: 'mmm-schema:decorated_initials/crm:P90_has_value',
      predicate: 'mmm-schema:decorated_initials/crm:P90_has_value',
      type: 'integer'
    },
    historiatedInitials: {
      id: 'historiatedInitials',
      facetValueFilter: '',
      labelPath: 'mmm-schema:historiated_initials/crm:P90_has_value',
      predicate: 'mmm-schema:historiated_initials/crm:P90_has_value',
      type: 'integer'
    },
    collection: {
      id: 'collection',
      facetValueFilter: '',
      labelPath: 'crm:P46i_forms_part_of/skos:prefLabel',
      predicate: 'crm:P46i_forms_part_of',
      type: 'list'
    },
    owner: {
      id: 'owner',
      facetValueFilter: `
       FILTER(?id NOT IN (
        ${invalidActors}
       ))
      `,
      label: 'Owner',
      labelPath: 'crm:P51_has_former_or_current_owner/skos:prefLabel',
      predicate: 'crm:P51_has_former_or_current_owner',
      type: 'list'
    },
    source: {
      id: 'source',
      facetValueFilter: '',
      label: 'Source',
      labelPath: 'dct:source/skos:prefLabel',
      predicate: 'dct:source',
      type: 'list'
    }
  },
  works: {
    facetClass: 'frbroo:F1_Work',
    prefLabel: {
      id: 'prefLabel',
      labelPath: 'skos:prefLabel',
      textQueryPredicate: '', // empty for querying the facetClass
      textQueryProperty: 'skos:prefLabel', // limit only to prefLabels
      type: 'text'
    },
    source: {
      id: 'source',
      facetValueFilter: '',
      labelPath: 'dct:source/skos:prefLabel',
      predicate: 'dct:source',
      type: 'list'
    },
    author: {
      id: 'author',
      facetValueFilter: `
       FILTER(?id NOT IN (
        ${invalidActors}
       ))
      `,
      label: 'Author',
      labelPath: '^frbroo:R16_initiated/(mmm-schema:carried_out_by_as_possible_author|mmm-schema:carried_out_by_as_author)/skos:prefLabel',
      predicate: '^frbroo:R16_initiated/(mmm-schema:carried_out_by_as_possible_author|mmm-schema:carried_out_by_as_author)',
      type: 'list'
    },
    manuscript: {
      labelPath: '^mmm-schema:manuscript_work/skos:prefLabel'
    },
    language: {
      id: 'language',
      facetValueFilter: '',
      label: 'Language',
      labelPath: '^frbroo:R19_created_a_realisation_of/frbroo:R17_created/crm:P72_has_language/skos:prefLabel',
      predicate: '^frbroo:R19_created_a_realisation_of/frbroo:R17_created/crm:P72_has_language',
      type: 'list'
    },
    material: {
      id: 'material',
      facetValueFilter: '',
      label: 'Language',
      labelPath: '^mmm-schema:manuscript_work/crm:P45_consists_of/skos:prefLabel',
      predicate: '^mmm-schema:manuscript_work/crm:P45_consists_of',
      type: 'list'
    },
    collection: {
      id: 'collection',
      facetValueFilter: '',
      labelPath: '^mmm-schema:manuscript_work/crm:P46i_forms_part_of/skos:prefLabel',
      predicate: '^mmm-schema:manuscript_work/crm:P46i_forms_part_of',
      type: 'list'
    },
    productionTimespan: {
      id: 'productionTimespan',
      facetValueFilter: '',
      sortByAscPredicate: '^mmm-schema:manuscript_work/^crm:P108_has_produced/crm:P4_has_time-span/crm:P82a_begin_of_the_begin',
      sortByDescPredicate: '^mmm-schema:manuscript_work/^crm:P108_has_produced/crm:P4_has_time-span/crm:P82b_end_of_the_end',
      predicate: '^mmm-schema:manuscript_work/^crm:P108_has_produced/crm:P4_has_time-span',
      startProperty: 'crm:P82a_begin_of_the_begin',
      endProperty: 'crm:P82b_end_of_the_end',
      type: 'timespan'
    }
  },
  events: {
    facetClass: 'crm:E10_Transfer_of_Custody crm:E12_Production crm:E7_Activity',
    prefLabel: {
      id: 'prefLabel',
      labelPath: 'skos:prefLabel'
    },
    type: {
      predicate: 'a',
      facetValueFilter: `
        FILTER(?id NOT IN (
          <http://ldf.fi/mmm/schema/PlaceNationality>
        ))  
      `,
      type: 'list',
      labelPath: 'a/(skos:prefLabel|rdfs:label)'
    },
    manuscript: {
      textQueryPredicate: `
        (crm:P30_transferred_custody_of
         |crm:P108_has_produced
         |mmm-schema:observed_manuscript)`,
      textQueryProperty: 'skos:prefLabel', // limit only to prefLabels
      type: 'text',
      labelPath: `(crm:P30_transferred_custody_of
                  |crm:P108_has_produced
                  |mmm-schema:observed_manuscript
                  )/skos:prefLabel`
    },
    eventTimespan: {
      id: 'eventTimespan',
      facetValueFilter: '',
      sortByAscPredicate: 'crm:P4_has_time-span/crm:P82a_begin_of_the_begin',
      sortByDescPredicate: 'crm:P4_has_time-span/crm:P82b_end_of_the_end',
      predicate: 'crm:P4_has_time-span',
      startProperty: 'crm:P82a_begin_of_the_begin',
      endProperty: 'crm:P82b_end_of_the_end',
      type: 'timespan'
    },
    place: {
      id: 'place',
      facetValueFilter: `
      ?id dct:source <http://vocab.getty.edu/tgn/> .
      `,
      label: 'Place',
      labelPath: 'crm:P7_took_place_at/skos:prefLabel',
      predicate: 'crm:P7_took_place_at',
      parentProperty: 'gvp:broaderPreferred',
      parentPredicate: 'crm:P7_took_place_at/gvp:broaderPreferred+',
      type: 'hierarchical'
    },
    source: {
      id: 'source',
      facetValueFilter: '',
      labelPath: 'dct:source/skos:prefLabel',
      predicate: 'dct:source',
      type: 'list'
    }
  },
  actors: {
    facetClass: 'crm:E21_Person crm:E74_Group crm:E39_Actor',
    prefLabel: {
      id: 'prefLabel',
      labelPath: 'skos:prefLabel',
      textQueryPredicate: '', // empty for querying the facetClass
      textQueryProperty: 'skos:prefLabel', // limit only to prefLabels
      type: 'text'
    },
    type: {
      predicate: 'a',
      facetValueFilter: '',
      type: 'list',
      labelPath: 'a/(skos:prefLabel|rdfs:label)'
    },
    source: {
      id: 'source',
      facetValueFilter: '',
      labelPath: 'dct:source/skos:prefLabel',
      predicate: 'dct:source',
      type: 'list'
    },
    birthDateTimespan: {
      id: 'birthDateTimespan',
      facetValueFilter: `
       FILTER(?timespan NOT IN (
        ${invalidActorTimespans}
       ))
      `,
      sortByAscPredicate: 'crm:P98i_was_born/crm:P4_has_time-span/crm:P82a_begin_of_the_begin',
      sortByDescPredicate: 'crm:P98i_was_born/crm:P4_has_time-span/crm:P82b_end_of_the_end',
      predicate: 'crm:P98i_was_born/crm:P4_has_time-span',
      startProperty: 'crm:P82a_begin_of_the_begin',
      endProperty: 'crm:P82b_end_of_the_end',
      type: 'timespan'
    },
    deathDateTimespan: {
      id: 'deathDateTimespan',
      facetValueFilter: `
       FILTER(?timespan NOT IN (
         ${invalidActorTimespans}
       ))
      `,
      sortByAscPredicate: 'crm:P100i_died_in/crm:P4_has_time-span/crm:P82a_begin_of_the_begin',
      sortByDescPredicate: 'crm:P100i_died_in/crm:P4_has_time-span/crm:P82b_end_of_the_end',
      predicate: 'crm:P98i_was_born/crm:P4_has_time-span',
      startProperty: 'crm:P82a_begin_of_the_begin',
      endProperty: 'crm:P82b_end_of_the_end',
      type: 'timespan'
    },
    place: {
      id: 'source',
      facetValueFilter: `
      ?id dct:source <http://vocab.getty.edu/tgn/> .
      `,
      labelPath: '^crm:P11_had_participant/crm:P7_took_place_at/skos:prefLabel',
      predicate: '^crm:P11_had_participant/crm:P7_took_place_at',
      parentProperty: 'gvp:broaderPreferred',
      parentPredicate: '^crm:P11_had_participant/crm:P7_took_place_at/gvp:broaderPreferred+',
      type: 'hierarchical'
    },
    work: {
      labelPath: `
        (^mmm-schema:carried_out_by_as_possible_author
        |^mmm-schema:carried_out_by_as_author
        |^mmm-schema:carried_out_by_as_commissioner
        |^mmm-schema:carried_out_by_as_editor)
        /frbroo:R16_initiated/skos:prefLabel
      `
    }
  },
  places: {
    facetClass: 'crm:E53_Place',
    prefLabel: {
      id: 'prefLabel',
      labelPath: 'skos:prefLabel',
      textQueryPredicate: '', // empty for querying the facetClass
      textQueryProperty: 'skos:prefLabel', // limit only to prefLabels
      type: 'text'
    },
    source: {
      id: 'source',
      facetValueFilter: '',
      label: 'Source',
      labelPath: 'dct:source/skos:prefLabel',
      predicate: 'dct:source',
      type: 'list'
    },
    area: {
      id: 'area',
      facetValueFilter: `
      FILTER(?id != <http://ldf.fi/mmm/place/tgn_7026519>)
      `,
      label: 'Area',
      labelPath: 'gvp:broaderPreferred/skos:prefLabel',
      predicate: 'gvp:broaderPreferred',
      parentProperty: 'gvp:broaderPreferred',
      parentPredicate: 'gvp:broaderPreferred+',
      type: 'hierarchical'
    },
    placeType: {
      id: 'type',
      facetValueFilter: '',
      label: 'Type',
      labelPath: 'gvp:placeTypePreferred',
      predicate: 'gvp:placeTypePreferred',
      type: 'list'
    }
  }
}
