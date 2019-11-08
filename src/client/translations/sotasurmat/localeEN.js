export default {
  languageLabel: 'English',
  appTitle: {
    short: 'War Victims',
    long: 'War Victims in Finland 1914-1922'
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
      shortDescription: 'Information about war victims in Finland 1914-1922.',
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
        maritalStatus: {
          label: 'Marital status',
          description: `
            Marital status
          `
        },
        militaryOrganization: {
          label: 'Military organization',
          description: `
            Military organization
          `
        },
        deathLikelihood: {
          label: 'Likelihood of death',
          description: `
            Likelihood of information about death to be true.
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
  instructions: `
  <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
        Instructions
      </h1>
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        The search functionality of the portal is based on the
        <a href="https://doi.org/10.2200/S00190ED1V01Y200904ICR005" target='_blank' rel='noopener noreferrer'>
        faceted search</a> paradigm. By default each perspective displays
        all results from the corresponding class.
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
        generates results that contain any of the selected values.
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
        always used between the filters.
      </p>

  `,
  feedback: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Feedback
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">

    </p>
  `,
};
