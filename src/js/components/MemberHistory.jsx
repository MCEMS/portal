import React from 'react';
import Moment from 'moment';
import MemberHistoryItem from './MemberHistoryItem';

const MemberHistory = () => (
  <div className="ui relaxed list">
    <MemberHistoryItem
      role="Driver"
      from={Moment()}
      to={Moment()}
    />
    <MemberHistoryItem
      role="Driver Trainee"
      from={Moment()}
      to={Moment()}
    />
    <MemberHistoryItem
      role="General Member"
      from={Moment()}
      to={Moment()}
    />
    <MemberHistoryItem
      role="Probationary Member"
      from={Moment()}
      to={Moment()}
    />
  </div>
);

export default MemberHistory;
