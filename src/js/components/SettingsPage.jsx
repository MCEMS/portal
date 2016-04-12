import React from 'react';
import SettingsCerts from './SettingsCerts';
import SettingsRoles from './SettingsRoles';

const SettingsPage = () => (
  <div className="ui two column grid">
    <div className="column">
      <SettingsCerts />
    </div>
    <div className="column">
      <SettingsRoles />
    </div>
  </div>
);

export default SettingsPage;
