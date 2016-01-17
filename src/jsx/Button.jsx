var Button = React.createClass({
  propTypes: {
    icon: React.PropTypes.string,
    text: React.PropTypes.string,
    size: React.PropTypes.string,
    type: React.PropTypes.string,
    isEnabled: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      icon: '',
      text: '',
      size: '',
      type: 'default',
      isEnabled: true
    };
  },

  getInitialState: function() {
    return {};
  },

  getClassName: function() {
    var className = 'btn';
    
    if (this.props.size != '') {
      className += ' btn-' + this.props.size;
    }

    className += ' btn-' + this.props.type;

    return className;
  },

  getIcon: function() {
    if (this.props.icon !== '') {
      return (
        <span>
          <Icon icon={this.props.icon} />
          <span> </span>
        </span>
      );
    } else {
      return null;
    }
  },

  render: function() {
    return (
      <button type='button' className={this.getClassName()} disabled={!this.props.isEnabled}>
        {this.getIcon()}
        {this.props.text}
      </button>
    );
  }
});
