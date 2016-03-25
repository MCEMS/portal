const React = require('react');
const Icon = require('icon');

const getClassName = (props) => {
  let className = `btn btn-${props.type}`;
  if (props.size !== '') {
    className += ` btn-${props.size}`;
  }
  return className;
};

const getIcon = (icon) => {
  if (icon !== '') {
    return (
      <span>
        <Icon icon={icon} />
        <span> </span>
      </span>
    );
  }
  return null;
};

const Button = (props) => (
  <button type="button" className={getClassName(props)} disabled={!props.isEnabled}>
    {getIcon(props.icon)}
    {props.text}
  </button>
);
Button.propTypes = {
  icon: React.PropTypes.string,
  text: React.PropTypes.string,
  size: React.PropTypes.string,
  type: React.PropTypes.string,
  isEnabled: React.PropTypes.bool,
};
Button.defaultProps = {
  icon: '',
  text: '',
  size: '',
  type: 'default',
  isEnabled: true,
};

module.exports = Button;
