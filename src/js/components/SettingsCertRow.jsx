import React, { PropTypes } from 'react';
import Icon from './Icon';

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
  type: PropTypes.string,
};

export default SettingsCertRow;
