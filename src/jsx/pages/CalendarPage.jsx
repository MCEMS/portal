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
  render: function() {
    return (
      <div className='ui card'>
        <div className='content'>
          <div className='right floated meta'>
            <span className='ui red label'>{this.props.role}</span>
          </div>
          <div className='header'>{this.props.name}</div>
          <div className='meta'>
            <span>{this.props.unit}</span>
          </div>
          <div className='description'>
            <p>From <strong>{this.props.startTime}</strong> on <strong>{this.props.startDay}</strong></p>
            <p>To <strong>{this.props.endTime}</strong> on <strong>{this.props.endDay}</strong></p>
          </div>
        </div>
        <div className='ui two extra bottom attached buttons'>
          <div className='ui button'>Change</div>
          <div className='ui button'>Remove</div>
        </div>
      </div>
    );
  }
});

var CalendarSingleDay = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className='ui horizontal divider header'>Wednesday, October 14th 2015</h1>
        <div className='ui three cards'>
          <CalendarShift
            name='Ben Burwell'
            unit='348'
            role='Crew Chief'
            startTime='17:00'
            startDay='October 14'
            endTime='08:00'
            endDay='October 15' />
          <CalendarShift name='Eli Russ' unit='329' role='Driver' startTime='17:00' endTime='08:00' />
          <CalendarShift name='E. Russ' unit='329' startTime='17:00' endTime='08:00' />
          <CalendarShift name='E. Russ' unit='329' role='Training Corps' startTime='17:00' endTime='08:00' />
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
      </div>
    );
  }
});
