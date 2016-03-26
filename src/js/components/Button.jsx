import React, { PropTypes } from 'react';
import Icon from './Icon';

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
  icon: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  isEnabled: PropTypes.bool,
};
Button.defaultProps = {
  icon: '',
  text: '',
  size: '',
  type: 'default',
  isEnabled: true,
};

export default Button;
