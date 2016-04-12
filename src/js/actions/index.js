import moment from 'moment';

let nextCertificationId = 0;
export const addCertification = ({ certificationTypeId, personId, number, issued, expires }) => ({
  type: 'ADD_CERTIFICATION',
  id: nextCertificationId++,
  certificationTypeId,
  personId,
  number,
  issued: moment(issued),
  expires: moment(expires),
  requestedOn: moment(),
});

export const approveCertification = (id, approverId) => ({
  type: 'APPROVE_CERTIFICATION',
  id,
  approvedOn: moment(),
  approvedBy: approverId,
});

export const rejectCertification = (id) => ({
  type: 'REJECT_CERTIFICATION',
  id,
});

let nextCertificationTypeId = 0;
export const addCertificationType = (certificationType) => ({
  type: 'ADD_CERTIFICATION_TYPE',
  id: nextCertificationTypeId++,
  certificationType,
});

export const setPage = (page) => ({
  type: 'SET_PAGE',
  page,
});

let nextPersonId = 0;
export const addPerson = (firstName, lastName) => ({
  type: 'ADD_PERSON',
  id: nextPersonId++,
  firstName,
  lastName,
});

export const updatePerson = (id, person) => ({
  type: 'UPDATE_PERSON',
  id,
  person,
});

let nextRoleId = 0;
export const addRole = (role) => ({
  type: 'ADD_ROLE',
  id: nextRoleId++,
  role,
});

let nextServiceCreditId = 0;
export const addServiceCredit = (personId, description, performedAt) => ({
  type: 'ADD_SERVICE_CREDIT',
  id: nextServiceCreditId++,
  personId,
  description,
  performedAt,
});

export const setPersonId = (personId) => ({
  type: 'SET_PERSON_ID',
  personId,
});
