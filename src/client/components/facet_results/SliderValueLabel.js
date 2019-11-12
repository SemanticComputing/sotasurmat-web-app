import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

const SliderValueLabel = props => {
  const { children, valueLabelFormat, value } = props;

  const popperRef = React.useRef(null);

  React.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });

  const val = valueLabelFormat(value) ? valueLabelFormat(value) : '';

  return (
    <Tooltip
      PopperProps={{
        popperRef,
      }}
      open={true}
      enterTouchDelay={0}
      placement="top"
      title={val}
    >
      {children}
    </Tooltip>
  );
};

SliderValueLabel.propTypes = {
  children: PropTypes.object,
  valueLabelFormat: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default SliderValueLabel;
