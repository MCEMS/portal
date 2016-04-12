import React, { PropTypes } from 'react';
import moment from 'moment';
import QueueItem from './QueueItem';

const CertificationQueueItem = (props) => {
  const summary = `${props.name} added a certification`;
  return (
    <QueueItem icon="certificate" summary={summary} {...props}>
      <strong>{props.type}</strong>
      {' certification '}
      <strong>{props.number}</strong>
      {' expiring on '}
      <strong>{props.expires.format('MMMM Do, YYYY')}</strong>.
    </QueueItem>
  );
};
CertificationQueueItem.propTypes = {
  id: PropTypes.number.isRequired,
  requestedOn: PropTypes.instanceOf(moment).isRequired,
  onApprove: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  number: PropTypes.string,
  expires: PropTypes.instanceOf(moment),
};
CertificationQueueItem.defaultProps = {
  number: '',
  expires: moment(),
};

export default CertificationQueueItem;
