import React, { PropTypes } from 'react';
import moment from 'moment';
import RelativeTime from './RelativeTime';
import Icon from './Icon';

const QueueItem = (props) => (
  <div className="event">
    <div className="label">
      <Icon icon={props.icon} />
    </div>
    <div className="content">
      <div className="summary">
        {props.summary}
        <div className="date">
          <RelativeTime time={props.requestedOn} />
        </div>
      </div>
      <div className="extra text">
        {props.body}
        {props.children}
      </div>
      <div className="meta">
        <div
          onClick={props.onApprove}
          className="ui tiny compact green button"
        >
          <Icon icon="check" /> Approve
        </div>
        <div
          onClick={props.onReject}
          className="ui tiny compact basic red button"
        >
          <Icon icon="remove" /> Reject
        </div>
      </div>
    </div>
  </div>
);
QueueItem.propTypes = {
  id: PropTypes.number.isRequired,
  requestedOn: PropTypes.instanceOf(moment).isRequired,
  summary: PropTypes.node.isRequired,
  body: PropTypes.node,
  children: PropTypes.array,
  icon: PropTypes.string.isRequired,
  onApprove: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired,
};
QueueItem.defaultProps = {
  body: <div />,
  children: [],
};

export default QueueItem;
