var MemberHistoryItem = React.createClass({
  render: function() {
    return (
      <div className='item'>
        <div className='header'>{this.props.role}</div>
        <div className='description'>{this.props.from} &mdash; {this.props.to}</div>
      </div>
    );
  }
});

var MemberHistory = React.createClass({
  render: function() {
    return (
      <div className='ui relaxed list'>
        <MemberHistoryItem
          role='Driver'
          from='November 2011'
          to='June 2015' />
        <MemberHistoryItem
          role='Driver Trainee'
          from='October 2011'
          to='November 2011' />
        <MemberHistoryItem
          role='General Member'
          from='October 2011'
          to='June 2015' />
        <MemberHistoryItem
          role='Probationary Member'
          from='September 2011'
          to='October 2011' />
      </div>
    );
  }
});
