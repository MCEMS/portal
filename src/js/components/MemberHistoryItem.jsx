import React, { PropTypes } from 'react';
import moment from 'moment';

const MemberHistoryItem = (props) => (
  <div className="item">
    <div className="header">{props.role}</div>
    <div className="description">
      {props.from.format('MMMM YYYY')}
      <span> &mdash; </span>
      {props.to.format('MMMM YYYY')}
    </div>
  </div>
);
MemberHistoryItem.propTypes = {
  role: PropTypes.string,
  from: PropTypes.instanceOf(moment),
  to: PropTypes.instanceOf(moment),
};
MemberHistoryItem.defaultProps = {
  role: '',
  from: moment(),
  to: moment(),
};

export default MemberHistoryItem;
