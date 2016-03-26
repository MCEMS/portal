import React from 'react';
import moment from 'moment';
import UpcomingShift from './UpcomingShift';

const UpcomingShifts = () => (
  <div className="ui relaxed list">
    <UpcomingShift
      start={moment([2016, 0, 12])}
      end={moment([2016, 0, 13])}
    />
    <UpcomingShift
      start={moment([2016, 0, 22])}
      end={moment([2016, 0, 23])}
    />
  </div>
);

export default UpcomingShifts;
