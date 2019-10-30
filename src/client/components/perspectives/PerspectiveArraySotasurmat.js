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
        id: 'table',
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
        id: 'kartta',
        label: 'Kartta',
        value: 3,
        icon: 'AddLocation',
      },
      {
        id: 'csv',
        label: 'csv',
        value: 4,
        icon: 'Download',
      },
    ],
    instancePageTabs: [
      {
        id: 'table',
        label: 'Henkilön päätiedot',
        value: 0,
        icon: 'CalendarViewDay',
      },
      {
        id: 'extra',
        label: 'Henkilön lisätiedot',
        value: 1,
        icon: 'Add',
      },
      {
        id: 'export',
        label: 'export',
        value: 2,
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
    defaultActiveFacets: new Set(['prefLabel']),
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
