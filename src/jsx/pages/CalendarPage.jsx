var CalendarPage = React.createClass({
  render: function() {
    return (
      <div className='CalendarPage'>
        <div className='row'>
          <div className='col-xs-8'>
            <h1 className='text-center'>October 2015</h1>
            <table className='calendar'>
              <tbody>
                <tr>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
                <tr>
                  <td>
                    <div className='date'>1</div>
                    <div className='shift'>B. Burwell 348</div>
                    <div className='shift'>E. Russ 329</div>
                  </td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='col-xs-4'>
            <h2 className='text-center'>Monday October 1</h2>
          </div>
        </div>
      </div>
    );
  }
});
