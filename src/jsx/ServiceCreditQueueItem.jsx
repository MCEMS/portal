var ServiceCreditQueueItem = React.createClass({
  propTypes: {
    id: React.PropTypes.number,
    requestedAt: React.PropTypes.instanceOf(moment),
    approve: React.PropTypes.func,
    reject: React.PropTypes.func,
    name: React.PropTypes.string,
    description: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      id: 0,
      requestedAt: moment(),
      approve: function() {},
      reject: function() {},
      name: '',
      description: ''
    };
  },
  getInitialState: function() {
    return {};
  },
  render: function() {
    var summary = this.props.name + ' requested a service credit';
    return (
      <QueueItem
        icon='wait'
        summary={summary}
        body={this.props.description}
        {...this.props} />
    );
  }
});

