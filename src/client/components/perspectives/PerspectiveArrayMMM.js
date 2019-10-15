import kalevankangas from '../../img/kalevankangas.jpg';
import punainenRintama from '../../img/punainenRintama.jpg';
// import tampereVangit from '../../img/tampereVangit.jpg';
import React from 'react';
import Typography from '@material-ui/core/Typography';

export const perspectiveArr = [
  {
    id: 'surmatut',
    label: 'Sotasurmat',
    instancePageLabel: 'Henkilö',
    mainPageDesc: 'Tietoa vuosina 1914-1922 surmatuista',
    thumbImage: kalevankangas,
    perspectiveDescHeight: 99,
    defaultActiveFacets: new Set(['prefLabel']),
    tabs: [
      {
        id: 'table',
        label: 'table',
        value: 0,
        icon: 'CalendarViewDay',
      },
      {
        id: 'production_places',
        label: 'production places',
        value: 1,
        icon: 'AddLocation',
      },
      {
        id: 'migrations',
        label: 'migrations',
        value: 2,
        icon: 'Redo',
      },
      {
        id: 'export',
        label: 'export',
        value: 3,
        icon: 'Download',
      }
    ],
    instancePageTabs: [
      {
        id: 'table',
        label: 'table',
        value: 0,
        icon: 'CalendarViewDay',
      },
      // {
      //   id: 'map',
      //   label: 'map',
      //   value: 1,
      //   icon: 'AddLocation',
      // },
      {
        id: 'export',
        label: 'export',
        value: 1,
        icon: 'Download',
      },
    ]
  },
  {
    id: 'works',
    label: 'Works',
    instancePageLabel: 'Work',
    mainPageDesc: 'Intellectual content carried out by manuscripts.',
    perspectiveDesc:
      <React.Fragment>
        <Typography paragraph={true}>
          Use this perspective to
        </Typography>
      </React.Fragment>
    ,
    instancePageDesc:
      <React.Fragment>
        <Typography paragraph={true}>
          Use this perspective to
        </Typography>
      </React.Fragment>
    ,
    defaultActiveFacets: new Set(['prefLabel']),
    tabs: [
      {
        id: 'lista',
        label: 'Lista',
        value: 0,
        icon: 'CalendarViewDay',
      },
      {
        id: 'piirakkakaavio',
        label: 'Piirakkakaavio',
        value: 1,
        icon: 'PieChart',
      },
      {
        id: 'viivakaavio',
        label: 'Viivakaavio',
        value: 2,
        icon: 'LineChart',
      },
      {
        id: 'map',
        label: 'map',
        value: 1,
        icon: 'AddLocation',
      },
      {
        id: 'export',
        label: 'export',
        value: 2,
        icon: 'Download',
      }
    ],
    instancePageTabs: [
      {
        id: 'table',
        label: 'table',
        value: 0,
        icon: 'CalendarViewDay',
      },
      {
        id: 'export',
        label: 'export',
        value: 1,
        icon: 'Download',
      },
    ]
  },
  {
    id: 'taistelut',
    label: 'Taistelupaikat',
    instancePageLabel: 'Taistelu',
    mainPageDesc: 'Taistelupaikkakortistoon perustuva näkymä sisällissodan taisteluista',
    thumbImage: punainenRintama,
    perspectiveDescHeight: 99,
    perspectiveDesc:
      <React.Fragment>
        <Typography paragraph={true}>
          Use this perspective to
        </Typography>
      </React.Fragment>
    ,
    instancePageDesc:
      <React.Fragment>
        <Typography paragraph={true}>
          Use this perspective to
        </Typography>
      </React.Fragment>
    ,
    tabs: [
      {
        id: 'lista',
        label: 'Lista',
        value: 0,
        icon: 'CalendarViewDay',
      },
      {
        id: 'kartta',
        label: 'Kartta',
        value: 1,
        icon: 'AddLocation',
      }
    ],
    instancePageTabs: [
      {
        id: 'table',
        label: 'table',
        value: 0,
        icon: 'CalendarViewDay',
      },
      {
        id: 'export',
        label: 'export',
        value: 1,
        icon: 'Download',
      },
    ]
  },
];

