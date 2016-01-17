var SettingsRoles = React.createClass({
  propTypes: {
    roles: React.PropTypes.array,
    createRole: React.PropTypes.func,
    updateRole: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      roles: [],
      createRole: function() {},
      updateRole: function() {}
    };
  },

  getInitialState: function() {
    return {
      showOnSchedule: false,
      role: ''
    };
  },

  create: function() {
    this.props.createRole(this.state.role, this.state.showOnSchedule);
    this.setState({
      showOnSchedule: false,
      role: ''
    });
  },

  handleRoleChange: function(event) {
    this.setState({
      role: event.target.value
    });
  },

  handleScheduleCheckbox: function(event) {
    this.setState({
      showOnSchedule: !this.state.showOnSchedule
    });
  },

  render: function() {
    var component = this;
    var roles = this.props.roles.map(function(role) {
      return <SettingsRoleRow {...role} key={role.id} updateRole={component.props.updateRole} />
    });

    return (
      <table className='ui compact table'>
        <thead>
          <tr>
            <th className='ten wide'>
              <h1 className='header'>
                <Icon icon='tag' /> Roles
              </h1>
            </th>
            <th className='two wide center aligned'>Show on schedule</th>
            <th className='twelve wide'></th>
          </tr>
        </thead>
        <tbody>
          {roles}
        </tbody>
        <tfoot>
          <tr>
            <th>
              <div className='ui fluid input'>
                <input value={this.state.role} onChange={this.handleRoleChange} type='text' placeholder='Role name' />
              </div>
            </th>
            <th className='center aligned'>
              <div className='ui toggle checkbox'>
                <input type='checkbox' checked={this.state.showOnSchedule} onClick={this.handleScheduleCheckbox} />
                <label></label>
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
