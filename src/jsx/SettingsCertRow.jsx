var SettingsCertRow = React.createClass({
  propTypes: {
    type: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      type: ''
    };
  },
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <tr>
        <td>
          <div className='ui large label'>{this.props.type}</div>
        </td>
        <td className='right aligned'>
          <button className='ui fluid basic button'><Icon icon='pencil' /> Edit</button>
        </td>
      </tr>
    );
  }
});
