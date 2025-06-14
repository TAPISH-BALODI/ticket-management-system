import React from 'react'
import { Container, List, ListItem,Button ,Grid,Paper,Box,Typography} from '@mui/material';
import {Homestyle} from './Style'
import Loanicon from '../../Assets/images/Loanicon.svg'
import Guru from '../../Assets/images/Guru.svg'
import Educationcard from './Educationcard';
import Login from './Login'
import Verification from './Verification'

export default function Hero() {

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);


  return (
    <>
    <Homestyle>
        <Container>
            <Paper className='paper-setting'  >
                <div className='paper-btn' >
                <Grid container >
                    <Grid item xs={6} md={3} >
                    <Button   fullWidth color='primary'   >
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.66797 1.51855H2.67305C2.27556 1.51855 1.89435 1.67646 1.61328 1.95752C1.33222 2.23859 1.17432 2.6198 1.17432 3.01729V15.0071C1.17432 15.4046 1.33222 15.7858 1.61328 16.0669C1.89435 16.348 2.27556 16.5059 2.67305 16.5059H11.6654C12.0629 16.5059 12.4441 16.348 12.7252 16.0669C13.0063 15.7858 13.1642 15.4046 13.1642 15.0071V6.01475M8.66797 1.51855L13.1642 6.01475M8.66797 1.51855V6.01475H13.1642M10.1667 9.76157H4.17178M10.1667 12.759H4.17178M5.67051 6.76411H4.17178" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Applications
                    </Button>
                    </Grid>
                    <Grid item xs={6} md={3} >
                    <Button   fullWidth color='primary'   >
                    <Box component="img" src={Loanicon} marginRight={1} />
Loans
                    </Button>
                    </Grid>
                    <Grid item xs={6} md={3} >
                    <Button   fullWidth color='primary'   >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9863 11.6146C18.7844 12.795 18.3574 13.9133 17.7208 14.9384C17.0841 15.9595 16.2728 16.8371 15.3022 17.5438C14.3007 18.2737 13.171 18.7901 11.952 19.0736C11.2455 19.2367 10.5351 19.3182 9.82857 19.3182C8.5902 19.3182 7.35959 19.0658 6.19886 18.5688C5.32152 18.1922 4.51017 17.6874 3.78423 17.0623C3.66777 16.9613 3.55519 16.8565 3.44261 16.7516L1.85486 18.3397V14.0686H6.1251L4.19185 16.0023C6.16004 17.8738 8.97064 18.6775 11.7114 18.0369C16.1175 17.0079 18.866 12.5815 17.8372 8.17055L18.8698 7.92981C19.161 9.15291 19.1959 10.3915 18.9863 11.6146Z" fill="black"/>
<path d="M1.85473 11.9098L0.822103 12.1505C0.534832 10.9352 0.496012 9.69655 0.709524 8.47345C0.91139 7.29307 1.33841 6.17481 1.97507 5.14973C2.61172 4.12854 3.42307 3.25102 4.39358 2.54434C5.39515 1.81436 6.52482 1.29794 7.74378 1.0145C10.8416 0.292286 14.0366 1.21252 16.2649 3.34032L17.8992 1.70564V5.97678H13.629L15.5117 4.0936C13.5397 2.21818 10.7174 1.41055 7.98447 2.04734C3.57059 3.07629 0.822103 7.50274 1.85473 11.9098Z" fill="black"/>
<path d="M6.88196 9.40529H10.2555C10.2399 9.52566 10.17 9.83629 9.8556 10.1159C9.37423 10.5468 8.5163 10.7177 7.37886 10.6051L7.27793 10.5973L7.28181 11.471L10.535 15.0121H11.8859V14.7287L8.88121 11.3467C9.42858 11.3118 11.2298 11.0672 11.618 9.40529H12.6041L13.2757 8.47729H11.5676C11.5055 8.23655 11.4084 8.02299 11.2725 7.84438H12.6118L13.2834 6.91638H7.56908L6.89749 7.84438H8.58617C8.69875 7.84827 9.63432 7.90651 10.0575 8.47729H7.55743L6.88196 9.40529Z" fill="black"/>
</svg>

Repayment
                    </Button>
                    </Grid>
                    <Grid item xs={6} md={3} >
                    <Button   fullWidth color='secondary'   >
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.943359 0.365625H0.793359V0.515625V15.6168V15.7668H0.943359H4.64169H4.79169V15.6168V15.1307V14.9807H4.64169H1.58717V1.15176H12.0565V7.2284V7.3784H12.2065H12.7003H12.8503V7.2284V0.515625V0.365625H12.7003H0.943359Z" fill="#D32028" stroke="#D32028" stroke-width="0.3"/>
<path d="M6.31703 15.1247L6.84665 13.0874L10.2321 14.3302L10.2838 14.3492L10.3355 14.3302L13.721 13.0874L14.2506 15.1214L10.2838 16.5265L6.31703 15.1247ZM10.3355 7.39786L10.2838 7.37893L10.2322 7.39786L3.45191 9.88369L3.35354 9.91976V10.0245V11.7036V11.8083L3.4519 11.8444L6.09777 12.8146L5.40018 15.4893L5.36541 15.6226L5.49532 15.6686L10.2338 17.3442L10.2839 17.3619L10.3339 17.3441L15.0724 15.6651L15.2022 15.6191L15.1674 15.4858L14.4699 12.8147L16.4203 12.1009V12.6113C16.0106 12.7655 15.7058 13.1486 15.7058 13.6136C15.7058 13.8885 15.8147 14.1362 15.9867 14.3242L15.2177 16.4202L15.1739 16.5395L15.2844 16.6023L15.4666 16.7057L15.4666 16.7057L15.468 16.7065C16.3047 17.1694 17.3297 17.1694 18.1664 16.7065L18.1664 16.7065L18.1678 16.7057L18.3499 16.6023L18.4604 16.5395L18.4167 16.4202L17.6476 14.3208C17.8196 14.133 17.9286 13.8857 17.9286 13.6136C17.9286 13.152 17.624 12.7661 17.2141 12.6113V10.0245V9.91976L17.1157 9.88369L10.3355 7.39786ZM16.8154 14.6876C16.8547 14.6876 16.8937 14.6852 16.9319 14.6806L17.4575 16.1132C17.0397 16.2592 16.5912 16.2592 16.1734 16.1132L16.6991 14.6805C16.7368 14.6851 16.7756 14.6876 16.8154 14.6876ZM16.8154 13.3189C17.0013 13.3189 17.1312 13.4576 17.1312 13.6102C17.1312 13.7628 17.0013 13.9015 16.8154 13.9015C16.6288 13.9015 16.4996 13.7655 16.4996 13.6102C16.4996 13.4576 16.6296 13.3189 16.8154 13.3189ZM4.14735 10.4671L10.2839 8.21562L16.4203 10.4638V11.2575L10.2838 13.509L4.14735 11.2609V10.4671Z" fill="#D32028" stroke="#D32028" stroke-width="0.3"/>
<path d="M8.41711 3.07888H8.26711V3.22888V3.71502V3.86502H8.41711H10.8967H11.0467V3.71502V3.22888V3.07888H10.8967H8.41711Z" fill="#D32028" stroke="#D32028" stroke-width="0.3"/>
<path d="M6.42786 4.58206H6.27786V4.73206V5.21819V5.36819H6.42786H10.8967H11.0467V5.21819V4.73206V4.58206H10.8967H6.42786Z" fill="#D32028" stroke="#D32028" stroke-width="0.3"/>
<path d="M6.42786 6.08535H6.27786V6.23535V6.72149V6.87148H6.42786H10.8967H11.0467V6.72149V6.23535V6.08535H10.8967H6.42786Z" fill="#D32028" stroke="#D32028" stroke-width="0.3"/>
</svg>


Fee Payment
                    </Button>
                    </Grid>
                </Grid>
                </div>
                <Box textAlign="center" my={6}  >
                <Box component="img" src={Guru}   />
                <Typography variant="h3" gutterBottom className="payment-text" >
                No active Fee Payments
      </Typography>
      <Button className='started' >
      To get started
      </Button>
      <div>
      <Button variant='contained' color='primary'  className='login-btn' onClick={()=>{
      setOpen(true)
    }}>
      Login 
      </Button>
      </div>

                </Box>
                {/* edcuation crd started */}
                <Educationcard/>
       {/* edcuation crd ended */}
            </Paper>
        </Container>

    </Homestyle>
    <Login open={open} setOpen={setOpen}  open2={open2} setOpen2={setOpen2} />
    <Verification open2={open2} setOpen2={setOpen2} open={open} setOpen={setOpen}  />

    </>
  )
}
