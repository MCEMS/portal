import React, { PropTypes } from 'react';

const MemberInfoEdit = (props) => (
  <form className="ui large form fluid">
    <div className="two fields">
      <div className="field">
        <label>First Name</label>
        <input placeholder="First Name" value={props.member.first_name} type="text" />
      </div>
      <div className="field">
        <label>Last Name</label>
        <input placeholder="Last Name" value={props.member.last_name} type="text" />
      </div>
    </div>
    <div className="two fields">
      <div className="field">
        <label>Phone</label>
        <input placeholder="Cell Phone" value={props.member.phone} type="text" />
      </div>
      <div className="field">
        <label>Email</label>
        <input placeholder="Primary email address" value={props.member.email} type="text" />
      </div>
    </div>
    <div className="fields">
      <div className="ten wide field">
        <label>Campus Address</label>
        <input placeholder="Residence hall" value={props.member.campus_address} type="text" />
      </div>
      <div className="three wide field">
        <label>Graduation Year</label>
        <input placeholder="Class Year" value={props.member.class_year} type="text" />
      </div>
      <div className="three wide field">
        <label>Mailbox</label>
        <input placeholder="Campus mailbox" value={props.member.campus_mailbox} type="text" />
      </div>
    </div>
    <div className="fields">
      <div className="six wide field">
        <label>Home Address</label>
        <input placeholder="Street address" value={props.member.home_address} type="text" />
      </div>
      <div className="six wide field">
        <label>City</label>
        <input placeholder="City" value={props.member.home_city} type="text" />
      </div>
      <div className="two wide field">
        <label>State</label>
        <select>
          <option>PA</option>
        </select>
      </div>
      <div className="two wide field">
        <label>Postal Code</label>
        <input placeholder="Zip" value={props.member.home_zip} type="text" />
      </div>
    </div>
  </form>
);
MemberInfoEdit.propTypes = {
  member: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    campus_address: PropTypes.string,
    class_year: PropTypes.string,
    campus_mailbox: PropTypes.string,
    home_address: PropTypes.string,
    home_city: PropTypes.string,
    home_zip: PropTypes.string,
  }),
};
MemberInfoEdit.defaultProps = {
  member: {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    campus_address: '',
    class_year: '',
    campus_mailbox: '',
    home_address: '',
    home_city: '',
    home_zip: '',
  },
};

export default MemberInfoEdit;
