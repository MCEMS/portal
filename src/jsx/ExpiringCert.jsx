var ExpiringCert = React.createClass({
  propTypes: {
    date: React.PropTypes.instanceOf(moment),
    name: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      date: moment(),
      name: ''
    };
  },
  getInitialState: function() {
    return {};
  },
  render: function() {
    var dateString = this.props.date.fromNow();
    return (
      <div className='item'>
        <Icon icon='certificate' />
        <div className='content'>
          <div className='header'>{this.props.name}</div>
          <div className='description'>
            <RelativeTime time={this.props.date} />
          </div>
        </div>
      </div>
    );
  }
});

