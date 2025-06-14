import { userConstants } from "./../constants/user.constants";
import {userService} from "../services/user.services";

import axiosInstance from "../helpers/axios";

export const userActions = {
  
    login,
    getFeepayment,
    submitOtp,
    getApplications,
    getRepayments,
    getEmiHistory


    
   
    
  };
  

  function login(url,body) {

    return (dispatch) => {
        

        userService.login(url, body).then(
            (res) => {

           
              dispatch(success(res));
            },
            (error) => {
              dispatch(failure(error.toString()));
            }
        )
    }

    function request(user) {
        return { type: userConstants.LOGIN_REQUEST, user };
      }
      function success(res) {
        return { type: userConstants.LOGIN_SUCCESS, res };
      }
      function failure(error) {
        return { type: userConstants.LOGIN_FAILURE, error };
      }
}


  function submitOtp(url,body) {

    return (dispatch) => {
        

        userService.submitOtp(url, body).then(
            (res) => {

           
              dispatch(success(res));
            },
            (error) => {
              dispatch(failure(error.toString()));
            }
        )
    }

    function request(user) {
        return { type: userConstants.SUBMITOTP_REQUEST, user };
      }
      function success(res) {
        return { type: userConstants.SUBMITOTP_SUCCESS, res };
      }
      function failure(error) {
        return { type: userConstants.SUBMITOTP_FAILURE, error };
      }
}
  function getFeepayment(url, body, user) {

    return (dispatch) => {
        dispatch(request({ user }))

        userService.getFeepayment(url, body,user).then(
            (res) => {

              console.log(res, "inside feepayment function")
              dispatch(success(res));
            },
            (error) => {
              dispatch(failure(error.toString()));
            }
        )
    }

    function request(user) {
        return { type: userConstants.FEE_PAYMENT_REQUEST, user };
      }
      function success(res) {
        return { type: userConstants.FEE_PAYMENT_SUCCESS, res };
      }
      function failure(error) {
        return { type: userConstants.FEE_PAYMENT_FAILURE, error };
      }
}


  function getApplications(url, user) {

    return (dispatch) => {
        dispatch(request({ user }))

        userService.getApplications(url,user).then(
            (res) => {

              console.log(res, "inside feepayment function")
              dispatch(success(res));
            },
            (error) => {
              dispatch(failure(error.toString()));
            }
        )
    }

    function request(user) {
        return { type: userConstants.GET_APPLICATIONS_REQUEST, user };
      }
      function success(res) {
        return { type: userConstants.GET_APPLICATIONS_SUCCESS, res };
      }
      function failure(error) {
        return { type: userConstants.GET_APPLICATIONS_FAILURE, error };
      }
}

 

  function getRepayments(url) {

    return (dispatch) => {
        

        userService.getRepayments(url).then(
            (res) => {

              console.log(res, "inside repayments function")
              dispatch(success(res));
            },
            (error) => {
              dispatch(failure(error.toString()));
            }
        )
    }

    function request(user) {
        return { type: userConstants.GET_REPAYMENTS_REQUEST, user };
      }
      function success(res) {
        return { type: userConstants.GET_REPAYMENTS_SUCCESS, res };
      }
      function failure(error) {
        return { type: userConstants.GET_REPAYMENTS_FAILURE, error };
      }
}

 

  function getEmiHistory(url) {

    return (dispatch) => {
        

        userService.getEmiHistory(url).then(
            (res) => {

              console.log(res, "inside EMIHISTORY function")
              dispatch(success(res));
            },
            (error) => {
              dispatch(failure(error.toString()));
            }
        )
    }

    function request(user) {
        return { type: userConstants.GET_EMIHISTORY_REQUEST, user };
      }
      function success(res) {
        return { type: userConstants.GET_EMIHISTORY_SUCCESS, res };
      }
      function failure(error) {
        return { type: userConstants.GET_EMIHISTORY_FAILURE, error };
      }
}

 

