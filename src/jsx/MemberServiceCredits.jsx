var MemberServiceCredits = React.createClass({
  propTypes: {
    serviceCredits: React.PropTypes.array,
    handleNewCredit: React.PropTypes.func
  },
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
