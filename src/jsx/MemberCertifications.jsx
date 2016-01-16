var MemberCertification = React.createClass({
  render: function() {
    var dateFormat = 'MMMM Do, YYYY';
    var issued = this.props.issued? this.props.issued.format(dateFormat) : '';
    var expires = this.props.expires? this.props.expires.format(dateFormat) : '';
    return (
      <tr>
        <td>{this.props.name}</td>
        <td className='center aligned'>{this.props.number}</td>
        <td className='center aligned'>{issued}</td>
        <td className='center aligned'>{expires}</td>
        <td><button className='ui tiny red basic fluid button'><Icon icon='trash outline' /> Delete</button></td>
      </tr>
    );
  }
});

var MemberCertifications = React.createClass({
  render: function() {
    var certs = this.props.certifications.map(function(cert) {
      return <MemberCertification key={cert.id} {...cert} />;
    });
    return (
      <table className='ui padded table'>
        <thead>
          <tr>
            <th className='three wide'>Certification</th>
            <th className='three wide center aligned'>Number</th>
            <th className='three wide center aligned'>Issued</th>
            <th className='three wide center aligned'>Expires</th>
            <th className='two wide'></th>
          </tr>
        </thead>
        <tbody>
          {certs}
        </tbody>
        <tfoot>
          <tr>
            <th className='ui form'>
              <div className='field'>
                <select>
                  <option>EMT</option>
                </select>
              </div>
            </th>
            <th>
              <div className='ui fluid input'> 
                <input type='text' placeholder='Certificate number' />
              </div>
            </th>
            <th>
              <div className='ui fluid input'> 
                <input type='text' placeholder='Issue date' />
              </div>
            </th>
            <th>
              <div className='ui fluid input'> 
                <input type='text' placeholder='Expiration date' />
              </div>
            </th>
            <th>
              <button className='ui green fluid button'><Icon icon='add' /> Add</button>
            </th>
          </tr>
        </tfoot>
      </table>
    );
  }
});
