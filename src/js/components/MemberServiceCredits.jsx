const React = require('react');
const MemberServiceCredit = require('./MemberServiceCredit');

class MemberServiceCredits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      description: '',
    };
  }

  addServiceCredit() {
    this.props.handleNewCredit(this.state.date, this.state.description);
    this.setState({
      date: null,
      description: '',
    });
  }

  handleDateChange(event) {
    this.setState({ date: event.target.value });
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  render() {
    const credits = this.props.serviceCredits.map((credit) => (
      <MemberServiceCredit key={credit.id} {...credit} />
    ));
    return (
      <div className="ui three cards">
        {credits}
        <div className="ui card">
          <div className="content">
            <div className="ui transparent header input">
              <input
                value={this.state.date}
                onChange={this.handleDateChange}
                type="text"
                placeholder="Enter date"
              />
            </div>
            <div className="ui description form">
              <div className="ui transparent field">
                <textarea
                  rows="3"
                  onChange={this.handleDescriptionChange}
                  value={this.state.description}
                  className="transparent"
                  placeholder="Brief description of what you did"
                />
              </div>
            </div>
          </div>
          <div className="ui extra bottom attached one buttons">
            <div className="ui green button" onClick={this.addServiceCredit}>
              Submit for approval
            </div>
          </div>
        </div>
      </div>
    );
  }
}
MemberServiceCredits.propTypes = {
  serviceCredits: React.PropTypes.array,
  handleNewCredit: React.PropTypes.func,
};
MemberServiceCredits.defaultProps = {
  serviceCredits: [],
};

module.exports = MemberServiceCredits;
