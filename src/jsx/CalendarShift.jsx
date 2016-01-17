var CalendarShift = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    unit: React.PropTypes.string,
    role: React.PropTypes.string,
    renderForDate: React.PropTypes.instanceOf(moment),
    start: React.PropTypes.instanceOf(moment),
    end: React.PropTypes.instanceOf(moment),
    me: React.PropTypes.bool
  },
  getDefaultProperties: function() {
    return {
      name: '',
      unit: '',
      role: '',
      renderForDate: moment(),
      start: moment(),
      end: moment(),
      me: false
    };
  },
  render: function() {
    var className = 'shift';
    var today = this.props.renderForDate.startOf('day');
    var offset = moment.duration(this.props.start.diff(today)).as('hours');
    var length = moment.duration(this.props.end.diff(today)).as('hours');

    className += ' offset-' + offset;
    className += ' length-' + length;
    className += this.props.me? ' me' : '';

    return (
      <div className={className}>
        {this.props.name} {this.props.unit}
        <span className='role'>{this.props.role}</span>
      </div>
    );
  }
});
