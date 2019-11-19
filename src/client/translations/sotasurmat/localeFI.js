export default {
  languageLabel: 'Suomi',
  appTitle: {
    short: 'Sotasurmat',
    long: 'Sotasurmasampo 1914-1922'
  },
  appDescription: `
    Portaali Suomeen liittyviin sotatapahtumiin vuosina
    1914-1922.
  `,
  topBar: {
    feedback: 'palaute',
    info: {
      info: 'tietoa',
      blog: 'Blog',
      oldPage: 'Vanha sovellus',
      aboutTheProject: 'Tietoa projektista'
    },
    searchBarPlaceHolder: 'Etsi koko aineistosta',
    instructions: 'ohjeet'
  },
  facetBar: {
    results: 'Tulokset',
    narrowDownBy: 'Rajoita',
    narrowDownByTooltip: 'Rajoita hakutulosta alla olevien valitsimien avulla',
    filterOptions: 'Asetukset',
    sortByName: 'Järjestä nimen mukaan',
    sortByHits: 'Järjestä hakutuloksien lukumäärän mukaan',
    searchWithinFilter: 'Hae'
  },
  tabs: {
    table: 'taulukko',
    map: 'kartta',
    line: 'viivakaavio',
    pie: 'piirakkakaavio',
    animation: 'animaatio',
    csv: 'csv',
    extra: 'Lisätiedot',
    export: 'Export',
  },
  table: {
    rowsPerPage: 'Riviä sivulla',
    of: 'of'
  },
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
  },
  mainPageImageLicence: `Etusivun kuvat: Vapriikin kuva-arkisto
  <a href= "https://creativecommons.org/licenses/by/2.0/" target='_blank' rel='noopener noreferrer'>CC BY</a>.`,
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
            Datassa käytetty lyhennä lähteelle.
          `
        },
        description: {
          label: 'Kuvaus',
          description:  `
            Mahdollinen pidempi kuvaus lähteestä
            `
        },
      }
    },
    victims: {
      label: 'Sotasurmat',
      facetResultsType: 'henkilö',
      shortDescription: 'Tietoa vuosina 1914-1922 sotaoloissa surmansa saaneista.',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Näkymä sisällisodassa, heimosodissa ja 1. maailmansodassa menehtyneisiin suomalaisiin 1914-1922. Voit hakea ja rajoittaa oikealla näkyviä henkilöitä vasemmalla olevien valitsimien avulla. Henkilön linkkiä klikkaamalla pääset tutkimaan tietoja hänen kotisivullaan. Koko tulosjoukkoa voit tutkia paitsi taulukkona myös piirakkakaavioina, viivakaavioina ja kartalla kuolinpaikkojen perusteella tai ladata tulokset itsellesi taulukkona CSV-muodossa: valitse toiminto hakutuloksen päällä olevista vaihtoehdoista.
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
            Kartassa voi olla virheitä ja puutteita koska paikkatermit voivat olla moniselitteisiä. Puuttuvat kunnat pyritään täydentämään myöhemmin.
          </li>
          <li>
            <strong>CSV</strong> sivulla voit ladata haussa rajattujen henkilöiden tiedot omalle koneellesi CSV-taulukkona.
            CSV-tiedoston voi avata taulukkolaskentaohjelmalla, mutta merkistökoodaukseksi tulee määrittää UTF-8 ja välimerkiksi pilkku, jotta tiedot näkyvät oikein.
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
      map: {
        deathsAt: 'Tässä kunnassa kuolleita henkilöitä:'
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
          "meikäläinen, matti". Alkukirjaimia ei tarvitse kirjoittaa isolla.
          `
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
          description:`
            Henkilön osapuoli sisällissodassa.
          `,
          facetDescription: 'Henkilön osapuoli sisällissodassa.',
        },
        registeredMunicipality: {
          label: 'Kirjoillaolokunta',
          facetDescription: 'Kirjoillaolokunta',
          description: 'Kijoillaolokunta.'
        },
        deathMunicipality: {
          facetDescription: 'Kuolinkunta',
          label: 'Kuolinkunta',
          description: 'Kuolinkunta'
        },
        occupation: {
          label: 'Ammatti',
          facetDescription: 'Ammatti',
          description: `
            Henkilön ammatti aineistossa annetussa muodossa.
          `
        },
        birthDate: {
          label: 'Syntymäpäivä',
          facetDescription: 'Syntymäpäivä',
          description: `
            Syntymäpäivä (vanhan projektin laskema)
          `
        },
        deathDate: {
          label: 'Kuolinpäivä',
          facetDescription: 'Kuolinpäivä',
          description: `
            Kuolinpäivä (vanhanprojektin laskema.)
          `
        },
        birthTimespan: {
          label: 'Syntymäpäivä',
          description: 'Syntymäpäivä',
          facetDescription: `
            Rajaa henkilöitä syntymäpäivän perusteella. Voit määrittä aikavälin alku- ja loppupäivän.
            Huomaa, että osalla henkilöistä puuttuu syntämäpäivä kokonaan ja osalla se on osin epäselvä.
            Epäselvissä tapauksissa syntymäaika on tallennettu aikavälinä. Henkilö näytetään osumissa,
            jos arvioituun aikaväliin osuu yksikin yhteinen päivä valitsemasi aikavälin kanssa.
          `
        },
        deathTimespan: {
          label: 'Kuolinpäivä',
          description: 'Kuolinpäivä',
          facetDescription: `
            Rajaa henkilöitä kuolinpäivän perusteella. Voit määrittä aikavälin alku- ja loppupäivän.
            Huomaa, että osalla henkilöistä puuttuu kuolinpäivä kokonaan ja osalla se on osin epäselvä.
            Epäselvissä tapauksissa kuolinaika on tallennettu aikavälinä. Henkilö näytetään osumissa,
            jos arvioituun aikaväliin osuu yksikin yhteinen päivä valitsemasi aikavälin kanssa.
          `
        },
        age: {
          label: 'Ikä',
          facetDescription: `Henkilön ikä. Voit määrittää janalla halutun ikävälin.
          Mikä tahansa valinta suodattaa pois kaikki henkilöt joille ei ole määritelty ikää.,`,
          description: `
            Henkilön ikä
          `
        },
        numberOfChildren: {
          label: 'Lasten lukumäärä',
          facetDescription: `
          Lasten lukumäärä. Voit määrittää janalla lukuvälin.
          Huomaa, että useimmille henkilöille ei ole määritelty lasten lukumäärää,
          ja mikä tahansa valinta suodattaa pois kaikki sellaiset henkilöt.,
          `,
          description: `
            Lasten lukumäärä
          `
        },
        ammoOccupation: {
          label: 'AMMO ammatti',
          description: `
            AMMO ontologian mukainen ammatti
          `,
          facetDescription: `
            AMMO ontologian mukainen ammatti
          `,
        },
        hisclass7: {
          label: 'Ammatti (HISCLASS7)',
          description: `
            HISCLASS7 luokittelun mukainen ammatti
          `,
          facetDescription: `
            HISCLASS7 luokittelun mukainen ammatti
          `,
        },
        coo1980: {
          label: 'Ammatti (coo1980)',
          facetDescription: `
            Ammattiluokitus 1980 luokittelun mukainen ammatti
          `,
          description: `
            Ammattiluokitus 1980 luokittelun mukainen ammatti
          `
        },
        hisco: {
          label: 'HISCO',
          facetDescription: `
            HISCO luokittelun mukainen ammatti
          `,
          description: `
            HISCO luokittelun mukainen ammatti
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
            Marital status
          `
        },
        militaryOrganization: {
          label: 'Sotilasjärjestö',
          facetDescription: `
          Sotilasjärjesö johon kuului
          `,
          description: `
            Sotilasjärjesö johon kuului
          `
        },
        deathLikelihood: {
          label: 'Surman todennäköisyys',
          facetDescription: `
            Todennäköisyys sille, että henkilö todellisuudessa kuoli tiedoston kuvaamalla tavalla
          `,
          description: `
            Todennäköisyys sille, että henkilö todellisuudessa kuoli tiedoston kuvaamalla tavalla
          `
        },

      },
    },
    battles: {
      label: 'Taistelut',
      facetResultsType: 'taistelu',
      shortDescription: 'Taistelupaikkakortistoon perustuva näkymä sisällisssodan taisteluista.',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Taistelut -näkymä perustuu Kansallisarkistossa säilytettävään entisen sota-arkiston työntekijöiden laatimaan
          <a href = "http://wiki.narc.fi/portti/index.php/Sis%C3%A4llissodan_taistelupaikkakortisto" target='_blank' rel='noopener noreferrer'>Sisällissodan taistelupaikkakortistoon</a>.
          Kortiston tiedot on muunnettu taulukkomuotoon ja taisteluille on haettu koordinaatit kartalla esittämistä varten.
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
            Taistelut henkilösivun kuvaus
          </p>
        `
      },
      temporalMap: {
        municipality: 'Kunta'
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
          `
        },
        startDate: {
          label: 'Alkupäivä',
          facetDescription: `
          Alkupäivä
          `,

          description:  `
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
          description: `Taisteluun osallistuneita yksiköitä`
        }
      }
    },
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
        Kaikki valinnat voi poistaa hakupalkin ylälaidasta
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Fasettihaun tehokkuus tulee esiin useampia suodattimia käytettäessä.
          Valittaessa useampia suodattimia samanaikaisesti hakutulos rajautuu niin, että tuloksina näytetään vain ne henkilöt (tai taistelut), jotka täyttävät kaikki valitut ehdot.
          Voit tehdä myös saman suodattimen sisällä useita valintoja, jolloin tulokseksi tulevat sen suodattimen osalta kaikki henkilöt, jotka täyttävät jonkun tehdyn valinnan.
          Esimerkiksi kun valitset suodattimesta “Kirjoillaolokunta” vaihtoehdot “Helsinki” ja “Tampere”
           sekä valitset “Osapuoli” suodattimesta “Punainen”, saat tulosjoukoksi kaikki henkilöt, joiden osapuoleksi on määritetty "Punainen" JA kirjoillaolokunnaksi joko "Helsinki" TAI "Tampere".
        </p>
        <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
          Sotasurmat
        </h2>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Sotasurmat-näkymä sisältää viisi erilaista alinäkymää, joilla suodattimien rajaamaa tulosjoukkoa voi tarkastella: Taulukko, Piirakkakaavio, Viivakaavio, Kartta sekä CSV-vienti.
          Kaaviot on tarkoitettu käytettäväksi suuntaa-antavina visualisointeina suodattamilla valitusta data-joukosta.
        </p>
        <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
          Taulukko
        </h3>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Taulukko on oletusnäkymä, joka näyttää taulukkona suodattamien määräämän tulosjoukon mukaisia henkilöitä sekä heidän keskeiset tietonsa.
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
          Piirakkakaavio  visualisoi hakutuloksen suhteelliset lukumäärät valitun luokituksen suhteen.
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
          Huomaa, että kunnat on yhdistetty koordinaatteihin koneellisesti paikkatermin perusteella.
          Paikkatermit voivat olla moniselitteisiä, joten koordinaateissa voi olla virheitä ja kuntia puuttuu varsinkin ulkomailta.
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
        Valitse myös siinä UTF-8 koodaus ja erottimeksi pilkku.
        </p>
        <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
          Taistelut
        </h2>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Taistelut -näkymä perustuu Kansallisarkistossa säilytettävään entisen sota-arkiston työntekijöiden laatimaan
        <a href= "http://wiki.narc.fi/portti/index.php/Sis%C3%A4llissodan_taistelupaikkakortisto" target='_blank' rel='noopener noreferrer'>Sisällissodan taistelupaikkakortistoon</a>.
        Kortiston tiedot on muunnettu taulukkomuotoon ja taisteluille on haettu koordinaatit kartalla esittämistä varten.

        Taisteluiden nimet ovat selkeästi valkoisesta näkökulmasta annettuja.
        Näkymässä nimet näytetään siinä muodossa kuin ne kortistossa on esitetty, ei kannanottona tapahtumiin.
        Näkymän tarkoituksena on luoda helppo visuaalinen keino tutustua sisällissodan taisteluiden kulkuun.
        </p>
        <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
          Taulukko
        </h3>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Taulukon avulla voit selata taisteluiden tietoja, ja järjestää niitä esimerkiksi alkamispäivän mukaan.
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
          Animaatio visualisoi taiteluita kartalla. Kun taistelu alkaa se vilahtaa punaisena pisteenä ja jää kartalle harmaana.
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
      Sotasurmasampo 1914-1922 on Suomeen liittyviin sotatapahtumiin vuosina 1914-1922 keskittynyt portaali.
      Sivuston keskeisin aineisto on Kansallisarkiston Suomen sotasurmat 1914-22 tietokanta. Projektista on tarjolla lisää tietoa
      <a href="https://seco.cs.aalto.fi/projects/sotasurmat-1914-1922/" target='_blank' rel='noopener noreferrer'> projektin omilla sivuilla</a>.
      Voit halutessasi myös tutustua Sotasurmatietokannan
      <a href="http://vesta.narc.fi/cgi-bin/db2www/sotasurmaetusivu/main" target='_blank' rel='noopener noreferrer'> vanhaan sivustoon</a>.
    </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Sotasurmatietokannan tietosisällöstä
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Sotasurmatietokanta koostuu kahden erillisen hankkeen aikana kootuista tiedoista.
      Pohjan tietokannalle antaa vuosina 1998-2004 toteutettu Suomen sotasurmat 1914-1922 -projekti (SSSP).
      Nykyistä tietokantaa on päivitetty lokakuussa 2018 aloitetussa nk. Sotasurmat2 -hankkeessa.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Tietokanta sisältää tällä hetkellä tietoa yli 40 000 henkilöstä (tietokantaa päivitetään näillä näkymin vuoden 2020 loppuun asti).
      Tietokanta ei ole tarkka laskelma vuosien 1914-1922 sotasurmatapauksista. Osa tiedoista on epävarmoja.
      Tietokannan verkkokäyttöliittymään kuuluvilla hakusuodattimilla ja visualisointityökaluilla käyttäjän on mahdollista helposti tehdä itse rajauksia ja saada haluamiaan tietoja kuolleiden määristä.
      Koska lähdeaineisto sotavuosilta on hyvin vaihtelevaa, on hakusuodattimiin sisällytetty nyt myös mahdollisuus määritellä sotasurmatapauksen todennäköisyyttä.
      Verkkokäyttöliittymään on myös lisätty SSSP:n aikanaan keräämä laaja lisätietoaineisto.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Verkkosivuston palaute-painikkeen kautta on mahdollista lähettää lisätietoa Kansallisarkistolle sotasurmatapauksiin liittyen.
    </p>
    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Lähteistä
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Sotasurmatietokannan tietojen perään on merkitty kunkin tiedon osalta käytetty lähde.
      Lähdelyhennettä klikkaamalla saa tarkempia tietoja kyseisestä lähteestä.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Sotasurmatietokanta perustuu pääosin seuraavien laajojen henkilöluetteloiden tietoihin:
    </p>
    <ul class="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom">
      <li>
        Papiston tilasto (PT)
      </li>
      <li>
        Seurakuntien kuolleiden ja haudattujen luettelot vuosilta 1914-22 (SRK)
      </li>
      <li>
        Seurakuntien rippikirjat (RK), osittain
      </li>
      <li>
        SDP:n tilasto (SDP)
      </li>
      <li>
        Helsingin kaupungin tilastokonttorin kuolleiden kortisto vuosilta 1914-22 (HKA)
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
    Vuodesta 1942 eteenpäin myös punaisen puolen leskille tuli mahdolliseksi anoa valtiolta avustusta. Avustushakemukset siirrettiin syksyllä 2018 Kansallisarkistoon Valtiokonttorista. Hakemuksissa on lesken, kunnan huoltolautakunnan, seurakunnan sekä luotettaviksi katsottujen todistajien kertomukset vuonna 1918 tapahtuneista kuolintapauksista. Kaiken kaikkiaan avustushakemuksia on noin 6 500, ja ne ovat pääosin punaisella puolella taistelleiden henkilöiden leskiltä. Hakemusten laatu ja sisältö vaihtelee hieman, ja niistä on mahdollista saada uutta tietoa vuoden 1918 surmatapauksista.
    </p>
    <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      Tauno Tukkisen aineisto (TT)
    </h3>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Sotasurmat2 -projektissa tietokantaan on lisätty Tauno Tukkisen vuosia kestäneiden tutkimusten tulokset. Tukkisen aineisto hyödyntää erittäin laajaa lähdepohjaa, mikä on osittain päällekkäinen ennestään käytettyjen lähteiden kanssa. Käytetyt lyhenteet eroavat myös hieman entisistä merkinnöistä. Tukkisen aineiston henkilötiedot on tarkistettu seurakuntien aineistoista.
      Mikäli tietokannassa lähdemerkintänä on TT, on kyseisen tapauksen tarkemmat lähteet eritelty omalle rivilleen henkilösivun alareunaan.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Rippikirja lähteenä viittaa henkilön kirjoillaolokunnan seurakunnan rippikirjaan.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Kuolleeksijulistamisesta ei ole päivämäärä enempää tietoa.
      Kuolleeksijulistaminen on tapahtunut kirjoillaolokunnan mukaisessa tai sen läheisessä raastuvanoikeudessa.
      Välip. -merkinnän sisältävä lähdemerkintä tarkoittaa kuolleeksijulistamisoikeudenkäynnin välipäätöstä.
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
        <td>HS.</td>
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
        <td>Karjalan Armeijan Tiedonannot (Intermetissä)</td>
      </tr>
      <tr>
        <td>KK</td>
        <td>Kuolleiden ja haudattujen kirjat</td>
      </tr>
      <tr>
        <td>Kper/Tay</td>
        <td>Tampereen yliopisto, Kansanpertinteen laitos</td>
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
      Ammationtologiat
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Sotasurmasammon datassa on ammatit yhdistetty
      <a href = "https://seco.cs.aalto.fi/ontologies/ammo/" target='_blank' rel='noopener noreferrer'>AMMO-ontologiaan</a>.
      Tähän ontologiaan sisältyt likkejä useisiin eri ammattiluokitteluihin. Sotasurmat-Näkymässä
      on mahdollisuus suodattaa tietoja ammattien suhteen sosiaalista asemaa kuvaavan HISCLASS7-luokittelun,
      sekä Ammattiluokitus 1980 käsitteiden avulla.
    </p>
  `,
};
