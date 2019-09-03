import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
//import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { Link, NavLink } from 'react-router-dom';
import TopBarSearchField from './TopBarSearchField';
import Divider from '@material-ui/core/Divider';
import { has } from 'lodash';

// import InfoDialog from './InfoDialog';
import logo from '../../img/logo_small_fi.gif';

const styles = theme => ({
  root: {
    //width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    //
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  },
  link: {
    textDecoration: 'none'
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  appBarButton: {
    color: 'white !important',
    border: `1px solid ${theme.palette.primary.main}`
  },
  appBarButtonActive: {
    border: '1px solid white'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left'
  },
  appBarDivider: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    borderLeft: '2px solid white'
  }
});

class TopBar extends React.Component {
  state = {
    infoAnchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleInfoMenuOpen = event => {
    this.setState({ infoAnchorEl: event.currentTarget });
  };

  handleInfoMenuClose = () => {
    this.setState({ infoAnchorEl: null });
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  // https://material-ui.com/components/buttons/#third-party-routing-library
  AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);
  AdapterNavLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

  renderMobileMenuItem = perspective => {
    if (has(perspective, 'externalUrl')) {
      return(
        <a className={this.props.classes.link}
          key={perspective.id}
          href={perspective.externalUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <MenuItem>
            {perspective.label.toUpperCase()}
          </MenuItem>
        </a>
      );
    } else {
      return(
        <MenuItem
          key={perspective.id}
          component={this.AdapterLink}
          to={`/${perspective.id}/faceted-search`}
        >
          {perspective.label.toUpperCase()}
        </MenuItem>
      );
    }
  }

  renderDesktopTopMenuItem = perspective => {
    if (has(perspective, 'externalUrl')) {
      return(
        <a className={this.props.classes.link}
          key={perspective.id}
          href={perspective.externalUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button
            className={this.props.classes.appBarButton}
          >
            {perspective.label}
          </Button>
        </a>
      );
    } else {
      return(
        <Button
          key={perspective.id}
          className={this.props.classes.appBarButton}
          component={this.AdapterNavLink}
          to={`${this.props.rootUrl}/${perspective.id}/faceted-search`}
          isActive={(match, location) => location.pathname.startsWith(`/${perspective.id}`)}
          activeClassName={this.props.classes.appBarButtonActive}
        >
          {perspective.label}
        </Button>
      );
    }
  }

  renderMobileMenu = perspectives =>
    <Menu
      anchorEl={this.state.mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(this.state.mobileMoreAnchorEl)}
      onClose={this.handleMobileMenuClose}
    >
      {perspectives.map(perspective => this.renderMobileMenuItem(perspective))}
      <Divider />
      <MenuItem
        key='feedback'
        component={this.AdapterLink}
        to={`${this.props.rootUrl}/feedback`}
      >
        FEEDBACK
      </MenuItem>
      <MenuItem
        key='info'
        component={this.AdapterLink}
        to={`${this.props.rootUrl}/instructions`}
      >
        INSTRUCTIONS
      </MenuItem>
    </Menu>

  renderInfoMenu = () =>
    <Menu
      anchorEl={this.state.infoAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(this.state.infoAnchorEl)}
      onClose={this.handleInfoMenuClose}
    >
      <a className={this.props.classes.link}
        key={0}
        href='http://vesta.narc.fi/cgi-bin/db2www/sotasurmaetusivu/main'
        target='_blank'
        rel='noopener noreferrer'
      >
        <MenuItem>
        Vanha sivusto
        </MenuItem>
      </a>
      <a className={this.props.classes.link}
        key={1}
        href='https://seco.cs.aalto.fi/projects/sotasurmat-1914-1922/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <MenuItem>
          Tietoa projektista
        </MenuItem>
      </a>
    </Menu>

  render() {
    const { classes, perspectives } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="absolute">
          <Toolbar style={{ paddingLeft: 2 }}>
            <Button
              className={classes.appBarButton}
              component={this.AdapterLink}
              to={this.props.rootUrl}
            >
              <div className={classes.logoContainer}>
                <img src={logo} alt="Logo"></img>
              </div>
            </Button>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {perspectives.map((perspective, index) => this.renderDesktopTopMenuItem(perspective, index))}
              <div className={classes.appBarDivider}></div>
              <Button
                className={classes.appBarButton}
                component={this.AdapterNavLink}
                to={`${this.props.rootUrl}/feedback`}
                isActive={(match, location) => location.pathname.startsWith(`${this.props.rootUrl}/feedback`)}
                activeClassName={this.props.classes.appBarButtonActive}
              >
                Feedback
              </Button>
              <Button className={classes.appBarButton} aria-haspopup="true" onClick={this.handleInfoMenuOpen}>
                Info
              </Button>
              <Button
                className={classes.appBarButton}
                component={this.AdapterNavLink}
                to={`${this.props.rootUrl}/instructions`}
                isActive={(match, location) => location.pathname.startsWith(`${this.props.rootUrl}/instructions`)}
                activeClassName={this.props.classes.appBarButtonActive}
              >
                Instructions
              </Button>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>

          </Toolbar>
        </AppBar>
        {this.renderMobileMenu(perspectives)}
        {this.renderInfoMenu()}
      </div>
    );
  }
}

TopBar.propTypes = {
  rootUrl: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  fetchResultsClientSide: PropTypes.func.isRequired,
  clearResults: PropTypes.func.isRequired,
  perspectives: PropTypes.array.isRequired
};

export default withStyles(styles)(TopBar);
