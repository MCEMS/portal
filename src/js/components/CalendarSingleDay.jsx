import React from 'react';
import moment from 'moment';
import CalendarShift from './CalendarShift';

const CalendarSingleDay = () => {
  let shifts = [
    {
      name: 'Ben Burwell',
      unit: '348',
      role: 'Crew Chief',
      start: moment([2000, 1, 5]).hour(2),
      end: moment([2000, 1, 5]).hour(17),
      me: true,
    },
    {
      name: 'Ben Burwell',
      unit: '348',
      role: 'Crew Chief',
      start: moment([2000, 1, 4]),
      end: moment([2000, 1, 5]).hour(10),
      me: false,
    },
    {
      name: 'Ben Burwell',
      unit: '348',
      role: 'Crew Chief',
      start: moment([2000, 1, 5]).hour(10),
      end: moment([2000, 1, 7]),
      me: false,
    },
  ];
  shifts = shifts.map((shift, idx) => {
    const date = moment([2000, 1, 5]);
    if (moment(shift.start).isAfter(moment(date).endOf('day'))) {
      return null;
    }
    if (moment(shift.end).isBefore(moment(date).startOf('day'))) {
      return null;
    }
    return <CalendarShift renderForDate={date} {...shift} key={idx} />;
  });
  return (
    <div>
      <h1 className="ui horizontal divider header">Wednesday, October 14th 2015</h1>
      <div className="timeline-tickmarks">
        <div className="hour"><div className="rotate">00<small>:00</small></div></div>
        <div className="hour"><div className="rotate">01<small>:00</small></div></div>
        <div className="hour"><div className="rotate">02<small>:00</small></div></div>
        <div className="hour"><div className="rotate">03<small>:00</small></div></div>
        <div className="hour"><div className="rotate">04<small>:00</small></div></div>
        <div className="hour"><div className="rotate">05<small>:00</small></div></div>
        <div className="hour"><div className="rotate">06<small>:00</small></div></div>
        <div className="hour"><div className="rotate">07<small>:00</small></div></div>
        <div className="hour"><div className="rotate">08<small>:00</small></div></div>
        <div className="hour"><div className="rotate">09<small>:00</small></div></div>
        <div className="hour"><div className="rotate">10<small>:00</small></div></div>
        <div className="hour"><div className="rotate">11<small>:00</small></div></div>
        <div className="hour"><div className="rotate">12<small>:00</small></div></div>
        <div className="hour"><div className="rotate">13<small>:00</small></div></div>
        <div className="hour"><div className="rotate">14<small>:00</small></div></div>
        <div className="hour"><div className="rotate">15<small>:00</small></div></div>
        <div className="hour"><div className="rotate">16<small>:00</small></div></div>
        <div className="hour"><div className="rotate">17<small>:00</small></div></div>
        <div className="hour"><div className="rotate">18<small>:00</small></div></div>
        <div className="hour"><div className="rotate">19<small>:00</small></div></div>
        <div className="hour"><div className="rotate">20<small>:00</small></div></div>
        <div className="hour"><div className="rotate">21<small>:00</small></div></div>
        <div className="hour"><div className="rotate">22<small>:00</small></div></div>
        <div className="hour"><div className="rotate">23<small>:00</small></div></div>
        <div className="hour"><div className="rotate">24<small>:00</small></div></div>
      </div>
      <div className="shifts">
        {shifts}
      </div>
    </div>
  );
};

export default CalendarSingleDay;
