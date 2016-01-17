var CalendarMonthView = React.createClass({
  propTypes: {
    month: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      month: ''
    };
  },
  getInitialState: function() {
    return {};
  },
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

