var MemberServiceCredit = React.createClass({
  render: function() {
    return (
      <div className='ui card'>
        <div className='content'>
          <div className='header'>{this.props.date}</div>
          <div className='description'>{this.props.description}</div>
        </div>
        <div className='extra'>
          <Icon icon='check' color='green' /> Approved by {this.props.approver}
        </div>
      </div>
    );
  }
});

var MemberServiceCredits = React.createClass({
  render: function() {
    return (
      <div className='ui three cards'>
        <MemberServiceCredit approver='Eli Russ' date='January 3rd' description='Completed standby for St. Patricks Day 5K from 12:15pm to 1:30pm.' />
        <MemberServiceCredit approver='Ashley Landesman' date='May 15th' description='Attended Smash Mouth concert standby from 9:00pm to 11:30pm.'/>
        <MemberServiceCredit approver='Mark Tamarin' date='September 27th' description='Completed through the Red Doors MCEMS tabling for the full 2.5 hours.'/>
        <MemberServiceCredit approver='Ashley Landesman' date='October 1st' description='Tabled for MCEMS at the Fall 2015 Activities Fair from 1530 to 1800. Helped crew set up table and recruit interested new members.'/>
        <div className='ui card'>
          <div className='content'>
            <div className='description'>
              <p>
                <div className='ui fluid input'>
                  <input type='text' placeholder='Date' />
                </div>
              </p>
              <p>
                <div className='ui form'>
                  <textarea rows='3' placeholder='Brief description of what you did' />
                </div>
              </p>
            </div>
          </div>
          <div className='ui extra bottom attached one buttons'>
            <div className='ui green button'>Submit for approval</div>
          </div>
        </div>
      </div>
    );
  }
});
