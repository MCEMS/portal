var SettingsCertRow = React.createClass({
  getDefaultProps: function() {
    return {
      label: ''
    };
  },

  render: function() {
    return (
      <tr>
        <td>
          <div className='ui large label'>{this.props.label}</div>
        </td>
        <td className='right aligned'>
          <button className='ui fluid basic button'><Icon icon='pencil' /> Edit</button>
        </td>
      </tr>
    );
  }
});

var SettingsCerts = React.createClass({
  getDefaultProps: function() {
    return {
      certifications: []
    };
  },

  render: function() {
    var certifications = this.props.certifications.map(function(cert, idx) {
      return <SettingsCertRow {...cert} key={idx} />
    });

    return (
      <table className='ui compact table'>
        <thead>
          <tr>
            <th className='twelve wide'>
              <h1 className='header'>
                <Icon icon='certificate' /> Certification Types
              </h1>
            </th>
            <th className='four wide'></th>
          </tr>
        </thead>
        <tbody>
          {certifications}
        </tbody>
        <tfoot>
          <tr>
            <th>
              <div className='ui fluid input'>
                <input type='text' placeholder='Type of certification' />
              </div>
            </th>
            <th className='right aligned'>
              <button className='ui fluid green button'><Icon icon='add' /> Save</button>
            </th>
          </tr>
        </tfoot>
      </table>
    );
  }
});