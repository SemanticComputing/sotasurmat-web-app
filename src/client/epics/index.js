import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  mergeMap,
  switchMap,
  map,
  withLatestFrom,
  debounceTime,
  catchError
} from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import intl from 'react-intl-universal';
import localeEN from '../translations/sotasurmat/localeEN';
import localeFI from '../translations/sotasurmat/localeFI';
import localeSV from '../translations/sotasurmat/localeSV';
import { stateToUrl } from '../helpers/helpers';
import {
  FETCH_RESULT_COUNT,
  FETCH_RESULT_COUNT_FAILED,
  FETCH_PAGINATED_RESULTS,
  FETCH_PAGINATED_RESULTS_FAILED,
  FETCH_RESULTS,
  FETCH_RESULTS_CLIENT_SIDE,
  FETCH_RESULTS_FAILED,
  FETCH_BY_URI,
  FETCH_BY_URI_FAILED,
  FETCH_FACET,
  FETCH_FACET_FAILED,
  LOAD_LOCALES,
  updateResultCount,
  updatePaginatedResults,
  updateResults,
  updateInstance,
  updateFacetValues,
  updateLocale
} from '../actions';
import { rootUrl } from '../configs/config';

// set port if running on localhost with NODE_ENV = 'production'
let port = location.hostname === 'localhost' || location.hostname === '127.0.0.1'
  ? `:8080`
  : '';

export const apiUrl = (process.env.NODE_ENV === 'development')
  ? `http://localhost:3001${rootUrl}/api/`
  : `${location.protocol}//${location.hostname}${port}${rootUrl}/api/`;

const backendErrorText = `Ei pystytty yhdistämään tietokantaan. Kokeile myöhemmin uudestaan. Cannot currently connect to the database. Please try again later.`;

export const availableLocales = {
  'fi': localeFI,
  'en': localeEN,
  //'sv': localeSV
};

const fetchPaginatedResultsEpic = (action$, state$) => action$.pipe(
  ofType(FETCH_PAGINATED_RESULTS),
  withLatestFrom(state$),
  mergeMap(([action, state]) => {
    const { resultClass, facetClass, sortBy } = action;
    const { page, pagesize, sortDirection } = state[resultClass];
    const params = stateToUrl({
      facets: state[`${facetClass}Facets`].facets,
      facetClass: null,
      page: page,
      pagesize: pagesize,
      sortBy: sortBy,
      sortDirection: sortDirection,
    });
    const requestUrl = `${apiUrl}${resultClass}/paginated?${params}`;
    // https://rxjs-dev.firebaseapp.com/api/ajax/ajax
    return ajax.getJSON(requestUrl).pipe(
      map(response => updatePaginatedResults({
        resultClass: response.resultClass,
        page: response.page,
        pagesize: response.pagesize,
        data: response.data,
        sparqlQuery: response.sparqlQuery
      })),
      // https://redux-observable.js.org/docs/recipes/ErrorHandling.html
      catchError(error => of({
        type: FETCH_PAGINATED_RESULTS_FAILED,
        resultClass: resultClass,
        error: error,
        message: {
          text: backendErrorText,
          title: 'Error'
        }
      }))
    );
  })
);

const fetchResultsEpic = (action$, state$) => action$.pipe(
  ofType(FETCH_RESULTS),
  withLatestFrom(state$),
  mergeMap(([action, state]) => {
    const { resultClass, facetClass } = action;
    const params = stateToUrl({
      facets: state[`${facetClass}Facets`].facets,
      facetClass: facetClass,
    });
    const requestUrl = `${apiUrl}${resultClass}/all?${params}`;
    return ajax.getJSON(requestUrl).pipe(
      map(response => updateResults({
        resultClass: resultClass,
        data: response.data,
        sparqlQuery: response.sparqlQuery
      })),
      catchError(error => of({
        type: FETCH_RESULTS_FAILED,
        resultClass: resultClass,
        error: error,
        message: {
          text: backendErrorText,
          title: 'Error'
        }
      }))
    );

  })
);

