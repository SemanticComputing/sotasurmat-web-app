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
          label: 'Syntymäpäivä',
          description: `
            Syntymäpäivän aikaväli
          `
        },
        deathDateSpan: {
          label: 'Kuolinpäivä',
          description: `
            Kuolinpäivän aikaväli
          `
        },
        age: {
          label: 'Ikä',
          description: `
            Henkilön ikä
          `
        },
        numberOfChildren: {
          label: 'Lasten lukumäärä',
          description: `
            Lasten lukumäärä
          `
        },
        ammoOccupation: {
          label: 'AMMO ammatti',
          description: `
            AMMO ontologian mukainen ammatti
          `
        },
        hisclass7: {
          label: 'HISCLASS7',
          description: `
            HISCLASS7 luokittelun mukainen ammatti
          `
        },
        coo1980: {
          label: 'coo1980 ammatti',
          description: `
            coo1980 luokittelun mukainen ammatti
          `
        },
        hisco: {
          label: 'HISCO',
          description: `
            HISCO luokittelun mukainen ammatti
          `
        },
        causeOfDeath: {
          label: 'Kuolinsyy',
          description: `
            Kuolinsyy aineistossa käytetyssä muodossa
          `
        },
        registeredCountry: {
          label: 'Rekisteröity maa',
          description: `
            Rekisteröity maa
          `
        },
        registeredProvince: {
          label: 'Rekisteröity lääni',
          description: `
            Rekisteröity lääni
          `
        },
        deathCountry: {
          label: 'Kuolinmaa',
          description: `
            Kuolinmaa
          `
        },
        deathProvince: {
          label: 'Kuolinlääni',
          description: `
            Kuolinlääni
          `
        },
        gender: {
          label: 'Sukupuoli',
          description: `
            Sukupuoli
          `
        },

      },
    },
    taistelut: {
      label: 'Taistelut',
      facetResultsType: 'taistelu',
      shortDescription: 'Taistelupaikkakortistoon perustuva näkymä sisällisssodan taisteluista.',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Battles
        </p>

      `,
      instancePage: {
        label: 'Taistelu',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Taistelut henkilösivun kuvaus
          </p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Taistelun nimi',
          description: `
            The name of the place.
          `
        },
        startDate: {
          label: 'Alkupäivä',
          description:  `
            Alkupäivä
          `
        },
        endDate: {
          label: 'Loppupäivä',
          description: `
            Loppupäivä
          `
        },
        greaterPlace: {
          label: 'Paikka',
          description: `
            Laajempi paikka
          `
        },
        exactPlace: {
          label: 'Tarkempi paikka',
          description: `
            Tarkempi paikka
          `
        },
        units: {
          label: 'Yksiköitä',
          description: `
            Taisteluun osallistuneita yksiköitä
          `
        },
        actor: {
          label: 'Actor',
          description: `
            The actor(s) associated with the place.
          `
        },
        source: {
          label: 'Source',
          description: `
            The source dataset (Schoenberg, Bibale, and Bodleian) and the place
            authority (Getty Thesaurus of Geographic Names and GeoNames)
            contributing the information on the place.
          `
        }
      }
    },
  },
  aboutTheProject: `


  `
};
