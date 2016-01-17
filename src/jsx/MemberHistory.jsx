var MemberHistory = React.createClass({
  propTypes: {
  },
  getDefaultProps: function() {
    return {};
  },
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <div className='ui relaxed list'>
        <MemberHistoryItem
          role='Driver'
          from={moment()}
          to={moment()} />
        <MemberHistoryItem
          role='Driver Trainee'
          from={moment()}
          to={moment()} />
        <MemberHistoryItem
          role='General Member'
          from={moment()}
          to={moment()} />
        <MemberHistoryItem
          role='Probationary Member'
          from={moment()}
          to={moment()} />
      </div>
    );
  }
});
