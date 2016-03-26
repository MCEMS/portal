const React = require('react');
const moment = require('moment');
const Icon = require('./Icon');

const MemberCertification = (props) => {
  const dateFormat = 'MMMM Do, YYYY';
  const issued = props.issued ? props.issued.format(dateFormat) : '';
  const expires = props.expires ? props.expires.format(dateFormat) : '';
  const remove = () => {
    props.deleteCert(props.id);
  };
  return (
    <tr>
      <td>{props.type}</td>
      <td className="center aligned">{props.number}</td>
      <td className="center aligned">{issued}</td>
      <td className="center aligned">{expires}</td>
      <td>
        <button onClick={remove} className="ui tiny red basic fluid button">
          <Icon icon="trash outline" /> Delete
        </button>
      </td>
    </tr>
  );
};
MemberCertification.propTypes = {
  id: React.PropTypes.number,
  type: React.PropTypes.string,
  number: React.PropTypes.string,
  issued: React.PropTypes.instanceOf(moment),
  expires: React.PropTypes.instanceOf(moment),
  deleteCert: React.PropTypes.func,
};
MemberCertification.defaultProps = {
  id: 0,
  type: '',
  number: '',
  issued: moment(),
  expires: moment(),
  deleteCert: () => {},
};

export default MemberCertification;
