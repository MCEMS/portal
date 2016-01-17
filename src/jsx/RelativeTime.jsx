var RelativeTime = React.createClass({
  propTypes: {
    time: React.PropTypes.instanceOf(moment)
  },
  getDefaultProps: function() {
    return {
      time: moment()
    };
  },
  getInitialState: function() {
    return {};
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

