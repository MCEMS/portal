import React, { PropTypes } from 'react';
import QueueItem from './QueueItem';

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
  name: PropTypes.string,
  role: PropTypes.string,
};
RoleRequestQueueItem.defaultProps = {
  name: '',
  role: '',
};

export default RoleRequestQueueItem;
