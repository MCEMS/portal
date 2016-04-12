const role = (state, action) => {
  switch (action.type) {
    case 'ADD_ROLE':
      return {
        id: action.id,
        personId: action.personId,
        roleId: action.roleId,
        approvedBy: null,
        approvedOn: null,
      };
    default:
      return state;
  }
};

const roles = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ROLE':
      return [
        ...state,
        role(undefined, action),
      ];
    default:
      return state;
  }
};

export default roles;