export const aboutTheProject =
  <React.Fragment>
    <Typography component="h1" variant="h3" color="textPrimary" gutterBottom>
        About the project
    </Typography>
    <Typography paragraph={true}>
      Mapping Manuscript Migrations (MMM) has been developed with funding from the Trans-Atlantic
      Platform under its Digging into Data Challenge (2017-2019). The partners in this project are
      the University of Oxford, the University of Pennsylvania, Aalto University,
      and the Institut de recherche et d’histoire des textes.
      Funding has been provided by the UK Economic and Social Research Council,
      the Institute of Museum and Library Services, the Academy of Finland, and the
      Agence nationale de la recherche.
    </Typography>
    <Typography paragraph={true}>
      MMM is intended to enable large-scale exploration of data relating to the history and provenance
      of (primarily) Western European medieval and early modern manuscripts.
    </Typography>
    <Typography component="h1" variant="h4" color="textPrimary" gutterBottom>
        Data
    </Typography>
    <Typography paragraph={true}>
      MMM combines data from three specialist databases:
      <ul>
        <li><a href="https://sdbm.library.upenn.edu/" target='_blank' rel='noopener noreferrer'>
          Schoenberg Database of Manuscripts
        </a></li>
        <li><a href="http://bibale.irht.cnrs.fr/" target='_blank' rel='noopener noreferrer'>
          Bibale
        </a></li>
        <li><a href="https://medieval.bodleian.ox.ac.uk/" target='_blank' rel='noopener noreferrer'>
          Medieval Manuscripts in Oxford Libraries
        </a></li>
      </ul>
    </Typography>
    <Typography paragraph={true}>
      The data have been combined using a unified Data Model based on the CIDOC-CRM and FRBRoo
      ontologies. A diagram of the Data Model can be seen <a href="https://drive.google.com/open?id=1uyTA8Prwtts5g13eor48tKHk_g63NaaG" target='_blank' rel='noopener noreferrer'>
      here</a>. The data have not been corrected or amended in any way. If you notice an error in the data,
      please report it to the custodians of the original database.
    </Typography>
    <Typography component="h1" variant="h4" color="textPrimary" gutterBottom>
        Features
    </Typography>
    <Typography paragraph={true}>
      The MMM interface enables you to browse and search through most of the data assembled by the project
      from the three source databases. If you want to inspect the full raw data for any individual
      manuscript or other entity, please click on the “Open in Linked Data browser” button on
      the “Export” tab of the landing-page for that entity.
    </Typography>
    <Typography paragraph={true}>
      The MMM interface also provides map-based visualizations for a selection of the data relating to
      Manuscripts, Actors, and Places. The data resulting from a search or a filtered browse can be
      exported in the form of a CSV file. Click on the “Export” option and then on the button
      “Open result table SPARQL query in yasgui.org”.
    </Typography>
    <Typography paragraph={true}>
      If you want to search all the underlying data using the SPARQL query language, the endpoint is
      available here: <a href="http://ldf.fi/mmm-cidoc/sparql" target='_blank' rel='noopener noreferrer'>
      http://ldf.fi/mmm-cidoc/sparql</a>.
    </Typography>
    <Typography component="h1" variant="h4" color="textPrimary" gutterBottom>
        Data Reuse
    </Typography>
    <Typography paragraph={true}>
      The MMM data are made available for reuse under a <a href="https://creativecommons.org/licenses/by-nc/4.0/"
        target='_blank' rel='noopener noreferrer'>
      CC-BY-NC 4.0 licence</a>.
    </Typography>
    <Typography paragraph={true}>
      You must give appropriate credit, provide a link to the license, and indicate if changes
      were made. You may do so in any reasonable manner, but not in any way that suggests the
      MMM project or its partner institutions endorses you or your use.
    </Typography>
    <Typography paragraph={true}>
      You may not use the data for commercial purposes.
    </Typography>
    <Typography component="h1" variant="h4" color="textPrimary" gutterBottom>
        More Information
    </Typography>
    <Typography paragraph={true}>
      The MMM project has its own  <a href="https://github.com/mapping-manuscript-migrations"
        target='_blank' rel='noopener noreferrer'>
      GitHub site</a>.
    </Typography>
    <Typography paragraph={true}>
      Here you will find documentation, scripts and programs, and samples of the raw data.
    </Typography>
  </React.Fragment>;

export const instructions =
  <React.Fragment>
    <Typography component="h1" variant="h3" color="textPrimary" gutterBottom>
        Instructions
    </Typography>
  </React.Fragment>;
