var ProfilePage = React.createClass({
  propTypes: {
    app: React.PropTypes.any.isRequired
  },
  getDefaultProps: function() {
    return {
      app: null,
    };
  },
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <div className='ui stackable grid'>
        <div className='twelve wide column'>
          <ApprovalQueue
            serviceCredits={this.props.app.state.serviceCredits}
            certifications={this.props.app.state.certifications}
            serviceCreditApprovalHandler={this.props.app.props.dataSource.ServiceCredit.approve}
            serviceCreditDeletionHandler={this.props.app.props.dataSource.ServiceCredit.destroy}
            certificationApprovalHandler={this.props.app.props.dataSource.Certification.approve}
            certificationDeletionHandler={this.props.app.props.dataSource.Certification.destroy}
          />
          <div className='ui hidden divider' />
          <h1 className='ui horizontal divider header'>Contact Details</h1>
          <p>Keep us up to date so we can achieve maximum synergy :)</p>
          <MemberInfoEdit member={this.props.app.state.people[0]} />
          <div className='ui hidden divider' />
          <h1 className='ui horizontal divider header'>Certifications</h1>
          <p>
            Here are your verified certifications. Add all the ones you have!
            Don&rsquo;t see the one you have in the dropdown? Ask an admin to add it.
          </p>
          <p><strong>Note:</strong> It may take some time for your newly added certification to appear here, as it will need to be verified by an admin.</p>
          <MemberCertifications
            certifications={this.props.app.state.certifications}
            types={this.props.app.state.certificationTypes}
            addCert={this.props.app.props.dataSource.Certification.create}
            deleteCert={this.props.app.props.dataSource.Certification.destroy}
          />
          <div className='ui hidden divider' />
          <h1 className='ui horizontal divider header'>Service Credits</h1>
          <p>These are your approved service credits from this semester. To get started, just enter a brief description of what you did and submit it for approval!</p>
          <MemberServiceCredits handleNewCredit={this.props.app.props.dataSource.ServiceCredit.create} serviceCredits={this.props.app.state.serviceCredits} />
        </div>

        <div className='four wide column'>
          <div className='ui horizontal divider'>Upcoming Shifts</div>
          <UpcomingShifts />
          <div className='ui hidden divider'></div>
          <div className='ui horizontal divider'>Expiring Certs</div>
          <ExpiringCerts certifications={this.props.app.state.certifications} />
          <div className='ui hidden divider'></div>
          <div className='ui horizontal divider'>My Roles</div>
          <MemberHistory />
          <div className='ui hidden divider'></div>
          <div className='ui horizontal divider'>Duty Hours</div>
          <div>
            <div className='ui tiny three statistics'>
              <div className='green statistic'>
                <div className='value'>26</div>
                <div className='label'>Month</div>
              </div>
              <div className='green statistic'>
                <div className='value'>127</div>
                <div className='label'>Semester</div>
              </div>
              <div className='green statistic'>
                <div className='value'>1,933</div>
                <div className='label'>All Time</div>
              </div>
            </div>
          </div>
          <div className='ui hidden divider'></div>
          <div className='ui horizontal divider'>Actions</div>
          <div><div className='ui small fluid button'><Icon icon='emergency' /> Request driver training</div></div>
          <p></p>
          <div><div className='ui small fluid button'><Icon icon='doctor' /> Request crew chief training</div></div>
        </div>
      </div>
    );
  }
});
