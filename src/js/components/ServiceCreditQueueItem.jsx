const React = require('react');
const QueueItem = require('./QueueItem');
const moment = require('moment');

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
  id: React.PropTypes.number,
  requestedAt: React.PropTypes.instanceOf(moment),
  approve: React.PropTypes.func,
  reject: React.PropTypes.func,
  name: React.PropTypes.string,
  description: React.PropTypes.string,
};
ServiceCreditQueueItem.defaultProps = {
  id: 0,
  requestedAt: moment(),
  approve: () => {},
  reject: () => {},
  name: '',
  description: '',
};

module.exports = ServiceCreditQueueItem;
