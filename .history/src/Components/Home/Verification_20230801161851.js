import * as React from "react";
import axios from 'axios';
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {useDispatch,useSelector} from 'react-redux';
import {userActions} from '../../actions/user.actions.js'
import { Divider, Typography, TextField,Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {Homestyle} from './Style'
import female from '../../Assets/images/optimg.svg'
import { Link,useNavigate } from "react-router-dom";
import axiosInstance from '../../helpers/axios'



export default function MaxWidthDialog({open2,setOpen2,open,setOpen,}) {
//   const [open, setOpen] = React.useState(false);
const navigate=useNavigate();
const dispatch=useDispatch();
const confirmOtpState=useSelector((state)=>state);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("xs");
  const [enteredOtp,setEnteredOtp]=React.useState(null)
//   const handleClickOpen = () => {
//     setOpen(true);
//   };
  
 React.useEffect(() => {
    console.log(confirmOtpState?confirmOtpState.submitotp.submitOtp:null,"gya otp")
    if(confirmOtpState.submitotp)
    {
      if(confirmOtpState.submitotp.submitOtp?.status===200)
      { 

        localStorage.setItem('user',confirmOtpState.submitotp.submitOtp.data.token)
        localStorage.setItem('userId', confirmOtpState.submitotp.submitOtp.data.user._id)
        navigate('/mainpage',{
          state:{
            userData:confirmOtpState.submitotp.submitOtp.data.user
          }
        })
        handleClose()
      }
    }
      
  }, [confirmOtpState])

const verifyOtp=()=>{
  console.log( localStorage.getItem("mob"),enteredOtp.length)
  if(enteredOtp.length===4){

      const urlSubmitOtp="/user/login" 
     const payLoad = {
        phoneNumber : localStorage.getItem("mob"),
        otp : enteredOtp
      }

      dispatch(userActions.submitOtp(urlSubmitOtp,payLoad))
      // axiosInstance.post( "/user/login", payLoad)
      // .then((res)=>{
      //   if(res.status === 200){
      //     console.log(res)
      //     handleClose()
      //     navigate('/mainpage', {state : {
      //       user : res.data.user
      //     }
      //     })
      //     // setOtpReceived(true)
      //   }
        
      // })
      // .catch(e => {
      //   alert("Login Failed Check OTP!!!");
      // })
  }
  else
  {
    alert("Enter 4 digit OTP")
  }
}
  const handleClose = () => {
    setOpen2(false);
  };

  return (
    <Homestyle>


      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open2}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            maxWidth: "600px !important ",
          },
          "& .MuiDialogContent-root": {
            padding: "21px 40px",
          },
          "& .MuiDialogTitle-root": {
            padding: "6px 40px",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: "26px",
            fontFamily: "Inter-SemiBold",
            background: "#E9E9E9",
            textTransform: "capitalize",
          }}
        >
       Verification
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Divider />

        <DialogContent>
          <Homestyle>
            <Grid container justifyContent="center" >
            <Grid item lg={8} >

          <Typography variant="body2" component="div" className="Welcome" >
          Enter OTP
              </Typography>

              <Typography variant="body2" component="div" className="details" >
              A verification code has been sent to 
your phone
              </Typography>
            {/*  started */}
            <Box mt={2}>
              <Grid container spacing={2} >
                <Grid  item  xs={3} >
                <Input onChange={(e)=>setEnteredOtp(e.target.value)} style={{width:'6em',marginLeft:'7em',height:'4em',}} type="number" placeholder="Enter OTP"/>
                 
                </Grid>
                </Grid>

            </Box>
            {/*  ended */}
           

            <Box my={4}>
            
              <Button
                variant="contained"
                color="primary"
                onClick={()=>verifyOtp()}
                className="otpbtn"
                fullWidth
              >
            Verify OTP
              </Button>
           
            </Box>
            <Typography variant="body2" component="div" className="details" >
            Didn’t receive the OTP? <span className="click" >Click to resend</span>
              </Typography>
              <Box textAlign="center" my={2}  >
            
              <Button className="optback" onClick={()=>{
                setOpen2(false)
                setOpen(true)
              }}  >
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6128 10H4.94617M4.94617 10L10.7795 15.8334M4.94617 10L10.7795 4.16669" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Back
              </Button>
             
              </Box>
            </Grid>
            </Grid>
            <Box  component="img" src={female} width="100%" />
          </Homestyle>
        </DialogContent>
     
      </Dialog>
    </Homestyle>
  );
}
