var SettingsRoleRow = React.createClass({
  propTypes: {
    id: React.PropTypes.number,
    role: React.PropTypes.string,
    showOnSchedule: React.PropTypes.bool,
    updateRole: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      id: 0,
      role: '',
      color: '',
      showOnSchedule: false,
      updateRole: function() {}
    };
  },

  getInitialState: function() {
    return {};
  },

  toggleShowOnSchedule: function() {
    this.props.updateRole(this.props.id, {
      id: this.props.id,
      role: this.props.role,
      showOnSchedule: !this.props.showOnSchedule
    });
  },

  render: function() {
    return (
      <tr>
        <td>
          <div className='ui large label'>{this.props.role}</div>
        </td>
        <td className='center aligned'>
          <div className='ui toggle checkbox'>
            <input
              type='checkbox'
              checked={this.props.showOnSchedule}
              onChange={this.toggleShowOnSchedule}
            />
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

