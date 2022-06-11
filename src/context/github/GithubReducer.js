const githubReducer = (action, state = {}) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return { ...state, loadint: true };
    default:
      return state;
  }
};

export default githubReducer;
