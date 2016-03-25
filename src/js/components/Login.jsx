const React = require('react');

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginButtonEnabled: true,
      showFailedLoginMessage: false,
    };
  }

  usernameDidChange(event) {
    this.setState({ username: event.target.value });
  }

  passwordDidChange(event) {
    this.setState({ password: event.target.value });
  }

  login(event) {
    event.preventDefault();
    this.setState({ loginButtonEnabled: false });
    this.props.app.props.dataSource.authorize(
      this.state.username,
      this.state.password,
      (success) => {
        if (success) {
          this.props.app.setState({
            loggedIn: true,
            page: 'members',
          });
        } else {
          this.setState({
            password: '',
            loginButtonEnabled: true,
            showFailedLoginMessage: true,
          });
        }
      }
    );
  }

  render() {
    let buttonClass = 'ui fluid primary center aligned button';
    if (!this.state.loginButtonEnabled) {
      buttonClass += ' disabled';
    }
    let failedLoginMessage = <div />;
    if (this.state.showFailedLoginMessage) {
      failedLoginMessage = (
        <div className="ui error message">Login failed.</div>
      );
    }
    return (
      <form onSubmit={this.login}>
        <div className="ui four column centered grid">
          <div className="centered row">
            <div className="one column">
              <h1 className="ui center aligned header">MCEMS Login</h1>
              {failedLoginMessage}
            </div>
          </div>
          <div className="centered row">
            <div className="one column">
              <div className="ui fluid input">
                <input
                  type="text"
                  value={this.state.username}
                  placeholder="Username"
                  onChange={this.usernameDidChange}
                  autoFocus
                />
              </div>
            </div>
          </div>
          <div className="centered row">
            <div className="one column">
              <div className="ui fluid input">
                <input
                  type="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.passwordDidChange}
                />
              </div>
            </div>
          </div>
          <div className="centered row">
            <div className="one column">
              <div className="ui fluid input">
                <button
                  type="submit"
                  className={buttonClass}
                  enabled={this.state.loginButtonEnabled}
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
Login.propTypes = {
  app: React.PropTypes.func,
};
Login.defaultProps = {
  app: null,
};

module.exports = Login;
