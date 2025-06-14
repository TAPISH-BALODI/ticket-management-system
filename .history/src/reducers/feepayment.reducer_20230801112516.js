import { userConstants } from './../constants/user.constants';

let user = localStorage.getItem('user');
const initialState = user ? { loggedIn: false, user, isLoading: false } : {};

export function feepayment(state = initialState, action) {
  console.log("inside feepayment function", action)
  switch (action.type) {
    case userConstants.FEE_PAYMENT_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
        isLoading : true

      };
    case userConstants.FEE_PAYMENT_SUCCESS:
      console.log("staaaa",action)
      return {
        loggedIn: true,
        feepaymentData: action.res,
        isLoading : false
      };
    case userConstants.FEE_PAYMENT_FAILURE:
      return {
        isLoading : false
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}
