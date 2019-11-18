import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
import { has } from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import ActiveFilters from './ActiveFilters';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tooltip from '@material-ui/core/Tooltip';
import purple from '@material-ui/core/colors/purple';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  facetInfoDivider: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5)
  },
  narrowDownBy: {
    display: 'flex'
  },
  iconButton: {
    paddingTop: 4,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: 0
  }
});

class FacetInfo extends React.Component {

  componentDidMount = () => {
    this.props.fetchResultCount({
      resultClass: this.props.resultClass,
      facetClass: this.props.facetClass,
    });
  }

  componentDidUpdate = prevProps => {
    if (prevProps.facetUpdateID !== this.props.facetUpdateID) {
      this.props.fetchResultCount({
        resultClass: this.props.resultClass,
        facetClass: this.props.facetClass,
      });
    }
  }

  render() {
    const { classes, facetClass, resultCount, someFacetIsFetching } = this.props;
    const { facets } = this.props.facetData;
    let uriFilters = {};
    let spatialFilters = {};
    let textFilters = {};
    let timespanFilters = {};
    let integerFilters = {};
    let activeUriFilters = false;
    let activeSpatialFilters = false;
    let activeTextFilters = false;
    let activeTimespanFilters = false;
    let activeIntegerFilters = false;
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
      if (has(value, 'timespanFilter') && value.timespanFilter !== null) {
        activeTimespanFilters = true;
        timespanFilters[key] = value.timespanFilter;
      }
      if (has(value, 'integerFilter') && value.integerFilter !== null) {
        activeIntegerFilters = true;
        integerFilters[key] = value.integerFilter;
      }
    }

    return (
      <div className={classes.root}>
        { this.props.fetchingResultCount ?
          <CircularProgress
            style={{ color: purple[500] }}
            thickness={5}
            size={26}
          />
          :
          <Typography variant="h6">Tuloksia: {resultCount}</Typography>
        }
        <Divider className={classes.facetInfoDivider} />
        {(activeUriFilters
          || activeSpatialFilters
          || activeTextFilters
          || activeTimespanFilters
          || activeIntegerFilters
        ) &&
          <React.Fragment>
            <Typography variant="h6">Aktiiviset suodattimet:</Typography>
            <div className={classes.textContainer}>
              <ActiveFilters
                facetClass={facetClass}
                uriFilters={uriFilters}
                spatialFilters={spatialFilters}
                textFilters={textFilters}
                timespanFilters={timespanFilters}
                integerFilters={integerFilters}
                updateFacetOption={this.props.updateFacetOption}
                someFacetIsFetching={someFacetIsFetching}
                fetchFacet={this.props.fetchFacet}
              />
            </div>
            <Divider className={classes.facetInfoDivider} />
          </React.Fragment>
        }
        <div className={classes.narrowDownBy}>
          <Typography variant="h6">{intl.get('facetBar.narrowDownBy')}:</Typography>
          <Tooltip enterDelay={300} title={intl.get('facetBar.narrowDownByTooltip')}>
            <IconButton className={classes.iconButton}>
              <InfoIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    );
  }
}

FacetInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  facetUpdateID: PropTypes.number.isRequired,
  facetData: PropTypes.object.isRequired,
  facetClass: PropTypes.string.isRequired,
  resultClass: PropTypes.string.isRequired,
  resultCount: PropTypes.number.isRequired,
  fetchingResultCount: PropTypes.bool.isRequired,
  updateFacetOption: PropTypes.func.isRequired,
  fetchResultCount: PropTypes.func.isRequired,
  someFacetIsFetching: PropTypes.bool.isRequired,
  fetchFacet: PropTypes.func.isRequired
};

export default withStyles(styles)(FacetInfo);
