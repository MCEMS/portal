const React = require('react');
const SettingsCerts = require('./SettingsCerts');
const SettingsRoles = require('./SettingsRoles');

const SettingsPage = (props) => (
  <div className="ui two column grid">
    <div className="column">
      <SettingsCerts
        certifications={props.app.state.certificationTypes}
        createCertificationType={props.app.props.dataSource.CertificationType.create}
      />
    </div>
    <div className="column">
      <SettingsRoles
        roles={props.app.state.roles}
        createRole={props.app.props.dataSource.Role.create}
        updateRole={props.app.props.dataSource.Role.update}
      />
    </div>
  </div>
);
SettingsPage.propTypes = {
  app: React.PropTypes.func,
};

module.exports = SettingsPage;
