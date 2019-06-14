import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = () => ({
  dialogContainer: {
    height: '100%',
    width: '100%',
  },
  dialogPaper: {
    height: '100%',
    width: '100%',
    minWidth: 600,
    maxWidth: 750,
    maxHeight: 700,
    padding: '0px !important'
  },
  dialogContent: {
    padding: '0px !important'
  },
  appBarButton: {
    color: 'white !important',
  },
  // https://benmarshall.me/responsive-iframes/
  iframeContainer: {
    overflow: 'hidden',
    paddingTop: '93%',   // aspect ratio: 700 / 750
    position: 'relative'
  },
  iframe: {
    border: 0,
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  spinner: {
    height: 40,
    width: 40,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: 500
  },

});

class InfoDialog extends React.Component {
  state = {
    open: false,
    zoomMessage: '',
    loading: true
  };

  hideSpinner = () => {
    this.setState({
      loading: false
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button
          className={classes.appBarButton}
          classes={{ label: classes.buttonLabel }}
          onClick={this.handleClickOpen}
        >
          Tietoja
        </Button>
        <Dialog
          classes={{
            container: classes.dialogContainer,
            paper: classes.dialogPaper
          }}
          maxWidth={false}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="dialog-title"
        >
          <DialogContent className={classes.dialogContent} >
            <h1>Suomen sotasurmat 1914-1922 web-app demo.</h1>
            <p>Tämä on demo Suomen sotasurmat -sivustosta joka on tarkoitus julkaista syksyllä 2019.</p>
            <p>Lisätietoa projektista voi lukea projektin <a href="https://seco.cs.aalto.fi/projects/sotasurmat-1914-1922/">kotisivulta.</a></p>
            <p>Vanhaan sivustoon voi tutustua <a href="http://vesta.narc.fi/cgi-bin/db2www/sotasurmaetusivu/main">täällä.</a></p>
            <p>Etusivun kuvat Museokeskus Vapriikin <a href="https://www.flickr.com/photos/vapriikki/sets/72157668009883972/">kokoelmasta</a> lisenssillä <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0.</a></p>
            <p>Kuva 1: Punaisten ruumiita Kalevankankaan hautausmaalla Tampereen taistelun jälkeen, kuvaaja tuntematon</p>
            <p>Kuva 2: Tampereen punakaartin komppania rintamalla, kuvaaja tuntematon</p>
            <p>Kuva 3: Vangittuja punavankeja Tampereen Keskustorilla 6.4.1918, kuvaaja tuntematon</p>


          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

InfoDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoDialog);
