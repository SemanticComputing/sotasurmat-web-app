import { victimsPerspectiveConfig } from './perspective_configs/VictimsPerspectiveConfig'
import { battlesPerspectiveConfig } from './perspective_configs/BattlesPerspectiveConfig'
import {
  birthYearsQuery,
  ageQuery, deathDateQuery,
  csvDeathsQuery,
  extrasTemplate,
  extrasTypeList,
  deathsByMunicipalityQuery,
  deathPlacesQuery,
  deathsAt
} from './sparql_queries/SparqlQueriesVictims'
import {
  battleProperties,
  battlePlacesQuery,
  battlePlacesAnimationQuery
} from './sparql_queries/SparqlQueriesBattles'
import {
  sourceProperties
} from './sparql_queries/SparqlQueriesSources'
import {
  placePropertiesInfoWindow,
  allPlacesQuery
} from './sparql_queries/SparqlQueriesPlaces'

import { makeObjectList } from '../SparqlObjectMapper'
import {
  mapPlaces,
  mapAgeCount,
  mapBirthYearCount,
  mapCountGroups
} from '../Mappers'

export const rootUrl = ''

export const backendSearchConfig = {
  rootUrl: '',
  victims: victimsPerspectiveConfig,
  battles: battlesPerspectiveConfig,
  ageCount: {
    perspectiveID: 'victims', // use endpoint config from victims
    q: ageQuery,
    filterTarget: 'id',
    resultMapper: mapAgeCount
  },
  birthYearCount: {
    perspectiveID: 'victims', // use endpoint config from victims
    q: birthYearsQuery,
    filterTarget: 'id',
    resultMapper: mapBirthYearCount
  },
  deathDateCount: {
    perspectiveID: 'victims', // use endpoint config from victims
    q: deathDateQuery,
    filterTarget: 'id',
    resultMapper: mapCountGroups
  },
  deathPlaces: {
    perspectiveID: 'victims', // use endpoint config from victims
    q: deathsByMunicipalityQuery,
    filterTarget: 'deathRecord',
    resultMapper: mapPlaces,
    instance: {
      properties: placePropertiesInfoWindow,
      relatedInstances: deathsAt
    }
  },
  battlePlaces: {
    perspectiveID: 'victims', // use endpoint config from victims
    q: battlePlacesQuery,
    filterTarget: 'id',
    resultMapper: makeObjectList,
    instance: {
      properties: battleProperties,
      relatedInstances: ''
    }
  },
  battlePlacesAnimation: {
    perspectiveID: 'victims', // use endpoint config from victims
    q: battlePlacesAnimationQuery,
    filterTarget: 'id',
    resultMapper: makeObjectList
  },
  csvDeaths: {
    perspectiveID: 'victims', // use endpoint config from victims
    q: csvDeathsQuery,
    filterTarget: 'id'
  }
}
