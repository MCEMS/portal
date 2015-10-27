var Icon = React.createClass({
  propTypes: {
    icon: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      icon: 'alert'
    };
  },

  render: function() {
    var className = 'icon ' + this.props.icon;
    return (
      <i className={className} />
    );
  }
});
