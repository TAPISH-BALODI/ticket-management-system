import "./index.css"
import FeemonkLogo from "../images/feemonk-logo.png"
import FeemonkLogo2 from "../images/feemonk-logo2.png"
import FeeManagement from "../images/fee-managemnet.png"
// import Aatreum from "./images/aartreum.png"
// import Aashya from "./images/aashya.png"
// import Vainavi from "./images/vainavi.png"
// import Vidyardi from "./images/Vidyardi Logo.png"
// import Wide from "./images/wide.png"
// import Suryalogo from "./images/suryalogo.png"
// import StarFlyers from "./images/star_flyers.jpg"
// import ApolloLogo from "./images/apollo-logo.png"
// import CvCorpLogo from "./images/cv_corp_logo.png"
// import Pinnacle from "./images/Pinnacle.png"
import Tick from "../images/tick.png"
// import StudentPic from "./images/student-pic.png"
// import cirtri from "./images/cirtri.png"
import InstBg from "../images/instbg.png"
// import Square from "./images/square.png"
import Component from "../images/component.png"
// import Triangle from "./images/triangle.png"
import 'bootstrap/dist/css/bootstrap.min.css';    
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import 'aos/dist/aos.css';
import { useState } from "react"

export default function UpFrontFee() {

    const [active, setActive] = useState("");


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

    <ul class="navbar-nav" style={{marginLeft:"auto"}}>
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
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            For Students
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="payFees">Pay Fees In EMIs</a>
            <div class="dropdown-divider"></div>

            {/* <a class="dropdown-item" href="">EduPay Card</a>
            <div class="dropdown-divider"></div> */}
          </div>
        </li>
      {/* <!-- <li class="nav-item "> -->
        <!-- <a class="nav-link" href="#aboutus">About us</a> -->
      <!-- </li> --> */}
        <li class="nav-item ">
          <a href="https://www.feemonk.com/apply/form" target="_blank" class="nav-link apply-button d-none d-sm-block">Apply now</a>
      </li>
      
      
    </ul>

  </div>
</nav>
</div>
<div class="row banner-section upfornt-main">

 <div class="col-lg-7 col-12"  data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1400">
    <h1 class="big-heading ">Hassle free </h1>
    <h1 class="big-heading m-0">Fees  collection</h1>
    <h4>We pay you upfront and</h4>
    <p class="para text-white">collect monthly payments from parents/students</p>
  <a href="https://www.feemonk.com/apply/form" target="_blank" class="nav-link apply-button w-50 text-center p-3 fs-5">Get In Touch</a>
  </div>

    <div class="col-lg-5 d-none d-sm-block bg-gr">
        <img class="mx-auto d-block" width="50%" data-aos="fade-left" data-aos-duration="2000" src={FeeManagement} alt="feemonk" />
    </div>
 
  </div>



</div>
{/* <!-- </div> --> */}
</div>



<div  class="stu" id="upfornt-sec2">
<div class="container">
<div class="section-header">
  <h2>Institute at the center</h2>
  <p class="text-center inst-para">Feemonk  partners with Schools, Colleges and Upskilling Institutes and offer the most flexible fee collection solution to the Institute.</p>
  </div>
  <div class="row gap">
     <div class="col-lg-3 col-12">
      <div class="up-card text-center" data-aos="fade-up" data-aos-duration="1000">
        <img class="mt-4 " src={Tick} width="50px"/>
          <h4>Upfront Fees</h4>
          <p>Get paid 100% fees upfront from Feemonk while we collect monthly payments from the students </p>
      </div>
     </div>
     
     <div class="col-lg-3 col-12">
     <div class="up-card text-center" data-aos="fade-up" data-aos-duration="1000">
      <img class="mt-4" src={Tick} width="50px"/>
        <h4>Flexible Terms</h4>
        <p>We design our solution to the students based on your needs</p>
   </div>
   </div>
      <div class="col-lg-3 col-12">
   <div class="up-card text-center" data-aos="fade-up" data-aos-duration="1000">
    <img class="mt-4" src={Tick} width="50px"/>
      <h4>Zero Liability</h4>
      <p>Online or offline, we work with your students/parents to close the process usually in hours.</p>
 </div>
 </div>
  <div class="col-lg-3 col-12">
<div class="up-card text-center" data-aos="fade-up" data-aos-duration="1000">
  <img class="mt-4 " src={Tick} width="50px"/>
    <h4>Quick Process</h4>
    <p>Online or offline, we work with your students/parents to close the process usually in hours.</p>
</div> 
    </div>

  </div>
  
  
  <div class="row gap align-items-center">
  <div class="col-md-6 col-12">
   <h2>Best <span>cashflow solution</span> to the Institutes</h2>
      <p class="up-p">With upfront collections through Feemonk, you no longer need collateral loans for working capital. </p>
      <ul>
          <li data-aos="fade-up" data-aos-duration="500" class="aos-init aos-animate">Same day disbursement</li>
          <li data-aos="fade-up" data-aos-duration="1000" class="aos-init">Covers transport, hostel and other fees</li>
          <li data-aos="fade-up" data-aos-duration="1500" class="aos-init">Fully configurable disbursement pattern</li>
      </ul>
  </div>
  <div class="col-lg-6">
      <img class="mx-auto d-block img-fluid" src={InstBg} width=""/>
   </div>
  </div>
  
</div>

</div>

{/* <!-- For students ends   -->


<!-- For students ends   -->

<!-- Frequently asked question ends -->

<!-- testmonial --> */}
<section id="testmonial" class="testimonials testimonials2 ">
<div class="container">
<div class="row">
<div class="section-header">
  <h2>Hear what <span>our client </span> say</h2>
</div>

  <div class="col-sm-12">
  <OwlCarousel id="customers-testimonials" class="owl-carousel customers-testimonials"
              loop = {true}
              center = {true}
              items = {3}
              margin ={0}
              autoplay = {true}
              dots = {true}
              autoplayTimeout = {8500}
              smartSpeed = {450}
              autoplayHoverPause = {false}
              responsive= {
                {0: {
                  items: 2
                },
                768: {
                  items: 2
                },
                1170: {
                  items: 3
                  
                }
              }}
            >

      {/* <!--TESTIMONIAL 1 --> */}
      <div class="item">
        <div class="shadow-effect">
          <div class="details">
              <span class="name">P Sahithi</span>
          </div>
          <p>I have applied for educational loan with the FEEMONK on 1 year before. The amount which was given sufficient for the tenure period of 10 Months. The documentation process was simple. The rate of interest given was nominal.Thank you Feemonk for providing me Loan.</p>
          <span class="sign"><em>Student - Bonfire</em></span>
        </div>
      </div>
      {/* <!--END OF TESTIMONIAL 1 --> */}
      {/* <!--TESTIMONIAL 2 --> */}
      <div class="item">
        <div class="shadow-effect">
          <div class="details">
              <span class="name">Prasad</span>
          </div>
          <p>All the services I received from you were excellent. What I liked was that the entire procedure was an online one. In this era, technology is the biggest advantage as it makes the entire process very easy.</p>
          <span class="sign"><em>Student - Bonfire</em></span>
        </div>
      </div>
      {/* <!--END OF TESTIMONIAL 2 --> */}
      {/* <!--TESTIMONIAL 3 --> */}
      <div class="item">
        <div class="shadow-effect">
          <div class="details">
              <span class="name">Suresh Kumar</span>
          </div>
          <p>when i heard about Feemonk financial services rendering loans for education, they completed the process in a single day and granted me loan with easy EMI's and very reasonable interest rate. I am always thankful to Feemonk.</p>
          <span class="sign"><em>Student - Planet Finance</em></span>
        </div>
      </div>
      {/* <!--END OF TESTIMONIAL 3 --> */}
       {/* <!--TESTIMONIAL 4 --> */}
      <div class="item">
        <div class="shadow-effect">
          <div class="details">
              <span class="name">Sai Teja</span>
          </div>
          <p>A pretty well service for backward students ... I think you people created the hope for some economically backward class students... really a very good step! Thank you Feemonk…</p>
          <span class="sign"><em>Student- Bonfire</em></span>
        </div>
      </div>
      {/* <!--END OF TESTIMONIAL 4 --> */}
       {/* <!--TESTIMONIAL 5 --> */}
      <div class="item">
        <div class="shadow-effect">
          <div class="details">
              <span class="name">Sreevardhan</span>
          </div>
          <p>Coordination and communication was pretty good it was an amazing journey no cons for this.The rate of interest was nominal.Thank you Feemonk.</p>
          <span class="sign"><em>Student- Bonfire</em></span>
        </div>
      </div>
      {/* <!--END OF TESTIMONIAL 5 --> */}
       {/* <!--TESTIMONIAL 6 --> */}
      <div class="item">
        <div class="shadow-effect">
          <div class="details">
              <span class="name">Meghana Peddi</span>
          </div>
          <p>I was taken an educational loan with Feemonk on 1 year before. I did not find any hassle in it. The process was good and they have sanctioned a loan on time. The rate of interest was nominal.</p>
          <span class="sign"><em>Student- Bonfire</em></span>
        </div>
      </div>
      {/* <!--END OF TESTIMONIAL 6 --> */}
      
    </OwlCarousel>
  </div>
</div>
</div>
</section>

<div class="question mt-5" id="faq-qut">
<div class="container">

<div class="section-header">
  <h2>Frequently Asked <span>Questions</span></h2>
  <p>Platform is so intuitive that you will hardly need any support. </p>
</div>



  <div class="mt-5">
    <button class="accordion">How does upfront fees work?<span class="caret"><i class="fa-solid fa-caret-down"></i></span></button>
    <div class="panel collapse">
      <p class="mt-4">The Institute normally offers a one time discount to students who pay entire fees upfront. For those who cannot pay upfront, they can avail a EMI option from Feemonk and Feemonk disburses 100% course fees upfront to the Institute at a small discount charge.</p>
    </div>
  </div>

  <div class="mt-2">
    <button class="accordion">Is this a loan and who is the borrower?<span class="caret"><i class="fa-solid fa-caret-down"></i></span></button>
    <div class="panel">
      <p class="mt-4">Yes, the arrangement is treated as a loan to the parent/student and the repayment obligation is with the parent. However, once approved, the loan amount will be disbursed to the Institute.</p>
    </div>
  </div>

  <div class="mt-2">
    <button class="accordion">Who pays the interest?<span class="caret"><i class="fa-solid fa-caret-down"></i></span></button>
    <div class="panel">
      <p class="mt-4">It is up to the Institute to decide who will bear the interest. Typically, Institutes bear the interest to offer a 0% EMI option their students.</p>
    </div>
  </div>

  <div class="mt-2">
    <button class="accordion">What is Institute’s liability<span class="caret"><i class="fa-solid fa-caret-down"></i></span></button>
    <div class="panel">
      <p class="mt-4">Institute has no role to play in collections from the borrowers. Feemonk assumes 100% risk on the loan recovery. And Feemonk adheres to Fair Code Practices adopted as per RBI norms ensuring.</p>
    </div>
  </div>
  
</div>
<img class="comp mt-3" data-aos="fade-right" data-aos-easing="ease-in-sine" src={Component} width="200px"/>
</div>

  
  
{/* </div>
  </div> */}
//   {/* <!-- about --> */}
<div class="getin">
{/* <!-- <img class="line" src="./images/line.png" width="300px"> --> */}
<div class="container getin-inner">
  <div class="row">

<div class="text-left">
  <h2>Get in touch today</h2>
  <p>Our experience shows that at least 20-25% of students choose an EMI option when provided. This will be a great offering to your students and a convenient way for you to realize cash flows upfront.  </p>
   <a href="" type="button"  data-bs-toggle="modal" data-bs-target="#contact-now" class="nav-link apply-button w-25 text-center p-3 fs-5">Contact Now</a>
</div>

  </div>
</div>
<div>
{/* <!-- <img class="bottom-line" src="./images/line.png" width="300px"> --> */}

</div>
</div>
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
              <a class="float-end mt-3" onclick='window.scrollTo({top: 0, behavior: "smooth"});'>
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