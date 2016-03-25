const page = (state = 'profile', action) => {
  switch (action.type) {
    case 'SET_PAGE':
      return action.page;
    default:
      return state;
  }
};

export default page;
