var SettingsPage = React.createClass({
  getRoles: function() {
    return [
      { role: 'Life Member' },
      {
        role: 'Crew Chief',
        color: 'blue',
        showOnSchedule: true
      },
      { role: 'Crew Chief Trainee' },
      {
        role: 'Driver',
        color: 'red',
        showOnSchedule: true
      },
      { role: 'Driver Trainee' },
      {
        role: 'General Member',
        color: 'green',
        showOnSchedule: true
      },
      { role: 'Probationary Member' },
      {
        role: 'Training Corps',
        color: 'violet',
        showOnSchedule: true
      },
      { role: 'Captain' },
      { role: 'Lieutenant' },
      { role: 'President' },
      { role: 'Secretary' },
      { role: 'Treasurer' },
      { role: 'Corresponding Secretary' },
      { role: 'Infection Control Officer' },
      { role: 'Technology Officer' },
      { role: 'Social Coordinator' },
    ];
  },

  getCerts: function() {
    return [

    ];
  },

  render: function() {
    return (
      <div>
        <SettingsCerts certs={this.getCerts()} />
        <SettingsRoles roles={this.getRoles()} />
      </div>
    );
  }
});