const fetchResultCountEpic = (action$, state$) => action$.pipe(
  ofType(FETCH_RESULT_COUNT),
  withLatestFrom(state$),
  mergeMap(([action, state]) => {
    const { resultClass, facetClass } = action;
    const params = stateToUrl({
      facets: facetClass == null ? null : state[`${facetClass}Facets`].facets,
      facetClass: facetClass,
    });
    const requestUrl = `${apiUrl}${resultClass}/count?${params}`;
    return ajax.getJSON(requestUrl).pipe(
      map(response => updateResultCount({
        resultClass: response.resultClass,
        data: response.data,
        sparqlQuery: response.sparqlQuery
      })),
      catchError(error => of({
        type: FETCH_RESULT_COUNT_FAILED,
        resultClass: resultClass,
        error: error,
        message: {
          text: backendErrorText,
          title: 'Error'
        }
      }))
    );
  })
);

const fetchResultsClientSideEpic = (action$, state$) => action$.pipe(
  ofType(FETCH_RESULTS_CLIENT_SIDE),
  withLatestFrom(state$),
  debounceTime(500),
  switchMap(([action, state]) => {
    const searchUrl = apiUrl + 'search';
    let requestUrl = '';
    if (action.jenaIndex === 'text') {
      requestUrl = `${searchUrl}?q=${action.query}`;
    } else if (action.jenaIndex === 'spatial') {
      const { latMin, longMin, latMax, longMax } = state.map;
      requestUrl = `${searchUrl}?latMin=${latMin}&longMin=${longMin}&latMax=${latMax}&longMax=${longMax}`;
    }
    return ajax.getJSON(requestUrl).pipe(
      map(response => updateResults({
        resultClass: 'all',
        data: response.data,
        sparqlQuery: response.sparqlQuery,
        query: action.query,
        jenaIndex: action.jenaIndex
      })),
      catchError(error => of({
        type: FETCH_RESULTS_FAILED,
        resultClass: 'all',
        error: error,
        message: {
          text: backendErrorText,
          title: 'Error'
        }
      }))
    );
  })
);

const fetchByURIEpic = (action$, state$) => action$.pipe(
  ofType(FETCH_BY_URI),
  withLatestFrom(state$),
  mergeMap(([action, state]) => {
    const { resultClass, facetClass, uri } = action;
    const params = stateToUrl({
      facets: facetClass == null ? null : state[`${facetClass}Facets`].facets,
      facetClass: facetClass,
    });
    const requestUrl = `${apiUrl}${resultClass}/instance/${encodeURIComponent(uri)}?${params}`;
    return ajax.getJSON(requestUrl).pipe(
      map(response => updateInstance({
        resultClass: resultClass,
        data: response.data,
        sparqlQuery: response.sparqlQuery
      })),
      catchError(error => of({
        type: FETCH_BY_URI_FAILED,
        resultClass: resultClass,
        error: error,
        message: {
          text: backendErrorText,
          title: 'Error'
        }
      }))
    );
  })
);

const fetchFacetEpic = (action$, state$) => action$.pipe(
  ofType(FETCH_FACET),
  withLatestFrom(state$),
  mergeMap(([action, state]) => {
    const { facetClass, facetID } = action;
    const facets = state[`${facetClass}Facets`].facets;
    const facet = facets[facetID];
    const { sortBy, sortDirection } = facet;
    const params = stateToUrl({
      facets: facets,
      sortBy: sortBy,
      sortDirection: sortDirection,
    });
    const requestUrl = `${apiUrl}${action.facetClass}/facet/${facetID}?${params}`;
    return ajax.getJSON(requestUrl).pipe(
      map(res => updateFacetValues({
        facetClass: facetClass,
        id: facetID,
        data: res.data || [],
        flatData: res.flatData || [],
        sparqlQuery: res.sparqlQuery
      })),
      catchError(error => of({
        type: FETCH_FACET_FAILED,
        resultClass: action.resultClass,
        id: action.id,
        error: error,
        message: {
          text: backendErrorText,
          title: 'Error'
        }
      }))
    );
  })
);

const loadLocalesEpic = action$ => action$.pipe(
  ofType(LOAD_LOCALES),
  // https://thecodebarbarian.com/a-beginners-guide-to-redux-observable
  mergeMap(async action => {
    await intl.init({
      currentLocale: action.currentLanguage,
      locales: availableLocales
    });
    return updateLocale({ language: action.currentLanguage });
  })
);

const rootEpic = combineEpics(
  fetchPaginatedResultsEpic,
  fetchResultsEpic,
  fetchResultCountEpic,
  fetchResultsClientSideEpic,
  fetchByURIEpic,
  fetchFacetEpic,
  loadLocalesEpic
);

export default rootEpic;
