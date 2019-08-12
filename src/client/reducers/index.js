import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import {createResponsiveStateReducer} from 'redux-responsive';
import error from './error';
import clientSideFacetedSearch from './clientSideFacetedSearch';
import surmatut from './surmatut';
import surmatutFacets from './surmatutFacets';
import taistelut from './taistelut';
import taistelutFacets from './taistelutFacets';
import dates from './dates';

const reducer = combineReducers({
  surmatut,
  surmatutFacets,
  taistelut,
  taistelutFacets,
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
