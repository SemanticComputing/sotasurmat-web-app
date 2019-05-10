import React from 'react';
import PropTypes from 'prop-types';
import { has } from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import HierarchicalFacet from './HierarchicalFacet';
import TextFacet from './TextFacet';
import DateSlider from './slider/DateSlider';
import Paper from '@material-ui/core/Paper';
import FacetHeader from './FacetHeader';
import Typography from '@material-ui/core/Typography';
import ActiveFilters from './ActiveFilters';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%'
  },
  headingContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  facetContainer: {
    marginBottom: theme.spacing.unit,
  },
  facetContainerLast: {
    marginBottom: 2,
  },
  two: {
    height: 40,
    padding: theme.spacing.unit,
  },
  one: {
    paddingLeft: theme.spacing.unit,
  },
  three: {
    height: 108,
    padding: theme.spacing.unit,
  },
  four: {
    height: 135,
    padding: theme.spacing.unit,
  },
  five: {
    height: 150,
    padding: theme.spacing.unit,
  },
  ten: {
    height: 350,
    padding: theme.spacing.unit,
  },
  facetHeaderButtons: {
    marginLeft: 'auto',
  },
  textContainer: {
    padding: theme.spacing.unit,
  },
  resultInfoDivider: {
    marginTop: theme.spacing.unit / 2,
    marginBottom: theme.spacing.unit / 2,
  }
});

class FacetBar extends React.Component {

  renderFacet = facetID => {
    const { classes } = this.props;
    const { facetUpdateID, updatedFacet, updatedFilter, facets } = this.props.facetData;
    const facet = facets[facetID];
    let facetComponent = null;
    switch (facet.filterType) {
      case 'uriFilter':
      case 'spatialFilter':
        facetComponent = (
          <HierarchicalFacet
            facetID={facetID}
            facet={facet}
            facetClass={this.props.facetClass}
            resultClass={this.props.resultClass}
            facetUpdateID={facetUpdateID}
            updatedFacet={updatedFacet}
            updatedFilter={updatedFilter}
            fetchFacet={this.props.fetchFacet}
            updateFacetOption={this.props.updateFacetOption}
          />
        );
        break;
      case 'textFilter':
        facetComponent = (
          <TextFacet
            facetID={facetID}
            facet={facet}
            facetClass={this.props.facetClass}
            resultClass={this.props.resultClass}
            facetUpdateID={facetUpdateID}
            updatedFacet={updatedFacet}
            updatedFilter={updatedFilter}
            fetchFacet={this.props.fetchFacet}
            updateFacetOption={this.props.updateFacetOption}
          />
        );
        break;
      case 'timespan':
        facetComponent = (
          <DateSlider />
        );
        break;
      default:
        facetComponent = (
          <HierarchicalFacet
            facetID={facetID}
            facet={facet}
            facetClass={this.props.facetClass}
            resultClass={this.props.resultClass}
            facetUpdateID={facetUpdateID}
            updatedFacet={updatedFacet}
            updatedFilter={updatedFilter}
            fetchFacet={this.props.fetchFacet}
            updateFacetOption={this.props.updateFacetOption}
          />
        );
        break;
    }

    return(
      <Paper key={facetID} className={classes.facetContainer}>
        <FacetHeader
          facetID={facetID}
          facet={facet}
          facetClass={this.props.facetClass}
          resultClass={this.props.resultClass}
          fetchFacet={this.props.fetchFacet}
          updateFacetOption={this.props.updateFacetOption}
        />
        <div className={classes[facet.containerClass]}>
          {facetComponent}
        </div>
      </Paper>
    );
  }

  render() {
    const { classes, facetClass, resultCount } = this.props;
    const { facets } = this.props.facetData;
    let uriFilters = {};
    let spatialFilters = {};
    let textFilters = {};
    let activeUriFilters = false;
    let activeSpatialFilters = false;
    let activeTextFilters = false;
    for (const [key, value] of Object.entries(facets)) {
      if (has(value, 'uriFilter') && value.uriFilter !== null) {
        activeUriFilters = true;
        uriFilters[key] = value.uriFilter;
      }
      if (has(value, 'spatialFilter') && value.spatialFilter !== null) {
        activeSpatialFilters = true;
        spatialFilters[key] = value.spatialFilter._bounds;
      }
      if (has(value, 'textFilter') && value.textFilter !== null) {
        activeTextFilters = true;
        textFilters[key] = value.textFilter;
      }
    }
    return (
      <div className={classes.root}>
        <Paper className={classes.facetContainer}>
          <div className={classes.textContainer}>
            <Typography variant="h6">Tuloksia: {resultCount} {/*this.props.resultClass*/}</Typography>
            <Divider className={classes.resultInfoDivider} />
            {(activeUriFilters || activeSpatialFilters || activeTextFilters) &&
              <React.Fragment>
                <Typography variant="h6">Aktiiviset suodattimet:</Typography>
                <div className={classes.textContainer}>
                  <ActiveFilters
                    facets={facets}
                    facetClass={facetClass}
                    uriFilters={uriFilters}
                    spatialFilters={spatialFilters}
                    textFilters={textFilters}
                    updateFacetOption={this.props.updateFacetOption}
                  />
                </div>
                <Divider className={classes.resultInfoDivider} />
              </React.Fragment>
            }
          </div>
        </Paper>
        {Object.keys(facets).map(facetID => this.renderFacet(facetID))}
      </div>
    );
  }
}

FacetBar.propTypes = {
  classes: PropTypes.object.isRequired,
  facetData: PropTypes.object.isRequired,
  facetClass: PropTypes.string.isRequired,
  resultClass: PropTypes.string.isRequired,
  resultCount: PropTypes.number.isRequired,
  fetchFacet: PropTypes.func.isRequired,
  updateFacetOption: PropTypes.func.isRequired
};

export default withStyles(styles)(FacetBar);
