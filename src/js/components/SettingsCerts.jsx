const React = require('react');
const SettingsCertRow = require('./SettingsCertRow');
const Icon = require('./Icon');

class SettingsCerts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
    };
  }

  handleTypeChange(event) {
    this.setState({ type: event.target.value });
  }

  create() {
    this.props.createCertificationType(this.state.type);
    this.setState({
      type: '',
    });
  }

  render() {
    const certifications = this.props.certifications.map((cert, idx) => (
      <SettingsCertRow {...cert} key={idx} />
    ));

    return (
      <table className="ui compact table">
        <thead>
          <tr>
            <th className="twelve wide">
              <h1 className="header">
                <Icon icon="certificate" /> Certification Types
              </h1>
            </th>
            <th className="four wide"></th>
          </tr>
        </thead>
        <tbody>
          {certifications}
        </tbody>
        <tfoot>
          <tr>
            <th>
              <div className="ui fluid input">
                <input
                  value={this.state.type}
                  onChange={this.handleTypeChange}
                  type="text"
                  placeholder="Type of certification"
                />
              </div>
            </th>
            <th className="right aligned">
              <button onClick={this.create} className="ui fluid green button">
                <Icon icon="add" /> Save
              </button>
            </th>
          </tr>
        </tfoot>
      </table>
    );
  }
}
SettingsCerts.propTypes = {
  certifications: React.PropTypes.array,
  createCertificationType: React.PropTypes.func,
};
SettingsCerts.defaultProps = {
  certifications: [],
  createCertificationType: () => {},
};

module.exports = SettingsCerts;
