const React = require('react');
const Icon = require('./Icon');

const SettingsCertRow = (props) => (
  <tr>
    <td>
      <div className="ui large label">{props.type}</div>
    </td>
    <td className="right aligned">
      <button className="ui fluid basic button">
        <Icon icon="pencil" /> Edit
      </button>
    </td>
  </tr>
);
SettingsCertRow.propTypes = {
  type: React.PropTypes.string,
};

module.exports = SettingsCertRow;
