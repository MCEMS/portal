var CertificationQueueItem = React.createClass({
  propTypes: {
    id: React.PropTypes.number,
    requestedAt: React.PropTypes.instanceOf(moment),
    approve: React.PropTypes.func,
    reject: React.PropTypes.func,
    name: React.PropTypes.string,
    type: React.PropTypes.string,
    number: React.PropTypes.string,
    expires: React.PropTypes.instanceOf(moment)
  },
  getDefaultProps: function() {
    return {
      id: 0,
      requestedAt: moment(),
      approve: function() {},
      reject: function() {},
      name: '',
      type: '',
      number: '',
      expires: moment()
    };
  },
  render: function() {
    var summary = this.props.name + ' added a certification';
    var body = <div>
      <strong>{this.props.type}</strong> certification <strong>{this.props.number}</strong> expiring on <strong>{this.props.expires.format('MMMM Do, YYYY')}</strong>.
    </div>;

    return (
      <QueueItem
        icon='certificate'
        summary={summary}
        body={body}
        {...this.props} />
    );
  }
});

