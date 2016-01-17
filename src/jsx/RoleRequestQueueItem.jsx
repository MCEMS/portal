var RoleRequestQueueItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    role: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      name: '',
      role: ''
    };
  },
  getInitialState: function() {
    return {};
  },
  render: function() {
    var summary = this.props.name + ' requested the role ' + this.props.role;
    return (
      <QueueItem
        icon='tag'
        summary={summary}
        {...this.props} />
    );
  }
});

