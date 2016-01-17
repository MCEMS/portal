var MemberCertification = React.createClass({
  propTypes: {
    id: React.PropTypes.number,
    type: React.PropTypes.string,
    number: React.PropTypes.string,
    issued: React.PropTypes.instanceOf(moment),
    expires: React.PropTypes.instanceOf(moment),
    deleteCert: React.PropTypes.func
  },
  getDefaultProps: function() {
    return {
      id: 0,
      type: '',
      number: '',
      issued: moment(),
      expires: moment(),
      deleteCert: function() {}
    };
  },
  getInitialState: function() {
    return {};
  },
  remove: function() {
    this.props.deleteCert(this.props.id);
  },
  render: function() {
    var dateFormat = 'MMMM Do, YYYY';
    var issued = this.props.issued? this.props.issued.format(dateFormat) : '';
    var expires = this.props.expires? this.props.expires.format(dateFormat) : '';
    return (
      <tr>
        <td>{this.props.type}</td>
        <td className='center aligned'>{this.props.number}</td>
        <td className='center aligned'>{issued}</td>
        <td className='center aligned'>{expires}</td>
        <td><button onClick={this.remove} className='ui tiny red basic fluid button'><Icon icon='trash outline' /> Delete</button></td>
      </tr>
    );
  }
});

