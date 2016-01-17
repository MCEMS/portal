var QueueItem = React.createClass({
  propTypes: {
    id: React.PropTypes.number,
    requestedAt: React.PropTypes.instanceOf(moment),
    summary: React.PropTypes.node,
    body: React.PropTypes.node,
    icon: React.PropTypes.string,
    approve: React.PropTypes.func,
    reject: React.PropTypes.func
  },
  getDefaultProps: function() {
    return {
      id: 0,
      requestedAt: moment(),
      summary: <div>Something happened!</div>,
      body: <div />,
      icon: '',
      approve: function(){}
    };
  },
  getInitialState: function() {
    return {};
  },

  approve: function() {
    this.props.approve(this.props.id);
  },

  reject: function() {
    this.props.reject(this.props.id);
  },

  render: function() {
    return (
      <div className='event'>
        <div className='label'>
          <Icon icon={this.props.icon} />
        </div>
        <div className='content'>
          <div className='summary'>
            {this.props.summary}
            <div className='date'>
              <RelativeTime time={this.props.requestedAt} />
            </div>
          </div>
          <div className='extra text'>
            {this.props.body}
          </div>
          <div className='meta'>
            <div onClick={this.approve} className='ui tiny compact green button'><Icon icon='check' /> Approve</div>
            <div onClick={this.reject} className='ui tiny compact basic red button'><Icon icon='remove' /> Reject</div>
          </div>
        </div>
      </div>
    );
  }
});

