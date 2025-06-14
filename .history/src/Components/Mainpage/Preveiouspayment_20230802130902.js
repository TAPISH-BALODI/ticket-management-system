import React from 'react'
import { Grid,  Box, Typography, Divider } from '@mui/material';
import { Mainpagestyle } from './Style'
import {useLocation} from 'react-router-dom'
import Slidercard from './Slidercard';

export default function Preveiouspayment({userData}) { 

  return (
    <>
      <Mainpagestyle>
        <Box my={5} >
          <Grid container >
            <Grid item xs={8} sm={4} md={3} >
              <Typography variant="body2" component="div" className="payment" >
                Previous Fee Payments
                <svg width="5" height="23" viewBox="0 0 5 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.461426" y="0.772095" width="4.17139" height="21.7188" rx="2.08569" fill="#D32028" />
                </svg>

              </Typography>

            </Grid>
            <Grid item xs={4} sm={8} md={9} >
              <Box mt={2} >
                <Divider />
              </Box>
            </Grid>
          </Grid>

          {/* slider started */}
          <Box className="sliderlft" ml={2} >
            <Slidercard data={userData} />
          </Box>
          {/* slider ended */}
        </Box>
      </Mainpagestyle>

    </>
  )
}
