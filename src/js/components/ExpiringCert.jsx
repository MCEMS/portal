const React = require('react');
const Icon = require('./Icon');
const RelativeTime = require('./RelativeTime');
const moment = require('moment');

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
  date: React.PropTypes.instanceOf(moment),
  name: React.PropTypes.string,
};
ExpiringCert.defaultProps = {
  date: moment(),
  name: '',
};

module.exports = ExpiringCert;
