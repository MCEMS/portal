const initialState = [
  {
    id: -1,
    firstName: 'Ben',
    lastName: 'Burwell',
  },
];

const person = (state, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return {
        id: action.id,
        firstName: action.firstName,
        lastName: action.lastName,
      };
    default:
      return state;
  }
};

const people = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return [
        ...state,
        person(action),
      ];
    default:
      return state;
  }
};

export default people;
