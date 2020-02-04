import kalevankangas from '../../img/kalevankangas.jpg'
import punainenRintama from '../../img/punainenRintama.jpg'
import React from 'react'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import AddLocationIcon from '@material-ui/icons/AddLocation'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
// import RedoIcon from '@material-ui/icons/Redo';
// import PersonIcon from '@material-ui/icons/Person';
import PieChartIcon from '@material-ui/icons/PieChart'
import LineChartIcon from '@material-ui/icons/ShowChart'
import AddIcon from '@material-ui/icons/Add'

export const perspectiveConfig = [
  {
    id: 'victims',
    thumbImage: kalevankangas,
    perspectiveDescHeight: 160,
    defaultActiveFacets: new Set(['prefLabel', 'familyName']),
    tabs: [
      {
        id: 'table',
        value: 0,
        icon: <CalendarViewDayIcon />
      },
      {
        id: 'pie',
        label: 'Piirakkakaavio',
        value: 1,
        icon: <PieChartIcon />
      },
      {
        id: 'line',
        value: 2,
        icon: <LineChartIcon />
      },
      {
        id: 'map',
        value: 3,
        icon: <AddLocationIcon />
      },
      {
        id: 'csv',
        value: 4,
        icon: <CloudDownloadIcon />
      }
    ],
    instancePageTabs: [
      {
        id: 'table',
        value: 0,
        icon: <CalendarViewDayIcon />
      },
      {
        id: 'extra',
        value: 1,
        icon: <AddIcon />
      }
    ]
  },
  {
    id: 'battles',
    thumbImage: punainenRintama,
    perspectiveDescHeight: 160,
    defaultActiveFacets: new Set(['prefLabel']),
    tabs: [
      {
        id: 'table',
        value: 0,
        icon: <CalendarViewDayIcon />
      },
      {
        id: 'map',
        value: 1,
        icon: <AddLocationIcon />
      },
      {
        id: 'animation',
        value: 2,
        icon: <PlayArrowIcon />
      }
    ],
    instancePageTabs: [
      {
        id: 'table',
        value: 0,
        icon: <CalendarViewDayIcon />
      },
      {
        id: 'export',
        value: 1,
        icon: <CloudDownloadIcon />
      }
    ]
  }
]
