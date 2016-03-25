let nextCertificationId = 0;
export const addCertification = (certification, number, issued, expires) => ({
  type: 'ADD_CERTIFICATION',
  id: nextCertificationId++,
  certification,
  number,
  issued,
  expires,
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

let nextRoleId = 0;
export const addRole = (role) => ({
  type: 'ADD_ROLE',
  id: nextRoleId++,
  role,
});

let nextServiceCreditId = 0;
export const addServiceCredit = (description, performedAt) => ({
  type: 'ADD_SERVICE_CREDIT',
  id: nextServiceCreditId++,
  description,
  performedAt,
});
