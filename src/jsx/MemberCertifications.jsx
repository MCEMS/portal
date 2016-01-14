var MemberCertification = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td className='center aligned'>{this.props.number}</td>
        <td className='center aligned'>{this.props.issued}</td>
        <td className='center aligned'>{this.props.expires}</td>
        <td><button className='ui tiny red basic fluid button'><Icon icon='trash outline' /> Delete</button></td>
      </tr>
    );
  }
});

var MemberCertifications = React.createClass({
  render: function() {
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
          <MemberCertification
            name='TB Test'
            issued='September 10th, 2015'
            expires='September 10th, 2016' />
          <MemberCertification
            name='NREMT'
            number='E3198634'
            issued='June 15th, 2015'
            expires='March 31th, 2017' />
          <MemberCertification
            name='Driver&apos;s License'
            number='E3105BNN96101'
            issued='June 2nd, 2012'
            expires='May 10th, 2017' />
          <MemberCertification
            name='CPR'
            issued='June 15th, 2015'
            expires='June 1st, 2017' />
          <MemberCertification
            name='CEVO'
            issued='June 16th, 2015'
            number='123456789' />
          <MemberCertification issued='May 8th, 2015' name='IS 100' />
          <MemberCertification issued='June 16th, 2015' name='IS 200' />
          <MemberCertification issued='May 8th, 2015' name='IS 700' />
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
