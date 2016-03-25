import React from 'react';
import App from './component/App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

require('../scss/calendar.scss');

ReactDOM.render(
  <App dataSource={RestDataProvider} />,
  document.getElementById('app')
);
