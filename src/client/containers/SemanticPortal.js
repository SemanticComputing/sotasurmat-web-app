import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';
import { Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TopBar from '../components/main_layout/TopBar';
import Main from '../components/main_layout/Main';
import Footer from '../components/main_layout/Footer';
import Message from '../components/main_layout/Message';
import FacetBar from '../components/facet_bar/FacetBar';
// import All from '../components/perspectives/All';
import Victims from '../components/perspectives/sotasurmat/Victims';
import Battles from '../components/perspectives/sotasurmat/Battles';
import InstanceHomePage from '../components/main_layout/InstanceHomePage';
import VictimHomePage from '../components/perspectives/sotasurmat/VictimHomePage';
import FeedbackPage from '../components/main_layout/FeedbackPage';
import TextPage from '../components/main_layout/TextPage';
// import Typography from '@material-ui/core/Typography';
import { perspectiveConfig } from '../configs/sotasurmat/PerspectiveConfig';
import { perspectiveConfigOnlyInfoPages } from '../configs/sotasurmat/PerspectiveConfigOnlyInfoPages';
import InfoHeader from '../components/main_layout/InfoHeader';
import { has } from 'lodash';
import {
  fetchResultCount,
  fetchPaginatedResults,
  fetchResults,
  fetchResultsClientSide,
  clearResults,
  fetchByURI,
  fetchFacet,
  sortResults,
  updateFacetOption,
  updatePage,
  updateRowsPerPage,
  showError,
  updatePerspectiveHeaderExpanded,
  loadLocales,
  animateMap
} from '../actions';
import { rootUrl } from '../configs/config';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import 'moment/locale/fi';
import { defaultLocale } from '../index.js';

moment.locale(defaultLocale);

const styles = theme => ({
  root: {
    flexGrow: 1,
    // Set app height for different screen sizes
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      height: '100%',
    },
    /* Background color of the app.
       In order to use both 'auto' and '100%' heights, bg-color
       needs to be defined also in index.html (for #app and #root elements)
    */
    backgroundColor: '#bdbdbd'
  },
  rootMainPage: {
    flexGrow: 1,
    height: '100%',
  },
  flex: {
    flexGrow: 1,
  },
  appFrame: {
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  mainContainer: {
    height: 'auto',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      height: 'calc(100% - 80px)', // 100% - app bar - padding
    },
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      marginTop: 56, // app bar
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: 64, // app bar
    }
  },
  mainContainerSotasurmat: {
    height: '100%',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      height: 'calc(100% - 126px)', // 100% - app bar - footer
    },
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      marginTop: 56, // app bar
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: 64, // app bar
    },
    backgroundColor: '#ffffff'
  },
  perspectiveContainer: {
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      height: 'calc(100% - 130px)',
    },
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      marginTop: 133, // app bar + header
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: 130, // app bar + header
    }
  },
  perspectiveContainerHeaderExpanded: {
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      height: 'calc(100% - 316px)',
    },
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      marginTop: 308, // app bar + header
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: 316, // app bar + header
    }
  },
  // perspective container is divided into two columns:
  facetBarContainer: {
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      height: '100%',
    },
    overflow: 'auto',
    paddingTop: '0px !important',
    paddingBottom: '0px !important'
  },
  resultsContainer: {
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      height: '100%',
    },
    paddingTop: '0px !important',
    paddingBottom: '0px !important',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1)
    }
  },
  instancePageContainer: {
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      height: 'calc(100% - 170px)',
    },
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      marginTop: 164,
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: 170,
    }
  },
  instancePageContainerHeaderExpanded: {
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      height: 'calc(100% - 354px)',
    },
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      marginTop: 348,
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: 354,
    }
  },
  instancePageContent: {
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      height: '100%',
    },
    paddingTop: '0px !important',
    paddingBottom: '0px !important'
  }
});

