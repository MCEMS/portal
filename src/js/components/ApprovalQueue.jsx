const React = require('react');
const ServiceCreditQueueItem = require('./ServiceCreditQueueItem');
const CertificationQueueItem = require('./CertificationQueueItem');
const RoleRequestQueueItem = require('./RoleRequestQueueItem');

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
  serviceCredits: React.PropTypes.array,
  serviceCreditApprovalHandler: React.PropTypes.func,
  serviceCreditDeletionHandler: React.PropTypes.func,
  certifications: React.PropTypes.array,
  certificationApprovalHandler: React.PropTypes.func,
  certificationDeletionHandler: React.PropTypes.func,
};
ApprovalQueue.defaultProps = {
  serviceCredits: [],
  serviceCreditApprovalHandler: () => {},
  serviceCreditDeletionHandler: () => {},
  certifications: [],
  certificationApprovalHandler: () => {},
  certificationDeletionHandler: () => {},
};

module.exports = ApprovalQueue;
