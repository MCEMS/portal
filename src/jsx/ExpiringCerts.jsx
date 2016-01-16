var ExpiringCert = React.createClass({
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

var ExpiringCerts = React.createClass({
  getDefaultProps: function() {
    return {
      certifications: []
    };
  },
  shouldRenderCert: function(cert) {
    var cutoff = moment().add(3, 'months');
    return cert.expires.isBefore(cutoff);
  },
  render: function() {
    var certsToRender = this.props.certifications.filter(this.shouldRenderCert);
    var certs = certsToRender.map(function(cert) {
      return <ExpiringCert key={cert.id} name={cert.name} date={cert.expires} />;
    });
    var message = (certsToRender.length === 0)? 'Nothing on the horizon!' : '';

    return (
      <div className='ui relaxed list'>
        {certs}
        {message}
      </div>
    );
  }
});
