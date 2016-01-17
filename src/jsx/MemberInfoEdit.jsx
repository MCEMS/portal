var MemberInfoEdit = React.createClass({
  propTypes: {
    member: React.PropTypes.shape({
      first_name: React.PropTypes.string,
      last_name: React.PropTypes.string,
      phone: React.PropTypes.string,
      email: React.PropTypes.string,
      campus_address: React.PropTypes.string,
      class_year: React.PropTypes.string,
      campus_mailbox: React.PropTypes.string,
      home_address: React.PropTypes.string,
      home_city: React.PropTypes.string,
      home_zip: React.PropTypes.string
    })
  },
  getDefaultProps: function() {
    return {
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
        home_zip: ''
      }
    };
  },
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <form className='ui large form fluid'>
        <div className='two fields'>
          <div className='field'>
            <label>First Name</label>
            <input placeholder='First Name' value={this.props.member.first_name} type='text' />
          </div>
          <div className='field'>
            <label>Last Name</label>
            <input placeholder='Last Name' value={this.props.member.last_name} type='text' />
          </div>
        </div>
        <div className='two fields'>
          <div className='field'>
            <label>Phone</label>
            <input placeholder='Cell Phone' value={this.props.member.phone} type='text' />
          </div>
          <div className='field'>
            <label>Email</label>
            <input placeholder='Primary email address' value={this.props.member.email} type='text' />
          </div>
        </div>
        <div className='fields'>
          <div className='ten wide field'>
            <label>Campus Address</label>
            <input placeholder='Residence hall' value={this.props.member.campus_address} type='text' />
          </div>
          <div className='three wide field'>
            <label>Graduation Year</label>
            <input placeholder='Class Year' value={this.props.member.class_year} type='text' />
          </div>
          <div className='three wide field'>
            <label>Mailbox</label>
            <input placeholder='Campus mailbox' value={this.props.member.campus_mailbox} type='text' />
          </div>
        </div>
        <div className='fields'>
          <div className='six wide field'>
            <label>Home Address</label>
            <input placeholder='Street address' value={this.props.member.home_address} type='text' />
          </div>
          <div className='six wide field'>
            <label>City</label>
            <input placeholder='City' value={this.props.member.home_city} type='text' />
          </div>
          <div className='two wide field'>
            <label>State</label>
            <select>
              <option>PA</option>
            </select>
          </div>
          <div className='two wide field'>
            <label>Postal Code</label>
            <input placeholder='Zip' value={this.props.member.home_zip} type='text' />
          </div>
        </div>
      </form>
    );
  }
})
