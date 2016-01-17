var UpcomingShifts = React.createClass({
  propTypes: {
  },
  getDefaultProps: function() {
    return {};
  },
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <div className='ui relaxed list'>
        <UpcomingShift
          start={moment([2016, 0, 12])}
          end={moment([2016, 0, 13])}
        />
        <UpcomingShift
          start={moment([2016, 0, 22])}
          end={moment([2016, 0, 23])}
        />
      </div>
    );
  }
});
