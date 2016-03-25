const certification = (state, action) => {
  switch (action.type) {
    case 'ADD_CERTIFICATION':
      return {
        id: action.id,
        type: action.certification,
        number: action.number,
        issued: action.issued,
        expires: action.expires,
      };
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
    default:
      return state;
  }
};

export default certifications;
