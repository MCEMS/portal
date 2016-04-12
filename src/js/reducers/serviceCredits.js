const serviceCredit = (state, action) => {
  switch (action.type) {
    case 'ADD_SERVICE_CREDIT':
      return {
        id: action.id,
        personId: action.personId,
        description: action.description,
        performedAt: action.performedAt,
        approvedBy: null,
        approvedOn: null,
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
