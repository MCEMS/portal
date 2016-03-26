import React, { PropTypes } from 'react';
import { setPage } from '../actions';
import { connect } from 'react-redux';

import ProfilePage from './ProfilePage';
import NavTab from './NavTab';
import BroadcastPage from './BroadcastPage';
import CalendarPage from './CalendarPage';
import SettingsPage from './SettingsPage';
import MembersPage from './MembersPage';
import Login from './Login';

const getCurrentComponent = (page) => {
  const mapping = {
    login: <Login />,
    broadcast: <BroadcastPage />,
    calendar: <CalendarPage />,
    profile: <ProfilePage />,
    members: <MembersPage />,
    settings: <SettingsPage />,
  };
  return mapping[page];
};

const AppComponent = (props) => (
  <div>
    <nav className="ui fixed inverted menu">
      <NavTab
        active={props.page === 'profile'}
        icon="home"
        text="Profile"
        onClick={props.onTabClick('profile')}
      />
      <NavTab
        active={props.page === 'calendar'}
        icon="calendar outline"
        text="Calendar"
        onClick={props.onTabClick('calendar')}
      />
      <NavTab
        active={props.page === 'members'}
        icon="users"
        text="Members"
        onClick={props.onTabClick('members')}
      />
      <NavTab
        active={props.page === 'broadcast'}
        icon="bullhorn"
        text="Broadcast"
        onClick={props.onTabClick('broadcast')}
      />
      <div className="right menu">
        <NavTab
          active={props.page === 'settings'}
          icon="settings"
          text="Settings"
          onClick={props.onTabClick('settings')}
        />
        <NavTab
          icon="sign out"
          text="Log Out"
        />
      </div>
    </nav>
    <div className="ui container">
      {getCurrentComponent(props.page)}
    </div>
    <div className="ui hidden divider" />
  </div>
);
AppComponent.propTypes = {
  page: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  page: state.page,
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick: page =>
    e => {
      e.preventDefault();
      dispatch(setPage(page));
    },
});

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
export default App;
