import React from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import aaltoLogo from '../../img/logos/aalto-logo-white-no-background-small.png';
import secoLogo from '../../img/logos/seco-logo-white-no-background-small.png';
import arkistoLogo from '../../img/logos/ka-tunnus-fi-white.png';


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
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1500 + theme.spacing(6))]: {
      width: 1500,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  link: {
    textDecoration: 'none'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  secLogo: {
    height: 46,
  },
  aaltoLogo: {
    height: 39,
  },
  arkistoLogo: {
    height: 44,
  },
});

const Footer = props => {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Grid container className={classes.layout}>
        <Grid container spacing={3} item xs={12}>
          <Grid item xs className={classes.logoContainer}>
            <a
              className={classes.link}
              href="https://seco.cs.aalto.fi/"
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className={classes.secLogo} src={secoLogo} alt='logo' />
            </a>
          </Grid>
          <Grid item xs className={classes.logoContainer}>
            <a
              className={classes.link}
              href="https://www.arkisto.fi/"
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className={classes.arkistoLogo} src={arkistoLogo} alt='logo' />
            </a>
          </Grid>
          <Grid item xs className={classes.logoContainer}>
            <a
              className={classes.link}
              href="https://www.aalto.fi/"
              target='_blank'
              rel='noopener noreferrer'
            >
              <img className={classes.aaltoLogo} src={aaltoLogo} alt='logo' />
            </a>
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
