var ProfilePage = React.createClass({
  render: function() {
    return (
      <div className='ui stackable grid'>

        <div className='twelve wide column'>
          <ApprovalQueue />
        </div>

        <div className='four wide column'>
          <UpcomingShifts />
          <div className='ui divider' />
          <ExpiringCerts />
        </div>

        <h1 className='ui horizontal divider header'>About Me</h1>

        <div className='twelve wide column'>

        </div>
        <div className='four wide column'>
          <MemberHistory />
        </div>
      </div>
    );
  }
});
