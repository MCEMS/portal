import React, { PropTypes } from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  close() {
    this.setState({
      visible: false,
    });
  }

  render() {
    let modalClassName;
    let dimmerClassName;
    if (this.state.visible) {
      modalClassName = 'ui active modal';
      dimmerClassName = 'ui dimmer modals page transition visible active';
    } else {
      modalClassName = 'ui modal';
      dimmerClassName = 'ui dimmer modals page transition hidden';
    }
    return (
      <div>
        <div className={modalClassName}>
          {this.props.children}
        </div>
        <div className={dimmerClassName} />
      </div>
    );
  }
}
Modal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Modal;
