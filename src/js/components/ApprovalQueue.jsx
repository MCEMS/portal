import React, { PropTypes } from 'react';
import ServiceCreditQueueItem from './ServiceCreditQueueItem';
import CertificationQueueItem from './CertificationQueueItem';
import RoleRequestQueueItem from './RoleRequestQueueItem';

const ApprovalQueue = (props) => {
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
  const certificationRequests = props.certifications.filter((cert) => (
    cert.approver === ''
  )).map((cert) => (
    <CertificationQueueItem
      approve={props.certificationApprovalHandler}
      reject={props.certificationDeletionHandler}
      key={cert.id}
      {...cert}
    />
  ));
  return (
    <div className="ui feed">
      <RoleRequestQueueItem
        name="Eli Russ"
        role="Crew Chief Trainee"
      />
      {certificationRequests}
      {serviceCreditRequests}
    </div>
  );
};
ApprovalQueue.propTypes = {
  serviceCredits: PropTypes.array,
  serviceCreditApprovalHandler: PropTypes.func,
  serviceCreditDeletionHandler: PropTypes.func,
  certifications: PropTypes.array,
  certificationApprovalHandler: PropTypes.func,
  certificationDeletionHandler: PropTypes.func,
};
ApprovalQueue.defaultProps = {
  serviceCredits: [],
  serviceCreditApprovalHandler: () => {},
  serviceCreditDeletionHandler: () => {},
  certifications: [],
  certificationApprovalHandler: () => {},
  certificationDeletionHandler: () => {},
};

export default ApprovalQueue;
