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
  getInitialState: function() {
    return {
      page: 'profile',
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
          name: 'TB Test',
          issued: moment([2015, 9, 10]),
          expires: moment([2016, 9, 12])
        },
        {
          id: 2,
          name: 'NREMT',
          number: 'E3198634',
          issued: moment([2015, 9, 10]),
          expires: moment([2016, 9, 10])
        },
        {
          id: 3,
          name:'Driver&apos;s License',
          number:'E3105BNN96101',
          issued: moment([2015, 9, 10]),
          expires: moment([2016, 9, 10])
        },
        {
          id: 4,
          name:'CPR',
          issued: moment([2015, 9, 10]),
          expires: moment([2016, 9, 10])
        },
        {
          id: 5,
          name:'CEVO',
          issued: moment([2015, 9, 10]),
          expires: moment([2016, 9, 10]),
          number:'123456789'
        },
        {
          id: 6,
          issued: moment([2015, 9, 10]),
          expires: moment([2016, 9, 10]),
          name:'IS 100'
        },
        {
          id: 7,
          issued: moment([2015, 9, 10]),
          expires: moment([2016, 9, 10]),
          name:'IS 200'
        },
        {
          id: 8,
          name:'IS 700',
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
      'settings': <SettingsPage />
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
