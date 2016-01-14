var SettingsRoleRow = React.createClass({
  getDefaultProps: function() {
    return {
      role: '',
      color: '',
      showOnSchedule: false
    };
  },

  render: function() {
    var className = 'ui ' + this.props.color + ' large label';
    return (
      <tr>
        <td>
          <div className={className}>{this.props.role}</div>
        </td>
        <td className='center aligned'>
          <div className='ui toggle checkbox'>
            <input type='checkbox' checked={this.props.showOnSchedule} />
            <label></label>
          </div>
        </td>
        <td className='right aligned'>
          <button className='ui fluid basic button'><Icon icon='pencil' /> Edit</button>
        </td>
      </tr>
    );
  }
});

var SettingsRoles = React.createClass({
  getDefaultProps: function() {
    return {
      roles: []
    };
  },

  render: function() {
    var roles = this.props.roles
      .sort(function(a, b) {
        if (a.showOnSchedule && !b.showOnSchedule) return -1;
        if (b.showOnSchedule && !a.showOnSchedule) return 1;
        return 0;
      })
      .map(function(role, idx) {
        return <SettingsRoleRow {...role} key={idx} />
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
                <input type='text' placeholder='Role name' />
              </div>
            </th>
            <th className='center aligned'>
              <div className='ui toggle checkbox'>
                <input type='checkbox' checked={this.props.showOnSchedule} />
                <label></label>
              </div>
            </th>
            <th className='right aligned'>
              <button className='ui fluid green button'><Icon icon='add' /> Save</button>
            </th>
          </tr>
        </tfoot>
      </table>
    );
  }
});