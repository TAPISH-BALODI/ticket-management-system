import axiosInstance from '../helpers/axios'
import axios from 'axios'

export const userService = {
    login,
    logout,
    getFeepayment,
    getActivity,
    submitOtp,
    getApplications,
    getRepayments,
    getEmiHistory
  };



  function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("user");

  }


  async function login(url, body) {
  
    
    
    const response =await  axios.post(process.env.REACT_APP_DASHBOARD_URL+url, body)
      .then((res)=>{
        return res.status
        
      })
      .catch(e => {
        console.log(e)
        alert("Error While Sending OTP!!!")
      })
    

    return response;
}

  async function getFeepayment(url,body, user) {
  
    
    
    const response =await axiosInstance.get(url,{
      headers : {
        Authorization: `Bearer ${user}`,
        'Content-type': 'application/json',
        
      }
    })
    .then((res) => {
        return res?.data?.data
    })
    .catch((err) => {
        console.log("Err", err)
        return err
    });
    

    return response;
}


    async function getActivity(url) {
      const response=await axiosInstance.get(url)
      .then((res)=>{
        console.log("response",res)
        return res;
      })
      .catch((err)=>{
        return err
      })
      

      return response
    }
    

    async function submitOtp(url,body) {

      const response=await axios.post(process.env.REACT_APP_DASHBOARD_URL+url,body)
      .then((res)=>{
      if(res.status === 200){
         
         
          return res
      }
      else
      {
        alert("Invalid OTP");
        return false;
      }

    })
      .catch((err)=>{
        alert(err?.response?.data?.message)
        return err;
      })

      return response;
      
    }
    
    async function getApplications(url,user) {

      const response=await axiosInstance.get(url,{
        headers:{
          Authorization:`Bearer ${user}`
        }
      })
      .then((res)=>{ 
          return res
    })
      .catch((err)=>{
        return err;
      })

      return response;
      
    }
    async function getRepayments(url) {

      const response=await axiosInstance.get(url)
      .then((res)=>{ 
          return res
    })
      .catch((err)=>{
        return err;
      })

      return response;
      
    }
    async function getEmiHistory(url) {

      const response=await axiosInstance.get(url)
      .then((res)=>{ 
          return res
    })
      .catch((err)=>{
        return err;
      })

      return response;
      
    }
    
