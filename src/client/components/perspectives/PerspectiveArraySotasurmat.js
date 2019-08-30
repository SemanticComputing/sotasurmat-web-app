import kalevankangas from '../../img/kalevankangas.jpg';
import punainenRintama from '../../img/punainenRintama.jpg';
import tampereVangit from '../../img/tampereVangit.jpg';

export const perspectiveArr = [
  {
    id: 'surmatut',
    label: 'Sotasurmat',
    mainPageDesc: 'Tietoa vuosina 1914-1922 surmatuista',
    thumbImage: kalevankangas,
    defaultActiveFacets: new Set(['prefLabel']),
    perspectiveDescHeight: 99,
    perspectiveDesc: `
      Kuvaus
    `,
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
    ]
  },
  {
    id: 'taistelut',
    label: 'Taistelupaikat',
    mainPageDesc: 'Taistelupaikkakortistoon perustuva näkymä sisällissodan taisteluista',
    thumbImage: punainenRintama,
    defaultActiveFacets: new Set(['prefLabel']),
    perspectiveDescHeight: 99,
    perspectiveDesc: `
      Kuvaus
    `,
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
    ]
  },
  {
    id: 'tuleva',
    label: 'Tuleva',
    mainPageDesc: 'Tuleva näkymä',
    thumbImage: tampereVangit,
    defaultActiveFacets: new Set(['prefLabel']),
    perspectiveDescHeight: 99,
    perspectiveDesc: `
      Kuvaus
    `,
    tabs: [
      {
        id: 'table',
        label: 'table',
        value: 0,
        icon: 'CalendarViewDay',
      },
      {
        id: 'map',
        label: 'map',
        value: 1,
        icon: 'AddLocation',
      },
    ]
  },
];
