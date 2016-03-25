const certificationType = (state, action) => {
  switch (action.type) {
    case 'ADD_CERTIFICATION_TYPE':
      return {
        id: action.id,
        type: action.certificationType,
      };
    default:
      return state;
  }
};

const certificationTypes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CERTIFICATION_TYPE':
      return [
        ...state,
        certificationType(undefined, action),
      ];
    default:
      return state;
  }
};

export default certificationTypes;
