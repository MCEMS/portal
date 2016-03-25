import { combineReducers } from 'redux';

import page from './page';
import certificationTypes from './certificationTypes';
import roles from './roles';
import people from './people';
import serviceCredits from './serviceCredits';
import certifications from './certifications';

const portalReducer = combineReducers({
  page,
  certificationTypes,
  roles,
  people,
  serviceCredits,
  certifications,
});

export default portalReducer;
