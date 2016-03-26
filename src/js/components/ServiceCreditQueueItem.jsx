import React, { PropTypes } from 'react';
import moment from 'moment';
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
  requestedAt: PropTypes.instanceOf(moment),
  approve: PropTypes.func,
  reject: PropTypes.func,
  name: PropTypes.string,
  description: PropTypes.string,
};
ServiceCreditQueueItem.defaultProps = {
  id: 0,
  requestedAt: moment(),
  approve: () => {},
  reject: () => {},
  name: '',
  description: '',
};

export default ServiceCreditQueueItem;
