const React = require('react');
const moment = require('moment');

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
  renderForDate: React.PropTypes.instanceOf(moment).required,
  start: React.PropTypes.instanceOf(moment).required,
  end: React.PropTypes.instanceOf(moment).required,
  me: React.PropTypes.bool.required,
  name: React.PropTypes.string.required,
  unit: React.PropTypes.string.required,
  role: React.PropTypes.string.required,
};

module.exports = CalendarShift;
