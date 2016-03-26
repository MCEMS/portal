import React from 'react';
import Moment from 'moment';

const CalendarShift = (props) => {
  const today = props.renderForDate.startOf('day');
  const offset = Moment.duration(props.start.diff(today)).as('hours');
  const length = Moment.duration(props.end.diff(today)).as('hours');
  let className = 'shift';
  className += ` offset-${offset}`;
  className += ` length-${length}`;
  className += props.me ? ' me' : '';
  return (
    <div className={className}>
      {props.name} {props.unit}
      <span className="role">{props.role}</span>
    </div>
  );
};
CalendarShift.propTypes = {
  renderForDate: PropTypes.instanceOf(Moment).required,
  start: PropTypes.instanceOf(Moment).required,
  end: PropTypes.instanceOf(Moment).required,
  me: PropTypes.bool.required,
  name: PropTypes.string.required,
  unit: PropTypes.string.required,
  role: PropTypes.string.required,
};

export default CalendarShift;
