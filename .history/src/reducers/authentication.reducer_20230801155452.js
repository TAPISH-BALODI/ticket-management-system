import { userConstants } from './../constants/user.constants';

let user = localStorage.getItem('user');
const initialState = user ? { loggedIn: false, user, isLoading: false } : {};

export function authentication(state = initialState, action) {
  console.log("inside authentication function", action)
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
        isLoading : true

      };
    case userConstants.LOGIN_SUCCESS:
      console.log("staaaa",action)
      return {
        loggedIn: true,
        res: action.res,
        isLoading : false
      };
    case userConstants.LOGIN_FAILURE:
      return {
        isLoading : false
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}
export function submitotp(state = [], action) {
  console.log("inside submitotp function", action)
  switch (action.type) {
    case userConstants.SUBMITOTP_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
        isLoading : true

      };
    case userConstants.SUBMITOTP_SUCCESS:
      console.log("staaaa",action)
      return {
        loggedIn: true,
        submitOtp: action.res,
        isLoading : false
      };
    case userConstants.SUBMITOTP_FAILURE:
      return {
        isLoading : false
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}
