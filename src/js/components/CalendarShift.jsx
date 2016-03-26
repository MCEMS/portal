import React, { PropTypes } from 'react';
import moment from 'moment';

const CalendarShift = (props) => {
  const today = props.renderForDate.startOf('day');
  const offset = moment.duration(props.start.diff(today)).as('hours');
  const length = moment.duration(props.end.diff(today)).as('hours');
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
  renderForDate: PropTypes.instanceOf(moment).required,
  start: PropTypes.instanceOf(moment).required,
  end: PropTypes.instanceOf(moment).required,
  me: PropTypes.bool.required,
  name: PropTypes.string.required,
  unit: PropTypes.string.required,
  role: PropTypes.string.required,
};

export default CalendarShift;
