var ExpiringCerts = React.createClass({
  propTypes: {
    certifications: React.PropTypes.array
  },
  getDefaultProps: function() {
    return {
      certifications: []
    };
  },
  getInitialState: function() {
    return {};
  },
  shouldRenderCert: function(cert) {
    var cutoff = moment().add(3, 'months');
    return cert.expires.isBefore(cutoff);
  },
  render: function() {
    var certsToRender = this.props.certifications.filter(this.shouldRenderCert);
    var certs = certsToRender.map(function(cert) {
      return <ExpiringCert key={cert.id} type={cert.type} date={cert.expires} />;
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
