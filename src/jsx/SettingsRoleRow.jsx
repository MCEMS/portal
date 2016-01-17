var SettingsRoleRow = React.createClass({
  propTypes: {
    role: React.PropTypes.string,
    color: React.PropTypes.string,
    showOnSchedule: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      role: '',
      color: '',
      showOnSchedule: false
    };
  },

  getInitialState: function() {
    return {};
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

