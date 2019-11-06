import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = theme => ({
  link: {
    textDecoration: 'none'
  },
  appBarButton: {
    color: 'white !important',
    border: `1px solid ${theme.palette.primary.main}`
  },
});

class TopBarInfoButton extends React.Component {
  state = {
    anchorEl: null,
  };

  AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

  handleInfoMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleInfoMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Button
          className={classes.appBarButton}
          aria-haspopup="true"
          onClick={this.handleInfoMenuOpen}
          endIcon={<ExpandMoreIcon />}
        >
          {intl.get('topBar.info.info')}
        </Button>
        <Menu
          anchorEl={this.state.anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleInfoMenuClose}
        >
          {/*<MenuItem
            key={0}
            component={this.AdapterLink}
            to={`/about`}
            onClick={this.handleInfoMenuClose}
          >
            {intl.get('topBar.info.aboutTheProject')}
          </MenuItem>*/}
          <a className={classes.link}
            key={0}
            href='http://vesta.narc.fi/cgi-bin/db2www/sotasurmaetusivu/main'
            target='_blank'
            rel='noopener noreferrer'
          >
            <MenuItem onClick={this.handleInfoMenuClose}>
              {intl.get('topBar.info.oldPage')}
            </MenuItem>
          </a>
          <a className={classes.link}
            key={1}
            href='https://seco.cs.aalto.fi/projects/sotasurmat-1914-1922/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <MenuItem onClick={this.handleInfoMenuClose}>
              {intl.get('topBar.info.aboutTheProject')}
            </MenuItem>
          </a>
        </Menu>
      </React.Fragment>
    );
  }
}

TopBarInfoButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBarInfoButton);