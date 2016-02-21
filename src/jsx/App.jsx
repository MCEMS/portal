var App = React.createClass({
  propTypes: {},
  getDefaultProps: function() {
    return {};
  },
  getInitialState: function() {
    return {
      page: 'members',
      loggedIn: false,
      certificationTypes: [],
      people: [],
      serviceCredits: [],
      certifications: [],
      roles: []
    };
  },

  componentDidMount: function() {
    var self = this;
    this.props.dataSource.Role.register(function(roles) {
      self.setState({
        roles: roles
      });
    });
    this.props.dataSource.CertificationType.register(function(types) {
      self.setState({
        certificationTypes: types
      });
    });
    this.props.dataSource.Person.register(function(people) {
      self.setState({
        people: people
      });
    });
    this.props.dataSource.ServiceCredit.register(function(credits) {
      self.setState({
        serviceCredits: credits
      });
    });
    this.props.dataSource.Certification.register(function(certs) {
      self.setState({
        certifications: certs
      });
    });
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
      'members': <MembersPage app={this} />,
      'settings': <SettingsPage app={this} />
    };

    if (this.state.loggedIn) {
      return mapping[this.state.page];
    } else {
      return <Login app={this} />;
    }
  },

  render: function() {
    return (
      <div>
        <nav className='ui fixed inverted menu'>
          <NavTab
            active={this.state.page === 'profile'}
            icon='home'
            text='Profile'
            onClick={this.nav('profile')} />
          <NavTab
            active={this.state.page === 'calendar'}
            icon='calendar outline'
            text='Calendar'
            onClick={this.nav('calendar')} />
          <NavTab
            active={this.state.page === 'members'}
            icon='users'
            text='Members'
            onClick={this.nav('members')} />
          <NavTab
            active={this.state.page === 'accounts'}
            icon='globe'
            text='Accounts'
            onClick={this.nav('accounts')} />
          <NavTab
            active={this.state.page === 'applications'}
            icon='inbox'
            text='Applications'
            onClick={this.nav('applications')} />
          <NavTab
            active={this.state.page === 'broadcast'}
            icon='bullhorn'
            text='Broadcast'
            onClick={this.nav('broadcast')} />
          <div className='right menu'>
            <NavTab
              active={this.state.page === 'settings'}
              icon='settings'
              text='Settings'
              onClick={this.nav('settings')} />
            <NavTab
              icon='sign out'
              text='Log Out'
              />
          </div>
        </nav>
        <div className='ui container'>
          {this.getCurrentComponent()}
        </div>
        <div className='ui hidden divider' />
      </div>
    );
  }
});

