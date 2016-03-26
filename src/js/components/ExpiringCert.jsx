import React, { PropTypes } from 'react';
import moment from 'moment';
import RelativeTime from './RelativeTime';
import Icon from './Icon';

const ExpiringCert = (props) => (
  <div className="item">
    <Icon icon="certificate" />
    <div className="content">
      <div className="header">
        {props.name}
      </div>
      <div className="description">
        <RelativeTime time={props.date} />
      </div>
    </div>
  </div>
);
ExpiringCert.propTypes = {
  date: PropTypes.instanceOf(moment),
  name: PropTypes.string,
};
ExpiringCert.defaultProps = {
  date: moment(),
  name: '',
};

export default ExpiringCert;
