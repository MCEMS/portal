import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addCertificationType } from '../actions';
import SettingsCertRow from './SettingsCertRow';
import Icon from './Icon';

let SettingsCerts = (props) => {
  let certificationType = '';

  const certifications = props.certificationTypes.map((cert, idx) => (
    <SettingsCertRow {...cert} key={idx} />
  ));

  const create = () => {
    props.createCertificationType(certificationType);
  };

  const handleCertificationTypeChange = e => {
    certificationType = e.target.value;
  };

  return (
    <table className="ui compact table">
      <thead>
        <tr>
          <th className="twelve wide">
            <h1 className="header">
              <Icon icon="certificate" /> Certification Types
            </h1>
          </th>
          <th className="four wide"></th>
        </tr>
      </thead>
      <tbody>
        {certifications}
      </tbody>
      <tfoot>
        <tr>
          <th>
            <div className="ui fluid input">
              <input
                defaultValue={certificationType}
                onChange={handleCertificationTypeChange}
                type="text"
                placeholder="Type of certification"
              />
            </div>
          </th>
          <th className="right aligned">
            <button onClick={create} className="ui fluid green button">
              <Icon icon="add" /> Save
            </button>
          </th>
        </tr>
      </tfoot>
    </table>
  );
};
SettingsCerts.propTypes = {
  certificationTypes: PropTypes.array.isRequired,
  createCertificationType: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  certificationTypes: state.certificationTypes,
});

const mapDispatchToProps = (dispatch) => ({
  createCertificationType: (certificationType) => {
    dispatch(addCertificationType(certificationType));
  },
});

SettingsCerts = connect(mapStateToProps, mapDispatchToProps)(SettingsCerts);

export default SettingsCerts;
