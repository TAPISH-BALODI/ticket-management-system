import { userConstants } from './../constants/user.constants';

let user = localStorage.getItem('user');
const initialState = user ? { loggedIn: false, user, isLoading: false } : {};

export function createAgent(state = initialState, action) {
  console.log("inside GETAPPLICATIONS function", action)
  switch (action.type) {
    case userConstants.CREATE_AGENT_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
        isLoading : true

      };
    case userConstants.CREATE_AGENT_SUCCESS:
      console.log("staaaa",action)
      return {
        loggedIn: true,
        createAgent: action.res,
        isLoading : false
      };
    case userConstants.CREATE_AGENT_FAILURE:
      return {
        isLoading : false
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}
