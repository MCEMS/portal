const React = require('react');
const Icon = require('./Icon');

module.exports = () => (
  <div>
    <h1>Broadcast a short message to all active members</h1>
    <div className="ui fluid action input">
      <input type="text" placeholder="Message" />
      <button className="ui primary button"><Icon icon="send outline" /> Send now</button>
    </div>

    <div className="ui info message">
      <div className="header">
        This message will be immediately sent to the following destinations:
      </div>
      <ul className="ui list">
        <li>The <code>ems@muhlenberg.edu</code> mailing list</li>
        <li>The Muhlenberg email address associated with each active member</li>
        <li>Additional email addresses that members have registered on their profile</li>
        <li>Phones that members have registered on their profile (by SMS)</li>
        <li>Devices used for response through Active911</li>
      </ul>
    </div>
  </div>
);