let SemanticPortal = props => {
  const { classes, /* browser */ error } = props;

  const renderPerspective = (perspective, routeProps) => {
    let perspectiveElement = null;
    switch(perspective.id) {
      case 'victims':
        perspectiveElement =
        <Victims
          rootUrl={rootUrl}
          dates={props.dates}
          victims={props.victims}
          places={props.places}
          facetData={props.victimsFacets}
          fetchPaginatedResults={props.fetchPaginatedResults}
          fetchResults={props.fetchResults}
          fetchByURI={props.fetchByURI}
          updatePage={props.updatePage}
          updateFacetOption={props.updateFacetOption}
          sortResults={props.sortResults}
          routeProps={routeProps}
          fetchFacet={props.fetchFacet}
          resultCount={props.victims.resultCount}
          updateRowsPerPage={props.updateRowsPerPage}
          perspective={perspective}
        />;
        break;
      case 'battles':
        perspectiveElement =
        <Battles
          rootUrl={rootUrl}
          dates={props.dates}
          battles={props.battles}
          facetData={props.battlesFacets}
          fetchPaginatedResults={props.fetchPaginatedResults}
          fetchResults={props.fetchResults}
          fetchByURI={props.fetchByURI}
          updatePage={props.updatePage}
          updateFacetOption={props.updateFacetOption}
          sortResults={props.sortResults}
          routeProps={routeProps}
          fetchFacet={props.fetchFacet}
          resultCount={props.battles.resultCount}
          updateRowsPerPage={props.updateRowsPerPage}
          perspective={perspective}
          animationValue={props.animationValue}
          animateMap={props.animateMap}
        />;
        break;
      default:
        perspectiveElement = <div></div>;
        break;
    }
    return perspectiveElement;
  };
  return (
    <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale={props.options.currentLocale}>
      <div className={props.location.pathname === rootUrl ? classes.rootMainPage : classes.root}>
        <div className={classes.appFrame}>
          <Message error={error} />
          <React.Fragment>
            <TopBar
              rootUrl={rootUrl}
              fetchResultsClientSide={props.fetchResultsClientSide}
              clearResults={props.clearResults}
              perspectives={perspectiveConfig}
              currentLocale={props.options.currentLocale}
              availableLocales={props.options.availableLocales}
              loadLocales={props.loadLocales}
            />
            <Route
              exact path={`${rootUrl}/`}
              render={() =>
                <Grid container className={classes.mainContainerSotasurmat}>
                  <Main
                    perspectives={perspectiveConfig}
                    rootUrl={rootUrl}
                  />
                  <Footer />
                </Grid>
              }
            />
            { /* routes for perspectives that don't have an external url */ }
            {perspectiveConfig.map(perspective => {
              if (!has(perspective, 'externalUrl')) {
                return(
                  <React.Fragment key={perspective.id}>
                    <Route
                      path={`${rootUrl}/${perspective.id}/faceted-search`}
                      render={routeProps => {
                        return (
                          <React.Fragment>
                            <InfoHeader
                              resultClass={perspective.id}
                              pageType='facetResults'
                              expanded={props[perspective.id].facetedSearchHeaderExpanded}
                              updateExpanded={props.updatePerspectiveHeaderExpanded}
                              descriptionHeight={perspective.perspectiveDescHeight}
                            />
                            <Grid container spacing={1} className={props[perspective.id].facetedSearchHeaderExpanded
                              ? classes.perspectiveContainerHeaderExpanded
                              : classes.perspectiveContainer
                            }>
                              <Grid item xs={12} md={3} className={classes.facetBarContainer}>
                                <FacetBar
                                  facetData={props[`${perspective.id}Facets`]}
                                  facetClass={perspective.id}
                                  resultClass={perspective.id}
                                  fetchingResultCount={props[perspective.id].fetchingResultCount}
                                  resultCount={props[perspective.id].resultCount}
                                  fetchFacet={props.fetchFacet}
                                  fetchResultCount={props.fetchResultCount}
                                  updateFacetOption={props.updateFacetOption}
                                  defaultActiveFacets={perspective.defaultActiveFacets}
                                />
                              </Grid>
                              <Grid item xs={12} md={9} className={classes.resultsContainer}>
                                {renderPerspective(perspective, routeProps)}
                              </Grid>
                            </Grid>
                          </React.Fragment>
                        );
                      }}
                    />
                    <Route
                      path={`${rootUrl}/${perspective.id}/page/:id`}
                      render={routeProps => {
                        return (
                          <React.Fragment>
                            <InfoHeader
                              resultClass={perspective.id}
                              pageType='instancePage'
                              instanceData={props[perspective.id].instance}
                              expanded={props[perspective.id].instancePageHeaderExpanded}
                              updateExpanded={props.updatePerspectiveHeaderExpanded}
                              descriptionHeight={perspective.perspectiveDescHeight}
                            />
                            <Grid container spacing={1} className={props[perspective.id].instancePageHeaderExpanded
                              ? classes.instancePageContainerHeaderExpanded
                              : classes.instancePageContainer
                            }>
                              <Grid item xs={12} className={classes.instancePageContent}>
                                {perspective.id == 'victims' &&
                                <VictimHomePage
                                  rootUrl={rootUrl}
                                  fetchByURI={props.fetchByURI}
                                  resultClass={perspective.id}
                                  tableRows={props[perspective.id].properties}
                                  tabs={perspective.instancePageTabs}
                                  data={props[perspective.id].instance}
                                  extras={props[perspective.id].instanceExtra}
                                  sparqlQuery={props[perspective.id].instanceSparqlQuery}
                                  isLoading={props[perspective.id].fetching}
                                  routeProps={routeProps}
                                />
                                }
                                {perspective.id != 'victims' &&
                                <InstanceHomePage
                                  rootUrl={rootUrl}
                                  fetchByURI={props.fetchByURI}
                                  resultClass={perspective.id}
                                  properties={props[perspective.id].properties}
                                  tabs={perspective.instancePageTabs}
                                  data={props[perspective.id].instance}
                                  sparqlQuery={props[perspective.id].instanceSparqlQuery}
                                  isLoading={props[perspective.id].fetching}
                                  routeProps={routeProps}
                                />
                                }
                              </Grid>
                            </Grid>
                          </React.Fragment>
                        );
                      }}
                    />
                  </React.Fragment>
                );
              }
            })}
            { /* create routes for classes that have only info pages and no perspective */}
            {perspectiveConfigOnlyInfoPages.map(perspective =>
              <Route
                key={perspective.id}
                path={`/${perspective.id}/page/:id`}
                render={routeProps => {
                  return (
                    <React.Fragment>
                      <InfoHeader
                        resultClass={perspective.id}
                        pageType='instancePage'
                        instanceData={props[perspective.id].instance}
                        expanded={props[perspective.id].instancePageHeaderExpanded}
                        updateExpanded={props.updatePerspectiveHeaderExpanded}
                        descriptionHeight={perspective.perspectiveDescHeight}
                      />
                      <Grid container spacing={1} className={props[perspective.id].instancePageHeaderExpanded
                        ? classes.instancePageContainerHeaderExpanded
                        : classes.instancePageContainer
                      }>
                        <Grid item xs={12} className={classes.instancePageContent}>
                          <InstanceHomePage
                            fetchByURI={props.fetchByURI}
                            resultClass={perspective.id}
                            properties={props[perspective.id].properties}
                            tabs={perspective.instancePageTabs}
                            data={props[perspective.id].instance}
                            sparqlQuery={props[perspective.id].instanceSparqlQuery}
                            isLoading={props[perspective.id].fetching}
                            routeProps={routeProps}
                          />
                        </Grid>
                      </Grid>
                    </React.Fragment>
                  );
                }}
              />
            )}
            { /* create routes for info buttons */ }
            <Route
              path={`${rootUrl}/feedback`}
              render={() =>
                <div className={classes.mainContainer}>
                  <FeedbackPage />
                  {/*<TextPage>{intl.getHTML('feedback')}</TextPage> */}
                </div>
              }
            />
            <Route
              path={`${rootUrl}/instructions`}
              render={() =>
                <div className={classes.mainContainer}>
                  <TextPage>{intl.getHTML('instructions')}</TextPage>
                </div>
              }
            />
          </React.Fragment>
        </div>
      </div>
    </MuiPickersUtilsProvider>
  );
};

