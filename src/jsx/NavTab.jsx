var NavTab = React.createClass({
  propTypes: {
    icon: React.PropTypes.string,
    text: React.PropTypes.string,
    active: React.PropTypes.bool,
    onClick: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      icon: '',
      text: '',
      active: false,
      onClick: function() {}
    };
  },


  getInitialState: function() {
    return {};
  },

  render: function() {
    var className = 'item';
    if (this.props.active) {
      className += ' active';
    }

    return (
      <a href='#' onClick={this.props.onClick} className={className}>
        <Icon icon={this.props.icon} />
        <span> </span>
        {this.props.text}
      </a>
    );
  }
});
