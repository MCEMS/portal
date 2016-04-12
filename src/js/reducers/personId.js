const personId = (state = -1, action) => {
  switch (action.type) {
    case 'SET_PERSON_ID':
      return action.personId;
    default:
      return state;
  }
};

export default personId;
