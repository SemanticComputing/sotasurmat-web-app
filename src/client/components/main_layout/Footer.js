import React from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import aaltoLogo from '../../img/logos/aalto-logo-white-no-background-small.png';
import uhLogo from '../../img/logos/university-of-helsinki-logo-white-no-background-small.png';
import heldigLogo from '../../img/logos/heldig-logo-small.png';
import secoLogo from '../../img/logos/seco-logo-white-no-background-small.png';
// import arkistoLogo from '../../img/logos/ka-tunnus-fi-white.png';


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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up(1300 + theme.spacing(6))]: {
      width: 1300,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  link: {
    textDecoration: 'none',
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4)
  },
  aaltoLogo: {
    height: 39,
  },
  uhLogo: {
    height: 52,
  },
  secoLogo: {
    height: 46,
  },
  heldigLogo: {
    height: 44,
  }
});

const Footer = props => {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <div className={classes.layout}>
        <a
          className={classes.link}
          href="https://www.aalto.fi/"
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className={classes.aaltoLogo} src={aaltoLogo} alt='logo' />
        </a>
        <a
          className={classes.link}
          href="https://seco.cs.aalto.fi/"
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className={classes.secLogo} src={secoLogo} alt='logo' />
        </a>
        <a
          className={classes.link}
          href="https://www.helsinki.fi/"
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className={classes.uhLogo} src={uhLogo} alt='logo' />
        </a>
        <a
          className={classes.link}
          href="http://www.heldig.fi/"
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className={classes.aaltoLogo} src={heldigLogo} alt='logo' />
        </a>
      </div>
    </Paper>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
