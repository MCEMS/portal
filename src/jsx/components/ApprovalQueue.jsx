var QueueItem = React.createClass({
  getDefaultProps: function() {
    return {
      time: 'now',
      summary: <div>Something happened!</div>,
      body: <div />,
      icon: ''
    };
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
              {this.props.time}
            </div>
          </div>
          <div className='extra text'>
            {this.props.body}
          </div>
          <div className='meta'>
            <div className='ui mini red button'><Icon icon='remove circle' /> Reject</div>
            <div className='ui mini green button'><Icon icon='check circle' /> Approve</div>
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
        {...this.props} />
    );
  }
});

var ApprovalQueue = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Approval Queue</h2>
        <div className='ui large feed'>
          <RoleRequestQueueItem
            name='Eli Russ'
            role='Crew Chief'
            time='2 days ago' />
          <CertificationQueueItem
            name='Mark Tamarin'
            certification='Pennsylvania EMT'
            number='123456'
            expires='December 31, 2016'
            time='3 days ago' />
          <ServiceCreditQueueItem
            name='Ashley Landesman'
            description='I was at the presidential inauguration for the whole time'
            time='a week ago' />
        </div>
      </div>
    );
  }
});