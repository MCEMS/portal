const person = (state, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return {
        id: action.id,
        firstName: action.firstName,
        lastName: action.lastName,
      };
    case 'UPDATE_PERSON':
      if (state.id === action.id) {
        return action.person;
      }
      return state;
    default:
      return state;
  }
};

const people = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return [
        ...state,
        person(undefined, action),
      ];
    case 'UPDATE_PERSON':
      return state.map(p => person(p, action));
    default:
      return state;
  }
};

export default people;
