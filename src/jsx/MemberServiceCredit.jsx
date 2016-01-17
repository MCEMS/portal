var MemberServiceCredit = React.createClass({
  propTypes: {
    approver: React.PropTypes.string,
    performedAt: React.PropTypes.instanceOf(moment),
    description: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      approver: '',
      performedAt: moment(),
      description: ''
    };
  },
  getInitialState: function() {
    return {};
  },
  render: function() {
    var extra = <div className='extra'>Pending approval</div>;
    if (this.props.approver) {
      extra = (
        <div className='extra'>
          <Icon icon='check' color='green' /> Approved by {this.props.approver}
        </div>
      );
    }
    return (
      <div className='ui card'>
        <div className='content'>
          <div className='header'>{this.props.performedAt.format('MMMM Do, YYYY')}</div>
          <div className='description'>{this.props.description}</div>
        </div>
        {extra}
      </div>
    );
  }
});
