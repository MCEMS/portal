var SettingsCerts = React.createClass({
  propTypes: {
    certifications: React.PropTypes.array,
    createCertificationType: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      certifications: [],
      createCertificationType: function() {}
    };
  },

  getInitialState: function() {
    return {
      type: ''
    };
  },

  handleTypeChange: function(event) {
    this.setState({ type: event.target.value });
  },

  create: function() {
    this.props.createCertificationType(this.state.type);
    this.setState({
      type: ''
    });
  },

  render: function() {
    var certifications = this.props.certifications.map(function(cert, idx) {
      return <SettingsCertRow {...cert} key={idx} />
    });

    return (
      <table className='ui compact table'>
        <thead>
          <tr>
            <th className='twelve wide'>
              <h1 className='header'>
                <Icon icon='certificate' /> Certification Types
              </h1>
            </th>
            <th className='four wide'></th>
          </tr>
        </thead>
        <tbody>
          {certifications}
        </tbody>
        <tfoot>
          <tr>
            <th>
              <div className='ui fluid input'>
                <input value={this.state.type} onChange={this.handleTypeChange} type='text' placeholder='Type of certification' />
              </div>
            </th>
            <th className='right aligned'>
              <button onClick={this.create} className='ui fluid green button'><Icon icon='add' /> Save</button>
            </th>
          </tr>
        </tfoot>
      </table>
    );
  }
});
