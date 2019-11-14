import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { has } from 'lodash';
import defaultThumbImage from '../../img/thumb.png';
import logo from '../../img/logo_fi.gif';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  root: {
    width: '100%',
    paddingBottom: theme.spacing(3),
    height: '100%',
    overflow: 'auto',
  },
  icon: {
    marginRight: theme.spacing(2),
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
      marginRight: 'auto',
    },
  },
  longTitle: {
    [ theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  media: {
    height: 140,
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
    [ theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2)
    }
  },
  cardContent: {
    height: 85,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

let Main = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.layout}>
        <div className={classes.logoContainer}>
          <img src={logo} alt="Logo"></img>
        </div>
        <div className={classes.heroContent}>
          <Typography className={classes.longTitle} component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
            {intl.get('appTitle.long')}
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            {intl.get('appDescription')}
          </Typography>
        </div>
      </div>
      <div className={classNames(classes.layout, classes.cardContainer)}>
        {props.perspectives.map(perspective => {
          return (
            <Tooltip key={perspective.id} title={perspective.thumbImageText}>
              <Card key={perspective.id} className={classes.card}>
                {has(perspective, 'externalUrl') &&
                    <a className={classes.link}
                      href={perspective.externalUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={has(perspective, 'thumbImage')
                            ? perspective.thumbImage
                            : defaultThumbImage}
                          title={perspective.label}
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="h5" component="h2">
                            {intl.get(`perspectives.${perspective.id}.label`)}
                          </Typography>
                          <Typography component="p">
                            {intl.get(`perspectives.${perspective.id}.shortDescription`)}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </a>
                }
                {!has(perspective, 'externalUrl') &&
                    <CardActionArea component={Link} to={`${props.rootUrl}/${perspective.id}/faceted-search`}>
                      <CardMedia
                        className={classes.media}
                        image={has(perspective, 'thumbImage')
                          ? perspective.thumbImage
                          : defaultThumbImage}
                        title={perspective.label}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {intl.get(`perspectives.${perspective.id}.label`)}
                        </Typography>
                        <Typography component="p">
                          {intl.get(`perspectives.${perspective.id}.shortDescription`)}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                }
              </Card>
            </Tooltip>
          );
        }
        )}
      </div>
    </div>
  );
};

Main.propTypes = {
  rootUrl: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  perspectives: PropTypes.array.isRequired
};

export default withStyles(styles)(Main);
