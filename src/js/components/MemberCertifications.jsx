import React, { PropTypes } from 'react';
import Icon from './Icon';
import MemberCertification from './MemberCertification';

class MemberCertifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      number: '',
      issued: '',
      expires: '',
    };
  }

  handleTypeUpdate(event) {
    this.setState({ type: event.target.value });
  }

  handleNumberUpdate(event) {
    this.setState({ number: event.target.value });
  }

  handleIssuedUpdate(event) {
    this.setState({ issued: event.target.value });
  }

  handleExpiresUpdate(event) {
    this.setState({ expires: event.target.value });
  }

  save() {
    this.props.addCert(
      this.state.type,
      this.state.number,
      this.state.issued,
      this.state.expires
    );
    this.setState({
      number: '',
      issued: '',
      expires: '',
    });
  }

  render() {
    const certs = this.props.certifications.filter((cert) => (
      cert.approver !== ''
    )).map((cert) => (
      <MemberCertification
        deleteCert={this.props.deleteCert}
        key={cert.id}
        {...cert}
      />
    ));
    const types = this.props.types.map((type) => (
      <option value={type.type} key={type.id}>{type.type}</option>
    ));
    return (
      <table className="ui padded table">
        <thead>
          <tr>
            <th className="three wide">Certification</th>
            <th className="three wide center aligned">Number</th>
            <th className="three wide center aligned">Issued</th>
            <th className="three wide center aligned">Expires</th>
            <th className="two wide"></th>
          </tr>
        </thead>
        <tbody>
          {certs}
        </tbody>
        <tfoot>
          <tr>
            <th className="ui form">
              <div className="field">
                <select value={this.state.type} onChange={this.handleTypeUpdate}>
                  {types}
                </select>
              </div>
            </th>
            <th>
              <div className="ui fluid input">
                <input
                  type="text"
                  value={this.state.number}
                  onChange={this.handleNumberUpdate}
                  placeholder="Certificate number"
                />
              </div>
            </th>
            <th>
              <div className="ui fluid input">
                <input
                  type="text"
                  placeholder="Issue date"
                  value={this.state.issued}
                  onChange={this.handleIssuedUpdate}
                />
              </div>
            </th>
            <th>
              <div className="ui fluid input">
                <input
                  type="text"
                  placeholder="Expiration date"
                  value={this.state.expires}
                  onChange={this.handleExpiresUpdate}
                />
              </div>
            </th>
            <th>
              <button onClick={this.save} className="ui green fluid button">
                <Icon icon="add" /> Add
              </button>
            </th>
          </tr>
        </tfoot>
      </table>
    );
  }
}
MemberCertifications.propTypes = {
  types: PropTypes.array,
  certifications: PropTypes.array,
  addCert: PropTypes.func,
  deleteCert: PropTypes.func,
};
MemberCertifications.defaultProps = {
  types: [],
  certifications: [],
  addCert: () => {},
  deleteCert: () => {},
};

export default MemberCertifications;