// <img className={classes.secoLogo} src='img/logos/seco-logo-white-no-background-small.png' alt='SeCo logo'/>
// <img className={classes.heldigLogo} src='img/logos/heldig-logo-small.png' alt='HELDIG logo'/>
// <img className={classes.uhLogo} src='img/logos/university-of-helsinki-logo-white-no-background-small.png' alt='University of Helsinki logo'/>



const mapStateToProps = state => {
  return {
    places: state.places,
    dates: state.dates,
    victims: state.victims,
    victimsFacets: state.victimsFacets,
    battles: state.battles,
    battlesFacets: state.battlesFacets,
    animationValue: state.animation.value,
    options: state.options,
    error: state.error,
  };
};

const mapDispatchToProps = ({
  fetchResultCount,
  fetchPaginatedResults,
  fetchResults,
  fetchResultsClientSide,
  fetchByURI,
  fetchFacet,
  sortResults,
  clearResults,
  updateFacetOption,
  updatePage,
  updateRowsPerPage,
  showError,
  updatePerspectiveHeaderExpanded,
  loadLocales,
  animateMap
});

SemanticPortal.propTypes = {
  places: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  // browser: PropTypes.object.isRequired,
  victims: PropTypes.object.isRequired,
  battlesFacets: PropTypes.object.isRequired,
  battles: PropTypes.object.isRequired,
  victimsFacets: PropTypes.object.isRequired,
  animationValue: PropTypes.array.isRequired,
  fetchResults: PropTypes.func.isRequired,
  fetchResultCount: PropTypes.func.isRequired,
  fetchResultsClientSide: PropTypes.func.isRequired,
  fetchPaginatedResults: PropTypes.func.isRequired,
  fetchByURI: PropTypes.func.isRequired,
  sortResults: PropTypes.func.isRequired,
  clearResults: PropTypes.func.isRequired,
  updatePage: PropTypes.func.isRequired,
  updateRowsPerPage: PropTypes.func.isRequired,
  updateFacetOption: PropTypes.func.isRequired,
  fetchFacet: PropTypes.func.isRequired,
  showError: PropTypes.func.isRequired,
  dates: PropTypes.object.isRequired,
  updatePerspectiveHeaderExpanded: PropTypes.func.isRequired,
  loadLocales: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  animateMap: PropTypes.func.isRequired
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withWidth(),
  withStyles(styles, {withTheme: true}),
)(SemanticPortal);
