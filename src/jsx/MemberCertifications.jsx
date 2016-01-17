var MemberCertification = React.createClass({
  remove: function() {
    this.props.deleteCert(this.props.id);
  },
  render: function() {
    var dateFormat = 'MMMM Do, YYYY';
    var issued = this.props.issued? this.props.issued.format(dateFormat) : '';
    var expires = this.props.expires? this.props.expires.format(dateFormat) : '';
    return (
      <tr>
        <td>{this.props.type}</td>
        <td className='center aligned'>{this.props.number}</td>
        <td className='center aligned'>{issued}</td>
        <td className='center aligned'>{expires}</td>
        <td><button onClick={this.remove} className='ui tiny red basic fluid button'><Icon icon='trash outline' /> Delete</button></td>
      </tr>
    );
  }
});

var MemberCertifications = React.createClass({
  getInitialState: function() {
    return {
      type: this.props.types[0].type,
      number: '',
      issued: '',
      expires: ''
    };
  },
  handleTypeUpdate: function(event) {
    this.setState({ type: event.target.value });
  },
  handleNumberUpdate: function(event) {
    this.setState({ number: event.target.value });
  },
  handleIssuedUpdate: function(event) {
    this.setState({ issued: event.target.value });
  },
  handleExpiresUpdate: function(event) {
    this.setState({ expires: event.target.value });
  },
  save: function() {
    this.props.addCert(
      this.state.type,
      this.state.number,
      this.state.issued,
      this.state.expires
    );
    this.setState({
      number: '',
      issued: '',
      expires: ''
    });
  },
  render: function() {
    var component = this;
    var certs = this.props.certifications.filter(function(cert) {
      return (cert.approver !== '');
    }).map(function(cert) {
      return <MemberCertification deleteCert={component.props.deleteCert} key={cert.id} {...cert} />;
    });
    var types = this.props.types.map(function(type) {
      return <option value={type.type} key={type.id}>{type.type}</option>;
    });
    return (
      <table className='ui padded table'>
        <thead>
          <tr>
            <th className='three wide'>Certification</th>
            <th className='three wide center aligned'>Number</th>
            <th className='three wide center aligned'>Issued</th>
            <th className='three wide center aligned'>Expires</th>
            <th className='two wide'></th>
          </tr>
        </thead>
        <tbody>
          {certs}
        </tbody>
        <tfoot>
          <tr>
            <th className='ui form'>
              <div className='field'>
                <select value={this.state.type} onChange={this.handleTypeUpdate}>
                  {types}
                </select>
              </div>
            </th>
            <th>
              <div className='ui fluid input'> 
                <input
                  type='text'
                  value={this.state.number}
                  onChange={this.handleNumberUpdate}
                  placeholder='Certificate number'
                />
              </div>
            </th>
            <th>
              <div className='ui fluid input'> 
                <input
                  type='text'
                  placeholder='Issue date'
                  value={this.state.issued}
                  onChange={this.handleIssuedUpdate}
                />
              </div>
            </th>
            <th>
              <div className='ui fluid input'> 
                <input
                  type='text'
                  placeholder='Expiration date'
                  value={this.state.expires}
                  onChange={this.handleExpiresUpdate}
                />
              </div>
            </th>
            <th>
              <button onClick={this.save} className='ui green fluid button'><Icon icon='add' /> Add</button>
            </th>
          </tr>
        </tfoot>
      </table>
    );
  }
});
