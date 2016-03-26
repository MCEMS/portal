import React from 'react';
import Moment from 'moment';
import UpcomingShift from './UpcomingShift';

const UpcomingShifts = () => (
  <div className="ui relaxed list">
    <UpcomingShift
      start={Moment([2016, 0, 12])}
      end={Moment([2016, 0, 13])}
    />
    <UpcomingShift
      start={Moment([2016, 0, 22])}
      end={Moment([2016, 0, 23])}
    />
  </div>
);

export default UpcomingShifts;
