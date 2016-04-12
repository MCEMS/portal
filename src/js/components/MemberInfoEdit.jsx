import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { updatePerson } from '../actions';

let MemberInfoEdit = (props) => {
  let firstName = props.person.firstName;
  let lastName = props.person.lastName;
  let phone = props.person.phone;
  let email = props.person.email;
  let campusAddress = props.person.campusAddress;
  let classYear = props.person.classYear;
  let campusMailbox = props.person.campusMailbox;
  let homeAddress = props.person.homeAddress;
  let homeCity = props.person.homeCity;
  let homeZip = props.person.homeZip;

  const handleFirstNameUpdate = e => {
    firstName = e.target.value;
  };

  const handleLastNameUpdate = e => {
    lastName = e.target.value;
  };

  const handlePhoneUpdate = e => {
    phone = e.target.value;
  };

  const handleEmailUpdate = e => {
    email = e.target.value;
  };

  const handleCampusAddressUpdate = e => {
    campusAddress = e.target.value;
  };

  const handleClassYearUpdate = e => {
    classYear = e.target.value;
  };

  const handleCampusMailboxUpdate = e => {
    campusMailbox = e.target.value;
  };

  const handleHomeAddressUpdate = e => {
    homeAddress = e.target.value;
  };

  const handleHomeCityUpdate = e => {
    homeCity = e.target.value;
  };

  const handleHomeZipUpdate = e => {
    homeZip = e.target.value;
  };

  const update = () => {
    props.onUpdateClick({
      id: props.personId,
      firstName,
      lastName,
      phone,
      email,
      campusAddress,
      classYear,
      campusMailbox,
      homeAddress,
      homeCity,
      homeZip,
    });
  };

  return (
    <form className="ui large form fluid">
      <div className="two fields">
        <div className="field">
          <label>First Name</label>
          <input
            placeholder="First Name"
            defaultValue={firstName}
            onChange={handleFirstNameUpdate}
            type="text"
          />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            defaultValue={lastName}
            onChange={handleLastNameUpdate}
            type="text"
          />
        </div>
      </div>
      <div className="two fields">
        <div className="field">
          <label>Phone</label>
          <input
            placeholder="Cell Phone"
            defaultValue={phone}
            onChange={handlePhoneUpdate}
            type="text"
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            placeholder="Primary email address"
            defaultValue={email}
            onChange={handleEmailUpdate}
            type="text"
          />
        </div>
      </div>
      <div className="fields">
        <div className="ten wide field">
          <label>Campus Address</label>
          <input
            placeholder="Residence hall"
            defaultValue={campusAddress}
            onChange={handleCampusAddressUpdate}
            type="text"
          />
        </div>
        <div className="three wide field">
          <label>Graduation Year</label>
          <input
            placeholder="Class Year"
            defaultValue={classYear}
            onChange={handleClassYearUpdate}
            type="text"
          />
        </div>
        <div className="three wide field">
          <label>Mailbox</label>
          <input
            placeholder="Campus mailbox"
            defaultValue={campusMailbox}
            onChange={handleCampusMailboxUpdate}
            type="text"
          />
        </div>
      </div>
      <div className="fields">
        <div className="six wide field">
          <label>Home Address</label>
          <input
            placeholder="Street address"
            defaultValue={homeAddress}
            onChange={handleHomeAddressUpdate}
            type="text"
          />
        </div>
        <div className="six wide field">
          <label>City</label>
          <input
            placeholder="City"
            defaultValue={homeCity}
            onChange={handleHomeCityUpdate}
            type="text"
          />
        </div>
        <div className="two wide field">
          <label>State</label>
          <select>
            <option>PA</option>
          </select>
        </div>
        <div className="two wide field">
          <label>Postal Code</label>
          <input
            placeholder="Zip"
            defaultValue={homeZip}
            onChange={handleHomeZipUpdate}
            type="text"
          />
        </div>
      </div>
      <div className="ui green button" onClick={update}>Update</div>
    </form>
  );
};
MemberInfoEdit.propTypes = {
  personId: PropTypes.number.isRequired,
  person: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    campusAddress: PropTypes.string,
    classYear: PropTypes.string,
    campusMailbox: PropTypes.string,
    homeAddress: PropTypes.string,
    homeCity: PropTypes.string,
    homeZip: PropTypes.string,
  }),
  onUpdateClick: PropTypes.func.isRequired,
};
MemberInfoEdit.defaultProps = {
  person: {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    campusAddress: '',
    classYear: '',
    campusMailbox: '',
    homeAddress: '',
    homeCity: '',
    homeZip: '',
  },
};

const mapStateToProps = (state) => ({
  personId: state.personId,
  person: state.people[0],
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateClick: (person) => {
    dispatch(updatePerson(person.id, person));
  },
});

MemberInfoEdit = connect(mapStateToProps, mapDispatchToProps)(MemberInfoEdit);

export default MemberInfoEdit;
