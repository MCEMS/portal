import React, { PropTypes } from 'react';
import moment from 'moment';
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
  requestedAt: PropTypes.instanceOf(moment),
  approve: PropTypes.func,
  reject: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  number: PropTypes.string,
  expires: PropTypes.instanceOf(moment),
};
CertificationQueueItem.defaultProps = {
  id: 0,
  requestedAt: moment(),
  approve: () => {},
  reject: () => {},
  name: '',
  type: '',
  number: '',
  expires: moment(),
};

export default CertificationQueueItem;
