import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/InfoOutlined';
//import history from '../../History';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%'
  },
  headingContainer: {
    display: 'flex',
    alignItems: 'center',
    //justifyContent: 'space-between',
    width: '100%'
  },
  facetValuesContainerTen: {
    height: 345,
    padding: theme.spacing(1),
  },
  facetValuesContainerThree: {
    height: 108,
    padding: theme.spacing(1),
  },
  facetHeaderButtons: {
    marginLeft: 'auto'
  }
});

class FacetHeader extends React.Component {
  state = {
    anchorEl: null,
  };

  handleMenuButtonClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleSortByPrefLabel = () => {
    if (this.props.facet.sortBy === 'instanceCount') {
      this.props.updateFacetOption({
        facetClass: this.props.facetClass,
        facetID: this.props.facetID,
        option: 'sortDirection',
        value: 'asc'
      });
      this.props.updateFacetOption({
        facetClass: this.props.facetClass,
        facetID: this.props.facetID,
        option: 'sortBy',
        value: 'prefLabel'
      });
    } else {
      this.props.updateFacetOption({
        facetClass: this.props.facetClass,
        facetID: this.props.facetID,
        option: 'sortDirection',
        value: this.props.facet.sortDirection === 'asc'
          ? 'desc'
          : 'asc'
      });
    }
    this.handleMenuClose();
  }

  handleSortByInstanceCount = () => {
    if (this.props.facet.sortBy === 'prefLabel') {
      this.props.updateFacetOption({
        facetClass: this.props.facetClass,
        facetID: this.props.facetID,
        option: 'sortDirection',
        value: 'desc'
      });
      this.props.updateFacetOption({
        facetClass: this.props.facetClass,
        facetID: this.props.facetID,
        option: 'sortBy',
        value: 'instanceCount'
      });
    } else {
      this.props.updateFacetOption({
        facetClass: this.props.facetClass,
        facetID: this.props.facetID,
        option: 'sortDirection',
        value: this.props.facet.sortDirection === 'asc'
          ? 'desc'
          : 'asc'
      });
    }
    this.handleMenuClose();
  }

  handleMenuClose = () => this.setState({ anchorEl: null });

  renderFacetMenu = () => {
    const { anchorEl } = this.state;
    const { sortButton, sortBy } = this.props.facet;
    const open = Boolean(anchorEl);
    let menuButtons = [];
    if (sortButton) {
      menuButtons.push({
        id: 'prefLabel',
        menuItemText: intl.get('facetBar.sortByName'),
        selected: sortBy === 'prefLabel' ? true : false,
        onClickHandler: this.handleSortByPrefLabel
      });
      menuButtons.push({
        id: 'instanceCount',
        menuItemText: intl.get('facetBar.sortByHits'),
        selected: sortBy === 'instanceCount' ? true : false,
        onClickHandler: this.handleSortByInstanceCount
      });
    }
    // if (spatialFilterButton) {
    //   menuButtons.push({
    //     id: 'uriFilter',
    //     menuItemText: `Filter by name`,
    //     selected: filterType === 'uriFilter' ? true : false,
    //     onClickHandler: this.handleFilterTypeOnClick
    //   });
    //   menuButtons.push({
    //     id: 'spatialFilter',
    //     menuItemText: `Filter by bounding box`,
    //     selected: filterType === 'spatialFilter' ? true : false,
    //     onClickHandler: this.handleFilterTypeOnClick
    //   });
    // }
    return (
      <React.Fragment>
        <Tooltip disableFocusListener={true} title={intl.get('facetBar.filterOptions')}>
          <IconButton
            aria-label={intl.get('facetBar.filterOptions')}
            aria-owns={open ? 'facet-option-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleMenuButtonClick}
          >
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
        <Menu
          id="facet-option-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleMenuClose}
        >
          {menuButtons.map(button => (
            <MenuItem key={button.id} selected={button.selected} onClick={button.onClickHandler}>
              {button.menuItemText}
            </MenuItem>
          ))}
        </Menu>
      </React.Fragment>
    );
  }

  render() {
    const { classes, isActive, facetDescription, facetLabel } = this.props;
    const { sortButton, spatialFilterButton } = this.props.facet;
    let showMenuButton = isActive && (sortButton || spatialFilterButton);
    return (
      <div className={classes.headingContainer}>
        <Typography variant="body1">{facetLabel} </Typography>
        <Tooltip
          title={facetDescription}
          enterDelay={300}
        >
          <IconButton>
            <InfoIcon />
          </IconButton>
        </Tooltip>
        {showMenuButton &&
          <div className={classes.facetHeaderButtons}>
            {this.renderFacetMenu()}
          </div>
        }
      </div>
    );
  }
}

FacetHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  facetID: PropTypes.string,
  facetLabel: PropTypes.string.isRequired,
  facet: PropTypes.object,
  isActive: PropTypes.bool.isRequired,
  facetClass: PropTypes.string,
  resultClass: PropTypes.string,
  fetchFacet: PropTypes.func,
  updateFacetOption: PropTypes.func,
  facetDescription: PropTypes.string.isRequired
};

export default withStyles(styles)(FacetHeader);
