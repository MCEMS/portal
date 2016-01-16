var MemberServiceCredit = React.createClass({
  render: function() {
    var extra = <div className='extra'>Pending approval</div>;
    if (this.props.approver) {
      extra = (
        <div className='extra'>
          <Icon icon='check' color='green' /> Approved by {this.props.approver}
        </div>
      );
    }
    return (
      <div className='ui card'>
        <div className='content'>
          <div className='header'>{this.props.performedAt.format('MMMM Do, YYYY')}</div>
          <div className='description'>{this.props.description}</div>
        </div>
        {extra}
      </div>
    );
  }
});

var MemberServiceCredits = React.createClass({
  getDefaultProps: function() {
    return {
      serviceCredits: []
    };
  },
  getInitialState: function() {
    return {
      date: null,
      description: ''
    };
  },
  addServiceCredit: function() {
    this.props.handleNewCredit(this.state.date, this.state.description);
    this.setState({
      date: null,
      description: ''
    });
  },
  handleDateChange: function(event) {
    this.setState({ date: event.target.value });
  },
  handleDescriptionChange: function(event) {
    this.setState({ description: event.target.value });
  },
  render: function() {
    var credits = this.props.serviceCredits.map(function(credit) {
      return <MemberServiceCredit key={credit.id} {...credit} />;
    });
    return (
      <div className='ui three cards'>
        {credits}
        <div className='ui card'>
          <div className='content'>
            <div className='ui transparent header input'>
              <input
                value={this.state.date}
                onChange={this.handleDateChange}
                type='text'
                placeholder='Enter date'
              />
            </div>
            <div className='ui description form'>
              <div className='ui transparent field'>
                <textarea
                  rows='3'
                  onChange={this.handleDescriptionChange}
                  value={this.state.description}
                  className='transparent'
                  placeholder='Brief description of what you did'
                />
              </div>
            </div>
          </div>
          <div className='ui extra bottom attached one buttons'>
            <div className='ui green button' onClick={this.addServiceCredit}>Submit for approval</div>
          </div>
        </div>
      </div>
    );
  }
});
