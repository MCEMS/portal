const React = require('react');
const moment = require('moment');
const MemberHistoryItem = require('./MemberHistoryItem');

const MemberHistory = () => (
  <div className="ui relaxed list">
    <MemberHistoryItem
      role="Driver"
      from={moment()}
      to={moment()}
    />
    <MemberHistoryItem
      role="Driver Trainee"
      from={moment()}
      to={moment()}
    />
    <MemberHistoryItem
      role="General Member"
      from={moment()}
      to={moment()}
    />
    <MemberHistoryItem
      role="Probationary Member"
      from={moment()}
      to={moment()}
    />
  </div>
);

module.exports = MemberHistory;
