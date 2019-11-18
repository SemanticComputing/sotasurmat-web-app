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
    victims: {
      label: 'Sotasurmat',
      facetResultsType: 'henkilö',
      shortDescription: 'Tietoa vuosina 1914-22 sotaoloissa surmansa saaneista.',
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
          description: 'Henkilön koko nimi.'
        },
        familyName: {
          label: 'Sukunimi',
          description: 'Henkilön sukunimi'
        },
        firstName: {
          label: 'Etunimi',
          description: 'Henkilön etunimi'
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
        birthTimespan: {
          label: 'Syntymäpäivä',
          description: `
            Syntymäpäivä.
          `
        },
        deathTimespan: {
          label: 'Kuolinpäivä',
          description: `
            Kuolinpäivä.
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
          label: 'Ammatti (HISCLASS7)',
          description: `
            HISCLASS7 luokittelun mukainen ammatti
          `
        },
        coo1980: {
          label: 'Ammatti (coo1980)',
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
          label: 'Kuolintapa',
          description: `
            Kuolintapa aineistossa käytetyssä muodossa
          `
        },
        registeredCountry: {
          label: 'Kirjoillaolomaa',
          description: `
            Kirjoillaolomaa
          `
        },
        registeredProvince: {
          label: 'Kirjoillaololääni',
          description: `
            Kirjoillaololääni
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
        maritalStatus: {
          label: 'Siviilisääty',
          description: `
            Marital status
          `
        },
        militaryOrganization: {
          label: 'Sotilasjärjestö',
          description: `
            Sotilasjärjesö johon kuului
          `
        },
        deathLikelihood: {
          label: 'Surman todennäköisyys',
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
      temporalMap: {
        municipality: 'Kunta'
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
          Tietokannan hakutoiminnot pohjautuvat <a href="https://doi.org/10.2200/S00190ED1V01Y200904ICR005" target='_blank' rel='noopener noreferrer'>fasettihakuun</a>.
          Oletusarvoisesti jokainen hakuominaisuus näyttää kaikki tulokset omasta luokastaan.
          Toisin sanottuna alkuasetelmassa hakutulosten listaus näyttää koko tietokannan sisällön.
          Tätä hakutulosten joukkoa voi rajata pienemmäksi tekemällä valintoja vasemman reunan suodattimia ja muita hakuominaisuuksia käyttämällä.
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Suodattimen kaikki mahdolliset arvot ovat esillä listana tai, jos mahdollista, hierarkisena puurakenteena. Kunkin arvon perässä esitetään se lukumäärä kuinka monta kertaa arvo esiintyy koko aineistossa (tai jo muiden suodattimien pohjalta tehdyssä rajauksessa).
        Suodattimesta on mahdollista valita useita arvoja samaan aikaan.
        Suodattimen valintoja on mahdollista järjestää joko arvojen määrän tai aakkosjärjestyksen mukaan.
        Valinnan poistaminen onnistuu klikkaamalla sitä uudestaan listalta.
        Kaikki valinnat voi poistaa hakupalkin ylälaidasta
        </p>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Fasettihaun tehokkuus tulee esiin useampia suodattimia käytettäessä.
          Valittaessa useampia suodattimia samanaikaisesti, hakutulos rajautuu niin, että tuloksina näytetään vain ne henkilöt, jotka täyttävät kaikki valitut ehdot.
          Voit tehdä myös saman suodattimen sisällä useita valintoja, jolloin tulokseksi tulevat sen suodattimen osalta kaikki henkilöt, jotka täyttävät jonkun tehdyn valinnan.
          Esimerkiksi kun valitset “kirjoillaolokunta” suodattimesta “Helsinki” ja “Tampere”,
           sekä valitset “Osapuoli” suodattimesta “Punainen” saat tulosjoukoksi kaikki henkilöt joiden osapuoleksi on määritetty punainen JA kirjoillaolokunnaksi joko Helsinki TAI Tampere.
        </p>
        <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
          Sotasurmat
        </h2>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Sotasurmat-näkymä sisältää viisi erilaista alinäkymää joilla suodattimien rajaamaa tulosjoukkoa voi tarkastella: Taulukko, Piirakkakaavio, Viivakaavio, Kartta sekä CSV-vienti.
          Kaavioita ei tule pitää mitenkään virallisina, vaan niitä kannattaa käyttää suuntaa-antavina visualisointeina.
        </p>
        <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
          Taulukko
        </h3>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Taulukko on oletusnäkymä, joka näyttää taulukkona suodattamien määräämän tulosjoukon mukaisia henkilöitä sekä häiden keskeisiä ominaisuuksiaan.
          Taulukko näyttää sivulla vain määrätyn määrän henkilöitä. Taulukkos voi selata yläosassa olevilla nuolipainikkeilla.
          Henkilöt voi järjestää haluamansa ominaisuuden mukaan painamalla taulukon yläosassa olevaa ominaisuuden nimeä. Oletuksena henkilöt järjestetään sukunimen perusteella.
          Taulukko näyttää henkilön tiedot siinä muodossa kuin niitä käytetään haussa. Klikkaamalla henkilön nimeä pääset henkilön omalle sivulle.
          Henkilön omalla sivulla on paljon enemmän tietoa henkilöstä, sekä mahdollisia vaihtoehtoisia tietoja joita on saatu eri lähteistä.
          Haku käyttää näistä tiedoista vain ensisijaiseksi määriteltyä.
        </p>
        <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
          Piirakkakaavio
        </h3>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Visualisoi valitun ominaisuuden suhteellisia määriä piirakkakaaviona.
        </p>
        <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
          Viivakaavio
        </h3>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Viivakaavio-alinäkymässä voit visualisoida rajattujen henkilöiden ikää, syntymävuotta tai kuolinpäivää viivakaavion avulla.
          Iälle ja syntymävuodelle lasketaan myös keskiarvo ja mediaani vuoden tarkkuudella.
          Huomaa, että kuolinpäivä kaavio näyttää tietoa vain henkilöistä, joille on tietokannassa merkitty tarkka kuolinpäivä.
        </p>
        <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
          Kartta
        </h3>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Tässä alinäkymässä voit etsiä kuolleita klusteroidun kartan avulla. Kartta näyttää henkilöitä kuolinkunnan perusteella.
          Huomaa, että kunnat on yhdistetty koordinaatteihin koneellisesti, joten koordinaateissa on virheitä ja useita kuntia puuttuu varsinkin ulkomailta.
        </p>
        <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
          CSV
        </h3>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Henkilöiden tärkeimmät tiedot on mahdollista ladata CSV-muodossa. Tiedosto ei sisällä vaihtoehtoisia tietoja, lähteitä eikä lisätietoja.
        CSV-tiedosto on mahdollista avata taulukkolaskentaohjelmassa, mutta merkistökoodaus ja erotin on määritettävä oikein.
        Microsoft Excelia käytettäessä se ei välttämättä ole ilmeistä. Hyödylliset ohjeet merkistökoodauksen muuntamiseksi löydät
        <a href="https://support.office.com/fi-fi/article/ohjattu-tekstin-tuominen-c5b02af6-fda1-4440-899f-f78bafe41857#ID0EAAFAAA=Office_2010_-_Office_2016" target='_blank' rel='noopener noreferrer'>täältä</a>.
        Seuraa ohjeita ja valitse tiedoston alkuperäksi 65001: Unicode (UTF-8).
        Seuraavassa kohdassa valitse erottimeksi pilkku, ja paina valmis-painiketta.
        Jos käytät esimerkiksi LibreOfficen taulukkolaskentaohjelmaa, ohjelman pitäisi kysyä merkistökoodausta ja erotinta heti tiedostoa avattaessa.
        Valitse myös siinä UTF-8 koodaus ja erottimeksi pilkku.
        </p>
        <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
          Taistelut
        </h2>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        Taistelut -näkymä perustuu Kansallisarkistossa säilytettävään entisen sota-arkiston työntekijöiden laatimaan
        <a href= “http://wiki.narc.fi/portti/index.php/Sis%C3%A4llissodan_taistelupaikkakortisto” target='_blank' rel='noopener noreferrer'>Sisällissodan taistelupaikkakortistoon</a>.
        Kortiston tiedot on muunnettu taulukkomuotoon ja taisteluille on haettu koordinaatit kartalla esittämistä varten.

        Taisteluiden nimet ovat selkeästi valkoisesta näkökulmasta annettuja.
        Näkymässä nimet näytetään siinä muodossa kun ne kortistossa on esitetty, ei kannanottona tapahtumiin.
        Näkymän tarkoituksena on luoda helppo visuaalinen keino tutustua sisällissodan taisteluiden kulkuun.
        </p>
        <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
          Taulukko
        </h3>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Taulukon avulla voit selata taisteluden tietoja, ja järjestää niitä esimerkiksi alkamispäivän mukaan.
        </p>
        <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
          Kartta
        </h3>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          klusteroidun kartan avulla voit tarkastella taisteluita kartalla. Kartta kerää lähellä toisiaan olevat paikat yhteen.
          Klikkaamalla tällaista “klusteria” tai zoomaamalla tarpeeksi lähelle, saat näkyviin yksittäiset taistelupaikat.
          Taistelupaikkojen koordinaatit on tallennettu vain kahden desimaalin tarkkuudella, joten ne eivät välttämättä ole tismalleen oikeassa paikassa.
        </p>
        <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
          Animaatio
        </h3>
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          Animaatio visualisoi taiteluita kartalla. Kun taistelu alkaa se vilahtaa punaisena pisteenä ja jää kartalle harmaana.
          Animaatio alkaa oletuksena vuoden 1918 alusta, mutta kortisto sisältää myös useita vuoden 1917 puolella tahtuneita väkivaltaisuuksia.
        </p>

    `,
  feedback: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Palaute
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">

    </p>
  `,
};
