var SettingsPage = React.createClass({
  propTypes: {
    app: React.PropTypes.any.isRequired
  },
  getDefaultProps: function() {
    return {
      app: null
    };
  },
  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <div className='ui two column grid'>
        <div className='column'>
          <SettingsCerts
            certifications={this.props.app.state.certificationTypes}
            createCertificationType={this.props.app.props.dataSource.CertificationType.create}
          />
        </div>
        <div className='column'>
          <SettingsRoles
            roles={this.props.app.state.roles}
            createRole={this.props.app.props.dataSource.Role.create}
            updateRole={this.props.app.props.dataSource.Role.update}
          />
        </div>
      </div>
    );
  }
});
