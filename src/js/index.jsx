require('../scss/app.scss');

import React from 'react';
import App from './components/App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import portalReducer from './reducers';
import { addPerson, addCertificationType, setPersonId } from './actions';

let store = createStore(portalReducer);
store.dispatch(addPerson('Ben', 'Burwell'));
store.dispatch(addCertificationType('EMT'));
store.dispatch(setPersonId(0));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
