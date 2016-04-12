import { combineReducers } from 'redux';

import page from './page';
import certificationTypes from './certificationTypes';
import roles from './roles';
import people from './people';
import serviceCredits from './serviceCredits';
import certifications from './certifications';
import personId from './personId';

const portalReducer = combineReducers({
  page,
  certificationTypes,
  roles,
  people,
  serviceCredits,
  certifications,
  personId,
});

export default portalReducer;
