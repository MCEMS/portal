const React = require('react');
const NavTab = require('./NavTab');
const BroadcastPage = require('./BroadcastPage');
const CalendarPage = require('./CalendarPage');
const SettingsPage = require('./SettingsPage');
const ProfilePage = require('./ProfilePage');
const MembersPage = require('./MembersPage');
const Login = require('./Login');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '',
      loggedIn: false,
      certificationTypes: [],
      people: [],
      serviceCredits: [],
      certifications: [],
      roles: [],
    };
  }

  componentDidMount() {
    this.props.dataSource.Role.register((roles) => {
      this.setState({ roles });
    });
    this.props.dataSource.CertificationType.register((certificationTypes) => {
      this.setState({ certificationTypes });
    });
    this.props.dataSource.Person.register((people) => {
      this.setState({ people });
    });
    this.props.dataSource.ServiceCredit.register((serviceCredits) => {
      this.setState({ serviceCredits });
    });
    this.props.dataSource.Certification.register((certifications) => {
      this.setState({ certifications });
    });
  }

  getCurrentComponent() {
    const mapping = {
      broadcast: <BroadcastPage />,
      calendar: <CalendarPage />,
      profile: <ProfilePage app={this} />,
      members: <MembersPage app={this} />,
      settings: <SettingsPage app={this} />,
    };
    if (this.state.loggedIn) {
      return mapping[this.state.page];
    }
    return <Login app={this} />;
  }

  nav(page) {
    return (e) => {
      e.preventDefault();
      if (this.state.loggedIn) {
        this.setState({ page });
      }
    };
  }

  logout() {
    this.props.dataSource.deauthorize(() => {
      this.setState(this.getInitialState());
    });
  }

  render() {
    return (
      <div>
        <nav className="ui fixed inverted menu">
          <NavTab
            active={this.state.page === 'profile'}
            icon="home"
            text="Profile"
            onClick={this.nav('profile')}
          />
          <NavTab
            active={this.state.page === 'calendar'}
            icon="calendar outline"
            text="Calendar"
            onClick={this.nav('calendar')}
          />
          <NavTab
            active={this.state.page === 'members'}
            icon="users"
            text="Members"
            onClick={this.nav('members')}
          />
          <NavTab
            active={this.state.page === 'broadcast'}
            icon="bullhorn"
            text="Broadcast"
            onClick={this.nav('broadcast')}
          />
          <div className="right menu">
            <NavTab
              active={this.state.page === 'settings'}
              icon="settings"
              text="Settings"
              onClick={this.nav('settings')}
            />
            <NavTab
              icon="sign out"
              text="Log Out"
              onClick={this.logout}
            />
          </div>
        </nav>
        <div className="ui container">
          {this.getCurrentComponent()}
        </div>
        <div className="ui hidden divider" />
      </div>
    );
  }
}
App.propTypes = {
  dataSource: React.PropTypes.func.required,
};
export App;
