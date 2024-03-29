export default {
  languageLabel: 'Suomi',
  html: {
    title: 'Sotasurmasampo 1914–1922 | Suomen sisällis- ja heimosodat semanttisessa webissä',
    description: 'Sotasurmasampo 1914–22 on Suomeen liittyviin sotatapahtumiin vuosina 1914–22 keskittynyt portaali'
  },
  appTitle: {
    short: 'Sotasurmasampo 1914–1922',
    long: 'Sotasurmasampo 1914–1922'
  },
  appDescription: `
  Portaali Suomeen liittyviin sotatapahtumiin vuosina
    1914–1922.
  `,
  mainPageImageLicence: `
    Etusivun kuvat: Vapriikin kuva-arkisto
    <a href= "https://creativecommons.org/licenses/by/2.0/" target='_blank'
    rel='noopener noreferrer'>CC BY</a>.
  `,
  backendErrorText: 'Yksi Sotasurmasampo-portaalin taustapalveluista ei ole tällä hetkellä saatavilla. Ole hyvä yritä myöhemmin uudestaan.',
  topBar: {
    feedback: 'palaute',
    info: {
      info: 'tietoa',
      aboutTheProject: 'Tietoa projektista',
      aboutTheProjectUrl: 'https://seco.cs.aalto.fi/projects/sotasurmat-1914-1922/',
      oldPortal: 'Vanha sovellus'
    },
    searchBarPlaceHolder: 'Etsi koko aineistosta',
    instructions: 'ohjeet'
  },
  apexCharts: {
    grouping: 'Lajitteluperuste:',
    property: 'Ominaisuus:',
    chartType: 'Kaavion tyyppi:',
    pie: 'piirakkakaavio',
    bar: 'pylväskaavio',
    other: 'Muu arvo',
    resultClasses: {
      victimsByParty: 'osapuoli',
      victimsByOccupation: 'ammatti',
      victimsByGender: 'sukupuoli',
      victimsByRegisteredProvince: 'kirjoillaololääni',
      victimsByRegisteredMunicipality: 'kirjoillaolokunta',
      victimsByDeathProvince: 'kuolinlääni',
      victimsByDeathMunicipality: 'kuolinkunta',
      victimsByCauseOfDeath: 'kuolintapa',
      victimsByMaritalStatus: 'siviilisääty'
    }
  },
  facetBar: {
    results: 'Tulokset',
    filters: 'Suodattimet',
    activeFilters: 'Aktiiviset suodattimet:',
    removeAllFilters: 'Poista kaikki',
    narrowDownBy: 'Rajoita',
    filterOptions: 'Asetukset',
    filterByName: 'Filter by name',
    filterByBoundingBox: 'Filter by bounding box',
    searchWithinFilter: 'Hae',
    selectionOptions: 'Selection options',
    selectAlsoSubconcepts: 'Automatically select all subconcepts',
    doNotSelectSubconcepts: 'Do not select subconcepts',
    sortingOptions: 'Järjestys',
    sortAlphabetically: 'Järjestä nimen mukaan',
    sortByNumberOfSearchResults: 'Järjestä hakutuloksien lukumäärän mukaan',
    useDisjunction: 'Use logical OR between selections',
    useConjuction: 'Use logical AND between selections',
    minYear: 'Min year',
    maxYear: 'Max year',
    min: 'Min',
    max: 'Max',
    facetSearchFieldPlaceholder: 'Hae...',
    applyFacetSelection: 'Hae',
    defaultMissingValueLabel: 'Ei merkintää datassa'
  },
  tabs: {
    table: 'taulukko',
    map: 'kartta',
    line: 'viivakaavio',
    pie: 'piirakkakaavio',
    animation: 'animaatio',
    csv: 'csv',
    extra: 'Lisätiedot',
    export: 'Export'
  },
  table: {
    rowsPerPage: 'Riviä sivulla',
    of: 'of'
  },
  exportToYasgui: '',
  openInLinkedDataBrowser: '',
  facets: {
    dateFacet: {
      invalidDate: 'Epäkelpo päivämäärä.',
      toBeforeFrom: 'Alkupäivämäärän täytyy olla ennen loppupäivämäärää.',
      minDate: 'Aikaisin sallittu päivämäärä on {minDate}',
      maxDate: 'Myöhäisin sallittu päivämäärä on {maxDate}',
      cancel: 'Peruuta',
      fromLabel: 'Alku',
      toLabel: 'Loppu'
    },
    textFacet: {
      inputLabel: 'Etsi nimellä'
    },
    sliderFacet: {
      invalidStartOrEnd: 'Vain kokonaisluvut ovat sallittuja. Pienin sallittu luku on {min} ja suurin {max}.'
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
  instancePageGeneral: {
    introduction: `

    `,
    repetition: `
    `
  },
  perspectives: {
    sources: {
      label: '',
      facetResultsType: '',
      shortDescription: '',
      longDescription: `
      `,
      instancePage: {
        label: 'Lähde',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Lähteen tiedot
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
          description: `
            The name or title of the Collection.
          `
        },
        sourceCode: {
          label: 'Lähteen koodi',
          description: `
            Datassa käytetty lyhenne lähteelle.
          `
        },
        description: {
          label: 'Kuvaus',
          description: `
            Mahdollinen pidempi kuvaus lähteestä
            `
        }
      }
    },
    victims: {
      label: 'Sotasurmat',
      shortInfo: `
        Näkymä sisällisodassa, heimosodissa ja 1. maailmansodassa menehtyneisiin suomalaisiin 1914-1922.
        Voit hakea ja rajoittaa oikealla näkyviä henkilöitä vasemmalla olevien valitsimien avulla.
      `,
      facetResultsType: '',
      shortDescription: 'Suomen sotasurmat 1914–1922',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Näkymä sisällisodassa, heimosodissa ja 1. maailmansodassa menehtyneisiin suomalaisiin 1914-1922. Voit hakea ja rajoittaa oikealla näkyviä henkilöitä vasemmalla olevien valitsimien avulla.
          Henkilön linkkiä klikkaamalla pääset tutkimaan tietoja hänen kotisivullaan. Koko tulosjoukkoa voit tutkia paitsi taulukkona myös piirakkakaavioina, viivakaavioina ja kartalla kuolinpaikkojen perusteella tai ladata tulokset itsellesi taulukkona CSV-muodossa: valitse toiminto hakutuloksen päällä olevista vaihtoehdoista. Huomaa, että haussa on oletuksena mukana
          myös henkilöitä joiden tiedetään todellisuudessa selvinneen, mutta joiden on kuitenkin joissain lähteissä mainittu kuolleen.
          Voit muuttaa tätä "Surman todennäköisyys" valitsimesta.
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TAULUKKO</STRONG> tarjoaa mahdollisuuden selata haun osumajoukon henkilöiden tietoja ja järjestää niitä eri ominaisuuksien mukaan.
          </li>
          <li>
            <strong>PIIRAKKAKAAVIO</STRONG> visualisoi hakutuloksen suhteelliset lukumäärät valitun luokituksen suhteen.
          </li>
          <li>
            <strong>VIIVAKAAVIO</strong> visualisoi rajattujen henkilöiden ikää, syntymävuotta tai kuolinpäivää viivakaavion avulla.
          </li>
          <li>
            <strong>KARTTA</strong> esittää haussa rajattujen henkilöiden kuolinkuntia kartalla.
            Huomaa, että kunnat on yhdistetty koordinaatteihin koneellisesti paikan nimen perustteella.
            Kartassa voi olla virheitä ja puutteita, koska paikannimet voivat olla moniselitteisiä. Puuttuvat kunnat pyritään täydentämään myöhemmin.
          </li>
          <li>
            <strong>CSV</strong>-sivulla voit ladata haussa rajattujen henkilöiden tiedot omalle koneellesi CSV-taulukkona.
            CSV-tiedoston voit avata taulukkolaskentaohjelmalla, mutta merkistökoodaukseksi tulee määrittää UTF-8 ja välimerkiksi pilkku, jotta tiedot näkyvät oikein.
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Henkilö',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Henkilöön liittyviä tietoja
          </p>
        `
      },
      lineChart: {
        year: 'Vuosi',
        lineExplanation: 'Henkilöt',
        age: 'Kuolinikä',
        yTitle: 'Henkilöiden määrä',
        average: 'keskiarvo noin',
        median: 'mediaani noin',
        deathDate: 'Kuolinpäivä',
        birthYear: 'Syntymävuosi'
      },
      map: {
        deathsAt: 'Täällä kuolleita henkilöitä:'
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
          label: 'Nimi',
          description: 'Henkilön nimi',
          facetDescription: `
            Etsi henkilön nimellä. Välilyönnin merkitys on "TAI", joten haku matti meikäläinen hakee kaikki joiden nimessä esiintyy matti tai meikäläinen.
            Rajataksesi haun tarkemmin voit käyttää lainausmerkkejä. Nimet on tallennettu sukunimi ensin, joten Matti Meikäläisen löytäisit haulla
            "meikäläinen, matti". Alkukirjaimia ei tarvitse kirjoittaa isolla, mutta muuten haku on oletuksena tarkka kirjaimista.
            Esimerkiksi e on haun kannalta eri kirjain kuin é. Haussa voit käyttää jokerimerkkejä * ja ?.
            Kysymysmerkki ? korvaa yksittäisen kirjaimen millä tahansa kirjaimella, esim. meik?lain?n.
            Asteriksi * sallii sanan loppuosan olevan mitä tahansa, esim. meikäläi*.
          `,
          textFacetInputPlaceholder: 'Etsi nimellä'
        },
        familyName: {
          label: 'Sukunimi',
          description: 'Henkilön sukunimi'
        },
        firstName: {
          label: 'Etunimi',
          description: 'Henkilön etunimi',
          facetDescription: 'Henkilön etunimi'
        },
        party: {
          label: 'Osapuoli',
          description: 'Osapuoli johon luettiin kuolleessaan',
          facetDescription: 'Osapuoli johon luettiin kuolleessaan'
        },
        registeredMunicipality: {
          label: 'Kirjoillaolokunta',
          facetDescription: 'Kirjoillaolokunta',
          description: 'Kirjoillaolokunta'
        },
        deathMunicipality: {
          facetDescription: 'Kuolinkunta',
          label: 'Kuolinkunta',
          description: 'Kuolinkunta'
        },
        occupation: {
          label: 'Ammatti',
          facetDescription: 'Ammatti',
          description: 'Henkilön ammatti aineistossa annetussa muodossa'
        },
        birthDate: {
          label: 'Syntymäpäivä',
          facetDescription: 'Syntymäpäivä',
          description: 'Syntymäpäivä (vanhan projektin laskema)'
        },
        deathDate: {
          label: 'Kuolinpäivä',
          facetDescription: 'Kuolinpäivä',
          description: 'Kuolinpäivä (vanhan projektin laskema)'
        },
        birthTimespan: {
          label: 'Syntymäpäivä',
          description: 'Syntymäpäivä',
          facetDescription: `
            Rajaa henkilöitä syntymäpäivän perusteella. Voit määrittää aikavälin alku- ja loppupäivän.
            Huomaa, että osalla henkilöistä puuttuu syntymäpäivä kokonaan, ja osalla se on osin epäselvä.
            Epäselvissä tapauksissa syntymäaika on tallennettu aikavälinä. Henkilö näytetään osumissa,
            jos arvioituun aikaväliin osuu yksikin yhteinen päivä valitsemasi aikavälin kanssa.
          `
        },
        deathTimespan: {
          label: 'Kuolinpäivä',
          description: 'Kuolinpäivä',
          facetDescription: `
            Rajaa henkilöitä kuolinpäivän perusteella. Voit määrittää aikavälin alku- ja loppupäivän.
            Huomaa, että osalla henkilöistä puuttuu kuolinpäivä kokonaan, ja osalla se on osin epäselvä.
            Epäselvissä tapauksissa kuolinaika on tallennettu aikavälinä. Henkilö näytetään osumissa,
            jos arvioituun aikaväliin osuu yksikin yhteinen päivä valitsemasi aikavälin kanssa.
          `
        },
        age: {
          label: 'Ikä',
          facetDescription: `Henkilön ikä. Voit määrittää janalla halutun ikävälin.
          Mikä tahansa valinta suodattaa pois kaikki henkilöt, joille ei ole määritelty ikää.`,
          description: `
            Henkilön ikä
          `
        },
        numberOfChildren: {
          label: 'Lasten lukumäärä',
          facetDescription: `
          Lasten lukumäärä. Voit määrittää janalla lukuvälin.
          Huomaa, että useimmille henkilöille ei ole määritelty lasten lukumäärää,
          ja mikä tahansa valinta suodattaa pois kaikki sellaiset henkilöt.
          `,
          description: `
            Lasten lukumäärä
          `
        },
        ammoOccupation: {
          label: 'AMMO-ammatti',
          description: `
            AMMO-ontologian mukainen ammatti
          `,
          facetDescription: `
            AMMO-ontologian mukainen ammatti
          `
        },
        hisclass7: {
          label: 'Ammatti (HISCLASS7)',
          description: 'HISCLASS7-luokittelun mukainen ammatti',
          facetDescription: 'HISCLASS7-luokittelun mukainen ammatti'
        },
        coo1980: {
          label: 'Ammatti (coo1980)',
          facetDescription: `
            Ammattiluokituksen 1980 mukainen ammatti
          `,
          description: `
            Ammattiluokituksen 1980 mukainen ammatti
          `
        },
        hisco: {
          label: 'HISCO',
          facetDescription: `
            HISCO-luokittelun mukainen ammatti
          `,
          description: `
            HISCO-luokittelun mukainen ammatti
          `
        },
        causeOfDeath: {
          label: 'Kuolintapa',
          facetDescription: `
            Kuolintapa aineistossa käytetyssä muodossa
          `,
          description: `
            Kuolintapa aineistossa käytetyssä muodossa
          `
        },
        registeredCountry: {
          label: 'Kirjoillaolomaa',
          facetDescription: `
            Kirjoillaolomaa
          `,
          description: `
            Kirjoillaolomaa
          `
        },
        registeredProvince: {
          label: 'Kirjoillaololääni',
          facetDescription: `
            Kirjoillaololääni
          `,
          description: `
            Kirjoillaololääni
          `
        },
        deathCountry: {
          label: 'Kuolinmaa',
          facetDescription: `
            Kuolinmaa
          `,
          description: `
            Kuolinmaa
          `
        },
        deathProvince: {
          label: 'Kuolinlääni',
          facetDescription: `
            Kuolinlääni
          `,
          description: `
            Kuolinlääni
          `
        },
        gender: {
          label: 'Sukupuoli',
          facetDescription: `
            Sukupuoli
          `,
          description: `
            Sukupuoli
          `
        },
        maritalStatus: {
          label: 'Siviilisääty',
          facetDescription: `
          Siviilisääty
          `,
          description: `
            Siviilisääty
          `
        },
        militaryOrganization: {
          label: 'Sotilasjärjestö',
          facetDescription: `
          Sotilasjärjestö johon henkilö kuului
          `,
          description: `
            Sotilasjärjestö johon henkilö kuului
          `
        },
        deathLikelihood: {
          label: 'Surman todennäköisyys',
          facetDescription: `
            Todennäköisyys sille, että henkilö todellisuudessa kuoli tietokannan kuvaamalla tavalla
          `,
          description: `
            Todennäköisyys sille, että henkilö todellisuudessa kuoli tietokannan kuvaamalla tavalla
          `
        },
        birthPlace: {
          label: 'Syntymäpaikka',
          facetDescription: `
            Syntymäpaikka
          `,
          description: `
            Syntymäpaikka
          `
        },
        birthCountry: {
          label: 'Syntymämaa',
          facetDescription: `
            Syntymämaa
          `,
          description: `
            Syntymämaa
          `
        },
        birthYear: {
          label: 'Syntymävuosi',
          facetDescription: `
            Syntymävuosi
          `,
          description: `
            Syntymävuosi
          `
        },
        birthDay: {
          label: 'Syntymäaika',
          facetDescription: `
            Syntymäaika
          `,
          description: `
            Syntymäaika
          `
        },
        livingMunicipality: {
          label: 'Asuinpaikka',
          facetDescription: `
            Asuinpaikka
          `,
          description: `
            Asuinpaikka
          `
        },
        livingProvince: {
          label: 'Asuinlääni',
          facetDescription: `
            Asuinlääni
          `,
          description: `
            Asuinlääni
          `
        },
        livingCountry: {
          label: 'Asuinmaa',
          facetDescription: `
            Asuinmaa
          `,
          description: `
            Asuinmaa
          `
        },
        nationality: {
          label: 'Kansallisuus',
          facetDescription: `
            Kansallisuus
          `,
          description: `
            Kansallisuus
          `
        },
        language: {
          label: 'Kieli',
          facetDescription: `
            Kieli
          `,
          description: `
            Kieli
          `
        },
        personComment: {
          label: 'Henkilöhuomautukset',
          facetDescription: `
            Huomautuksia henkilön tiedoista
          `,
          description: `
            Huomautuksia henkilön tiedoista
          `
        },
        recruitment: {
          label: 'Rekrytointitapa',
          facetDescription: `
            Rekrytointitapa
          `,
          description: `
            Rekrytointitapa
          `
        },
        rank: {
          label: 'Sotilasarvo',
          facetDescription: `
            Sotilasarvo
          `,
          description: `
            Sotilasarvo
          `
        },
        position: {
          label: 'Sotilasasema',
          facetDescription: `
            Sotilasasema
          `,
          description: `
            Sotilasasema
          `
        },
        combatantStatus: {
          label: 'Sotilas vai siviili',
          facetDescription: `
            Tieto siitä onko henkilö laskettu sotilaaksi vai siviiliksi
          `,
          description: `
            Tieto siitä onko henkilö laskettu sotilaaksi vai siviiliksi
          `
        },
        armedStatus: {
          label: 'Aseenkanto',
          facetDescription: `
            Tieto siitä oliko henkilö aseistettu
          `,
          description: `
            Tieto siitä oliko henkilö aseistettu
          `
        },
        familyWelfare: {
          label: 'Perheen toimeentulo',
          facetDescription: `
            Perheen toimeentulo
          `,
          description: `
            Perheen toimeentulo
          `
        },
        statusNote: {
          label: 'Asemahuomatus',
          facetDescription: `
            Huomautuksia henkilön asemasta
          `,
          description: `
            Huomautuksia henkilön asemasta
          `
        },
        placeOfCapture: {
          label: 'Vangitsemispaikka',
          facetDescription: `
            Vangitsemispaikka
          `,
          description: `
            Vangitsemispaikka
          `
        },
        prisonCamp: {
          label: 'Vankileiri',
          facetDescription: `
            Vankileiri
          `,
          description: `
            Vankileiri
          `
        },
        imprisonmentMotive: {
          label: 'Vangitsemismotiivi',
          facetDescription: `
            Vangitsemismotiivi
          `,
          description: `
            Vangitsemismotiivi
          `
        },
        imprisonmentDate: {
          label: 'Vangitsemisaika',
          facetDescription: `
            Vangitsemisaika
          `,
          description: `
            Vangitsemisaika
          `
        },
        releaseDate: {
          label: 'Vapautumisaika',
          facetDescription: `
            Vapautumisaika
          `,
          description: `
            Vapautumisaika
          `
        },
        deathYear: {
          label: 'Kuolinvuosi',
          facetDescription: `
            Kuolinvuosi
          `,
          description: `
            Kuolinvuosi
          `
        },
        deathDay: {
          label: 'Kuolinaika',
          facetDescription: `
            Kuolinaika
          `,
          description: `
            Kuolinaika
          `
        },
        deathPlace: {
          label: 'Tarkempi kuolinpaikka',
          facetDescription: `
            Tarkempi kuolinpaikka
          `,
          description: `
            Tarkempi kuolinpaikka
          `
        },
        deathMotive: {
          label: 'Surmamotiivi',
          facetDescription: `
            Surmamotiivi
          `,
          description: `
            Surmamotiivi
          `
        },
        methodOfBurial: {
          label: 'Hautaustapa',
          facetDescription: `
            Hautaustapa
          `,
          description: `
            Hautaustapa
          `
        },
        deathComment: {
          label: 'Surmakommentti',
          description: `
            Henkilön kuolemaan liittyviä kommentteja
          `
        },
        religion: {
          label: 'Uskonto',
          description: `
            Henkilön uskontokunta
          `
        },
        additionalDeathSource: {
          label: 'Tarkempi lähde kuolintiedoille',
          description: `
            Tarkempi lähde kuolintiedoille
          `
        },
        link: {
          label: 'Linkkejä',
          description: `
            Linkkejä henkilöä kuvaaviin ulkopuolisiin sivuihin
          `
        }
      }
    },
    battles: {
      label: 'Taistelut',
      shortInfo: `
        Näkymä sisällissodan taisteluihin
      `,
      facetResultsType: '',
      shortDescription: 'Taistelupaikkakortistoon perustuva näkymä sisällissodan taisteluista',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Taistelut-näkymä perustuu Kansallisarkistossa säilytettävään entisen sota-arkiston työntekijöiden laatimaan
          <a href = "http://wiki.narc.fi/portti/index.php/Sis%C3%A4llissodan_taistelupaikkakortisto" target='_blank' rel='noopener noreferrer'>Sisällissodan taistelupaikkakortistoon</a>.
          Kortiston tiedot on muunnettu taulukkomuotoon, ja taisteluille on haettu koordinaatit kartalla esittämistä varten.
          Koordinaatit on tallennettu kahden desimaalin tarkkuudella, joten ne eivät ole aivan tarkkoja.
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Taisteluiden nimet ovat selkeästi valkoisesta näkökulmasta annettuja.
          Näkymässä nimet näytetään siinä muodossa kun ne kortistossa on esitetty, ei kannanottona tapahtumiin.
          Näkymän tarkoituksena on luoda helppo visuaalinen keino tutustua sisällissodan taisteluiden kulkuun.
        </p>

      `,
      instancePage: {
        label: 'Taistelu',
        description: `
          <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
            Taistelun kuvaus
          </p>
        `
      },
      temporalMap: {
        municipality: 'Kunta',
        startDate: 'Alkupäivä',
        endDate: 'Loppupäivä',
        units: 'Taisteluun osallistuneita valkoisten joukkoja'
      },
      map: {
        startDate: 'Alkupäivä',
        endDate: 'Loppupäivä',
        municipality: 'Kunta',
        units: 'Taisteluun osallistuneita valkoisten joukkoja'
      },
      properties: {
        uri: {
          label: 'URI',
          facetDescription: `
          uri
          `,
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Taistelun nimi',
          facetDescription: `
            Taistelun nimi
          `,
          description: `
            Taistelun nimi
          `,
          textFacetInputPlaceholder: 'Etsi nimellä'
        },
        startDate: {
          label: 'Alkupäivä',
          facetDescription: `
          Alkupäivä
          `,

          description: `
            Alkupäivä
          `
        },
        endDate: {
          label: 'Loppupäivä',
          facetDescription: `
          Loppupäivä
          `,
          description: `
            Loppupäivä
          `
        },
        greaterPlace: {
          label: 'Paikka',
          facetDescription: `
          Laajempi paikka
          `,
          description: `
            Laajempi paikka
          `
        },
        exactPlace: {
          label: 'Tarkempi paikka',
          facetDescription: `
          Tarkempi paikka
          `,
          description: `
            Tarkempi paikka
          `
        },
        units: {
          label: 'Yksiköitä',
          facetDescription: `
          Taisteluun osallistuneita yksiköitä
          `,
          description: 'Taisteluun osallistuneita yksiköitä'
        }
      }
    }
  },
  instructions: `
        <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
          Ohjeet
        </h1>
        <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
          Tiedonhaku
        </h2>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Tietokannan hakutoiminnot pohjautuvat sotasurmien ja taisteluiden kuvailuun ja suodattamiseen
          toisistaan riippumattomien luokitusten eli fasettien avulla (esimerkiksi henkilön ammatti, kuolinkunta, sukupuoli jne.)
          Jokainen luokitus näyttää listauksen hakutulosten lukumääristä eri valinnoilla; alkuasetelmassa hakutuloksena on koko tietokannan sisältö.
          Toisin sanottuna alkuasetelmassa hakutulosten listaus näyttää koko tietokannan sisällön.
          Tätä hakutulosten joukkoa voi rajata pienemmäksi tekemällä valintoja vasemman reunan suodattimia ja muita hakuominaisuuksia käyttämällä.
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Suodattimen kaikki mahdolliset arvot ovat esillä listana tai, jos mahdollista, hierarkkisena puurakenteena.
        Kunkin arvon perässä esitetään se lukumäärä kuinka monta kertaa arvo esiintyy koko aineistossa (tai jo muiden suodattimien pohjalta tehdyssä rajauksessa).
        Suodattimesta on mahdollista valita useita arvoja samaan aikaan.
        Suodattimen valintoja on mahdollista järjestää joko arvojen määrän tai aakkosjärjestyksen mukaan.
        Valinnan poistaminen onnistuu klikkaamalla sitä uudestaan listalta.
        Kaikki valinnat voi poistaa hakupalkin ylälaidasta.
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Fasettihaun tehokkuus tulee esiin useampia suodattimia käytettäessä.
          Valittaessa useampia suodattimia samanaikaisesti hakutulos rajautuu niin, että tuloksina näytetään vain ne henkilöt (tai taistelut), jotka täyttävät kaikki valitut ehdot.
          Voit tehdä myös saman suodattimen sisällä useita valintoja, jolloin tulokseksi tulevat sen suodattimen osalta kaikki henkilöt, jotka täyttävät jonkun tehdyn valinnan.
          Esimerkiksi kun valitset suodattimesta “Kirjoillaolokunta” vaihtoehdot “Helsinki” ja “Tampere”
           sekä valitset “Osapuoli” suodattimesta “Punainen”, saat tulosjoukoksi kaikki henkilöt, joiden osapuoleksi on määritetty "Punainen" JA kirjoillaolokunnaksi joko "Helsinki" TAI "Tampere".
        </p>
        <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
          Tekstihaku
        </h3>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Tekstihaussa välilyönnin merkitys on "TAI", joten haku matti meikäläinen hakee kaikki joiden nimessä esiintyy matti tai meikäläinen.
          Rajataksesi haun tarkemmin voit käyttää lainausmerkkejä. Nimet on tallennettu sukunimi ensin, joten Matti Meikäläisen löytäisit haulla
          "meikäläinen, matti". Alkukirjaimia ei tarvitse kirjoittaa isolla, mutta muuten haku on oletuksena tarkka kirjaimista.
          Esimerkiksi e on haun kannalta eri kirjain kuin é. Haussa voit käyttää jokerimerkkejä * ja ?.
          Kysymysmerkki ? korvaa yksittäisen kirjaimen millä tahansa kirjaimella, esim. meik?lain?n.
          Asteriksi * sallii sanan loppuosan olevan mitä tahansa, esim. meikäläi*.
        </p>
        <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
          Sotasurmat
        </h2>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Sotasurmat-näkymä on käyttöliittymä Suomen sotasurmat 1914-1922 tietokantaan ja sisältää viisi erilaista alinäkymää, joilla suodattimien rajaamaa tulosjoukkoa voi tarkastella: Taulukko, Piirakkakaavio, Viivakaavio, Kartta sekä CSV-vienti.
          Kaaviot on tarkoitettu käytettäväksi suuntaa-antavina visualisointeina suodattimilla valitusta data-joukosta.
        </p>
        <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
          Taulukko
        </h3>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Taulukko on oletusnäkymä, joka näyttää taulukkona suodattimien määräämän tulosjoukon mukaisia henkilöitä sekä heidän keskeiset tietonsa.
          Taulukkoa voi selata yläosassa olevilla nuolipainikkeilla.
          Henkilöt voi järjestää haluamansa ominaisuuden mukaan painamalla taulukon yläosassa olevaa ominaisuuden nimeä. Oletuksena henkilöt järjestetään sukunimen perusteella.
          Klikkaamalla henkilön nimeä pääset henkilön omalle sivulle.
          Henkilön omalla sivulla on paljon enemmän tietoa henkilöstä sekä mahdollisia vaihtoehtoisia tietoja, joita on saatu eri lähteistä.
          Haku käyttää näistä tiedoista vain ensisijaiseksi määriteltyä.
        </p>
        <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
          Piirakkakaavio
        </h3>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Piirakkakaavio visualisoi hakutuloksen suhteelliset lukumäärät valitun luokituksen suhteen.
        </p>
        <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
          Viivakaavio
        </h3>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Viivakaavio-alinäkymässä voit visualisoida rajattujen henkilöiden ikää, syntymävuotta tai kuolinpäivää viivakaavion avulla.
          Iälle ja syntymävuodelle lasketaan myös keskiarvo ja mediaani vuoden tarkkuudella.
          Huomaa, että kuolinpäivä-kaavio näyttää tietoa vain henkilöistä, joille on tietokannassa merkitty tarkka kuolinpäivä.
        </p>
        <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
          Kartta
        </h3>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Tässä alinäkymässä voit etsiä kuolleita klusteroidun kartan avulla. Kartta näyttää henkilöitä kuolinkunnan perusteella.
          Huomaa, että kunnat on yhdistetty koordinaatteihin koneellisesti paikannimen perusteella.
          Paikannimet voivat olla moniselitteisiä, joten koordinaateissa voi olla virheitä, ja kuntia puuttuu varsinkin ulkomailta.
          Puuttuvat koordinaatit pyritään täydentämään dataan manuaalisesti.
        </p>
        <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
          CSV
        </h3>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Henkilöiden tärkeimmät tiedot on mahdollista ladata omalle koneelle CSV-muodossa. Tiedosto ei sisällä vaihtoehtoisia tietoja, lähteitä eikä lisätietoja.
        CSV-tiedosto on mahdollista avata taulukkolaskentaohjelmassa, mutta merkistökoodaus ja erotin on määritettävä oikein.
         Hyödylliset ohjeet merkistökoodauksen muuntamiseksi esimerkiksi Microsoft Exceliä varten löydät
        <a href="https://support.office.com/fi-fi/article/ohjattu-tekstin-tuominen-c5b02af6-fda1-4440-899f-f78bafe41857#ID0EAAFAAA=Office_2010_-_Office_2016" target='_blank' rel='noopener noreferrer'>täältä</a>.
        Seuraa ohjeita ja valitse tiedoston merkistöksi 65001: Unicode (UTF-8).
        Seuraavassa kohdassa valitse erottimeksi pilkku ja paina valmis-painiketta.
        Jos käytät esimerkiksi LibreOfficen taulukkolaskentaohjelmaa, ohjelman pitäisi kysyä merkistökoodausta ja erotinta heti tiedostoa avattaessa.
        Valitse myös siinä UTF-8-merkistökoodaus ja erottimeksi pilkku.
        </p>
        <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
          Taistelut
        </h2>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Taistelut-näkymä perustuu Kansallisarkistossa säilytettävään entisen sota-arkiston työntekijöiden laatimaan
        <a href= "http://wiki.narc.fi/portti/index.php/Sis%C3%A4llissodan_taistelupaikkakortisto" target='_blank' rel='noopener noreferrer'>Sisällissodan taistelupaikkakortistoon</a>.
        Kortiston tiedot on muunnettu taulukkomuotoon, ja taisteluille on haettu koordinaatit kartalla esittämistä varten.

        Taisteluiden nimet ovat selkeästi valkoisesta näkökulmasta annettuja.
        Näkymässä nimet näytetään siinä muodossa kuin ne kortistossa on esitetty, ei kannanottona tapahtumiin.
        Näkymän tarkoituksena on luoda helppo visuaalinen keino tutustua sisällissodan taisteluiden kulkuun.
        </p>
        <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
          Taulukko
        </h3>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Taulukon avulla voit selata taisteluiden tietoja ja järjestää niitä esimerkiksi alkamispäivän mukaan.
        </p>
        <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
          Kartta
        </h3>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Klusteroidun kartan avulla voit tarkastella taisteluita kartalla. Kartta kerää lähellä toisiaan olevat paikat yhteen.
          Klikkaamalla tällaista “klusteria” tai zoomaamalla tarpeeksi lähelle saat näkyviin yksittäiset taistelupaikat.
          Taistelupaikkojen koordinaatit on tallennettu vain kahden desimaalin tarkkuudella, joten ne eivät välttämättä ole tismalleen oikeassa paikassa.
        </p>
        <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
          Animaatio
        </h3>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Animaatio visualisoi taisteluita kartalla. Kun taistelu alkaa, se vilahtaa punaisena pisteenä ja jää kartalle harmaana.
          Animaatio alkaa oletuksena vuoden 1918 alusta, mutta kortisto sisältää myös useita vuoden 1917 puolella tapahtuneita väkivaltaisuuksia.
        </p>

    `,
  feedback: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Palaute
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">

    </p>
  `,
  information: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Tietoa
    </h1>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Sotasurmasampo 1914-1922
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Sotasurmasampo 1914-1922 on Suomeen liittyviin sotatapahtumiin vuosina 1914-1922 keskittynyt semanttinen portaali.
      Sivuston keskeisin aineisto on Kansallisarkiston Suomen sotasurmat 1914-1922 -tietokanta. Projektista on tarjolla lisää tietoa
      <a href="https://seco.cs.aalto.fi/projects/sotasurmat-1914-1922/" target='_blank' rel='noopener noreferrer'> projektin omilla sivuilla</a>.
      Voit halutessasi myös tutustua Sotasurmatietokannan
      <a href="http://vesta.narc.fi/cgi-bin/db2www/sotasurmaetusivu/main" target='_blank' rel='noopener noreferrer'> vanhaan sivustoon</a>.
    </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Tietosisällöstä
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Sotasurmasammon data koostuu kahden erillisen hankkeen aikana kootuista tiedoista.
      Pohjan datapalvelulle antaa vuosina 1998-2004 toteutettu Suomen sotasurmat 1914-1922 -projekti (SSSP) ja -tietokanta.
      Tätä tietokantaa on laajennettu ja päivitetty lokakuussa 2018 aloitetussa Sotasurmat2-hankkeessa ja se on muunnettu Sotasurmasammon linkitetyksi avoimeksi dataksi.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Tietokanta sisältää tietoa yli 40 000 henkilöstä. Se ei ole tarkka laskelma vuosien 1914-1922 sotasurmatapauksista, sillä osa tiedoista on epävarmoja.
      Tietokannan verkkokäyttöliittymään kuuluvilla hakusuodattimilla sekä analysointi- ja visualisointityökaluilla käyttäjän on mahdollista helposti itse tehdä rajauksia ja saada haluamiaan tietoja ja yhteenvetoja surmansa saaneista.
     Koska lähdeaineisto sotavuosilta on hyvin vaihtelevaa, on hakusuodattimiin sisällytetty nyt myös mahdollisuus määritellä sotasurmatapauksen todennäköisyyttä.
</p>
 <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
Jokaiselle surmansa saaneelle on luotu oma “kotisivu”, joka kokoaa yhteen häneen liittyvät tiedot sekä tarjoaa eräissä tapauksissa lisätietolinkkejä verkossa oleviin muihin palveluihin, kuten Wikipediaan, Helsingin yliopiston <a href="https://ylioppilasmatrikkeli.helsinki.fi/1853-1899/" target='_blank' rel='noopener noreferrer'>Ylioppilasmatrikkeliin 1853-1899</a>,
<a href="http://www.biografiasampo.fi" target='_blank' rel='noopener noreferrer'>Biografiasampoon</a> ja <a href="https://www.norssit.fi/semweb/" target='_blank' rel='noopener noreferrer'>Vanhat Norssit semanttisessa webissä</a> -palveluun.
      Verkkokäyttöliittymään on myös lisätty SSSP:n aikanaan keräämä laaja lisätietoaineisto.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Verkkosivuston Palaute-painikkeen kautta on mahdollista lähettää kommentteja ja lisätietoa Kansallisarkistolle sotasurmatapauksiin liittyen.
    </p>
<p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
 Data on julkaistu avoimesti <a href="http://www.ldf.fi/dataset/siso" target='_blank' rel='noopener noreferrer'>Linked Data Finland -alustalla</a>, jossa sitä voidaan hyödyntää mm. SPARQL-rajapinnan kautta sekä tutkimuksessa että uusien sovellusten kehittämiseen.
</p>

    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Lähteistä
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Sotasurmatietokannan tietojen perään on merkitty kunkin tiedon osalta käytetty lähde.
      Lähteen lyhennettä klikkaamalla saat tarkempia tietoja kyseisestä lähteestä.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Sotasurmatietokanta perustuu pääosin seuraavien laajojen henkilöluetteloiden tietoihin:
    </p>
    <ul class="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom">
      <li>
        Papiston tilasto (PT)
      </li>
      <li>
        Seurakuntien kuolleiden ja haudattujen luettelot vuosilta 1914-1922 (SRK)
      </li>
      <li>
        Seurakuntien rippikirjat (RK), osittain
      </li>
      <li>
        SDP:n tilasto (SDP)
      </li>
      <li>
        Helsingin kaupungin tilastokonttorin kuolleiden kortisto vuosilta 1914-1922 (HKA)
      </li>
      <li>
        Jääkärimatrikkeli (JM)
      </li>
      <li>
        Vuoden 1918 sotavankilaitoksen arkisto (VL)
      </li>
      <li>
        Etsivän keskuspoliisin luettelo suomalaisista valtiollisista pakolaisista 11.6.1921 (EK)
      </li>
      <li>
        Vankeinhoitohallituksen arkisto (VHH)
      </li>
      <li>
        Boström, H. J: Sankarien muisto (BO)
      </li>
      <li>
        Suomen kommunistisen puolueen arkisto Venäjällä (SKP)
      </li>
      <li>
        Saksalaissurmat (DB, EDR, HVA, OD, VSK)
      </li>
      <li>
        Sotasurmaprojektille tulleet kansalaiskirjeet ja yhteydenotot (SPA + kirjeen tai yhteydenoton järjestysnumero)
      </li>
    </ul>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Tarkempaa tietoa Valtioneuvoston kanslian vuonna 1998 asettaman sotasurmaprojektin käyttämistä lähteistä saa projektin
      julkaisemasta <a href = "http://julkaisut.valtioneuvosto.fi/bitstream/handle/10024/161111/J1004_Sotaoloissa%20vuosina_net.pdf?sequence=1&isAllowed=y" target='_blank' rel='noopener noreferrer'>tilastoraportista</a>
      tai vanhan sotasurmatietokannan
      <a href = "http://vesta.narc.fi/cgi-bin/db2www/sotasurmaetusivu/lahdepohja" target='_blank' rel='noopener noreferrer'>lähdekuvauksesta</a>.
    </p>
    <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      Vuoden 1918 leskien avustuskomitean arkisto (VLA)
    </h3>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
    Vuodesta 1942 eteenpäin myös punaisen puolen leskille tuli mahdolliseksi anoa valtiolta avustusta. Avustushakemukset siirrettiin syksyllä 2018 Kansallisarkistoon Valtiokonttorista. Hakemuksissa on lesken, kunnan huoltolautakunnan, seurakunnan sekä luotettaviksi katsottujen todistajien kertomukset vuonna 1918 tapahtuneista kuolintapauksista. Kaiken kaikkiaan avustushakemuksia on noin 6 500, ja ne ovat pääosin punaisella puolella taistelleiden henkilöiden leskiltä. Hakemusten laatu ja sisältö vaihtelee, mutta niistä on mahdollista saada uutta tietoa vuoden 1918 surmatapauksista.
    </p>
    <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      Tauno Tukkisen aineisto (TT)
    </h3>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Sotasurmat2-projektissa tietokantaan on lisätty Tauno Tukkisen vuosia kestäneiden tutkimusten tulokset. Tukkisen aineisto hyödyntää erittäin laajaa lähdepohjaa, mikä on osittain päällekkäinen ennestään käytettyjen lähteiden kanssa. Käytetyt lyhenteet eroavat myös hieman entisistä merkinnöistä. Tukkisen aineiston henkilötiedot on tarkistettu seurakuntien aineistoista.
      Mikäli tietokannassa lähdemerkintänä on TT, on kyseisen tapauksen tarkemmat lähteet eritelty omalle rivilleen henkilösivun alareunaan.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Rippikirja lähteenä viittaa henkilön kirjoillaolokunnan seurakunnan rippikirjaan.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Kuolleeksijulistamisesta ei ole päivämäärää enempää tietoa.
      Kuolleeksijulistaminen on tapahtunut kirjoillaolokunnan mukaisessa tai sen läheisessä raastuvanoikeudessa.
      Välip.-merkinnän sisältävä lähdemerkintä tarkoittaa kuolleeksijulistamisoikeudenkäynnin välipäätöstä.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Tauno Tukkisen aineiston lyhenteet:
    </p>
    <table style="width:100%" class="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom">
      <tr>
        <td>AK</td>
        <td>Aimo Klemettilä, Tampereen punakaarti ja sen jäsenistö (1976)</td>
      </tr>
      <tr>
        <td>AS.</td>
        <td>Anna Sirola: Puhukoon paatinen pylväs (2017)</td>
      </tr>
      <tr>
        <td>Aå</td>
        <td>Valtiorikosoikeuksien syyttäjistön asiakirja</td>
      </tr>
      <tr>
        <td>BO</td>
        <td>Boström, H.J. Sankarien muisto (1927)</td>
      </tr>
      <tr>
        <td>HMA</td>
        <td>Hämeenlinnan maakunta-arkisto</td>
      </tr>
      <tr>
        <td>HS</td>
        <td>Matti Lähteenmäki, Hämeenkyrön suojeluskunta (1938)</td>
      </tr>
      <tr>
        <td>HYS</td>
        <td>Helsingin yleinen sairaala (lääninsairaala)</td>
      </tr>
      <tr>
        <td>IL</td>
        <td>Itä ja Länsi 1928 ja 1929</td>
      </tr>
      <tr>
        <td>KA</td>
        <td>Kansallisarkisto</td>
      </tr>
      <tr>
        <td>KAN</td>
        <td>Kansan Arkisto</td>
      </tr>
      <tr>
        <td>KAT</td>
        <td>Karjalan Armeijan Tiedonannot (Internetissä)</td>
      </tr>
      <tr>
        <td>KK</td>
        <td>Kuolleiden ja haudattujen kirjat</td>
      </tr>
      <tr>
        <td>Kper/Tay</td>
        <td>Tampereen yliopisto, Kansanperinteen laitos</td>
      </tr>
      <tr>
        <td>KT</td>
        <td>Kuoleman kentiltä. Muistojulkaisu vuoden 1918 ajoilta (1924)</td>
      </tr>
      <tr>
        <td>KTÖ</td>
        <td>Kansan Työ</td>
      </tr>
      <tr>
        <td>KÄ</td>
        <td>Kärsimysten teiltä. Kymmenvuotismuistoja (1928)</td>
      </tr>
      <tr>
        <td>Lautasalo</td>
        <td>Onni Lautasalo, Kansakunta jakaantui kahtia (1997)</td>
      </tr>
      <tr>
        <td>Lääk. </td>
        <td>Lääkintäasian kokoelmat (Kansallisarkistossa)</td>
      </tr>
      <tr>
        <td>PT</td>
        <td>Papiston tilasto (1919)</td>
      </tr>
      <tr>
        <td>Päämaja 1918</td>
        <td>Kansallisarkiston asiakirja</td>
      </tr>
      <tr>
        <td>R</td>
        <td>Rippikirjat (seurakunnilla)</td>
      </tr>
      <tr>
        <td>SKT</td>
        <td>Suomen Kansanvaltuuskunnan Tiedonantaja</td>
      </tr>
      <tr>
        <td>SML tai SMT</td>
        <td>Suomen Metalliteollisuustyöntekijäin Liitto. 20-vuotisjuhlajulkaisu 21.6.1899-21.6.1919 (1919)</td>
      </tr>
      <tr>
        <td>SSD</td>
        <td>Suomen Sosialidemokraatti</td>
      </tr>
      <tr>
        <td>STJP</td>
        <td>Suomen tasavallan joukkojen ylipäällikön päiväkäsky 1918 (Internetissä)</td>
      </tr>
      <tr>
        <td>SVL</td>
        <td>Sotavankilaitos 1918 (Kansallisarkisto)</td>
      </tr>
      <tr>
        <td>T</td>
        <td>Terroritilasto eli SDP:n tilasto</td>
      </tr>
      <tr>
        <td>TA</td>
        <td>Työväen Arkisto</td>
      </tr>
      <tr>
        <td>TMT</td>
        <td>Työväen muistitietokokoelma (Työväen Arkisto)</td>
      </tr>
      <tr>
        <td>TT</td>
        <td>Tauno Tukkisen arkisto</td>
      </tr>
      <tr>
        <td>TYMA</td>
        <td>Työläisnuorison muistoalbumi 1918 (1920)</td>
      </tr>
      <tr>
        <td>US</td>
        <td>Uusi Suometar</td>
      </tr>
      <tr>
        <td>VapSA</td>
        <td>Vapaussodan arkisto (Kansallisarkisto)</td>
      </tr>
      <tr>
        <td>VHH</td>
        <td>Vankeinhoitohallitus (Kansallisarkisto)</td>
      </tr>
      <tr>
        <td>VK</td>
        <td>Valkoinen Suomi (Internetissä)</td>
      </tr>
      <tr>
        <td>VROSyA</td>
        <td>Valtiorikosoikeuksien syyttäjistön arkisto (Kansallisarkisto)</td>
      </tr>
    </table>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
    </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Ammattiontologiat
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Sotasurmasammon datassa ammatit on yhdistetty
      <a href = "https://seco.cs.aalto.fi/ontologies/ammo/" target='_blank' rel='noopener noreferrer'>AMMO-ontologiaan</a>.
      Tähän ontologiaan sisältyy linkkejä useisiin eri ammattiluokituksiin. Sotasurmat-näkymässä
      on mahdollisuus suodattaa tietoja ammattien suhteen sosiaalista asemaa kuvaavan HISCLASS7-luokittelun
      sekä Ammattiluokituksen 1980 käsitteiden avulla.
    </p>
  `
}
