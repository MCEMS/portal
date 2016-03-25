const React = require('react');

const Icon = (props) => {
  const className = `icon ${props.icon} ${props.color}`;
  return <i className={className} />;
};
Icon.propTypes = {
  icon: React.PropTypes.string.isRequired,
  color: React.PropTypes.string,
};
Icon.defaultProps = {
  icon: '',
  color: '',
};
module.exports = Icon;
