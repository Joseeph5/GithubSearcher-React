const reducer = (state, action) => {
  switch (action.type) {
    case 'set_request':
      return { ...state, requests: action.payload };
    case 'set_error':
      return { ...state, error: action.payload };
    case 'set_loading':
      return { ...state, isLoading: action.payload };
    case 'set_user':
      return { ...state, user: action.payload };
    case 'set_repos':
      return { ...state, repos: action.payload };
    case 'set_followers':
      return { ...state, followers: action.payload };
    default:
      return state;
  }
};

export default reducer;
