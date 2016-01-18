var ExpiringCert = React.createClass({
  propTypes: {
    date: React.PropTypes.instanceOf(moment),
    type: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      date: moment(),
      type: ''
    };
  },
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <div className='item'>
        <Icon icon='certificate' />
        <div className='content'>
          <div className='header'>{this.props.type}</div>
          <div className='description'>
            <RelativeTime time={this.props.date} />
          </div>
        </div>
      </div>
    );
  }
});

