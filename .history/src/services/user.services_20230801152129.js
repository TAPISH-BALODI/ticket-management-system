import axiosInstance from '../helpers/axios'

export const userService = {
    login,
    logout,
    getFeepayment,
    getActivity,
    submitActivity,
    submitOtp
  };



  function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("user");

  }


  async function login(url, body) {
  
    
    
    const response =await  axiosInstance.post(url, body)
      .then((res)=>{
        return res
        
      })
      .catch(e => {
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
    
    //post activity
    async function submitActivity(url,body,user) {
      const response=await axiosInstance.post(url,body,{
        headers:{
          Authorization:`Bearer ${user}`
        }
      })
      .then((res)=>{
        console.log("response",res)
        return res;
      })
      .catch((err)=>{
        return err
      })
      

      return response
    }

    async function postIncomePDf(url,body,user) {

      const response=await axiosInstance.post(url,body,{
        headers:{
          Authorization:`Bearer ${user}`
        }
      })
      .then((res)=>{
        return res;
      })
      .catch((err)=>{
        return err;
      })

      return response;
      
    }
    async function submitOtp(url,body) {

      const response=await axiosInstance.post(url,body)
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
        return err;
      })

      return response;
      
    }
    
