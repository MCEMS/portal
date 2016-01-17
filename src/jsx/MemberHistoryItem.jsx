var MemberHistoryItem = React.createClass({
  propTypes: {
    role: React.PropTypes.string,
    from: React.PropTypes.instanceOf(moment),
    to: React.PropTypes.instanceOf(moment)
  },
  getDefaultProps: function() {
    return {
      role: '',
      from: moment(),
      to: moment()
    };
  },
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <div className='item'>
        <div className='header'>{this.props.role}</div>
        <div className='description'>{this.props.from.format('MMMM YYYY')} &mdash; {this.props.to.format('MMMM YYYY')}</div>
      </div>
    );
  }
});

