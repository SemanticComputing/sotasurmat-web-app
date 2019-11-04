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
    feedback: 'palaute',
    info: {
      info: 'Info',
      blog: 'Blog',
      oldPage: 'Vanha sovellus',
      aboutTheProject: 'Tietoa projektista'
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


  `,
  instructions: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Instructions
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The search functionality of the MMM portal is based on the
      <a href="https://doi.org/10.2200/S00190ED1V01Y200904ICR005" target='_blank' rel='noopener noreferrer'>
      faceted search</a> paradigm. By default each perspective displays
      all results from the corresponding class (Manuscripts, Works, Events, Actors, or Places).
      This default result set can be narrowed down by using the filters on the left.
    </p>

    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Using a single filter
    </h2>

    <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      Selecting values within a filter
    </h3>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      All possible values for a filter are displayed either as a list or as a hierarchical
      tree structure (if available). The number of results is shown in brackets for each value.
      Once a value is selected, the results are automatically updated. To prevent further
      selections that do not return any results, also the possible values for all
      other filters are updated at the same time.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Multiple values can be selected within a single filter. Selecting multiple values
      generates results that contain any of the selected values. For example, selecting
      both <i>Saint Augustine</i> and <i>Saint Jerome</i> as an Author returns results that
      include either <i>Saint Augustine</i> <strong>OR</strong> <i>Saint Jerome</i> as an Author.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Selected values of a filter appear in the Active filters section at the top of the list
      of filters. To deselect a filter, click the X mark next to it within the Active filters
      section. You can also deselect a filter value by unchecking the checkmark in the
      filter’s value list. The Active filters section only appears if there are filter
      values currently selected.
    </p>

    <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      Searching within a filter
    </h3>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Search within a filter by using the search field at the top of each filter.
      All possible values of a filter remain visible at all times. The values of
      the filter that match the search term are indicated by a purple underline.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Steps for searching within filters:
    </p>
    <ol class="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom">
      <li>
        Type search term into search field. If there are matches, a number
        will appear to the right of the search field, indicating the number
        of filter values that match the search term.
      </li>
      <li>
        Click the arrows to the right of the search field to cycle
        through the results. As you click the arrow, a different filter value
        will appear at the top of the list. Matched filters are underlined in
        purple.
      </li>
      <li>
        Click the checkmark next to a filter value to activate it. The results
        (and also other filters) are automatically updated.
      </li>
    </ol>

    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Using multiple filters simultaneously
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The effectiveness of faceted search is realized when multiple filters are
      applied at the same time. As in many e-commerce sites, a logical AND is
      always used between the filters. For example selecting <i>Saint Augustine </i>
      and <i>Saint Jerome</i> as an Author and <i>Sir Thomas Phillipps</i> and
      <i> Thomas Thorpe</i> as an Owner, the results are narrowed down as follows:
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
      (Author: <i>Saint Augustine</i> <strong>OR</strong> Author: <i>Saint Jerome</i>)
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
        <strong>AND</strong>
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
      (Owner: <i>Sir Thomas Phillipps</i> <strong>OR</strong> Owner: <i>Thomas Thorpe</i>)
    </p>
  `
};
