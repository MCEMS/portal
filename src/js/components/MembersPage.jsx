const React = require('react');

const MembersPage = (props) => {
  const people = props.app.state.people.map((person) => (
    <tr key={person.id}>
      <td>{person.firstName}</td>
      <td>{person.lastName}</td>
      <td>{person.phone}</td>
      <td>{person.campusAddress}</td>
      <td>{person.campusMailbox}</td>
    </tr>
  ));
  return (
    <table className="ui table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Campus Address</th>
          <th>Campus Mailbox</th>
        </tr>
      </thead>
      <tbody>
        {people}
      </tbody>
    </table>
  );
};
MembersPage.propTypes = {
  app: React.PropTypes.func,
};

module.exports = MembersPage;
