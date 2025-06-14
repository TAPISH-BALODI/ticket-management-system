import FeemonkLogo from "../images/feemonk-logo.png"
import FeemonkLogo2 from "../images/feemonk-logo2.png"
import EmiPay from "../images/emi-pay.png"
import MobilePayment from "../images/Mobile Payment.svg"
import Investor from "../images/Investor.svg"
import BluePrint from "../images/Blue Print.svg"
import One from "../images/one.svg"
import ProfileDetails from "../images/profile_details_f8b7.svg"
import Done from "../images/done_checking_ty9a.svg"
import Two from "../images/two.svg"
import Three from "../images/three.svg"
import Agreement from "../images/agreement_aajr.svg"
import Student from "../images/student.svg"
import Family from "../images/family.svg"
import GoogleDocs from "../images/google-docs.svg"
import "./index.css"

export default function PayFees(){

  const handleOnClick = () => {
    window.scrollTo({top : 0 , behavior : 'smooth'})
  }
    return(
        <div>
              <div id="upfront" class="main">

<div class="container">
<div class="row">
<nav class="navbar navbar-expand-lg navbar-dark fixed-top">

  <a class="navbar-brand " href="/">
    <img class="logo1" href="/" src={FeemonkLogo} alt="logo" />
    <img class="logo2 d-none" href="/" src={FeemonkLogo2} alt="logo" />
  </a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
      <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

    <ul class="navbar-nav" style={{marginLeft : 'auto'}}>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          For Institutes
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="feeManagement">Fee Management Platform</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item active" href="upfrontFees">Up Front Fees</a>
          <div class="dropdown-divider"></div>
          
          {/* <!-- <a class="dropdown-item" href="./partner/partner1.html">Aashya Beauty Academy</a> -->
          <!-- <div class="dropdown-divider"></div> -->


          <!-- <a class="dropdown-item" href="./partner/partner2.html">Skill Stork International School</a> -->
          <!-- <div class="dropdown-divider"></div> -->

          <!-- <a class="dropdown-item" href="./partner/partner3.html">Birla Open Minds International School -->
          
          <!-- </a> --> */}
        </div>
       
      </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            For Students
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item active" href="payFees">Pay Fees In EMIs</a>
            <div class="dropdown-divider"></div>

            {/* <a class="dropdown-item" href="">EduPay Card</a>
            <div class="dropdown-divider"></div> */}
          </div>
        </li>
      {/* <!-- <li class="nav-item "> -->
        <!-- <a class="nav-link" href="#aboutus">About us</a> -->
      <!-- </li> --> */}
       <li class="nav-item ">
          <a href="https://www.feemonk.com/apply/form" target="_blank" type="button"  class="nav-link apply-button d-none d-sm-block">Apply now</a>
      </li>
      
      
    </ul>

  </div>
</nav>
</div>
<div class="row banner-section upfornt-main">

 <div class="col-lg-7 col-12"  data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1400">
    <h1 class="big-heading ">Pay your fees in easy EMIs</h1>
    <p class="para text-white">Feemonk enables you to pay your Education fees in easy EMIs through a simple and hassle free process. Now you can convert your School/College and Upskilling training fees into EMIs and pursue your dreams. <br/>If you are part of our existing network of School/College partners, you may be eligible for a 0% No Cost EMI too.</p>
  <a href="home" class="nav-link apply-button w-50 text-center p-3 fs-5">Avail Your Loan Now</a>
  </div>

    <div class="col-lg-5 d-none d-sm-block bg-gr">
        <img class="mx-auto d-block" width="100%" data-aos="fade-left" data-aos-duration="2000" src={EmiPay} alt="feemonk"/>
    </div>
 
  </div>



</div>
{/* <!-- </div> --> */}
</div>


<div class="stu" id="pay-fees">
<div class="container">
    <div class="row mt-4"> 
    <div class="col-lg-4">
 <div class="f-card aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
      <img class="" src={MobilePayment} width="50px"/>
        <div class="mt-2">
          <h4>Paperless</h4>
          <p>Our Loan processing is 100% digital including the agreements signing. Now you can complete and submit application from anywhere and anytime.</p>
      </div>	
      </div>
      </div>
  <div class="col-lg-4">
<div class="f-card aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
      <img class="" src={Investor} width="50px"/>
        <div class="mt-2">
          <h4>Quick Decision</h4>
          <p>Loan applications, completed and submitted by 1PM will get the decision on the same day. All other applications take a maximum of one business day for a Credit decision.</p>
      </div>	
      </div>
</div> 
<div class="col-lg-4">
<div class="f-card aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
      <img class="" src={BluePrint} width="50px"/>
        <div class="mt-2">
          <h4>Easy EMIs</h4>
          <p>Loans are tailored for Designing Programs to make it convenient for students. You can pay for the program of your choice in easy and interest free installments.</p>
      </div>	
      </div>
    </div>

  </div>
</div>
</div>


<div  class="stu" id="pay-fees1">
<div class="container">
  
  <div class="row gap align-items-center" data-aos="fade-up" data-aos-duration="500">
  <div class="col-md-6 col-12">
   <img class="mb-3" src={One} width="50px"/>
   <h2>Provide Basic Details</h2>
      <p class="up-p border-0">Give basic details about you and a Co-applicant if applicable along with your Proof of ID and a Proof of Address. Salaried family members can be added as Co-applicant if you are above 18 but you are not salaried yet.</p>
  </div>
  <div class="col-lg-6">
      <img class="mx-auto d-block img-fluid" src={ProfileDetails} width=""/>
   </div>
  </div>
  
  <div class="row gap align-items-center" data-aos="fade-up" data-aos-duration="500">
  <div class="col-lg-6">
      <img class="mx-auto d-block img-fluid" src={Done} width=""/>
   </div>
  <div class="col-md-6 col-12">
   <img class="mb-3" src={Two} width="50px"/>
   <h2>Submit documents for Loan Processing</h2>
      <p class="up-p border-0">Follow the checklist of documents required for you and your Co-applicant. Submit all the documents required, submit a Selfie and relax. We will take it from there.</p>
  </div>
  </div>
  <div class="row gap align-items-center" data-aos="fade-up" data-aos-duration="500">
  <div class="col-md-6 col-12">
   <img class="mb-3" src={Three} width="50px"/>
   <h2>Sign the agreements and Prepare for your Program</h2>
      <p class="up-p border-0">Once approved, we will send you the digital agreements to be signed. Complete signatures and sign up for e-Mandate and you are done. After receiving the advance EMI, we will credit the fees to the Institute on your behalf and you can move on to upskilling for your dream career.</p>
  </div>
  
  <div class="col-lg-6">
      <img class="mx-auto d-block img-fluid" src={Agreement} width=""/>
   </div>
  </div>
  
</div>



<div class="container payfees-inner">
  
    <div class="row mt-4"> 
    <div class="col-lg-4">
 <div class="f-card aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
      <img class="" src={Student} width="50px"/>
        <div class="mt-2">
          <h4>Documents Required</h4>
          <ul>
          <li data-aos="fade-up" data-aos-duration="400" class="aos-init aos-animate">Proof Of Identity</li>
          <li data-aos="fade-up" data-aos-duration="600" class="aos-init aos-animate">Proof Of Address</li>
          <li data-aos="fade-up" data-aos-duration="800" class="aos-init aos-animate">Selfie</li>
  <li data-aos="fade-up" data-aos-duration="200" class="aos-init aos-animate">Bank Statement/ITR</li>
      </ul>
      </div>	
      </div>
      </div>
  <div class="col-lg-4">
<div class="f-card aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
      <img class="" src={Family} width="50px"/>
        <div class="mt-2">
          <h4>Product Overview</h4>
         <ul>
          <li data-aos="fade-up" data-aos-duration="200" class="aos-init aos-animate">Loan Type: Personal Loan Education</li>
          <li data-aos="fade-up" data-aos-duration="400" class="aos-init aos-animate">Amount: ₹10,000-₹5,00,000</li>
          <li data-aos="fade-up" data-aos-duration="600" class="aos-init aos-animate">Tenure: 3-18 Months</li>
          <li data-aos="fade-up" data-aos-duration="800" class="aos-init aos-animate">Proc.Fees: 1-2%</li>
          <li data-aos="fade-up" data-aos-duration="1000" class="aos-init aos-animate">Interest Range: 0-15% Flat</li>
          <li data-aos="fade-up" data-aos-duration="1200" class="aos-init aos-animate">APR: 0-27%</li>
      </ul>
      </div>	
      </div>
</div> 
<div class="col-lg-4">
<div class="f-card aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
      <img class="" src={GoogleDocs} width="50px"/>
        <div class="mt-2">
          <h4>Other Requirements</h4>
          <ul>
          <li data-aos="fade-up" data-aos-duration="200" class="aos-init aos-animate">Aadhar Linked Mobile No.</li>
          <li data-aos="fade-up" data-aos-duration="400" class="aos-init aos-animate">E-Mandate</li>
          <li data-aos="fade-up" data-aos-duration="800" class="aos-init aos-animate">Post Dated Cheques</li>
      </ul>
      </div>	
      </div>
    </div>

  </div>
  </div>

</div>
  

  {/* <!-- about --> */}

  
  
  
<div class="footer-curve"></div>
    {/* <!-- footer --> */}
   <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3  mt-5">
          <img src={FeemonkLogo} width="50%"/>
          <p class="mt-4 pr-2" >
              FeeMonk is a registered TradeMark owned by RBI Registered NBFC Glaze Barter Private Limited and represents the Education Vertical of the NBFC. Headquartered in Hydereabad, FeeMonk has been catering to Educational Institutes across K-12, Higher Ed and Skill Development domains.

          </p>
        </div>
        <div class="col-lg-3 mt-4  company">
          <h5 class="mt-4">Quick Links</h5><br/>  
          <a href="terms">Terms and Conditions</a>
          <br/><br/>
          <a  href="privacy">Privacy Policy</a>
          <br/><br/>
          <a  href="intrest">Intrest Rate Policy</a>
          <br/><br/>
          <a  href="fpc">Fair Practice Code</a>



        </div>
        <div class="col-lg-3 mt-5">
          <h5>Let's Talk</h5>
          <p class="mt-4">Connect with our experts.<br/>

            <a class="fs-4" href="#">hello@feemonk.com</a></p>
            <a href="#"> <i class="fa-brands fa-facebook-square fa-2x"></i></a>
            <a href="#"> <i class="fa-brands fa-instagram-square fa-2x"></i></a>
            <a href="#"> <i class="fa-brands fa-linkedin fa-2x"></i></a>
            <a href="#"> <i class="fa-brands fa-twitter-square fa-2x"></i></a>
        </div>
        
        <div class="col-lg-3 mt-4  company">
          <h5 class="mt-4">Address</h5><br/>  
          
          <p class="mt-2"><i class="fa-solid fa-location-dot "></i>&nbsp;
            1-82/2/SUITE "B", Prasanna Hitex 2nd Floor, (SOUTHSIDE ) Manchirevula, Hyderabad -500089.</p>
            <p><i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;hello@feemonk.com</p>
            <p><i class="fa-solid fa-phone"></i>&nbsp;&nbsp;+91 9100820555</p>
        </div>
        
    
    
            

      </div>
      
    </div>
    
  <div class="footer-rights">
  <div class="container">
      <div class="row">
          <div class="col-6">
              <p class="mt-3 ml-3">© Copyright 2021 All Rights Reserved.</p>
          </div>
          <div class="col-6">
              <a class="float-end mt-3" onClick={ () => handleOnClick}>
              <i class="fa-solid fa-square-caret-up fa-2x"></i></a>
          </div>
      </div>
      </div>
      </div>
  </div>


{/* <!-- Modal --> */}
<div class="modal fade" id="contact-now" tabindex="-1">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-body">
<form action="" method="post" class="text-center">

    <button type="button" class="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
<h5>Let's Get Started!</h5>
  <p>Fill Up The Form And Start Communicating With Us.</p>
  <hr/>
 <div class="row">
    <div class="col-12 mt-3">
      <input type="text" class="form-control" id="fname" name="fname" placeholder="First Name" required=""/>
    </div>
    <div class="col-12 mt-3">
      <input type="text" class="form-control" id="lname" name="lname" placeholder="Last Name" required=""/>
    </div>
    <div class="col-12 mt-3">
      <input type="text" class="form-control" id="email" name="email" placeholder="Mail Id" required=""/>
    </div> 
    <div class="col-12 mt-3">
      <input type="text" class="form-control" id="Institute" name="institute" placeholder="Institute Name" required=""/>
    </div> 
    <div class="col-12 mt-3">
      <input type="text" class="form-control" id="state" name="state" placeholder="State" required=""/>
    </div> 
    <div class="col-12 mt-3">
      <input type="text" class="form-control" id="Zip" name="Zip" placeholder="Zip" required=""/>
    </div> 
    <div class="col-12 mt-5 d-flex justify-content-center">
      <button type="button" class="btn apply-button w-50 p-2" data-bs-dismiss="modal">Submit</button>
    </div>
  </div>
  </form>
</div>
</div>
</div>
</div>

        </div>
    )
}