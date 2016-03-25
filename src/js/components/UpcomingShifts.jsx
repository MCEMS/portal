const React = require('react');
const UpcomingShift = require('./UpcomingShift');
const moment = require('moment');

module.exports = () => (
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
