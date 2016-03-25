const React = require('react');
const QueueItem = require('./QueueItem');

const RoleRequestQueueItem = (props) => {
  const summary = `${props.name} requested the role ${props.role}`;
  return (
    <QueueItem
      icon="tag"
      summary={summary}
      {...props}
    />
  );
};
RoleRequestQueueItem.propTypes = {
  name: React.PropTypes.string,
  role: React.PropTypes.string,
};
RoleRequestQueueItem.defaultProps = {
  name: '',
  role: '',
};

module.exports = RoleRequestQueueItem;
