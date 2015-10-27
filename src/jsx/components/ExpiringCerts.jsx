var ExpiringCert = React.createClass({
  render: function() {
    return (
      <div className='item'>
        <Icon icon='certificate' />
        <div className='content'>
          <div className='header'>{this.props.name}</div>
          <div className='description'>{this.props.date}</div>
        </div>
      </div>
    );
  }
});

var ExpiringCerts = React.createClass({
  render: function() {
    return (
      <div className='ui relaxed list'>
        <ExpiringCert
          name='Pennsylvania EMT'
          date='in a month' />
      </div>
    );
  }
});
