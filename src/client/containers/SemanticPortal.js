import React from 'react';
import PropTypes from 'prop-types';
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
//import Manuscripts from '../components/perspectives/Manuscripts';
//import Works from '../components/perspectives/Works';
//import Events from '../components/perspectives/Events';
//import Places from '../components//perspectives/Places';
//import Actors from '../components//perspectives/Actors';
import All from '../components/perspectives/All';
import Surmatut from '../components/perspectives/Surmatut';
import Taistelut from '../components/perspectives/Taistelut';
import InstanceHomePage from '../components/main_layout/InstanceHomePage';
//import FeedbackPage from '../components/main_layout/FeedbackPage';
import { perspectiveArr } from '../components/perspectives/PerspectiveArraySotasurmat';
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
  showError
} from '../actions';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      height: '100%',
    },
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
    minWidth: 300,
    //minHeight: 700
  },
  mainContainer: {
    height: 'auto',
    backgroundColor: '#ffffff',
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      marginTop: 56,
      height: 'calc(100% - 56px)',
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)',
    },
    //backgroundImage: `url(${punainenRintama})`,
    //backgroundPosition: 'center',
    //backgroundRepeat: 'no-repeat',
    //backgroundSize: 'cover'
  },
  // main container is divided into two columns:
  facetBarContainer: {
    height: '100%',
    overflow: 'auto',
    paddingTop: '0px !important',
    paddingBottom: '0px !important'
  },
  resultsContainer: {
    height: '100%',
    overflow: 'auto',
    paddingTop: '0px !important',
    paddingBottom: '0px !important',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1)
    },
  },
});

let SemanticPortal = (props) => {
  const { classes, /* browser */ error } = props;

  const rootUrl = '/sotasurmat';

  const renderPerspective = (perspective, routeProps) => {
    let perspectiveElement = null;
    switch(perspective.id) {
      case 'surmatut':
        perspectiveElement =
        <Surmatut
          rootUrl={rootUrl}
          dates={props.dates}
          surmatut={props.surmatut}
          facetData={props.surmatutFacets}
          fetchPaginatedResults={props.fetchPaginatedResults}
          fetchResults={props.fetchResults}
          fetchByURI={props.fetchByURI}
          updatePage={props.updatePage}
          updateFacetOption={props.updateFacetOption}
          sortResults={props.sortResults}
          routeProps={routeProps}
          fetchFacet={props.fetchFacet}
          resultCount={props.surmatut.resultCount}
          updateRowsPerPage={props.updateRowsPerPage}
          perspective={perspective}
        />;
        break;
      case 'taistelut':
        perspectiveElement =
        <Taistelut
          rootUrl={rootUrl}
          dates={props.dates}
          taistelut={props.taistelut}
          facetData={props.taistelutFacets}
          fetchPaginatedResults={props.fetchPaginatedResults}
          fetchResults={props.fetchResults}
          fetchByURI={props.fetchByURI}
          updatePage={props.updatePage}
          updateFacetOption={props.updateFacetOption}
          sortResults={props.sortResults}
          routeProps={routeProps}
          fetchFacet={props.fetchFacet}
          resultCount={props.taistelut.resultCount}
          updateRowsPerPage={props.updateRowsPerPage}
          perspective={perspective}
        />;
        break;
      default:
        perspectiveElement = <div></div>;
        break;
    }
    return perspectiveElement;
  };

  // ${rootUrl}
  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <Message error={error} />
        <React.Fragment>
          <TopBar
            rootUrl={rootUrl}
            search={props.clientSideFacetedSearch}
            fetchResultsClientSide={props.fetchResultsClientSide}
            clearResults={props.clearResults}
            perspectives={perspectiveArr}
          />
          <Grid container spacing={1} className={classes.mainContainer}>
            <Route
              exact path={rootUrl}
              render={() =>
                <React.Fragment>
                  <Main
                    perspectives={perspectiveArr}
                    rootUrl={rootUrl}
                  />
                  <Footer />
                </React.Fragment>
              }
            />
            { /* route for full text search results */ }
            <Route
              path="/all"
              render={routeProps =>
                <React.Fragment>
                  <Grid item xs={12} md={3} className={classes.facetBarContainer}>

                  </Grid>
                  <Grid item xs={12} md={9} className={classes.resultsContainer}>
                    <All
                      clientSideFacetedSearch={props.clientSideFacetedSearch}
                      routeProps={routeProps}
                    />
                  </Grid>
                </React.Fragment>
              }
            />
            { /* routes for perspectives that don't have an external url */ }
            {perspectiveArr.map(perspective => {
              if (!has(perspective, 'externalUrl')) {
                return(
                  <React.Fragment key={perspective.id}>
                    <Route
                      path={`${rootUrl}/${perspective.id}/faceted-search`}
                      render={routeProps => {
                        return (
                          <React.Fragment>
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
                          </React.Fragment>
                        );
                      }}
                    />
                    <Route
                      path={`${rootUrl}/${perspective.id}/page/:id`}
                      render={routeProps => {
                        return (
                          <InstanceHomePage
                            fetchByURI={props.fetchByURI}
                            resultClass={perspective.id}
                            data={props[perspective.id].instance}
                            isLoading={props[perspective.id].fetching}
                            routeProps={routeProps}
                          />
                        );
                      }}
                    />
                  </React.Fragment>
                );
              }
            })}
            { /* create routes for classes that have only info pages and no perspective */}
            { /* create routes for info buttons */ }
            <Route
              path={`/feedback`}
              render={() => null /* <FeedbackPage /> */ }
            />
          </Grid>
        </React.Fragment>
      </div>
    </div>
  );
};

// <img className={classes.secoLogo} src='img/logos/seco-logo-white-no-background-small.png' alt='SeCo logo'/>
// <img className={classes.heldigLogo} src='img/logos/heldig-logo-small.png' alt='HELDIG logo'/>
// <img className={classes.uhLogo} src='img/logos/university-of-helsinki-logo-white-no-background-small.png' alt='University of Helsinki logo'/>



const mapStateToProps = state => {
  return {
    dates: state.dates,
    surmatut: state.surmatut,
    surmatutFacets: state.surmatutFacets,
    taistelut: state.taistelut,
    taistelutFacets: state.taistelutFacets,
    clientSideFacetedSearch: state.clientSideFacetedSearch,
    error: state.error
    //browser: state.browser,
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
  showError
});

SemanticPortal.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  // browser: PropTypes.object.isRequired,
  surmatut: PropTypes.object.isRequired,
  taistelutFacets: PropTypes.object.isRequired,
  taistelut: PropTypes.object.isRequired,
  surmatutFacets: PropTypes.object.isRequired,
  clientSideFacetedSearch: PropTypes.object.isRequired,
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
