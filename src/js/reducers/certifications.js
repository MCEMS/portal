const certification = (state, action) => {
  switch (action.type) {
    case 'ADD_CERTIFICATION':
      return {
        id: action.id,
        certificationTypeId: action.certificationTypeId,
        personId: action.personId,
        number: action.number,
        issued: action.issued,
        expires: action.expires,
        approvedBy: null,
        approvedOn: null,
        requestedOn: action.requestedOn,
      };
    case 'APPROVE_CERTIFICATION':
      if (state.id === action.id) {
        return Object.assign({}, state, {
          approvedOn: action.approvedOn,
          approvedBy: action.approvedBy,
        });
      }
      return state;
    default:
      return state;
  }
};

const certifications = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CERTIFICATION':
      return [
        ...state,
        certification(undefined, action),
      ];
    case 'APPROVE_CERTIFICATION':
      return state.map(cert => (
        certification(cert, action)
      ));
    case 'REJECT_CERTIFICATION':
      return state.filter(cert => (
        cert.id !== action.id
      ));
    default:
      return state;
  }
};

export default certifications;
