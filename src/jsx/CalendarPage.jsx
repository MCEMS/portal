var CalendarMonthView = React.createClass({
  render: function() {
    return (
      <div className='mini-calendar'>
        <div className='ui medium header aligned center'>{this.props.month}</div>
        <div className='ui seven column center aligned padded grid'>
          <div className='column'><strong>Sun</strong></div>
          <div className='column'><strong>Mon</strong></div>
          <div className='column'><strong>Tue</strong></div>
          <div className='column'><strong>Wed</strong></div>
          <div className='column'><strong>Thu</strong></div>
          <div className='column'><strong>Fri</strong></div>
          <div className='column'><strong>Sat</strong></div>
          <div className='column'></div>
          <div className='column'></div>
          <div className='column'></div>
          <div className='column'></div>
          <div className='column'>1</div>
          <div className='column some-crew'>2</div>
          <div className='column many-crew'>3</div>
          <div className='column some-crew'>4</div>
          <div className='column'>5</div>
          <div className='column some-crew'>6</div>
          <div className='column many-crew'>7</div>
          <div className='column'>8</div>
          <div className='column some-crew'>9</div>
          <div className='column some-crew on-duty'>10</div>
          <div className='column some-crew'>11</div>
          <div className='column some-crew'>12</div>
          <div className='column some-crew'>13</div>
          <div className='blue column'>14</div>
          <div className='column some-crew'>15</div>
          <div className='column'>16</div>
          <div className='column many-crew'>17</div>
          <div className='column some-crew on-duty'>18</div>
          <div className='column some-crew'>19</div>
          <div className='column some-crew'>20</div>
          <div className='column'>21</div>
          <div className='column many-crew'>22</div>
          <div className='column oos'>23</div>
          <div className='column oos'>24</div>
          <div className='column many-crew'>25</div>
          <div className='column some-crew'>26</div>
          <div className='column some-crew'>27</div>
          <div className='column many-crew'>28</div>
          <div className='column some-crew'>29</div>
          <div className='column many-crew'>30</div>
          <div className='column some-crew'>31</div>
        </div>
      </div>
    );
  }
});

var CalendarShift = React.createClass({
  getDefaultProperties: function() {
    return {
      name: '',
      unit: '',
      role: '',
      renderForDate: new Date(),
      start: new Date(),
      end: new Date(),
      me: false
    };
  },
  render: function() {
    var className = 'shift';
    var startMoment = moment(this.props.start);
    var endMoment = moment(this.props.end);
    var today = moment(this.props.renderForDate).startOf('day');
    var offset = moment.duration(startMoment.diff(today)).as('hours');
    var length = moment.duration(endMoment.diff(today)).as('hours');

    className += ' offset-' + offset;
    className += ' length-' + length;
    className += this.props.me? ' me' : '';

    return (
      <div className={className}>
        {this.props.name} {this.props.unit}
        <span className='role'>{this.props.role}</span>
      </div>
    );
  }
});

var CalendarSingleDay = React.createClass({
  render: function() {
    var shifts = [
      {
        name: 'Ben Burwell',
        unit: '348',
        role: 'Crew Chief',
        start: moment([2000, 1, 5]).hour(2),
        end: moment([2000, 1, 5]).hour(17),
        me: true
      },
      {
        name: 'Ben Burwell',
        unit: '348',
        role: 'Crew Chief',
        start: moment([2000, 1, 4]),
        end: moment([2000, 1, 5]).hour(10),
        me: false
      },
      {
        name: 'Ben Burwell',
        unit: '348',
        role: 'Crew Chief',
        start: moment([2000, 1, 5]).hour(10),
        end: moment([2000, 1, 7]),
        me: false
      }
    ];
    shifts = shifts.map(function(shift, idx) {
      var date = moment([2000, 1, 5]);
      if (moment(shift.start).isAfter(moment(date).endOf('day'))) {
        return null;
      }
      if (moment(shift.end).isBefore(moment(date).startOf('day'))) {
        return null;
      }
      return <CalendarShift renderForDate={date} {...shift} key={idx} />;
    });
    return (
      <div>
        <h1 className='ui horizontal divider header'>Wednesday, October 14th 2015</h1>
        <div className='timeline-tickmarks'>
          <div className='hour'><div className='rotate'>00<small>:00</small></div></div>
          <div className='hour'><div className='rotate'>01<small>:00</small></div></div>
          <div className='hour'><div className='rotate'>02<small>:00</small></div></div>
          <div className='hour'><div className='rotate'>03<small>:00</small></div></div>
          <div className='hour'><div className='rotate'>04<small>:00</small></div></div>
          <div className='hour'><div className='rotate'>05<small>:00</small></div></div>
          <div className='hour'><div className='rotate'>06<small>:00</small></div></div>
          <div className='hour'><div className='rotate'>07<small>:00</small></div></div>
          <div className='hour'><div className='rotate'>08<small>:00</small></div></div>
          <div className='hour'><div className='rotate'>09<small>:00</small></div></div>
          <div className='hour'><div className='rotate'>10<small>:00</small></div></div>
          <div className='hour'><div className='rotate'>11<small>:00</small></div></div>
          <div className='hour'><div className='rotate'>12<small>:00</small></div></div>
          <div className='hour'><div className='rotate'>13<small>:00</small></div></div>
          <div className='hour'><div className='rotate'>14<small>:00</small></div></div>
          <div className='hour'><div className='rotate'>15<small>:00</small></div></div>
          <div className='hour'><div className='rotate'>16<small>:00</small></div></div>
          <div className='hour'><div className='rotate'>17<small>:00</small></div></div>
          <div className='hour'><div className='rotate'>18<small>:00</small></div></div>
          <div className='hour'><div className='rotate'>19<small>:00</small></div></div>
          <div className='hour'><div className='rotate'>20<small>:00</small></div></div>
          <div className='hour'><div className='rotate'>21<small>:00</small></div></div>
          <div className='hour'><div className='rotate'>22<small>:00</small></div></div>
          <div className='hour'><div className='rotate'>23<small>:00</small></div></div>
          <div className='hour'><div className='rotate'>24<small>:00</small></div></div>
        </div>
        <div className='shifts'>
          {shifts}
        </div>
      </div>
    );
  }
});

var CalendarPage = React.createClass({
  render: function() {
    return (
      <div className='CalendarPage'>
        <div className='ui three column stackable grid'>
          <div className='column'>
            <CalendarMonthView month='September 2015' />
          </div>
          <div className='column'>
            <CalendarMonthView month='October 2015' />
          </div>
          <div className='column'>
            <CalendarMonthView month='November 2015' />
          </div>
        </div>
        <div className='ui hidden divider' />
        <CalendarSingleDay />
        <div className='ui primary button'>
          <Icon icon='add' /> Add shift
        </div>
      </div>
    );
  }
});
