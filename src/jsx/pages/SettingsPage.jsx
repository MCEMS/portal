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
      { label: 'Pennsylvania EMT' },
      { label: 'NREMT-B' },
      { label: 'Professional Rescuer CPR' }
    ];
  },

  render: function() {
    return (
      <div className='ui two column grid'>
        <div className='column'>
          <SettingsCerts certifications={this.getCerts()} />
        </div>
        <div className='column'>
          <SettingsRoles roles={this.getRoles()} />
        </div>
      </div>
    );
  }
});
