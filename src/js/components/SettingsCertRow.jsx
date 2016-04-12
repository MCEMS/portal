import React, { PropTypes } from 'react';
import Icon from './Icon';

const SettingsCertRow = (props) => (
  <tr>
    <td>
      <div className="ui large label">{props.certificationType}</div>
    </td>
    <td className="right aligned">
      <button className="ui fluid basic button">
        <Icon icon="pencil" /> Edit
      </button>
    </td>
  </tr>
);
SettingsCertRow.propTypes = {
  certificationType: PropTypes.string.isRequired,
};

export default SettingsCertRow;
