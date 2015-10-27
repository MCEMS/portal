var App = React.createClass({
  getInitialState: function() {
    return {
      page: 'profile'
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
      'profile': <ProfilePage />,
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
              right={true}
              onClick={this.nav('settings')} />
            <NavTab
              icon='sign out'
              text='Log Out'
              right={true} />
          </div>
        </nav>
        <div className='ui container'>
          {this.getCurrentComponent()}
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
