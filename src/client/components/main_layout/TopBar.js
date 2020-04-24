import React from 'react'
import PropTypes from 'prop-types'
import intl from 'react-intl-universal'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
// import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { withStyles } from '@material-ui/core/styles'
import MoreIcon from '@material-ui/icons/MoreVert'
import Button from '@material-ui/core/Button'
import { Link, NavLink } from 'react-router-dom'
// import TopBarSearchField from './TopBarSearchField'
// import TopBarInfoButton from './TopBarInfoButton'
import TopBarLanguageButton from './TopBarLanguageButton'
import Divider from '@material-ui/core/Divider'
import { has } from 'lodash'
import logoFI from '../../img/logo_small_fi.gif'
import logoEN from '../../img/logo_small_en.gif'
import arkistoLogo from '../../img/logos/ka-tunnus-fi-white.png'
import { showLanguageButton } from '../../configs/sotasurmat/GeneralConfig'

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  toolbar: {
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5)
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'flex'
    }
  },
  link: {
    textDecoration: 'none'
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  appBarToolbar: {
    paddingLeft: 0
  },
  appBarButton: {
    color: 'white !important',
    border: `1px solid ${theme.palette.primary.main}`
  },
  appBarButtonActive: {
    border: '1px solid white'
  },
  appBarDivider: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    borderLeft: '2px solid white'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left'
  },
  topBarLogo: {
    height: 50,
    [theme.breakpoints.down('xs')]: {
      height: 35
    }
  },
  arkistoLogoImage: {
    height: 52,
    [theme.breakpoints.down('xs')]: {
      height: 35
    }
  }
})

class TopBar extends React.Component {
  state = {
    infoAnchorEl: null,
    mobileMoreAnchorEl: null
  };

  handleInfoMenuOpen = event => {
    this.setState({ infoAnchorEl: event.currentTarget })
  };

