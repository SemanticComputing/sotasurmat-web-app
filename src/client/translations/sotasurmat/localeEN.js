export default {
  languageLabel: 'English',
  appTitle: {
    short: 'War Victims',
    long: 'War Victims in FInland 1914-1922'
  },
  appDescription: `
    A prototype for a semantic portal for war victims in Finland 1914-1922.
  `,
  topBar: {
    feedback: 'feedback',
    info: {
      info: 'Info',
      blog: 'Blog',
      aboutTheProject: 'About the project',
      oldPage: 'Old application',
    },
    searchBarPlaceHolder: 'Etsi koko aineistosta',
    instructions: 'instructions'
  },
  facetBar: {
    results: 'Results',
    narrowDownBy: 'Narrow down by'
  },
  tabs: {
    table: 'table',
    map: 'map',
    line: 'linechart',
    pie: 'piechart',
    csv: 'csv',
  },
  table: {
    rowsPerPage: 'Rows per page',
    of: 'of'
  },
  perspectives: {
    surmatut: {
      label: 'War Victims',
      facetResultsType: 'Person',
      shortDescription: 'Information about war victims in Finland 1914-1922',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Perspective to the war victim file
        </p>
      `,
      instancePage: {
        label: 'Person',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Information related to this person
          </p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Name',
          description: 'Full name'
        },
        party: {
          label: 'Party',
          description:`
            Party in the civil war
          `
        },
        registeredMunicipality: {
          label: 'Registered municipality',
          description: 'Registered municipality'
        },
        deathMunicipality: {
          label: 'Death municipality',
          description: 'Death municipality.'
        },
        occupation: {
          label: 'Occupation',
          description: `
            Occupation in the original form
          `
        },
        birthDate: {
          label: 'Birth date',
          description: `
            Birth date (old project)
          `
        },
        deathDate: {
          label: 'Death date',
          description: `
            Death date (old project)
          `
        },
        birthDateSpan: {
          label: 'Birth date',
          description: `
            BIrth date timespan
          `
        },
        deathDateSpan: {
          label: 'Death date',
          description: `
            Death date timespan
          `
        },
        age: {
          label: 'Age',
          description: `
            Age
          `
        },
        numberOfChildren: {
          label: 'Number of children',
          description: `
            Number of children
          `
        },
        ammoOccupation: {
          label: 'AMMO occupation',
          description: `
            Occupation on AMMO ontology
          `
        },
        hisclass7: {
          label: 'HISCLASS7',
          description: `
            Occupation based on HISCLASS7
          `
        },
        coo1980: {
          label: 'coo1980 occupation',
          description: `
            Occupation based on coo1980
          `
        },
        hisco: {
          label: 'HISCO',
          description: `
            Occupation based on HISCO
          `
        },
        causeOfDeath: {
          label: 'Cause of death',
          description: `
            Cause of death
          `
        },
        registeredCountry: {
          label: 'Registered country',
          description: `
            Rekisteröity maa
          `
        },
        registeredProvince: {
          label: 'Registered province',
          description: `
            Registered province
          `
        },
        deathCountry: {
          label: 'Death country',
          description: `
            Death country
          `
        },
        deathProvince: {
          label: 'Death province',
          description: `
            Death province
          `
        },
        gender: {
          label: 'Gender',
          description: `
            Gender
          `
        },

      },
    },
    taistelut: {
      label: 'Battles',
      facetResultsType: 'battle',
      shortDescription: 'Perspective for battles of the civil war.',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Battles
        </p>

      `,
      instancePage: {
        label: 'Battle',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Information about the battle
          </p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Name of the battle',
          description: `
            The name of the place.
          `
        },
        startDate: {
          label: 'Start date',
          description:  `
            Start date
          `
        },
        endDate: {
          label: 'End date',
          description: `
            End date
          `
        },
        greaterPlace: {
          label: 'Place',
          description: `
            Greater place
          `
        },
        exactPlace: {
          label: 'Exact place',
          description: `
            Exact place
          `
        },
        units: {
          label: 'Units',
          description: `
            Units that participated in the battle
          `
        },
      }
    },
  },
  aboutTheProject: `


  `
};
