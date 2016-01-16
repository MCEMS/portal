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
            <div className='ui tiny compact basic red button'><Icon icon='remove' /> Reject</div>
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
      <strong>{this.props.certification}</strong> certification <strong>{this.props.number}</strong> expiring on <strong>{this.props.expires}</strong>.
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
        approve={this.props.approve}
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
      return <ServiceCreditQueueItem approve={component.props.serviceCreditApprovalHandler} key={credit.id} {...credit} />;
    });
    return (
      <div className='ui feed'>
        <RoleRequestQueueItem
          name='Eli Russ'
          role='Crew Chief Trainee' />
        <CertificationQueueItem
          name='Mark Tamarin'
          certification='Pennsylvania EMT'
          number='123456'
          expires='December 31, 2016' />
        {serviceCreditRequests}
      </div>
    );
  }
});
