import React from 'react';
import Moment from 'moment';

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
  time: React.PropTypes.instanceOf(Moment),
};
RelativeTime.defaultProps = {
  time: Moment(),
};

export default RelativeTime;
