// const perspectives = [
//   {
//     id: 'surmatut',
//     label: 'Sotasurmat',
//     desc: 'Tietoa vuosina 1914-1922 surmatuista',
//     thumbnail: kalevankangas,
//   },
//   // {
//   //   id: 'collections',
//   //   label: 'Collections',
//   //   desc: ''
//   // },
//   {
//     id: 'taistelut',
//     label: 'Taistelupaikat',
//     desc: 'Taistelupaikkakortistoon perustuva näkymä sisällissodan taisteluista',
//     thumbnail: punainenRintama,
//   },
//   {
//     id: 'manuscripts3',
//     label: 'Näkymä3',
//     desc: 'Tuleva näkymä',
//     thumbnail: tampereVangit,
//   },
// ];


// tabs={{
//   [`${props.rootUrl}/surmatut/table`]: {
//     label: 'lista',
//     value: 0,
//     icon: 'CalendarViewDay',
//   },
//   [`${props.rootUrl}/surmatut/pie`]: {
//     label: 'piirakkakaavio',
//     value: 1,
//     icon: 'PieChart',
//   },
//   [`${props.rootUrl}/surmatut/line`]: {
//     label: 'viivakaavio',
//     value: 2,
//     icon: 'LineChart',
//   }

// tabs={{
//   [`${props.rootUrl}/taistelut/table`]: {
//     label: 'lista',
//     value: 0,
//     icon: 'CalendarViewDay',
//   },
//   [`${props.rootUrl}/taistelut/map`]: {
//     label: 'kartta',
//     value: 1,
//     icon: 'AddLocation',
//   },

export const perspectiveArr = [
  {
    id: 'surmatut',
    label: 'Sotasurmat',
    desc: 'Tietoa vuosina 1914-1922 surmatuista',
    thumbnail: 'kalevankangas',
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
    desc: 'Taistelupaikkakortistoon perustuva näkymä sisällissodan taisteluista',
    thumbnail: 'punainenRintama',
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
    desc: 'Tuleva näkymä',
    thumbnail: 'tampereVangit',
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
