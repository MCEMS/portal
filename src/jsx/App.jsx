var App = React.createClass({
  propTypes: {},
  getDefaultProps: function() {
    return {};
  },
  getInitialState: function() {
    return {
      page: 'profile',
      certificationTypes: this.props.dataSource.CertificationTypes.all(),
      members: this.props.dataSource.Members.all(),
      serviceCredits: this.props.dataSource.ServiceCredits.all(),
      certifications: this.props.dataSource.Certifications.all(),
      roles: this.props.dataSource.Roles.all()
    };
  },

  componentDidMount: function() {
    var self = this;
    this.props.dataSource.Roles.register(function(roles) {
      self.setState({
        roles: roles
      });
    });
    this.props.dataSource.CertificationTypes.register(function(types) {
      self.setState({
        certificationTypes: types
      });
    });
    this.props.dataSource.Members.register(function(membes) {
      self.setState({
        members: members
      });
    });
    this.props.dataSource.ServiceCredits.register(function(credits) {
      self.setState({
        serviceCredits: credits
      });
    });
    this.props.dataSource.Certifications.register(function(certs) {
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

