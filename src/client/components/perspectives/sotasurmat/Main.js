import React from 'react'
import PropTypes from 'prop-types'
import intl from 'react-intl-universal'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import has from 'lodash'
import MainCard from './MainCard'
import { getSpacing } from '../../../helpers/helpers'
import largeLogoEN from '../../../img/logo_en.gif'
import largeLogoFI from '../../../img/logo_fi.gif'

/**
 * A component for generating a landing page for a semantic portal.
 */
const Main = props => {
  const { perspectives, screenSize } = props
  console.log(screenSize)
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
    <Box
      sx={theme => {
        const { layoutConfig } = props
        const defaultHeightReduction = layoutConfig.topBar.defaultHeight +
          layoutConfig.footer.defaultHeight + getSpacing(theme, 2)
        const reducedHeightReduction = layoutConfig.topBar.reducedHeight +
          layoutConfig.footer.reducedHeight + getSpacing(theme, 2)
        return {
          paddingBottom: theme.spacing(2),
          height: {
            hundredPercentHeight: `calc(100% - ${reducedHeightReduction}px)`,
            reducedHeight: `calc(100% - ${defaultHeightReduction}px)`
          },
          overflow: {
            hundredPercentHeight: 'auto'
          },
          backgroundColor: '#fff'
        }
      }}
    >
      <Box
        sx={theme => ({
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          [theme.breakpoints.up(800 + getSpacing(theme, 6))]: {
            width: 800,
            marginLeft: 'auto',
            marginRight: 'auto'
          }
        })}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box
            component='img'
            src={largeLogo}
            alt='Logo'
            sx={theme => ({
              height: 50,
              marginBottom: theme.spacing(2),
              [theme.breakpoints.up('sm')]: {
                height: 113,
                marginBottom: 0
              }
            })}
          />
        </Box>
        <Box
          sx={theme => ({
            paddingBottom: theme.spacing(1)
          })}
        >
          <Typography
            component='h1'
            variant={headingVariant}
            align='center'
            color='textPrimary'
            gutterBottom
          >
            {intl.get('appTitle.long')}
          </Typography>
          <Typography
            variant={subheadingVariant}
            align='center'
            color='textSecondary'
            paragraph
          >
            {intl.get('appDescription')}
          </Typography>
        </Box>
        <Grid
          container spacing={screenSize === 'sm' ? 2 : 1}
          justifyContent={screenSize === 'xs' || screenSize === 'sm' ? 'center' : 'flex-start'}
          sx={theme => ({
            maxWidth: 696,
            [theme.breakpoints.down('sm')]: {
              maxWidth: 340
            },
            [theme.breakpoints.down(400)]: {
              maxWidth: 'calc(100% - 16px)',
              minWidth: 'calc(100% - 16px)'
            },
            marginLeft: 'auto',
            marginRight: 'auto',
            minHeight: 238
          })}
        >
          {perspectives.map(perspective => {
            const hideCard = (has(perspective.hideCardOnFrontPage) && perspective.hideCardOnFrontPage)
            if (!hideCard) {
              return (
                <MainCard
                  key={perspective.id}
                  perspective={perspective}
                  cardHeadingVariant='h5'
                  rootUrl={props.rootUrl}
                />
              )
            }
            return null
          })}
        </Grid>
        <Box
          sx={theme => ({
            marginTop: theme.spacing(1),
            display: 'flex',
            justifyContent: 'center'
          })}
        >
          <Typography
            align='center'
            sx={theme => ({
              marginTop: theme.spacing(0.5),
              fontSize: '0.7em'
            })}
          >
            {intl.getHTML('mainPageImageLicence')}
            <br />
            <a href='/saavutettavuusSuomi.pdf' target='_blank'>Saavutettavuusseloste</a>
            <br />
            <a href='/saavutettavuusRuotsi.pdf' target='_blank'>Tillgänglitshetutlåtande</a>
          </Typography>
        </Box>
      </Box>
    </Box>
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
