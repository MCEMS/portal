import React, { PropTypes } from 'react';
import moment from 'moment';
import Icon from './Icon';

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
          {props.performedAt.format('MMMM Do, YYYY')}
        </div>
        <div className="description">{props.description}</div>
      </div>
      {extra}
    </div>
  );
};
MemberServiceCredit.propTypes = {
  approver: PropTypes.string,
  performedAt: PropTypes.instanceOf(moment),
  description: PropTypes.string,
};
MemberServiceCredit.defaultProps = {
  approver: '',
  performedAt: moment(),
  description: '',
};

export default MemberServiceCredit;
