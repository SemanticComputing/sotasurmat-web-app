import React from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
//import oxfordLogo from '../../img/logos/partners/ox_brand6_pos_rect.gif';
//import oxfordLogo2 from '../../img/logos/partners/Long-Logo-RGB.jpg';
//import pennLogo from '../../img/logos/partners/PL SIMS Logo_small.png';
//import cnrsLogo from '../../img/logos/partners/logo_cnrs_irht2.jpg';
import aaltoLogo from '../../img/logos/aalto-logo-white-no-background-small.png';
import secoLogo from '../../img/logos/seco-logo.png';
//import tapLogo from '../../img/logos/funders/cropped-logo_tap_0_.png';
//import didLogo from '../../img/logos/funders/did_logo.png';
//import imlsLogo from '../../img/logos/funders/imls_logo_2c_cropped.jpg';
//import anrLogo from '../../img/logos/funders/Agence_Nationale_de_la_Recherche.png';
//import akaLogo from '../../img/logos/funders/aka_en_vaaka_rgb.jpg';

const styles = theme => ({
  root: {
    position: 'absolute',
    [ theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    bottom: 0,
    left: 0,
    boxShadow: '0 -20px 20px -20px #333',
    width: '100%',
    borderRadius: 0,
    background: theme.palette.primary.main,
  },
  layout: {
    width: 'auto',
    height: 50,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(1500 + theme.spacing.unit * 3 * 2)]: {
      width: 1500,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 40,
  },
  aaltoLogo: {
    height: 37,
  },
});

const Footer = props => {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Grid container className={classes.layout}>
        <Grid container spacing={24} item xs={12}>
          <Grid item xs className={classes.logoContainer}>
            <img className={classes.logo} src={secoLogo} alt='logo' />
          </Grid>
          <Grid item xs className={classes.logoContainer}>
            <img className={classes.aaltoLogo} src={aaltoLogo} alt='logo' />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
