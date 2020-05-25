import React from 'react'
import PropTypes from 'prop-types'
import intl from 'react-intl-universal'
import classNames from 'classnames'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { has } from 'lodash'
import defaultThumbImage from '../../../img/main_page/thumb.png'
import largeLogoEN from '../../../img/logo_en.gif'
import largeLogoFI from '../../../img/logo_fi.gif'

const styles = theme => ({
  root: {
    width: '100%',
    paddingBottom: theme.spacing(3),
    height: '100%',
    overflow: 'auto',
    [theme.breakpoints.down('sm')]: {
      height: 900
    }
  },
  icon: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: 'none'
  },
  heroContent: {
    maxWidth: 1100,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(1100 + theme.spacing(6))]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  longTitle: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  media: {
    height: 140
    // [ theme.breakpoints.down('md')]: {
    //   height: 60
    // }
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
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  licenceLayout: {
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: 1100
    }
  },
  licenceContainer: {
    marginTop: theme.spacing(1),
    [theme.breakpoints.down(840)]: {
      width: 340
    },
    [theme.breakpoints.up(840)]: {
      width: 2 * 340 + theme.spacing(6)
    }
  },
  licenceText: {
    fontSize: '0.8em'
  }
})

const MainSotarsurmat = props => {
  const { classes, currentLocale } = props
  let largeLogo
  switch (currentLocale) {
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
          <img src={largeLogo} alt='Logo' />
        </div>
        <div className={classes.heroContent}>
          <Typography className={classes.longTitle} component='h1' variant='h3' align='center' color='textPrimary' gutterBottom>
            {intl.get('appTitle.long')}
          </Typography>
          <Typography variant='h6' align='center' color='textSecondary' paragraph>
            {intl.get('appDescription')}
          </Typography>
        </div>
      </div>
      <div className={classNames(classes.layout, classes.cardContainer)}>
        {props.perspectives.map(perspective => {
          return (
            <Card key={perspective.id} className={classes.card}>
              <CardActionArea component={Link} to={`${props.rootUrl}/${perspective.id}/faceted-search`}>
                <CardMedia
                  className={classes.media}
                  image={has(perspective, 'thumbImage')
                    ? perspective.thumbImage
                    : defaultThumbImage}
                  title={perspective.label}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {intl.get(`perspectives.${perspective.id}.label`)}
                  </Typography>
                  <Typography component='p'>
                    {intl.get(`perspectives.${perspective.id}.shortDescription`)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )
        }
        )}
      </div>
      <div className={classNames(classes.licenceLayout, classes.licenceContainer)}>
        <Typography className={classes.licenceText}>{intl.getHTML('mainPageImageLicence')}</Typography>
      </div>
    </div>
  )
}

MainSotarsurmat.propTypes = {
  rootUrl: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  perspectives: PropTypes.array.isRequired,
  currentLocale: PropTypes.string.isRequired
}

export default withStyles(styles)(MainSotarsurmat)
