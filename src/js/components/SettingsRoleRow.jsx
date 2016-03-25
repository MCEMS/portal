const React = require('react');
const Icon = require('./Icon');

class SettingsRoleRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleShowOnSchedule() {
    this.props.updateRole(this.props.id, {
      id: this.props.id,
      role: this.props.role,
      showOnSchedule: !this.props.showOnSchedule,
    });
  }

  render() {
    return (
      <tr>
        <td>
          <div className="ui large label">{this.props.role}</div>
        </td>
        <td className="center aligned">
          <div className="ui toggle checkbox">
            <input
              type="checkbox"
              checked={this.props.showOnSchedule}
              onChange={this.toggleShowOnSchedule}
            />
            <label></label>
          </div>
        </td>
        <td className="right aligned">
          <button className="ui fluid basic button"><Icon icon="pencil" /> Edit</button>
        </td>
      </tr>
    );
  }
}
SettingsRoleRow.propTypes = {
  id: React.PropTypes.number,
  role: React.PropTypes.string,
  showOnSchedule: React.PropTypes.bool,
  updateRole: React.PropTypes.func,
};
SettingsRoleRow.defaultProps = {
  id: 0,
  role: '',
  color: '',
  showOnSchedule: false,
  updateRole: () => {},
};

module.exports = SettingsRoleRow;
