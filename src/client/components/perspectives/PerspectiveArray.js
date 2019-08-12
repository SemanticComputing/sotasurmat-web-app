
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
