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
          <button className='ui basic button'><Icon icon='pencil' /> Edit</button>
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
      <div className='ui segment'>
        <div className='ui right floated header'>
          <button className='ui green button'>
            <Icon icon='add plus' /> Add
          </button>
        </div>
        <h1 className='ui left floated header'>
          <Icon icon='tag' />
          <div className='content'>
            Roles
          </div>
        </h1>
        <table className='ui fixed table'>
          <thead>
            <tr>
              <th className='ten wide'></th>
              <th className='three wide center aligned'>Show on schedule</th>
              <th className='three wide'></th>
            </tr>
          </thead>
          <tbody>
            {roles}
          </tbody>
        </table>
      </div>
    );
  }
});
