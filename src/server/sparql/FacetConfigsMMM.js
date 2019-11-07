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
`;

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
`;

const invalidActors = `
        <http://ldf.fi/mmm/actor/sdbm_names/>
`;

export const facetConfigs = {
  surmatut: {
    facetClass: 'siso-schema:Death_record',
    prefLabel: {
      id: 'prefLabel',
      facetValueFilter: '',
      label: 'Title',
      labelPath: 'skos:prefLabel',
      textQueryPredicate: '', // empty for querying the facetClass
      textQueryProperty: 'skos:prefLabel', // limit only to prefLabels
      type: 'text',
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
    registeredMunicipality: {
      id: 'registeredMunicipality',
      facetValueFilter: '',
      labelPath: 'siso-schema:registered_municipality/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:registered_municipality',
      parentPredicate: 'siso-schema:registered_municipality/skos:broader+',
    },
    registeredProvince: {
      id: 'registeredProvince',
      facetValueFilter: '',
      labelPath: 'siso-schema:registered_province/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:registered_province',
      parentPredicate: 'siso-schema:registered_province/skos:broader+',
    },
    registeredCountry: {
      id: 'registeredCountry',
      facetValueFilter: '',
      labelPath: 'siso-schema:registered_country/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:registered_country',
      parentPredicate: 'siso-schema:registered_country/skos:broader+',
    },
    deathMunicipality: {
      id: 'deathMunicipality',
      facetValueFilter: '',
      labelPath: 'siso-schema:death_municipality/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:death_municipality',
      parentPredicate: 'siso-schema:death_municipality/skos:broader+',
    },
    deathProvince: {
      id: 'deathProvince',
      facetValueFilter: '',
      labelPath: 'siso-schema:death_province/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:death_province',
      parentPredicate: 'siso-schema:death_province/skos:broader+',
    },
    deathCountry: {
      id: 'deathCountry',
      facetValueFilter: '',
      labelPath: 'siso-schema:death_country/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:death_country',
      parentPredicate: 'siso-schema:death_country/skos:broader+',
    },
    birthDateSpan: {
      id: 'birthDateSpan',
      facetValueFilter: '',
      sortByAscPredicate: 'siso-schema:birth_time/crm:P82a_begin_of_the_begin',
      sortByDescPredicate: 'siso-schema:birth_time/crm:P82b_end_of_the_end',
      predicate: 'siso-schema:birth_time',
      startProperty: 'crm:P82a_begin_of_the_begin',
      endProperty: 'crm:P82b_end_of_the_end',
      type: 'timespan',
    },
    deathDateSpan: {
      id: 'deathDateSpan',
      facetValueFilter: '',
      sortByAscPredicate: 'siso-schema:death_time/crm:P82a_begin_of_the_begin',
      sortByDescPredicate: 'siso-schema:death_time/crm:P82b_end_of_the_end',
      predicate: 'siso-schema:death_time',
      startProperty: 'crm:P82a_begin_of_the_begin',
      endProperty: 'crm:P82b_end_of_the_end',
      type: 'timespan',
    },
    ammoOccupation: {
      id: 'ammoOccupation',
      labelPath: 'siso-schema:ammo_occupation/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:ammo_occupation',
      facetValueFilter: `
        `,
      facetLabelFilter: `FILTER(LANG(?prefLabel_) = 'fi')`,
    },
    hisclass7: {
      id: 'hisclass7',
      labelPath: 'siso-schema:ammo_occupation/ammo-s:hisclass7/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:ammo_occupation/ammo-s:hisclass7',
      facetValueFilter: `
        `,
      facetLabelFilter: `FILTER(LANG(?prefLabel_) = 'fi')`,
    },
    coo1980: {
      id: 'coo1980',
      labelPath: 'siso-schema:ammo_occupation/ammo-s:coo1980_code/skos:prefLabel',
      type: 'hierarchical',
      predicate: 'siso-schema:ammo_occupation/ammo-s:coo1980_code',
      facetValueFilter: `
        `,
      facetLabelFilter: `FILTER(LANG(?prefLabel_) = 'fi')`,
      parentPredicate: 'siso-schema:ammo_occupation/ammo-s:coo1980_code/skos:broader+',
      parentProperty: 'skos:broader'
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
      facetLabelFilter: `FILTER(LANG(?prefLabel_) = 'en')`,
    },
    age: {
      id: 'age',
      facetValueFilter: '',
      labelPath: 'siso-schema:age',
      predicate: 'siso-schema:age',
      type: 'integer',
    },
    numberOfChildren: {
      id: 'numberOfChildren',
      facetValueFilter: '',
      labelPath: 'siso-schema:num_of_children',
      predicate: 'siso-schema:num_of_children',
      type: 'integer',
    },
    militaryOrganization: {
      id: 'militaryOrganization',
      facetValueFilter: '',
      labelPath: 'siso-schema:rank/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:military_organization',
    },
    maritalStatus: {
      id: 'maritalStatus',
      facetValueFilter: '',
      labelPath: 'siso-schema:marital_status/skos:prefLabel',
      type: 'list',
      predicate: 'siso-schema:marital_status',
    },
    // familyWelfare: {
    //   id: 'familyWelfare',
    //   facetValueFilter: '',
    //   labelPath: 'siso-schema:family_welfare/skos:prefLabel',
    //   type: 'list',
    //   predicate: 'siso-schema:family_welfare',
    // },
  },
  taistelut: {
    facetClass: 'siso-schema:Battle',
    prefLabel: {
      id: 'prefLabel',
      facetValueFilter: '',
      label: 'Title',
      labelPath: 'skos:prefLabel',
      textQueryPredicate: '', // empty for querying the facetClass
      textQueryProperty: 'skos:prefLabel', // limit only to prefLabels
      type: 'text',
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
      parentProperty: 'skos:broader'
    },
  }
};
