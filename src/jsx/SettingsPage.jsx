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
  getRoles: function() {
    return [
      { role: 'Life Member' },
      {
        role: 'Crew Chief',
        color: 'teal',
        showOnSchedule: true
      },
      { role: 'Crew Chief Trainee' },
      {
        role: 'Driver',
        color: 'violet',
        showOnSchedule: true
      },
      { role: 'Driver Trainee' },
      { role: 'General Member' },
      { role: 'Probationary Member' },
      {
        role: 'Training Corps',
        color: 'orange',
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

  render: function() {
    return (
      <div className='ui two column grid'>
        <div className='column'>
          <SettingsCerts
            certifications={this.props.app.state.certificationTypes}
            createCertificationType={this.props.app.props.dataSource.CertificationTypes.create}
          />
        </div>
        <div className='column'>
          <SettingsRoles roles={this.getRoles()} />
        </div>
      </div>
    );
  }
});
