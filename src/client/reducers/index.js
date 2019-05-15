import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import {createResponsiveStateReducer} from 'redux-responsive';
import manuscripts from './manuscripts';
import works from './works';
import events from './events';
import people from './people';
import organizations from './organizations';
import places from './places';
import error from './error';
import manuscriptsFacets from './manuscriptsFacets';
import worksFacets from './worksFacets';
import eventsFacets from './eventsFacets';
import peopleFacets from './peopleFacets';
import organizationsFacets from './organizationsFacets';
import placesFacets from './placesFacets';
import clientSideFacetedSearch from './clientSideFacetedSearch';
import deaths from './deaths';
import deathsFacets from './deathsFacets';

const reducer = combineReducers({
  deaths,
  deathsFacets,
  manuscripts,
  manuscriptsFacets,
  works,
  worksFacets,
  events,
  eventsFacets,
  people,
  peopleFacets,
  organizations,
  organizationsFacets,
  places,
  placesFacets,
  clientSideFacetedSearch,
  error,
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
