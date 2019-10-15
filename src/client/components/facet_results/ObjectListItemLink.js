import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const ObjectListLink = props => {
  const { data, label, externalLink, linkAsButton } = props;

  return (
    <React.Fragment>
      {externalLink && linkAsButton == null &&
        <a
          target='_blank' rel='noopener noreferrer'
          href={data.dataProviderUrl}
        >
          {label}
        </a>
      }
      {props.externalLink && props.linkAsButton &&
        <Button
          variant='contained'
          target='_blank'
          rel='noopener noreferrer'
          href={data.id}
        >
          {label}
        </Button>
      }
      {!props.externalLink &&
        <Link to={data.dataProviderUrl}>
          {label}
        </Link>
      }
    </React.Fragment>
  );
};

ObjectListLink.propTypes = {
  externalLink: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  linkAsButton: PropTypes.bool,
};

export default ObjectListLink;
