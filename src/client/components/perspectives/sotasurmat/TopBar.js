import React from 'react'
import PropTypes from 'prop-types'
import intl from 'react-intl-universal'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { makeStyles } from '@material-ui/core/styles'
import MoreIcon from '@material-ui/icons/MoreVert'
import Button from '@material-ui/core/Button'
import { Link, NavLink } from 'react-router-dom'
// import TopBarSearchField from './TopBarSearchField'
// import TopBarInfoButton from './TopBarInfoButton'
import TopBarLanguageButton from '../../main_layout/TopBarLanguageButton'
import Divider from '@material-ui/core/Divider'
import { has } from 'lodash'
import logoFI from '../../../img/logo_small_fi.gif'
import logoEN from '../../../img/logo_small_en.gif'
import arkistoLogo from '../../../img/logos/ka-tunnus-fi-white.png'
// import secoLogo from '../../img/logos/seco-logo-48x50.png'
import { showLanguageButton, feedbackLink } from '../../../configs/sotasurmat/GeneralConfig'

const useStyles = makeStyles((theme) => ({
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
  homeButtonText: {
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    }
  },
  appBarButton: {
    whiteSpace: 'nowrap',
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
  secoLogo: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  arkistoLogoImage: {
    height: 52,
    [theme.breakpoints.down('xs')]: {
      height: 35
    }
  }
}))

/**
 * Responsive app bar with a search field, perspective links, info links and a language
 * selector. Based on Material-UI's App Bar component.
 */
const TopBar = props => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
  const { perspectives, currentLocale, availableLocales /* rootUrl */ } = props
  const classes = useStyles()
  const handleMobileMenuOpen = event => setMobileMoreAnchorEl(event.currentTarget)
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null)
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

  // https://material-ui.com/components/buttons/#third-party-routing-library
  const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />)
  const AdapterNavLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />)

  const renderMobileMenuItem = perspective => {
    const searchMode = perspective.id.startsWith('clientFS') ? 'federated-search' : 'faceted-search'
    if (has(perspective, 'externalUrl')) {
      return (
        <a
          className={classes.link}
          key={perspective.id}
          href={perspective.externalUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <MenuItem>
            {perspective.label
              ? perspective.label.toUpperCase()
              : intl.get(`perspectives.${perspective.id}.label`).toUpperCase()}
          </MenuItem>
        </a>
      )
    } else {
      return (
        <MenuItem
          key={perspective.id}
          component={AdapterLink}
          to={`${props.rootUrl}/${perspective.id}/${searchMode}`}
          onClick={handleMobileMenuClose}
        >
          {intl.get(`perspectives.${perspective.id}.label`).toUpperCase()}
        </MenuItem>
      )
    }
  }

  const renderDesktopTopMenuItem = perspective => {
    const searchMode = perspective.id.startsWith('clientFS') ? 'federated-search' : 'faceted-search'
    if (has(perspective, 'externalUrl')) {
      return (
        <a
          className={classes.link}
          key={perspective.id}
          href={perspective.externalUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button
            className={classes.appBarButton}
          >
            {perspective.label
              ? perspective.label
              : intl.get(`perspectives.${perspective.id}.label`).toUpperCase()}
          </Button>
        </a>
      )
    } else {
      return (
        <Button
          key={perspective.id}
          className={classes.appBarButton}
          component={AdapterNavLink}
          to={`${props.rootUrl}/${perspective.id}/${searchMode}`}
          isActive={(match, location) => location.pathname.startsWith(`${props.rootUrl}/${perspective.id}`)}
          activeClassName={classes.appBarButtonActive}
        >
          {intl.get(`perspectives.${perspective.id}.label`).toUpperCase()}
        </Button>
      )
    }
  }

  const renderMobileMenu = perspectives =>
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {perspectives.map(perspective => renderMobileMenuItem(perspective))}
      <Divider />
      {renderMobileMenuItem({
        id: 'feedback',
        externalUrl: feedbackLink,
        label: intl.get('topBar.feedback')
      })}
      <MenuItem
        key='info'
        component={AdapterLink}
        to={`${props.rootUrl}/information`}
      >
        {intl.get('topBar.info.info').toUpperCase()}
      </MenuItem>
      <MenuItem
        key='instructions'
        component={AdapterLink}
        to={`${props.rootUrl}/instructions`}
      >
        {intl.get('topBar.instructions').toUpperCase()}
      </MenuItem>
    </Menu>

  return (
    <div className={classes.root}>
      {/* Add an empty Typography element to ensure that that the MuiTypography class is loaded for
         any lower level components that use MuiTypography class only in translation files */}
      <Typography />
      <AppBar position='absolute'>
        <Toolbar className={classes.toolbar}>
          <Button component={AdapterLink} to='/'>
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
            fetchFullTextResults={props.fetchFullTextResults}
            clearResults={props.clearResults}
            xsScreen={props.xsScreen}
            rootUrl={rootUrl}
          /> */}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {perspectives.map((perspective, index) => renderDesktopTopMenuItem(perspective, index))}
            <div className={classes.appBarDivider} />
            {renderDesktopTopMenuItem({
              id: 'feedback',
              externalUrl: feedbackLink,
              label: intl.get('topBar.feedback')
            })}
            <Button
              className={classes.appBarButton}
              component={AdapterNavLink}
              to={`${props.rootUrl}/instructions`}
              isActive={(match, location) => location.pathname.startsWith(`${props.rootUrl}/instructions`)}
              activeClassName={classes.appBarButtonActive}
            >
              {intl.get('topBar.instructions')}
            </Button>
            {showLanguageButton &&
              <TopBarLanguageButton
                currentLocale={currentLocale}
                availableLocales={availableLocales}
                loadLocales={props.loadLocales}
                location={props.location}
              />}
          </div>
          {/* <a
            className={classes.secoLogo}
            href='https://seco.cs.aalto.fi'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button><img src={secoLogo} /></Button>
          </a> */}
          <div className={classes.sectionMobile}>
            <IconButton aria-haspopup='true' onClick={handleMobileMenuOpen} color='inherit'>
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu(perspectives)}
    </div>
  )
}

TopBar.propTypes = {
  /**
   * Redux action for full text search results using the search field.
   */
  fetchFullTextResults: PropTypes.func.isRequired,
  /**
   * Redux action for clearing the full text results.
   */
  clearResults: PropTypes.func.isRequired,
  /**
   * Redux action for loading translations.
   */
  loadLocales: PropTypes.func.isRequired,
  /**
   * Current locale as a two-letter code
   */
  currentLocale: PropTypes.string.isRequired,
  /**
   * Available locales as an array of objects with two-letter codes as keys.
   */
  availableLocales: PropTypes.array.isRequired,
  /**
   * Perspective config as an array of objects.
   */
  perspectives: PropTypes.array.isRequired,
  /**
   * Flag for checking if the screen is extra small.
   */
  xsScreen: PropTypes.bool.isRequired,
  /**
   * React Router's location object. The perspective links are highlighted based on this.
   */
  location: PropTypes.object.isRequired,
  /**
   * Root url of the application.
   */
  rootUrl: PropTypes.string.isRequired
}

export default TopBar
