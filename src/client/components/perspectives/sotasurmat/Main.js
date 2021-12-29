import React from 'react'
import PropTypes from 'prop-types'
import intl from 'react-intl-universal'
// import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
// import MainCard from './MainCard'
import defaultThumbImage from '../../../img/main_page/thumb.png'
import largeLogoEN from '../../../img/logo_en.gif'
import largeLogoFI from '../../../img/logo_fi.gif'
import classNames from 'classnames'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { Link } from 'react-router-dom'
import { has } from 'lodash'

const useStyles = makeStyles(theme => ({
  root: props => ({
    backgroundColor: '#ffffff',
    [theme.breakpoints.up(props.layoutConfig.hundredPercentHeightBreakPoint)]: {
      overflow: 'auto',
      height: `calc(100% - ${props.layoutConfig.topBar.reducedHeight + props.layoutConfig.footer.reducedHeight}px)`
    },
    [theme.breakpoints.up(props.layoutConfig.reducedHeightBreakpoint)]: {
      overflow: 'auto',
      height: `calc(100% - ${props.layoutConfig.topBar.defaultHeight + props.layoutConfig.footer.defaultHeight}px)`
    }
  }),
  layout: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up(800 + theme.spacing(6))]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  heroContent: {
    paddingBottom: theme.spacing(1)
  },
  licenceText: {
    marginTop: theme.spacing(0.5),
    fontSize: '0.7em'
  },
  lowerRow: {
    marginTop: theme.spacing(1)
  },
  licenceTextContainer: {
    marginTop: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  card: {
    width: 340,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2)
    }
  },
  cardContent: {
    height: 85
  },
  media: {
    height: 140
  },
  licenceLayout: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  licenceContainer: {
    marginTop: theme.spacing(1),
    paddingBottom: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.between('sm', 840)]: {
      width: 340,
      display: 'block'
    },
    [theme.breakpoints.up(840)]: {
      width: 2 * 340 + theme.spacing(6),
      display: 'block'
    }
  },
  largeLogo: {
    height: 50,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      height: 113,
      marginBottom: 0
    }
  },
  perspectiveDescription: {
    fontSize: '0.875rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem'
    }
  }
}))

/**
 * A component for generating a landing page for a semantic portal.
 */
const Main = props => {
  const { screenSize } = props
  const classes = useStyles(props)
  let headingVariant = 'h5'
  let subheadingVariant = 'body1'
  // let descriptionVariant = 'body1'
  switch (screenSize) {
    case 'xs':
      headingVariant = 'body1'
      subheadingVariant = 'body1'
      // descriptionVariant = 'body1'
      break
    case 'sm':
      headingVariant = 'h4'
      subheadingVariant = 'h6'
      // descriptionVariant = 'h6'
      break
    case 'md':
      headingVariant = 'h4'
      subheadingVariant = 'h6'
      // descriptionVariant = 'h6'
      break
    case 'lg':
      headingVariant = 'h2'
      subheadingVariant = 'h5'
      // descriptionVariant = 'h6'
      break
    case 'xl':
      headingVariant = 'h2'
      subheadingVariant = 'h5'
      // descriptionVariant = 'h6'
      break
  }
  let largeLogo
  switch (props.currentLocale) {
    case 'fi':
      largeLogo = largeLogoFI
      break
    case 'en':
      largeLogo = largeLogoEN
      break
    default:
      largeLogo = largeLogoFI
      break
  }

  return (
    <div className={classes.root}>
      <div className={classes.layout}>
        <div className={classes.logoContainer}>
          <img className={classes.largeLogo} src={largeLogo} alt='Logo' />
        </div>
        <div className={classes.heroContent}>
          <Typography className={classes.longTitle} component='h1' variant={headingVariant} align='center' color='textPrimary' gutterBottom>
            {intl.get('appTitle.long')}
          </Typography>
          <Typography variant={subheadingVariant} align='center' color='textSecondary' paragraph>
            {intl.get('appDescription')}
          </Typography>
        </div>
        <div className={classes.cardContainer}>
          {props.perspectives.map(perspective => {
            return (
              <Card key={perspective.id} className={classes.card}>
                <CardActionArea component={Link} to={`${props.rootUrl}/${perspective.id}/faceted-search`}>
                  <CardMedia
                    className={classes.media}
                    image={has(perspective, 'frontPageImage')
                      ? perspective.frontPageImage
                      : defaultThumbImage}
                    title={perspective.label}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {intl.get(`perspectives.${perspective.id}.label`)}
                    </Typography>
                    <Typography className={classes.perspectiveDescription} component='p'>
                      {intl.get(`perspectives.${perspective.id}.shortDescription`)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            )
          }
          )}
        </div>
      </div>
      <div className={classNames(classes.licenceLayout, classes.licenceContainer)}>
        <Typography className={classes.licenceText}>{intl.getHTML('mainPageImageLicence')}
          <br />
          <a href='/saavutettavuusSuomi.pdf' target='_blank'>Saavutettavuusseloste</a> &nbsp; | &nbsp;
          <a href='/saavutettavuusRuotsi.pdf' target='_blank'>Tillgänglitshetutlåtande</a>
        </Typography>
      </div>
    </div>
  )
}

Main.propTypes = {
  /**
   * An array of objects used for configuration. Each object represents a single perspective.
   */
  perspectives: PropTypes.array.isRequired,
  screenSize: PropTypes.string.isRequired,
  rootUrl: PropTypes.string.isRequired
}

export default Main
