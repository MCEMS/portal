import React, { PropTypes } from 'react';
import Moment from 'moment';
import QueueItem from './QueueItem';

const ServiceCreditQueueItem = (props) => {
  const summary = '#{props.name} requested a service credit';
  return (
    <QueueItem
      icon="wait"
      summary={summary}
      body={props.description}
      {...props}
    />
  );
};
ServiceCreditQueueItem.propTypes = {
  id: PropTypes.number,
  requestedAt: PropTypes.instanceOf(Moment),
  approve: PropTypes.func,
  reject: PropTypes.func,
  name: PropTypes.string,
  description: PropTypes.string,
};
ServiceCreditQueueItem.defaultProps = {
  id: 0,
  requestedAt: Moment(),
  approve: () => {},
  reject: () => {},
  name: '',
  description: '',
};

export default ServiceCreditQueueItem;
