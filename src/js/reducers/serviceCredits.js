const serviceCredit = (state, action) => {
  switch (action.type) {
    case 'ADD_SERVICE_CREDIT':
      return {
        id: action.id,
        description: action.description,
        performedAt: action.performedAt,
        approver: null,
      };
    default:
      return state;
  }
};

const serviceCredits = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SERVICE_CREDIT':
      return [
        ...state,
        serviceCredit(undefined, action),
      ];
    default:
      return state;
  }
};

export default serviceCredits;
