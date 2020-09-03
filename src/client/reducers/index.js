import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
// general reducers:
import error from './general/error'
import options from './general/options'
import animation from './general/animation'
import leafletMap from './general/leafletMap'
// portal spefic reducers:
import victims from './sotasurmat/victims'
import victimsFacets from './sotasurmat/victimsFacets'
import victimsFacetsConstrainSelf from './sotasurmat/victimsFacetsConstrainSelf'
import battles from './sotasurmat/battles'
import battlesFacets from './sotasurmat/battlesFacets'
import dates from './sotasurmat/dates'
import sources from './sotasurmat/sources'
import places from './sotasurmat/places'

const reducer = combineReducers({
  victims,
  victimsFacets,
  victimsFacetsConstrainSelf,
  battles,
  battlesFacets,
  dates,
  sources,
  places,
  leafletMap,
  animation,
  options,
  error,
  toastr: toastrReducer
})

export default reducer
