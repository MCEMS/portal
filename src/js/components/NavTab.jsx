import React, { PropTypes } from 'react';
import Icon from './Icon';

const NavTab = (props) => {
  let className = 'item';
  if (props.active) {
    className += ' active';
  }

  return (
    <a href="#" onClick={props.onClick} className={className}>
      <Icon icon={props.icon} />
      <span> </span>
      {props.text}
    </a>
  );
};
NavTab.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
NavTab.defaultProps = {
  icon: '',
  text: '',
  active: false,
  onClick: () => {},
};

export default NavTab;
