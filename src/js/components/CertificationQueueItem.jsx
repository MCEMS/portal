const React = require('react');
const QueueItem = require('./QueueItem');
const moment = require('moment');

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
  id: React.PropTypes.number,
  requestedAt: React.PropTypes.instanceOf(moment),
  approve: React.PropTypes.func,
  reject: React.PropTypes.func,
  name: React.PropTypes.string,
  type: React.PropTypes.string,
  number: React.PropTypes.string,
  expires: React.PropTypes.instanceOf(moment),
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

module.exports = CertificationQueueItem;
