import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    height: 'calc(100% - 72px)',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  link: {
    textDecoration: 'none'
  },
  button: {
    margin: theme.spacing(3),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
});

class Export extends React.Component {

  render = () => {
    const { classes, sparqlQuery } = this.props;
    let yasguiUrl = '';
    if (this.props.sparqlQuery !== null) {
      yasguiUrl = 'http://yasgui.org/#query='
      + encodeURIComponent(sparqlQuery)
      + '&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results'
      + '%2Bjson&endpoint=http%3A%2F%2Fldf.fi%2Fsiso%2Fsparql&requestMethod=POST&tabTitle='
      + 'Query+11&headers=%7B%7D&outputFormat=table';
    }

    return (
      <div className={classes.root}>
        <a
          className={classes.link}
          href={yasguiUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button variant="contained" color="primary"  className={classes.button}>
            Open SPARQL query in yasgui.org
          </Button>
        </a>
        {this.props.pageType === 'instancePage' &&
          <a
            className={classes.link}
            href={this.props.id}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button variant="contained" color="primary"  className={classes.button}>
              Open in Linked Data Browser
            </Button>
          </a>
        }
      </div>
    );
  }

}

Export.propTypes = {
  classes: PropTypes.object.isRequired,
  pageType: PropTypes.string.isRequired,
  sparqlQuery: PropTypes.string,
  id: PropTypes.string
};

export default withStyles(styles)(Export);
