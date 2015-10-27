var ProfilePage = React.createClass({
  render: function() {
    var member = {};

    return (
      <div className='ui stackable grid'>

        <div className='twelve wide column'>
          <ApprovalQueue />
          <h1 className='ui horizontal divider header'>My Profile</h1>
          <MemberInfoEdit member={member} />
        </div>

        <div className='four wide column'>
          <div className='ui horizontal divider'>Upcoming Shifts</div>
          <UpcomingShifts />
          <div className='ui horizontal divider'>Expiring Certs</div>
          <ExpiringCerts />
          <div className='ui horizontal divider'>History</div>
          <MemberHistory />
        </div>
      </div>
    );
  }
});
