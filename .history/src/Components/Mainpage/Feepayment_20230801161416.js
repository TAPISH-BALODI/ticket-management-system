import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Grid, Box, Typography, Divider } from "@mui/material";
import { Mainpagestyle } from "./Style";
import { useLocation, useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux';
import {userActions} from '../../actions/user.actions';
import Educationcard from "../Home/Educationcard";
import Preveiouspayment from "./Preveiouspayment";
import Cap from "../../Assets/images/cap.svg";
import Insitutte from "../../Assets/images/Insitutte.svg";
import Pay from "../../Assets/images/Pay.svg";
import axiosInstance from "../../helpers/axios";

export default function Feepayment() {

  const dispatch=useDispatch();
  const state=useSelector((state)=>state);
  const [rows, setRows] = useState([]);
  const [updatedRow, setUpdatedRow] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentPayload, setPaymentPayload] = useState();
  // console.log("Location" , location)

  function onPayClickListener(item) {
    const easeBuzzPayload = {
      amount: parseFloat(item.amount_due),
      productinfo: item.payment_name,
      firstname: location?.state?.user?.first_name,
      phone: location?.state?.user?.phone,
      email: location?.state?.user?.email,
      paymentId: item._id,
    };

    axiosInstance
      .post("/easebuzz/payment_link/create", easeBuzzPayload)
      .then((res) => {
        console.log("Response", res?.data?.res?.data);
        window.open("https://testpay.easebuzz.in/pay/" + res?.data?.res?.data);
      })
      .catch((e) => {
        console.log("Errror", e);
      });
  }

  // function onRowsSelectionHandler(ids){

  //     console.log("Ids" , ids)

  //     let payment  = {}
  //     if(ids.length > 0){
  //         rows.map((item) => {

  //             if(item._id === ids[0] ){
  //                 payment = item;
  //             }
  //         })
  //     }

  //     console.log("Phone" ,location?.state?.user?.phone )

  //     setPaymentPayload(easeBuzzPayload)

  // }

  React.useEffect(() => {
    console.log("State", state);

    axiosInstance.get(`/mypayments/fetch/${state?.submitotp?.submitOtp ? state?.submitotp?.submitOtp?.data?.user?._id : localStorage.getItem("userId")}`)
      .then((res) => {
        console.log("Response", res);

        if (res.status === 200) {
          setRows(res?.data?.res);

          const foo = [];

          res?.data?.res.forEach((element) => {
            const txn = {
              txnid: element.txnId,
              amount: parseFloat(element.amount_due).toFixed(1),
              email: element.email,
              phone: element.phone,
              studentId: location?.state?.user?._id,
              paymentId: element._id,
            };

            console.log("txn", txn);

            axiosInstance
              .post("/easebuzz/transaction/status", txn)
              .then((res) => {
                // console.log(res)
              })
              .catch((e) => {
                console.log("Error", e);
              });

            const exFoo = {
              id: element._id,
              payment_name: element.payment_name,
              dueDate: element.due_date,
              status: element.status,
              amountDue: element.amount_due,
            };

            foo.push(exFoo);
          });

          setUpdatedRow(foo);
        }
      })
      .catch((e) => {
        console.log("Erooooooorrrrr", e);
      });
  }, []);

  return (
    <>
      <Mainpagestyle>
        <Box my={5}>
          <Grid container>
            <Grid item xs={6} sm={4} md={3}>
              <Typography variant="body2" component="div" className="payment">
                Current Fee Payments
                <svg
                  width="5"
                  height="23"
                  viewBox="0 0 5 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.461426"
                    y="0.772095"
                    width="4.17139"
                    height="21.7188"
                    rx="2.08569"
                    fill="#D32028"
                  />
                </svg>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={8} md={9}>
              <Box mt={2}>
                <Divider />
              </Box>
            </Grid>
          </Grid>
          {/* card section started */}
          {rows?.map((item) => {
            if (item?.status === "Pending") {
              return (
                <div className="payment-crd">
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} lg={2.5}>
                      <Typography
                        variant="body2"
                        component="div"
                        className="Beneficiary"
                      >
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.8149 6.31734V9.51771C18.8149 9.70935 18.6616 9.86266 18.47 9.86266C18.2783 9.86266 18.125 9.70935 18.125 9.51771V6.72745L16.3926 7.7508V11.5951C16.3926 13.086 15.718 14.4198 14.6602 15.309V18.6359L22.0613 21.6638C22.2376 21.7366 22.3219 21.9397 22.2491 22.1161C22.1763 22.2924 21.9731 22.3767 21.7968 22.3039L14.1811 19.184C14.0508 19.1303 13.9664 19.0038 13.9664 18.862V15.792C13.2382 16.2136 12.4065 16.4397 11.5441 16.4397C10.6817 16.4397 9.85004 16.2136 9.12181 15.792V18.862C9.12181 19.0038 9.03749 19.1303 8.90717 19.184L1.29144 22.3C1.11513 22.3729 0.911997 22.2885 0.839174 22.1122C0.766351 21.9359 0.850672 21.7328 1.02698 21.66L8.42807 18.6321V15.3052C7.37023 14.416 6.69566 13.0822 6.69566 11.5912V7.74697L3.74825 6.00689C3.52212 5.87274 3.52212 5.54312 3.74825 5.40897L11.3678 0.913126C11.4751 0.847969 11.6131 0.847969 11.7204 0.913126L19.3362 5.41281C19.5623 5.54695 19.5623 5.87657 19.3362 6.01072L18.8149 6.31734ZM6.69949 6.94592V6.75045C6.69949 6.6163 6.77998 6.49365 6.8988 6.43616C8.44341 5.72326 9.99185 5.36681 11.5441 5.36681C13.0964 5.36681 14.6448 5.72326 16.1895 6.43616C16.3121 6.49365 16.3888 6.6163 16.3888 6.75045V6.94592L18.4776 5.71176L11.5441 1.61069L4.60679 5.71176L6.69949 6.94592ZM7.38939 9.86266V11.5951C7.38939 13.8909 9.24829 15.7498 11.5441 15.7498C13.84 15.7498 15.6989 13.8909 15.6989 11.5951V9.86266H7.38939ZM7.38939 6.97275V9.17276H15.6989V6.97275C14.3114 6.36334 12.9278 6.05671 11.5441 6.05671C10.1605 6.05671 8.77686 6.3595 7.38939 6.97275Z"
                            fill="black"
                            stroke="black"
                            stroke-width="0.5"
                          />
                        </svg>
                        Beneficiary name
                      </Typography>
                      <Typography
                        variant="body2"
                        component="div"
                        className="Tuviksh"
                      >
                        {item.payment_name}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={2.5}>
                      <Typography
                        variant="body2"
                        component="div"
                        className="Program"
                      >
                        <Box
                          component="img"
                          src={Cap}
                          className="cap-setting"
                        />
                        Program/Class
                      </Typography>
                      <Typography
                        variant="body2"
                        component="div"
                        className="Class"
                      >
                        {item.payment_name}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3.5}>
                      <Typography
                        variant="body2"
                        component="div"
                        className="Program"
                      >
                        <Box
                          component="img"
                          src={Insitutte}
                          className="cap-setting"
                        />
                        Institute/School
                      </Typography>
                      <Typography
                        variant="body2"
                        component="div"
                        className="Class"
                      >
                        {item.payment_name}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={1.5}>
                      <Typography
                        variant="body2"
                        component="div"
                        className="Program"
                      >
                        <Box
                          component="img"
                          src={Pay}
                          className="cap-setting"
                        />
                        Payable Fee
                      </Typography>
                      <Typography
                        variant="body2"
                        component="div"
                        className="Class"
                      >
                        ₹ {item.amount_due}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={2}>
                      <Button
                        onClick={() => onPayClickListener(item)}
                        variant="contained"
                        color="primary"
                        className="paynowbtn"
                      >
                        <svg
                          width="22"
                          height="17"
                          viewBox="0 0 22 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.16895 6.38912H21.1689M2.98713 0.93457H19.3508C20.3549 0.93457 21.1689 1.7486 21.1689 2.75275V13.6618C21.1689 14.666 20.3549 15.48 19.3508 15.48H2.98713C1.98297 15.48 1.16895 14.666 1.16895 13.6618V2.75275C1.16895 1.7486 1.98297 0.93457 2.98713 0.93457Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        Pay now
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              );
            } else {
              return <div></div>;
            }
          })}
          {/* card section ended */}

          {/* card section started
            <div className='payment-crd' >
        <Grid container spacing={3}  >
        <Grid item xs={12} sm={6} lg={2.5} >
        <Typography variant="body2" component="div" className='Beneficiary' >
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.8149 6.31734V9.51771C18.8149 9.70935 18.6616 9.86266 18.47 9.86266C18.2783 9.86266 18.125 9.70935 18.125 9.51771V6.72745L16.3926 7.7508V11.5951C16.3926 13.086 15.718 14.4198 14.6602 15.309V18.6359L22.0613 21.6638C22.2376 21.7366 22.3219 21.9397 22.2491 22.1161C22.1763 22.2924 21.9731 22.3767 21.7968 22.3039L14.1811 19.184C14.0508 19.1303 13.9664 19.0038 13.9664 18.862V15.792C13.2382 16.2136 12.4065 16.4397 11.5441 16.4397C10.6817 16.4397 9.85004 16.2136 9.12181 15.792V18.862C9.12181 19.0038 9.03749 19.1303 8.90717 19.184L1.29144 22.3C1.11513 22.3729 0.911997 22.2885 0.839174 22.1122C0.766351 21.9359 0.850672 21.7328 1.02698 21.66L8.42807 18.6321V15.3052C7.37023 14.416 6.69566 13.0822 6.69566 11.5912V7.74697L3.74825 6.00689C3.52212 5.87274 3.52212 5.54312 3.74825 5.40897L11.3678 0.913126C11.4751 0.847969 11.6131 0.847969 11.7204 0.913126L19.3362 5.41281C19.5623 5.54695 19.5623 5.87657 19.3362 6.01072L18.8149 6.31734ZM6.69949 6.94592V6.75045C6.69949 6.6163 6.77998 6.49365 6.8988 6.43616C8.44341 5.72326 9.99185 5.36681 11.5441 5.36681C13.0964 5.36681 14.6448 5.72326 16.1895 6.43616C16.3121 6.49365 16.3888 6.6163 16.3888 6.75045V6.94592L18.4776 5.71176L11.5441 1.61069L4.60679 5.71176L6.69949 6.94592ZM7.38939 9.86266V11.5951C7.38939 13.8909 9.24829 15.7498 11.5441 15.7498C13.84 15.7498 15.6989 13.8909 15.6989 11.5951V9.86266H7.38939ZM7.38939 6.97275V9.17276H15.6989V6.97275C14.3114 6.36334 12.9278 6.05671 11.5441 6.05671C10.1605 6.05671 8.77686 6.3595 7.38939 6.97275Z" fill="black" stroke="black" stroke-width="0.5"/>
</svg>

        Beneficiary name 


              </Typography>
              <Typography variant="body2" component="div" className='Tuviksh' >
              Mr. Rahul Aditya
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}  lg={2.5} >
        <Typography variant="body2" component="div" className='Program' >
        <Box component="img" src={Cap} className='cap-setting'  />

Program/Class


              </Typography>
              <Typography variant="body2" component="div" className='Class' >
              Class-II
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}  lg={3.5} >
        <Typography variant="body2" component="div" className='Program' >
        <Box component="img" src={Insitutte} className='cap-setting'  />
        
        Institute/School


              </Typography>
              <Typography variant="body2" component="div" className='Class' >
              Gaudium International School 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}  lg={1.5} >
        <Typography variant="body2" component="div" className='Program' >
        <Box component="img" src={Pay} className='cap-setting'  />
        
        Payable Fee


              </Typography>
              <Typography variant="body2" component="div" className='Class' >
              ₹ 25,000
              </Typography>
            </Grid>
            <Grid item xs={12}  lg={2} >
                <Button variant='contained' color='primary' className='paynowbtn'  >
                <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.16895 6.38912H21.1689M2.98713 0.93457H19.3508C20.3549 0.93457 21.1689 1.7486 21.1689 2.75275V13.6618C21.1689 14.666 20.3549 15.48 19.3508 15.48H2.98713C1.98297 15.48 1.16895 14.666 1.16895 13.6618V2.75275C1.16895 1.7486 1.98297 0.93457 2.98713 0.93457Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                Pay now
                </Button>
            </Grid>
            </Grid>
</div> */}
          {/* card section ended */}
        </Box>
      </Mainpagestyle>
      {/* {console.log("Row", rows)} */}
      <Preveiouspayment userData={rows} />
      <Educationcard />
    </>
  );
}
