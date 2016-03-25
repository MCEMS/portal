const React = require('react');
const Icon = require('./Icon');

module.exports = () => (
  <div className="item">
    <Icon icon="calendar outline" />
    <div className="content">
      <div className="header">{this.props.start.format('MMMM Do')}</div>
      <div>
        {this.props.start.format('HH:mm')}
        {" to "}
        {this.props.end.format('HH:mm')}
        {" on "}
        {this.props.end.format('MMMM Do')}
      </div>
    </div>
  </div>
);
