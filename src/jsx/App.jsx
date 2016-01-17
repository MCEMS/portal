var App = React.createClass({
  createServiceCredit: function(date, description) {
    var credit = {
      id: this.state.serviceCredits.length + 1,
      approver: '',
      name: 'Ron Weasley',
      requestedAt: moment(),
      performedAt: moment(date),
      description: description
    };
    this.setState({
      serviceCredits: this.state.serviceCredits.concat([credit])
    });
  },
  deleteServiceCredit: function(id) {
    this.setState({
      serviceCredits: this.state.serviceCredits.filter(function(credit) {
        return (credit.id !== id);
      })
    });
  },
  approveServiceCredit: function(id) {
    this.setState({
      serviceCredits: this.state.serviceCredits.map(function(credit) {
        if (credit.id === id) {
          credit.approver = 'Ron Weasley';
        }
        return credit;
      })
    });
  },
  createCertification: function(type, number, issued, expires) {
    var cert = {
      id: this.state.certifications.length + 1,
      approver: '',
      name: 'Ron Weasley',
      type: type,
      number: number,
      issued: moment(issued),
      expires: moment(expires),
      requestedAt: moment()
    };
    this.setState({
      certifications: this.state.certifications.concat([cert])
    });
  },
  deleteCertification: function(id) {
    this.setState({
      certifications: this.state.certifications.filter(function(cert) {
        return (cert.id !== id);
      })
    });
  },
  approveCertification: function(id) {
    this.setState({
      certifications: this.state.certifications.map(function(cert) {
        if (cert.id === id) {
          cert.approver = 'Ron Weasley';
        }
        return cert;
      })
    });
  },
  createCertificationType: function(name) {
    var type = {
      id: this.state.certificationTypes.length + 1,
      type: name
    };
    this.setState({
      certificationTypes: this.state.certificationTypes.concat([type])
    });
  },
  getInitialState: function() {
    return {
      page: 'profile',
      certificationTypes: [
        {
          id: 1,
          type: 'EMT'
        },
        {
          id: 2,
          type: 'NREMT-B'
        },
        {
          id: 3,
          type: 'Professional Rescuer CPR'
        }
      ],
      members: [
        {
          id: 1,
          first_name: 'Ben',
          last_name: 'Burwell',
          phone: '4846643100',
          email: 'ben.burwell@example.com',
          campus_address: 'Walz 123',
          class_year: '2015',
          campus_mailbox: '2559',
          home_address: '123 Main Street',
          home_city: 'Allentown',
          home_zip: '18101'
        }
      ],
      serviceCredits: [
        {
          id: 1,
          approver: 'Eli Russ',
          performedAt: moment([2015, 0, 3]),
          description: 'Completed standby for St. Patricks Day 5K from 12:15pm to 1:30pm.'
        },
        {
          id: 2,
          approver: 'Eli Russ',
          performedAt: moment([2015, 0, 3]),
          description: 'Attended Smash Mouth concert standby from 9:00pm to 11:30pm.'
        },
        {
          id: 3,
          approver: 'Eli Russ',
          performedAt: moment([2015, 0, 3]),
          description: 'Completed through the Red Doors MCEMS tabling for the full 2.5 hours.'
        },
        {
          id: 4,
          approver: 'Eli Russ',
          performedAt: moment([2015, 0, 3]),
          description: 'Tabled for MCEMS at the Fall 2015 Activities Fair from 1530 to 1800. Helped crew set up table and recruit interested new members.'
        }
      ],
      certifications: [
        {
          id: 1,
          type: 'TB Test',
          issued: moment([2015, 9, 10]),
          expires: moment([2016, 9, 12])
        },
        {
          id: 2,
          type: 'NREMT',
          number: 'E3198634',
          issued: moment([2015, 9, 10]),
          expires: moment([2016, 9, 10])
        },
        {
          id: 3,
          type:'Driver&apos;s License',
          number:'E3105BNN96101',
          issued: moment([2015, 9, 10]),
          expires: moment([2016, 9, 10])
        },
        {
          id: 4,
          type:'CPR',
          issued: moment([2015, 9, 10]),
          expires: moment([2016, 9, 10])
        },
        {
          id: 5,
          type:'CEVO',
          issued: moment([2015, 9, 10]),
          expires: moment([2016, 9, 10]),
          number:'123456789'
        },
        {
          id: 6,
          issued: moment([2015, 9, 10]),
          expires: moment([2016, 9, 10]),
          type:'IS 100'
        },
        {
          id: 7,
          issued: moment([2015, 9, 10]),
          expires: moment([2016, 9, 10]),
          type:'IS 200'
        },
        {
          id: 8,
          type:'IS 700',
          issued: moment([2015, 9, 10]),
          expires: moment([2016, 9, 10])
        }
      ]
    };
  },

  nav: function(page) {
    var self = this;
    return function(e) {
      e.preventDefault();
      self.setState({
        page: page
      });
    };
  },

  getCurrentComponent: function() {
    var mapping = {
      'accounts': <AccountsPage />,
      'applications': <ApplicationsPage />,
      'broadcast': <BroadcastPage />,
      'calendar': <CalendarPage />,
      'profile': <ProfilePage app={this} />,
      'members': <MembersPage />,
      'settings': <SettingsPage app={this} />
    };

    return mapping[this.state.page];
  },

  render: function() {
    return (
      <div>
        <nav className='ui fixed inverted menu'>
          <NavTab
            active={this.state.page == 'profile'}
            icon='home'
            text='Profile'
            onClick={this.nav('profile')} />
          <NavTab
            active={this.state.page == 'calendar'}
            icon='calendar outline'
            text='Calendar'
            onClick={this.nav('calendar')} />
          <NavTab
            active={this.state.page == 'members'}
            icon='users'
            text='Members'
            onClick={this.nav('members')} />
          <NavTab
            active={this.state.page == 'accounts'}
            icon='globe'
            text='Accounts'
            onClick={this.nav('accounts')} />
          <NavTab
            active={this.state.page == 'applications'}
            icon='inbox'
            text='Applications'
            onClick={this.nav('applications')} />
          <NavTab
            active={this.state.page == 'broadcast'}
            icon='bullhorn'
            text='Broadcast'
            onClick={this.nav('broadcast')} />
          <div className='right menu'>
            <NavTab
              active={this.state.page == 'settings'}
              icon='settings'
              text='Settings'
              onClick={this.nav('settings')} />
            <NavTab
              icon='sign out'
              text='Log Out' />
          </div>
        </nav>
        <div className='ui container'>
          {this.getCurrentComponent()}
        </div>
        <div className='ui hidden divider' />
        <div className='ui container'>
          <div className='ui message'>
            <p className='center aligned'>Copyright &copy; Muhlenberg College EMS. All rights reserved.</p>
          </div>
        </div>
        <div className='ui hidden divider' />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
