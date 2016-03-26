import React, { PropTypes } from 'react';
import SettingsCerts from './SettingsCerts';
import SettingsRoles from './SettingsRoles';

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
  app: PropTypes.func,
};

export default SettingsPage;
