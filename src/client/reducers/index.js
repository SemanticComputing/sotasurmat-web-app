import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import error from './error';
import victims from './sotasurmat/victims';
import victimsFacets from './sotasurmat/victimsFacets';
import battles from './sotasurmat/battles';
import battlesFacets from './sotasurmat/battlesFacets';
import dates from './sotasurmat/dates';
import places from './sotasurmat/places';
import options from './options';
import animation from './animation';
import sources from './sotasurmat/sources';

const reducer = combineReducers({
  victims,
  victimsFacets,
  battles,
  battlesFacets,
  animation,
  options,
  error,
  dates,
  places,
  sources,
  toastr: toastrReducer,
});

export default reducer;
