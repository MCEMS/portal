import React, { PropTypes } from 'react';
import moment from 'moment';
import Icon from './Icon';

const UpcomingShift = (props) => (
  <div className="item">
    <Icon icon="calendar outline" />
    <div className="content">
      <div className="header">{props.start.format('MMMM Do')}</div>
      <div>
        {props.start.format('HH:mm')}
        {" to "}
        {props.end.format('HH:mm')}
        {" on "}
        {props.end.format('MMMM Do')}
      </div>
    </div>
  </div>
);
UpcomingShift.propTypes = {
  start: PropTypes.instanceOf(moment),
  end: PropTypes.instanceOf(moment),
};
UpcomingShift.defaultProps = {
  start: moment(),
  end: moment(),
};

export default UpcomingShift;
