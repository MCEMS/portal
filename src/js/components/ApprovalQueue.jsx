import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { approveCertification, rejectCertification } from '../actions';
import { findItem, getPersonName } from '../utils';
import ServiceCreditQueueItem from './ServiceCreditQueueItem';
import CertificationQueueItem from './CertificationQueueItem';
import RoleRequestQueueItem from './RoleRequestQueueItem';

const getCertificationItems = (props) => (
  props.certifications.filter(cert => (
    cert.approvedOn === null
  )).map(cert => {
    let requester = findItem(cert.personId, props.people);
    if (requester !== null) {
      requester = getPersonName(requester);
    }
    let type = findItem(cert.certificationTypeId, props.certificationTypes);
    if (type !== null) {
      type = type.certificationType;
    }
    return (
      <CertificationQueueItem
        onApprove={props.approveCertification(cert.id)}
        onReject={props.rejectCertification(cert.id)}
        key={cert.id}
        name={requester}
        type={type}
        {...cert}
      />
    );
  })
);

let ApprovalQueue = (props) => {
  const serviceCreditRequests = props.serviceCredits.filter((credit) => (
    credit.approver === ''
  )).map((credit) => (
    <ServiceCreditQueueItem
      approve={props.serviceCreditApprovalHandler}
      reject={props.serviceCreditDeletionHandler}
      key={credit.id}
      {...credit}
    />
  ));

  return (
    <div className="ui feed">
      {getCertificationItems(props)}
      {serviceCreditRequests}
    </div>
  );
};
ApprovalQueue.propTypes = {
  serviceCredits: PropTypes.array,
  serviceCreditApprovalHandler: PropTypes.func,
  serviceCreditDeletionHandler: PropTypes.func,
  certifications: PropTypes.array.isRequired,
  approveCertification: PropTypes.func.isRequired,
  rejectCertification: PropTypes.func.isRequired,
};
ApprovalQueue.defaultProps = {
  serviceCredits: [],
  serviceCreditApprovalHandler: () => {},
  serviceCreditDeletionHandler: () => {},
  certifications: [],
  approveCertification: () => {},
  rejectCertification: () => {},
};

const mapStateToProps = (state) => ({
  certifications: state.certifications,
  people: state.people,
  certificationTypes: state.certificationTypes,
});

const mapDispatchToProps = (dispatch) => ({
  approveCertification: id => () => dispatch(approveCertification(id)),
  rejectCertification: id => () => dispatch(rejectCertification(id)),
});

ApprovalQueue = connect(mapStateToProps, mapDispatchToProps)(ApprovalQueue);

export default ApprovalQueue;
