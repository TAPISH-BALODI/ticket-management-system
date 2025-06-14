import * as React from "react";
import axios from 'axios';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider, Typography, TextField ,Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {useDispatch,useSelector} from 'react-redux';
import {userActions} from '../../actions/user.actions'
import CloseIcon from "@mui/icons-material/Close";
import {Homestyle} from './Style'
import female from '../../Assets/images/login-female.svg'
import axiosInstance from '../../helpers/axios'



export default function MaxWidthDialog({open,setOpen,open2,setOpen2}) {
  const dispatch=useDispatch();
  const sendOtpState=useSelector((state)=>state)
  

  React.useEffect(() => {
    console.log(sendOtpState?sendOtpState.authentication.res:null,"gya otp")
    if(sendOtpState)
    {
      if(sendOtpState.authentication.res===200)
      {
        handleClose2()
      }
    }

  }, [sendOtpState])
  
//   const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("xs");
  const [mobileNumber, setMobileNumber] = React.useState("xs");

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen(false);
    setOpen2(true);
  };

  const sendOtp=()=>{
    if(mobileNumber?.length===10)
    { 
      const urlGetOtp='/user/otp'
      localStorage.setItem("mob",mobileNumber)
       const payLoad = {
        phoneNumber : mobileNumber
      }
      dispatch(userActions.login(urlGetOtp,payLoad),[])
      setMobileNumber(null)
    }
    else
    alert("Invalid Mobile Number")
  }

  return (
    <Homestyle>


      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
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
        Login
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
            <Grid container  justifyContent="center" >
            <Grid item xs={12} md={8} >

         
          <Typography variant="body2" component="div" className="Welcome" >
          Welcome!
              </Typography>

              <Typography variant="body2" component="div" className="details" >
              To get started, Please enter your details.
              </Typography>
            {/*  started */}
            <Box mt={2}>
              <Typography variant="body2" component="div" className="number-login" >
              Mobile Number
              </Typography>
              <TextField
                id="outlined-basic"
                placeholder="+91 876543210"
                size="small"
                color="primary"
                variant="outlined"
                className="searchiput"
                fullWidth
                type="number"
                onChange={(e)=>setMobileNumber(e.target.value)}
              />
            </Box>
            {/*  ended */}
           

            <Box my={4}>
              <Button
                variant="contained"
                color="primary"
                onClick={()=>sendOtp()}
                className="Submit"
                fullWidth
              >
              Send OTP
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
