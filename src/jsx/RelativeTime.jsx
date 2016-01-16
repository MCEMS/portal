var RelativeTime = React.createClass({
  getDefaultProps: function() {
    return {
      time: moment()
    };
  },
  componentDidMount: function() {
    var updateIntervalSeconds = 60;
    var component = this;
    setInterval(function() {
      if (component.isMounted()) {
        component.forceUpdate();
      }
    }, updateIntervalSeconds*1000);
  },
  render: function() {
    return <time title={this.props.time.format('MMMM Do, YYYY HH:mm:ss')}>{this.props.time.fromNow()}</time>;
  }
});

