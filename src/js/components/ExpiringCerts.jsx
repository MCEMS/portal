import React from 'react';
import moment from 'moment';
import ExpiringCert from './ExpiringCert';

const shouldRenderCert = (cert) => {
  const cutoff = moment().add(3, 'months');
  return cert.expires.isBefore(cutoff);
};

const ExpiringCerts = (props) => {
  const certsToRender = props.certifications.filter(shouldRenderCert);
  const certs = certsToRender.map((cert) => (
    <ExpiringCert key={cert.id} name={cert.name} date={cert.expires} />
  ));
  const message = (certs.length === 0) ? 'Nothing on the horizon!' : '';
  return (
    <div className="ui relaxed list">
      {certs}
      {message}
    </div>
  );
};
ExpiringCerts.propTypes = {
  certifications: React.PropTypes.array,
};
ExpiringCerts.defaultProps = {
  certifications: [],
};

export default ExpiringCerts;
