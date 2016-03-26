import React, { PropTypes } from 'react';
import moment from 'moment';
import RelativeTime from './RelativeTime';
import Icon from './Icon';

class QueueItem extends React.Component {
  approve() {
    this.props.approve(this.props.id);
  }

  reject() {
    this.props.reject(this.props.id);
  }

  render() {
    return (
      <div className="event">
        <div className="label">
          <Icon icon={this.props.icon} />
        </div>
        <div className="content">
          <div className="summary">
            {this.props.summary}
            <div className="date">
              <RelativeTime time={this.props.requestedAt} />
            </div>
          </div>
          <div className="extra text">
            {this.props.body}
          </div>
          <div className="meta">
            <div
              onClick={this.approve}
              className="ui tiny compact green button"
            >
              <Icon icon="check" /> Approve
            </div>
            <div
              onClick={this.reject}
              className="ui tiny compact basic red button"
            >
              <Icon icon="remove" /> Reject
            </div>
          </div>
        </div>
      </div>
    );
  }
}
QueueItem.propTypes = {
  id: PropTypes.number,
  requestedAt: PropTypes.instanceOf(moment),
  summary: PropTypes.node,
  body: PropTypes.node,
  icon: PropTypes.string,
  approve: PropTypes.func,
  reject: PropTypes.func,
};
QueueItem.defaultProps = {
  id: 0,
  requestedAt: moment(),
  summary: <div>Something happened!</div>,
  body: <div />,
  icon: '',
  approve: () => {},
};

export default QueueItem;