  handleInfoMenuClose = () => {
    this.setState({ infoAnchorEl: null })
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget })
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null })
  };

  // https://material-ui.com/components/buttons/#third-party-routing-library
  AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);
  AdapterNavLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

  renderMobileMenuItem = perspective => {
    const searchMode = perspective.id.startsWith('clientFS') ? 'federated-search' : 'faceted-search'
    if (has(perspective, 'externalUrl')) {
      return (
        <a
          className={this.props.classes.link}
          key={perspective.id}
          href={perspective.externalUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <MenuItem>
            {intl.get(`perspectives.${perspective.id}.label`).toUpperCase()}
          </MenuItem>
        </a>
      )
    } else {
      return (
        <MenuItem
          key={perspective.id}
          component={this.AdapterLink}
          to={`${this.props.rootUrl}/${perspective.id}/${searchMode}`}
        >
          {intl.get(`perspectives.${perspective.id}.label`).toUpperCase()}
        </MenuItem>
      )
    }
  }

  renderDesktopTopMenuItem = perspective => {
    const searchMode = perspective.id.startsWith('clientFS') ? 'federated-search' : 'faceted-search'
    if (has(perspective, 'externalUrl')) {
      return (
        <a
          className={this.props.classes.link}
          key={perspective.id}
          href={perspective.externalUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button
            className={this.props.classes.appBarButton}
          >
            {intl.get(`perspectives.${perspective.id}.label`).toUpperCase()}
          </Button>
        </a>
      )
    } else {
      return (
        <Button
          key={perspective.id}
          className={this.props.classes.appBarButton}
          component={this.AdapterNavLink}
          to={`${this.props.rootUrl}/${perspective.id}/${searchMode}`}
          isActive={(match, location) => location.pathname.startsWith(`${this.props.rootUrl}/${perspective.id}`)}
          activeClassName={this.props.classes.appBarButtonActive}
        >
          {intl.get(`perspectives.${perspective.id}.label`).toUpperCase()}
        </Button>
      )
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
        {intl.get('topBar.feedback').toUpperCase()}
      </MenuItem>
      {/* <MenuItem
        key={0}
        component={this.AdapterLink}
        to={`${this.props.rootUrl}/about`}
      >
        {intl.get('topBar.info.aboutTheProject').toUpperCase()}
      </MenuItem> */}
      <MenuItem
        key='info'
        component={this.AdapterLink}
        to={`${this.props.rootUrl}/information`}
      >
        {intl.get('topBar.info.info').toUpperCase()}
      </MenuItem>
      <MenuItem
        key='info'
        component={this.AdapterLink}
        to={`${this.props.rootUrl}/instructions`}
      >
        {intl.get('topBar.instructions').toUpperCase()}
      </MenuItem>
    </Menu>

  render () {
    const { classes, perspectives, currentLocale, availableLocales } = this.props
    let logo
    switch (currentLocale) {
      case 'fi':
        logo = logoFI
        break
      case 'en':
        logo = logoEN
        break
      default:
        logo = logoFI
        break
    }
    return (
      <div className={classes.root}>
        <AppBar position='absolute'>
          <Toolbar className={classes.appBarToolbar}>
            <Button
              component={this.AdapterLink}
              to={this.props.rootUrl}
            >
              <img className={classes.topBarLogo} src={logo} alt='Logo' />
            </Button>
            <a
              className={classes.arkistoLogo}
              href='https://www.arkisto.fi/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button>
                <img className={classes.arkistoLogoImage} src={arkistoLogo} alt='logo' />
              </Button>
            </a>
            {/* <TopBarSearchField
              fetchResultsClientSide={this.props.fetchResultsClientSide}
              clearResults={this.props.clearResults}
            /> */}
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {perspectives.map((perspective, index) => this.renderDesktopTopMenuItem(perspective, index))}
              <div className={classes.appBarDivider} />
              <Button
                className={classes.appBarButton}
                component={this.AdapterNavLink}
                to={`${this.props.rootUrl}/feedback`}
                isActive={(match, location) => location.pathname.startsWith(`${this.props.rootUrl}/feedback`)}
                activeClassName={this.props.classes.appBarButtonActive}
              >
                {intl.get('topBar.feedback')}
              </Button>
              {/* <TopBarInfoButton /> */}
              <Button
                className={classes.appBarButton}
                component={this.AdapterNavLink}
                to={`${this.props.rootUrl}/information`}
                isActive={(match, location) => location.pathname.startsWith(`${this.props.rootUrl}/information`)}
                activeClassName={this.props.classes.appBarButtonActive}
              >
                {intl.get('topBar.info.info')}
              </Button>
              <Button
                className={classes.appBarButton}
                component={this.AdapterNavLink}
                to={`${this.props.rootUrl}/instructions`}
                isActive={(match, location) => location.pathname.startsWith(`${this.props.rootUrl}/instructions`)}
                activeClassName={this.props.classes.appBarButtonActive}
              >
                {intl.get('topBar.instructions')}
              </Button>
              {showLanguageButton &&
                <TopBarLanguageButton
                  currentLocale={currentLocale}
                  availableLocales={availableLocales}
                  loadLocales={this.props.loadLocales}
                  location={this.props.location}
                />}
            </div>
            <a
              className={classes.secoLogo}
              href='https://seco.cs.aalto.fi'
              target='_blank'
              rel='noopener noreferrer'
            >
              {/* <Button><img src={secoLogo} /></Button> */}
            </a>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup='true' onClick={this.handleMobileMenuOpen} color='inherit'>
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {this.renderMobileMenu(perspectives)}
      </div>
    )
  }
}

TopBar.propTypes = {
  rootUrl: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  fetchResultsClientSide: PropTypes.func.isRequired,
  clearResults: PropTypes.func.isRequired,
  loadLocales: PropTypes.func.isRequired,
  perspectives: PropTypes.array.isRequired,
  currentLocale: PropTypes.string.isRequired,
  availableLocales: PropTypes.array.isRequired,
  xsScreen: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired
}

export default withStyles(styles)(TopBar)
