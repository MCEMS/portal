const React = require('react');
const moment = require('moment');

class RelativeTime extends React.Component {
  componentDidMount() {
    const updateIntervalSeconds = 60;
    this.timer = setInterval(() => {
      this.forceUpdate();
    }, updateIntervalSeconds * 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <time title={this.props.time.format('MMMM Do, YYYY HH:mm:ss')}>
        {this.props.time.fromNow()}
      </time>
    );
  }
}
RelativeTime.propTypes = {
  time: React.PropTypes.instanceOf(moment),
};
RelativeTime.defaultProps = {
  time: moment(),
};

module.exports = RelativeTime;
