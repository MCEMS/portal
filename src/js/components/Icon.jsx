import React, { PropTypes } from 'react';

const Icon = (props) => {
  const className = `icon ${props.icon} ${props.color}`;
  return <i className={className} />;
};
Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
};
Icon.defaultProps = {
  icon: '',
  color: '',
};
export default Icon;
