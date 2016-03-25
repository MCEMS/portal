const React = require('react');
const moment = require('moment');

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
  role: React.PropTypes.string,
  from: React.PropTypes.instanceOf(moment),
  to: React.PropTypes.instanceOf(moment),
};
MemberHistoryItem.defaultProps = {
  role: '',
  from: moment(),
  to: moment(),
};

module.exports = MemberHistoryItem;
