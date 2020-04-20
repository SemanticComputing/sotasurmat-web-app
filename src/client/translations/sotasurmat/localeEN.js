export default {
  languageLabel: 'English',
  appTitle: {
    short: '',
    long: 'WarVictimSampo 1914–1922'
  },
  appDescription: `
    A semantic portal about war events related to Finland from 1914 to 1922.
  `,
  mainPageImageLicence: `
    Front page images: Museum Centre Vapriikki
    <a href= "https://creativecommons.org/licenses/by/2.0/" target='_blank'
    rel='noopener noreferrer'>CC BY</a>.
  `,
  topBar: {
    feedback: 'feedback',
    info: {
      info: 'Info',
      blog: 'Blog',
      aboutTheProject: 'About the project',
      oldPage: 'Old application'
    },
    searchBarPlaceHolder: 'Etsi koko aineistosta',
    instructions: 'instructions'
  },
  facetBar: {
    results: 'Results',
    narrowDownBy: 'Narrow down by',
    narrowDownByTooltip: '',
    filterOptions: 'Options',
    sortByName: '',
    sortByHits: '',
    searchWithinFilter: 'Search'
  },
  tabs: {
    table: 'table',
    map: 'map',
    line: 'line chart',
    pie: 'pie chart',
    animation: 'animation',
    csv: 'csv',
    extra: 'additional information'
  },
  table: {
    rowsPerPage: 'Rows per page',
    of: 'of'
  },
  exportToYasgui: '',
  openInLinkedDataBrowser: '',
  facets: {
    dateFacet: {
      invalidDate: 'Invalid date.',
      toBeforeFrom: 'Begin has to come before end',
      minDate: 'The earliest possible date is {minDate}',
      maxDate: 'The latest possible date is {maxDate}',
      cancel: 'Cancel',
      fromLabel: 'Begin',
      toLabel: 'End'
    },
    textFacet: {
      inputLabel: 'Search by name'
    }
  },
  leafletMap: {
    externalLayers: {
      arkeologiset_kohteet_alue: '',
      arkeologiset_kohteet_piste: ''
    },
    mapModeButtons: {
      markers: 'Kartta',
      heatmap: 'Lämpökartta'
    }
  },
  perspectives: {
    victims: {
      label: 'War Victims',
      facetResultsType: '',
      shortDescription: 'Information about war victims in Finland in 1914–1922.',
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
      lineChart: {
        year: 'Year',
        lineExplanation: 'People',
        age: 'Age',
        yTitle: 'Number of people',
        average: 'Average',
        median: 'Median',
        deathDate: 'Death date',
        birthYear: 'Birth year'
      },
      map: {
        deathsAt: 'People who died in this municipality:'
      },
      extras: {
        ownFamilyName: { label: 'Oma sukunimi' },
        formerFamilyName: { label: 'Entinen sukunimi' },
        alternativeName: { label: 'Vaihtoehtoinen nimi' },
        nameQualifier: { label: 'Lisätietoa nimestä' },
        birthVillage: { label: 'Synnyinkylä' },
        broaderBirthPlace: { label: 'Laajenmpi syntymäpaikka' },
        birthHouse: { label: 'Synnyintalo' },
        otherBirthPlaceInformation: { label: 'Muuta tietoa synnyinpaikasta' },

        registeredVillage: { label: 'Rekisteröity kylä' },
        registeredHouse: { label: 'Rekisteröity talo' },
        foreignRegisteredProvince: { label: 'Ulkomainen rekisteröity lääni' },
        broaderRegisteredCountry: { label: 'Laajempi registeröity maakäsite' },
        livingVillage: { label: 'Asuinkylä' },
        livingHouse: { label: 'Asuintalo' },
        familyAddress: { label: 'Perheen osoite' },
        foreignLivingProvince: { label: 'Ulkomainen asuinlääni' },

        otherOccupation: { label: 'Muu ammatti' },
        socialStatus: { label: 'Sosiaalinen asema' },
        formerOccupation: { label: 'Entinen ammatti' },
        formerSocialStatus: { label: 'Entinen sosiaalinen asema' },
        title: { label: 'Titteli' },
        workPlace: { label: 'Työpaikka' },
        numberOfUnderageChildren: { label: 'Alaikäisten lasten määrä' },
        familySize: { label: 'Perheen koko' },

        army: { label: 'Armeija' },
        brigade: { label: 'Prikaati, rykmentti' },
        battalion: { label: 'Pataljoona' },
        company: { label: 'Komppania' },
        platoon: { label: 'Joukkue, plutoona' },
        group: { label: 'Ryhmä' },

        orgJoiningTime: { label: 'Rekrytointipäivämäärä' },
        durationInOrg: { label: 'Kuinka kauan kuulunut suojeluskuntaan/punakaartiin' },
        timeLeftOrg: { label: 'Koska eronnut sotilasjärjestöstä' },

        militaryRank: { label: 'Sotilasarvo' },
        militaryBackground: { label: 'Sotilastausta' },
        armyOfCountry: { label: 'Maa, jonka armeijaan kuului' },

        militaryTask: { label: 'Sotilastehtävä' },
        civilianTask: { label: 'Siviilitehtävä' },
        otherRole: { label: 'Muu rooli sodassa' },
        taskStartDate: { label: 'Koska aloittanut tehtävässä' },
        durationOfTask: { label: 'Kuinka kauan toiminut tehtävässä' },
        placeOfTask: { label: 'Missä toiminut' },

        additionalInformationMilitaryOrganization: { label: 'Sotilasjärjestö' },

        otherFamilyWelfare: { label: 'muu perheen toimeentulo' },

        exactPlaceOfCapture: { label: 'Tarkka vangitsemispaikka' },
        areaOfCapture: { label: 'Vangitsemisalue' },
        eventWhereCaptured: { label: 'Tapahtuma jossa vangittiin' },
        frontWhereCaptured: { label: 'Rintama jossa vangittiin' },
        capturer: { label: 'Vangitsija' },
        presumedPlaceOfCapture: { label: 'Vangitsemisen oletettu paikka tai tapahtuma' },

        firstPlaceOfImprisonment: { label: 'Vangittunaolon I paikka' },
        secondPlaceOfImprisonment: { label: 'vangittunaolon II paikka' },
        thirdPlaceOfImprisonment: { label: 'Vangittunaolon III paikka' },
        arrivedToPrison: { label: 'Milloin saapunut vankileirille' },
        movedToPrison: { label: 'Milloin siirretty vankileiriltä' },

        sentencingCourt: { label: 'Tuomion langettaja' },
        verdict: { label: 'Tuomio' },

        presumedArrestDate: { label: 'Arveltu vangitsemispäivä' },
        arrestTime: { label: 'Vangitsemisajankohta' },
        secondArrestTime: { label: 'II vangitsemisen ajankohta' },
        thirdArrestTime: { label: 'III vangitsemisen ajankohta' },
        durationOfArrest: { label: 'Vankeuden kesto' }, // ????

        dateOfEscape: { label: 'Pakenemispäivä' },

        yearDeclaredDead: { label: 'Kuolleeksijulistamisen vuosi' },
        officialDeathDate: { label: 'Virallinen kuolinaika' },
        whereDeclaredDead: { label: 'Missä ja milloin julistettu kuolleeksi' },

        presumedDeathTime: { label: 'Arveltu kuolinaika' },
        deathPeriod: { label: 'Kuolinajankohta' },

        presumedDeathMunicipality: { label: 'Oletettu kuolinpaikka' },
        presumedDeathPlaceOrEvent: { label: 'Oletettu tapahtuma tai paikka jossa kuollut' },
        municipalityWhereWounded: { label: 'Haavoittumispaikka' },
        presumedWoundedPlaceOrEvent: { label: 'Oletettu haavoittumispaikka' },
        woundedTime: { label: 'Haavoittumisaika' },

        broaderDeathPlace: { label: 'Laajempi kuolinpaikka' },
        broaderWarEvent: { label: 'Laajempi sotatapahtuma' },
        warEvent: { label: 'Sotatapahtuma' },

        deathPlaceQualifier: { label: 'Kuolinpaikan tarkenne' },
        otherDeathPlaceQualifier: { label: 'Muu kuolinpaikan takenne' },
        deathArea: { label: 'Alue jossa kuollut' },
        deathEvent: { label: 'Tapahtuma jossa kuollut' },
        deathFront: { label: 'Rintama jossa kuollut' },
        lastSeenWhere: { label: 'Missä nähty viimeksi' },

        otherCauseOfDeath: { label: 'Kuolintapa' },
        presumedMannerOfDeath: { label: 'Oletettu kuolintapa' },
        causeOfDeathQualifier: { label: 'Kuolintavan tarkenne' },
        otherCauseOfDeathQualifier: { label: 'Muu kuolinsyyn tarkenne' },

        court: { label: 'Tuomitsija' },
        killer: { label: 'Surmaaja' },
        presumedKiller: { label: 'Oletettu surmaaja' },

        buriedIn: { label: 'Tarkempi hautaustapa' },
        placeOfBurial: { label: 'I hautauksen paikka' },
        secondPlaceOfBurial: { label: 'II hautauksen paikka' },
        timeOfBurial: { label: 'I hautauksen ajankohta' },
        secondTimeOfBurial: { label: 'II hautauksen ajankohta' },

        parish: { label: 'Seurakunta' }
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
        familyName: {
          label: 'Family name',
          description: 'Family name'
        },
        firstName: {
          label: 'First name',
          description: 'Family name'
        },
        party: {
          label: 'Party',
          description: `
            Party in the civil war
          `
        },
        registeredMunicipality: {
          label: 'Reg. municipality',
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
        birthDate: {
          label: 'Birth date',
          facetDescription: 'Birth date',
          description: ')'
        },
        deathDate: {
          label: 'Death Date',
          facetDescription: 'Death Date',
          description: ''
        },
        birthTimespan: {
          label: 'Birth date',
          description: 'Birth date',
          facetDescription: `
          `
        },
        deathTimespan: {
          label: 'Death date',
          description: 'Death date',
          facetDescription: `

          `
        },
        birthPlace: {
          label: 'Birthplace',
          facetDescription: `
            Place of birth
          `,
          description: `
          Place of birth
          `
        },
        birthCountry: {
          label: 'Birth country',
          facetDescription: `
            Birth country
          `,
          description: `
            Birth country
          `
        },
        birthYear: {
          label: 'Birth year',
          facetDescription: `
            Birth year
          `,
          description: `
            Birth year
          `
        },
        birthDay: {
          label: 'Birth day',
          facetDescription: `
            Birth day
          `,
          description: `
            Birth day
          `
        },
        livingMunicipality: {
          label: 'Living municipality',
          facetDescription: `
            Living municipality
          `,
          description: `
            Living municipality
          `
        },
        livingProvince: {
          label: 'Living province',
          facetDescription: `
            Living province'
          `,
          description: `
            Living province'
          `
        },
        livingCountry: {
          label: 'Living country',
          facetDescription: `
            Living country
          `,
          description: `
            Living country
          `
        },
        nationality: {
          label: 'Nationality',
          facetDescription: `
            Nationality
          `,
          description: `
            Nationality
          `
        },
        language: {
          label: 'Language',
          facetDescription: `
            Main language
          `,
          description: `
            Main language
          `
        },
        personComment: {
          label: 'Person comment',
          facetDescription: `
            Comments
          `,
          description: `
            Comments
          `
        },
        recruitment: {
          label: 'Method of recruitment',
          facetDescription: `
            Method of recruitment
          `,
          description: `
            Method of recruitment
          `
        },
        rank: {
          label: 'Military rank',
          facetDescription: `
            Military rank
          `,
          description: `
            Military rank
          `
        },
        position: {
          label: 'Military position',
          facetDescription: `
            Military position
          `,
          description: `
            Military position
          `
        },
        combatantStatus: {
          label: 'Soldier or civilian',
          facetDescription: `
            Was the person considered soldier or civilian
          `,
          description: `
            Was the person considered soldier or civilian
          `
        },
        armedStatus: {
          label: 'Armed status',
          facetDescription: `
            Did the person carry arms
          `,
          description: `
            Did the person carry arms
          `
        },
        familyWelfare: {
          label: 'Family welfare',
          facetDescription: `
            Welfare of the family
          `,
          description: `
            Welfare of the family
          `
        },
        statusNote: {
          label: 'Status note',
          facetDescription: `
            Note on the status
          `,
          description: `
            Note on the status
          `
        },
        placeOfCapture: {
          label: 'Place of capture',
          facetDescription: `
            Place of capture
          `,
          description: `
            Place of capture
          `
        },
        prisonCamp: {
          label: 'Prison camp',
          facetDescription: `
            Prison camp
          `,
          description: `
            Prison camp
          `
        },
        imprisonmentMotive: {
          label: 'Motive for imprisonment',
          facetDescription: `
            Motive for imprisonment
          `,
          description: `
            Motive for imprisonment
          `
        },
        imprisonmentDate: {
          label: 'Imprisonment time',
          facetDescription: `
            Imprisonment time
          `,
          description: `
            Imprisonment time
          `
        },
        releaseDate: {
          label: 'Release date',
          facetDescription: `
            Release date'
          `,
          description: `
            Release date'
          `
        },
        deathYear: {
          label: 'Death year',
          facetDescription: `
            Death year
          `,
          description: `
            Death year
          `
        },
        deathDay: {
          label: 'Death day',
          facetDescription: `
            Death day
          `,
          description: `
            Death day
          `
        },
        deathPlace: {
          label: 'Exact death place',
          facetDescription: `
            Exact death place
          `,
          description: `
            Exact death place
          `
        },
        deathMotive: {
          label: 'Motive for killing',
          facetDescription: `
            Motive for killing
          `,
          description: `
            Motive for killing
          `
        },
        methodOfBurial: {
          label: 'Method of burial',
          facetDescription: `
            Method of burial
          `,
          description: `
            Method of burial
          `
        },
        deathComment: {
          label: 'Death comment',
          description: `
            Comments related to the persons death
          `
        },
        religion: {
          label: 'Religion',
          description: `
            Religion
          `
        },
        additionalDeathSource: {
          label: 'Additional source',
          description: `
            Additional source of information of the death
          `
        },
        link: {
          label: 'Links',
          description: `
            Links to outside pweb pages of the person
          `
        }
      }
    },
    battles: {
      label: 'Battles',
      facetResultsType: '',
      shortDescription: 'Battles of the civil war.',
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
          description: `
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
        }
      }
    }
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
  information: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Tietoa
    </h1>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      WarVictimSampo 1914-1922
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      WarVictimSampo 1914-1922 is a semantic portal about Finnish war events 1914-1922.
      The portal offers a user interface to the War Victims of Finland 1914-1922 database and a registry of the battless of the Finnish Civil War.
      Both materials are maintained by the National Archives of Finland
    </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      About the Data
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
    The original War victims database was created between 1998-2004 as part of a project by the Finnish government.
    The data has been updated in 2019. The database lists over 40000 war victims from the period, mainly related to the Finnish Civil War.

    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
    The registry of battles was created some time in the 1920s to aid research.
    It presents the events mainly from the perspective of the White party of the Civil War.
    As such it should not be considered an impartial representation the Finnish CIvil War, but can be used to give
    general understanding of the battles, and to, for example, search information about the White units that participated in the battles.
    </p>
<p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
 Data is published openly in <a href="http://www.ldf.fi/dataset/siso" target='_blank' rel='noopener noreferrer'>Linked Data Finland -platform</a>.
</p>
<h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
  Language of the Data
</h2>
<p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
Only the user interface of the application is translated to English.
The values in the database are given in their original Finnish form, that is, if possible, the same form that was used in the original sources.
</p>

  `
}
