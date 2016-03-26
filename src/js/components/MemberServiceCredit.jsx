const React = require('react');
const Icon = require('./Icon');
const moment = require('moment');

const MemberServiceCredit = (props) => {
  let extra = <div className="extra">Pending approval</div>;
  if (props.approver) {
    extra = (
      <div className="extra">
        <Icon icon="check" color="green" /> Approved by {props.approver}
      </div>
    );
  }
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">
          {this.props.performedAt.format('MMMM Do, YYYY')}
        </div>
        <div className="description">{this.props.description}</div>
      </div>
      {extra}
    </div>
  );
};
MemberServiceCredit.propTypes = {
  approver: React.PropTypes.string,
  performedAt: React.PropTypes.instanceOf(moment),
  description: React.PropTypes.string,
};
MemberServiceCredit.defaultProps = {
  approver: '',
  performedAt: moment(),
  description: '',
};

export default MemberServiceCredit;
