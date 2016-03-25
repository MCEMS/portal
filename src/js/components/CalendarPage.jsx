const React = require('react');
const CalendarMonthView = require('./CalendarMonthView');
const CalendarSingleDay = require('./CalendarSingleDay');
const Icon = require('./Icon');

const CalendarPage = () => (
  <div className="CalendarPage">
    <div className="ui three column stackable grid">
      <div className="column">
        <CalendarMonthView month="September 2015" />
      </div>
      <div className="column">
        <CalendarMonthView month="October 2015" />
      </div>
      <div className="column">
        <CalendarMonthView month="November 2015" />
      </div>
    </div>
    <div className="ui hidden divider" />
    <CalendarSingleDay />
    <div className="ui primary button">
      <Icon icon="add" /> Add shift
    </div>
  </div>
);

module.exports = CalendarPage;
