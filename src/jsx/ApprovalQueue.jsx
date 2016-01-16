var QueueItem = React.createClass({
  getDefaultProps: function() {
    return {
      requestedAt: moment(),
      summary: <div>Something happened!</div>,
      body: <div />,
      icon: '',
      approve: function(){}
    };
  },

  approve: function() {
    this.props.approve(this.props.id);
  },

  reject: function() {
    this.props.reject(this.props.id);
  },

  render: function() {
    return (
      <div className='event'>
        <div className='label'>
          <Icon icon={this.props.icon} />
        </div>
        <div className='content'>
          <div className='summary'>
            {this.props.summary}
            <div className='date'>
              <RelativeTime time={this.props.requestedAt} />
            </div>
          </div>
          <div className='extra text'>
            {this.props.body}
          </div>
          <div className='meta'>
            <div onClick={this.approve} className='ui tiny compact green button'><Icon icon='check' /> Approve</div>
            <div onClick={this.reject} className='ui tiny compact basic red button'><Icon icon='remove' /> Reject</div>
          </div>
        </div>
      </div>
    );
  }
});

var RoleRequestQueueItem = React.createClass({
  render: function() {
    var summary = this.props.name + ' requested the role ' + this.props.role;
    return (
      <QueueItem
        icon='tag'
        summary={summary}
        {...this.props} />
    );
  }
});

var CertificationQueueItem = React.createClass({
  render: function() {
    var summary = this.props.name + ' added a certification';
    var body = <div>
      <strong>{this.props.type}</strong> certification <strong>{this.props.number}</strong> expiring on <strong>{this.props.expires.format('MMMM Do, YYYY')}</strong>.
    </div>;

    return (
      <QueueItem
        icon='certificate'
        summary={summary}
        body={body}
        {...this.props} />
    );
  }
});

var ServiceCreditQueueItem = React.createClass({
  render: function() {
    var summary = this.props.name + ' requested a service credit';
    return (
      <QueueItem
        icon='wait'
        summary={summary}
        body={this.props.description}
        {...this.props} />
    );
  }
});

var ApprovalQueue = React.createClass({
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
