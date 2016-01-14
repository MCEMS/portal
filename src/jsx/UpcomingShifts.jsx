var UpcomingShift = React.createClass({
  render: function() {
    return (
      <div className='item'>
        <Icon icon='calendar outline' />
        <div className='content'>
          <div className='header'>{this.props.start_date}</div>
          <div>{this.props.start_time} to {this.props.end_time} on {this.props.end_date}</div>
        </div>
      </div>
    );
  }
});

var UpcomingShifts = React.createClass({
  render: function() {
    return (
      <div className='ui relaxed list'>
        <UpcomingShift
          start_date='October 30'
          start_time='17:00'
          end_date='October 31'
          end_time='08:00' />
        <UpcomingShift
          start_date='November 30'
          start_time='17:00'
          end_date='December 1'
          end_time='08:00' />
      </div>
    );
  }
});
