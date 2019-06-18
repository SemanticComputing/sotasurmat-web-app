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
//import TopBarSearchField from './TopBarSearchField';
import InfoDialog from './InfoDialog';
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
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
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
});

class TopBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    // https://material-ui.com/components/buttons/#third-party-routing-library
    const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);
    const AdapterNavLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

    const perspectives = [ 'surmatut', 'taistelut',];

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        {perspectives.map(perspective =>
          <MenuItem
            key={perspective}
            component={AdapterLink}
            to={`${this.props.rootUrl}${perspective}`}
          >
            {perspective.toUpperCase()}
          </MenuItem>
        )}
      </Menu>
    );



    return (
      <div className={classes.root}>
        <AppBar position="absolute">
          <Toolbar>
            <Button
              className={classes.appBarButton}
              component={AdapterLink}
              to={this.props.rootUrl}
            >
              <div className={classes.logoContainer}>
                <img src={logo} alt="Logo"></img>
              </div>
            </Button>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <div className={classes.sectionDesktop}>
                {perspectives.map(perspective =>
                  <Button
                    key={perspective}
                    className={classes.appBarButton}
                    component={AdapterNavLink}
                    to={`${this.props.rootUrl}/${perspective}`}
                    isActive={(match, location) => location.pathname.startsWith(`${this.props.rootUrl}/${perspective}`)}
                    activeClassName={classes.appBarButtonActive}
                  >
                    {perspective}
                  </Button>
                )}
              </div>
              <InfoDialog />
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>

          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    );
  }
}

TopBar.propTypes = {
  rootUrl: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  fetchResultsClientSide: PropTypes.func.isRequired,
  clearResults: PropTypes.func.isRequired,
};

export default withStyles(styles)(TopBar);
