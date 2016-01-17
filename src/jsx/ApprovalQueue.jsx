var ApprovalQueue = React.createClass({
  propTypes: {
    serviceCredits: React.PropTypes.array,
    serviceCreditApprovalHandler: React.PropTypes.func,
    serviceCreditDeletionHandler: React.PropTypes.func,
    certifications: React.PropTypes.array,
    certificationApprovalHandler: React.PropTypes.func,
    certificationDeletionHandler: React.PropTypes.func
  },
  getDefaultProps: function() {
    return {
      serviceCredits: [],
      serviceCreditApprovalHandler: function(){},
      serviceCreditDeletionHandler: function(){},
      certifications: [],
      certificationApprovalHandler: function(){},
      certificationDeletionHandler: function(){}
    };
  },
  getInitialState: function() {
    return {};
  },
  render: function() {
    var component = this;
    var serviceCreditRequests = this.props.serviceCredits.filter(function(credit) {
      return (credit.approver === '');
    }).map(function(credit) {
      return (<ServiceCreditQueueItem
        approve={component.props.serviceCreditApprovalHandler}
        reject={component.props.serviceCreditDeletionHandler}
        key={credit.id}
        {...credit}
      />);
    });
    var certificationRequests = this.props.certifications.filter(function(cert) {
      return (cert.approver === '');
    }).map(function(cert) {
      return (<CertificationQueueItem
        approve={component.props.certificationApprovalHandler}
        reject={component.props.certificationDeletionHandler}
        key={cert.id}
        {...cert}
      />);
    });
    return (
      <div className='ui feed'>
        <RoleRequestQueueItem
          name='Eli Russ'
          role='Crew Chief Trainee' />
        {certificationRequests}
        {serviceCreditRequests}
      </div>
    );
  }
});

