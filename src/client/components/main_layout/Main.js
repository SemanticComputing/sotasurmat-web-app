import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import thumbImage from '../../img/thumb.png';
import kalevankangas from '../../img/kalevankangas.jpg';
import punainenRintama from '../../img/punainenRintama.jpg';
import tampereVangit from '../../img/tampereVangit.jpg';
import logo from '../../img/logo_fi.gif';

const styles = theme => ({
  root: {
    width: '100%',
    minHeight: 900,
    marginBottom: theme.spacing.unit,
    [ theme.breakpoints.up('md')]: {
      height: 'calc(100% - 150px)',
      overflow: 'auto',
    },
  },
  icon: {
  },
  // heroUnit: {
  //   backgroundColor: 'rgb(238, 238, 238)'
  // },
  heroContent: {
    maxWidth: 1100,
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit,
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  media: {
    height: 150,
    [ theme.breakpoints.down('md')]: {
      height: 60
    }
  },
  cardContent: {
    height: 85,
  }
});

let Main = props => {
  const { classes } = props;
  const perspectives = [
    {
      id: 'surmatut',
      label: 'Sotasurmat',
      desc: 'Tietoja vuosina 1914-1922 surmatuista',
      thumbnail: kalevankangas,
    },
    {
      id: 'manuscripts2',
      label: 'Näkymä2',
      desc: 'Tuleva näkymä',
      thumbnail: punainenRintama,
    },
    {
      id: 'manuscripts3',
      label: 'Näkymä3',
      desc: 'Tuleva näkymä',
      thumbnail: tampereVangit,
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.layout}>
        <div className={classes.logo}>
          <img src={logo} alt="Logo"></img>
        </div>
        <div className={classes.heroContent}>
          <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
              Suomen sotasurmat 1914-1922
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            Tämä sivusto tarjoaa tietoa Suomen sotasurmista vuosina 1914-1922.
          </Typography>
        </div>
      </div>
      <div className={classNames(classes.layout, classes.cardGrid)}>
        <Grid container spacing={40}>
          {perspectives.map(perspective =>
            <Grid key={perspective.id} item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea component={Link} to={`${props.rootUrl}/${perspective.id}`}>
                  <CardMedia
                    className={classes.media}
                    image={perspective.thumbnail}
                    title={perspective.label}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {perspective.label}
                    </Typography>
                    <Typography component="p">
                      {perspective.desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );
};

Main.propTypes = {
  rootUrl: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
