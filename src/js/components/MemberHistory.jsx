import React from 'react';
import moment from 'moment';
import MemberHistoryItem from './MemberHistoryItem';

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

export default MemberHistory;
