import React, { PropTypes } from 'react';
import Moment from 'moment';
import QueueItem from './QueueItem';

const CertificationQueueItem = (props) => {
  const summary = `${props.name} added a certification`;
  return (
    <QueueItem icon="certificate" summary={summary} {...this.props}>
      <strong>{this.props.type}</strong>
      {' certification '}
      <strong>{this.props.number}</strong>
      {' expiring on '}
      <strong>{this.props.expires.format('MMMM Do, YYYY')}</strong>.
    </QueueItem>
  );
};
CertificationQueueItem.propTypes = {
  id: PropTypes.number,
  requestedAt: PropTypes.instanceOf(Moment),
  approve: PropTypes.func,
  reject: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  number: PropTypes.string,
  expires: PropTypes.instanceOf(Moment),
};
CertificationQueueItem.defaultProps = {
  id: 0,
  requestedAt: Moment(),
  approve: () => {},
  reject: () => {},
  name: '',
  type: '',
  number: '',
  expires: Moment(),
};

export default CertificationQueueItem;
