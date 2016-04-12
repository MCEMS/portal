import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addCertification } from '../actions';
import { findItem } from '../utils';
import Icon from './Icon';
import MemberCertification from './MemberCertification';

const getCertsToDisplay = (props) => (
  props.certifications.filter(cert => (
    cert.approvedBy !== null
  )).map(cert => {
    let type = findItem(cert.certificationTypeId, props.certificationTypes);
    if (type !== null) {
      type = type.certificationType;
    }
    return <MemberCertification key={cert.id} type={type} {...cert} />;
  })
);

const getTypeOptions = (types) => (
  types.map(type => (
    <option value={type.id} key={type.id}>
      {type.certificationType}
    </option>
  ))
);

let MemberCertifications = (props) => {
  let certificationTypeId = -1;
  let number = '';
  let issued = '';
  let expires = '';

  if (props.certificationTypes.length > 0) {
    certificationTypeId = props.certificationTypes[0].id;
  }

  const create = () => {
    props.onAddClick({
      personId: props.personId,
      certificationTypeId: parseInt(certificationTypeId, 10),
      number,
      issued,
      expires,
    });
  };

  return (
    <table className="ui padded table">
      <thead>
        <tr>
          <th className="three wide">Certification</th>
          <th className="three wide center aligned">Number</th>
          <th className="three wide center aligned">Issued</th>
          <th className="three wide center aligned">Expires</th>
          <th className="two wide"></th>
        </tr>
      </thead>
      <tbody>
        {getCertsToDisplay(props)}
      </tbody>
      <tfoot>
        <tr>
          <th className="ui form">
            <div className="field">
              <select
                defaultValue={certificationTypeId}
                onChange={e => certificationTypeId = e.target.value}
              >
                {getTypeOptions(props.certificationTypes)}
              </select>
            </div>
          </th>
          <th>
            <div className="ui fluid input">
              <input
                type="text"
                defaultValue={number}
                onChange={e => number = e.target.value}
                placeholder="Certificate number"
              />
            </div>
          </th>
          <th>
            <div className="ui fluid input">
              <input
                type="text"
                placeholder="Issue date"
                defaultValue={issued}
                onChange={e => issued = e.target.value}
              />
            </div>
          </th>
          <th>
            <div className="ui fluid input">
              <input
                type="text"
                placeholder="Expiration date"
                defaultValue={expires}
                onChange={e => expires = e.target.value}
              />
            </div>
          </th>
          <th>
            <button onClick={create} className="ui green fluid button">
              <Icon icon="add" /> Add
            </button>
          </th>
        </tr>
      </tfoot>
    </table>
  );
};
MemberCertifications.propTypes = {
  personId: PropTypes.number.isRequired,
  certificationTypes: PropTypes.array.isRequired,
  certifications: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  personId: state.personId,
  certificationTypes: state.certificationTypes,
  certifications: state.certifications,
});

const mapDispatchToProps = (dispatch) => ({
  onAddClick: cert => {
    dispatch(addCertification(cert));
  },
});

MemberCertifications = connect(mapStateToProps, mapDispatchToProps)(MemberCertifications);


export default MemberCertifications;
