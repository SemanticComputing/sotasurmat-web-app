export default {
  languageLabel: 'Suomi',
  appTitle: {
    short: 'Sotasurmat',
    long: 'Suomen sotasurmat 1914-1922'
  },
  appDescription: `
    Alustava testiversio vuosien 1914-1922 sotasurmien tiedoston käyttöliittymästä.
  `,
  topBar: {
    feedback: 'feedback',
    info: {
      info: 'Info',
      blog: 'Blog',
      aboutTheProject: 'About the project'
    },
    searchBarPlaceHolder: 'Etsi koko aineistosta',
    instructions: 'ohjeet'
  },
  facetBar: {
    results: 'Tulokset',
    narrowDownBy: 'Rajoita'
  },
  tabs: {
    table: 'lista',
    map: 'kartta',
    line: 'viivakaavio',
    pie: 'piirakkakaavio',
    csv: 'csv',
  },
  table: {
    rowsPerPage: 'Riviä sivulla',
    of: 'of'
  },
  perspectives: {
    surmatut: {
      label: 'Surmatut',
      facetResultsType: 'henkilö',
      shortDescription: 'Tietoa vuosina 1914-1922 surmatuista',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Näkymä sotasurmatiedostoon
        </p>
      `,
      instancePage: {
        label: 'Henkilö',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Henkilöön liittyviä tietoja
          </p>
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Nimi',
          description: 'Henkilön koko nimi.'
        },
        party: {
          label: 'Osapuoli',
          description:`
            Henkilön osapuoli sisällissodassa.
          `
        },
        registeredMunicipality: {
          label: 'Kirjoillaolokunta',
          description: 'Kijoillaolokunta.'
        },
        deathMunicipality: {
          label: 'Kuolinkunta',
          description: 'Kuolinkunta.'
        },
        occupation: {
          label: 'Ammatti',
          description: `
            Henkilön ammatti aineistossa annetussa muodossa.
          `
        },
        birthDate: {
          label: 'Syntymäpäivä',
          description: `
            Syntymäpäivä (vanhan projektin laskema)
          `
        },
        deathDate: {
          label: 'Kuolinpäivä',
          description: `
            Kuolinpäivä (vanhanprojektin laskema.)
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
