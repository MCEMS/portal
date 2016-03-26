import Moment from 'moment';
import React from 'react';
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
UpcomingShift.defaultProps = {
    start: Moment(),
    end: Moment(),
};

export default UpcomingShift;
