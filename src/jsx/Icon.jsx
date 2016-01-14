var Icon = React.createClass({
  propTypes: {
    icon: React.PropTypes.string,
    color: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      icon: 'alert',
      color: ''
    };
  },

  render: function() {
    var className = 'icon ' + this.props.icon + ' ' + this.props.color;
    return (
      <i className={className} />
    );
  }
});
