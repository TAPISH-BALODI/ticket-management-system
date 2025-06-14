import "./App.css";
import Mainpage from "./Components/Mainpage/Index";
import Home from "./Components/Home/Index";
import {Provider} from "react-redux"
import {store} from "./helpers/store"

// import EnterPan from "./pay-later/pages/EnterPan";

import EnterPan from "./pay-later/pages/EnterPan";
import ValidatingPan from "./pay-later/pages/ValidatingPan";
import Sanctions from "./pay-later/pages/Sanction";
import Address from "./pay-later/pages/Address";
import WorkDetails from "./pay-later/pages/WorkDetails";
import CourseDetails from "./pay-later/pages/CourseDetails";
import Congratulations from "./pay-later/pages/Congratulations";
import SelectDate from "./pay-later/pages/SelectDate";
import SanctionLetter from "./pay-later/pages/SanctionLetter";
import SelectEmi from "./pay-later/pages/SelectEmi";
import Selfie from "./pay-later/pages/Sanction/selfie";
import Digilocker from "./pay-later/pages/Sanction/digilocker";
import Mandate from "./pay-later/pages/Sanction/mandate";
import Agreement from "./pay-later/pages/Sanction/agreement";
import Loandetails from "./Components/Mainpage/Loandetails";
import ApplicationDetails from "./Components/Mainpage/ApplicationsDetails";
import Repaymentdetails from "./Components/Mainpage/Repaymentdetails";
import Noactiveloans from "./Components/Mainpage/Noactiveloans";
import Noactiverepayments from "./Components/Mainpage/Noactiverepayments";
import FeeManagement from './feeManagement';
import UpFrontFee from './upFrontFee'
import PayFees from './payFees'
import Main from "./main";
import AOS from 'aos';
import Bstmt from "./bstmt"




import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataProvider } from "./pay-later/context/DataContext";


function App() {
  AOS.init()
  return (
    <>
    <Provider store={store}>

      <DataProvider>
        <Router>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/mainpage" element={<Mainpage />} />
            <Route path="/:data" element={<EnterPan />} />
            <Route path="/validating" element={<ValidatingPan />} />
            <Route path="/sanctions" element={<Sanctions />} />
            <Route path="/sanctions/digilocker" element={<Digilocker />} />
            <Route path="/sanctions/selfie" element={<Selfie />} />
            <Route path="/sanctions/agreement" element={<Agreement />} />
            <Route path="/sanctions/mandate" element={<Mandate />} />
            <Route path="/address" element={<Address />} />
            <Route path="/work-details" element={<WorkDetails />} />
            <Route path="/course-details" element={<CourseDetails />} />
            <Route path="/congratulations" element={<Congratulations />} />
            <Route path="/select-emi" element={<SelectEmi />} />
            <Route path="/select-date" element={<SelectDate />} />
            <Route path="/sanction-letter" element={<SanctionLetter />} />
            <Route exact path="/mainpage/loandetails" element={<Loandetails/>} />
            <Route exact path="/mainpage/applicationDetails" element={<ApplicationDetails/>} />
            <Route exact path="/mainpage/repaymentdetails" element={<Repaymentdetails/>} />
            <Route exact path="/mainpage/noactiveloans" element={<Noactiveloans/>} />
            <Route exact path="/mainpage/noactiverepayments" element={<Noactiverepayments/>} />
            <Route path="/" element={<Main/>} />
            <Route path="/feeManagement" element= {<FeeManagement/>} />
            <Route path="/bstmt" element= {<Bstmt/>} />


            {/* <Route path="/payments" element= {<MyPayments/>} /> */}
            <Route path="/upfrontFees" element= {<UpFrontFee/>} />
            <Route path="/payFees" element= {<PayFees/>} />
          </Routes>
        </Router>
      </DataProvider>
    </Provider>

    </>
  );
}

export default App;
