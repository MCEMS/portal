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
          <div className='grey column'>28</div>
          <div className='grey column'>29</div>
          <div className='grey column'>30</div>
          <div className='grey column'>31</div>
          <div className='column one-crew'>1</div>
          <div className='column one-crew'>2</div>
          <div className='column three-crew'>3</div>
          <div className='column one-crew'>4</div>
          <div className='column'>5</div>
          <div className='column two-crew'>6</div>
          <div className='column four-crew'>7</div>
          <div className='column one-crew'>8</div>
          <div className='column one-crew'>9</div>
          <div className='column two-crew'>10</div>
          <div className='column one-crew'>11</div>
          <div className='column one-crew'>12</div>
          <div className='column one-crew'>13</div>
          <div className='blue column'>14</div>
          <div className='column one-crew'>15</div>
          <div className='column'>16</div>
          <div className='column three-crew'>17</div>
          <div className='column one-crew'>18</div>
          <div className='column one-crew'>19</div>
          <div className='column two-crew'>20</div>
          <div className='column'>21</div>
          <div className='column four-crew'>22</div>
          <div className='column one-crew'>23</div>
          <div className='column one-crew'>24</div>
          <div className='column four-crew'>25</div>
          <div className='column two-crew'>26</div>
          <div className='column one-crew'>27</div>
          <div className='column three-crew'>28</div>
          <div className='column one-crew'>29</div>
          <div className='column four-crew'>30</div>
          <div className='column one-crew'>31</div>
        </div>
      </div>
    );
  }
});

var CalendarPage = React.createClass({
  render: function() {
    return (
      <div className='CalendarPage'>
        <div className='ui three column grid'>
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
        <div className='ui top attached header'>
          <div className='ui right floated primary button'><Icon icon='add' /> Add a shift</div>
          <h1 className='ui header'>Wednesday, October 14th</h1>
        </div>
        <div className='ui bottom attached segment'>
        </div>
      </div>
    );
  }
});
