import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import {createResponsiveStateReducer} from 'redux-responsive';
import error from './error';
import clientSideFacetedSearch from './clientSideFacetedSearch';
import deaths from './deaths';
import deathsFacets from './deathsFacets';
import battles from './battles';
import battlesFacets from './battlesFacets';
import dates from './dates';

const reducer = combineReducers({
  deaths,
  deathsFacets,
  battles,
  battlesFacets,
  clientSideFacetedSearch,
  error,
  dates,
  toastr: toastrReducer,
  browser: createResponsiveStateReducer({
    extraSmall: 500,
    small: 700,
    medium: 1000,
    large: 1400,
    extraLarge: 1600,
  }),
});

export default reducer;
