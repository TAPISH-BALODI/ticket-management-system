import "./index.css"
import FeemonkLogo from "./images/feemonk-logo.png"
import FeemonkLogo2 from "./images/feemonk-logo2.png"
import Feemonk from "../images/feemonk.png"
import circle from "../images/circle.png"
import Aatreum from "../images/aartreum.png"
import Aashya from "../images/aashya.png"
import Vainavi from "../images/vainavi.png"
import Vidyardi from "../images/Vidyardi Logo.png"
import Wide from "../images/wide.png"
import Suryalogo from "../images/suryalogo.png"
import StarFlyers from "../images/star_flyers.jpg"
import ApolloLogo from "../images/apollo-logo.png"
import CvCorpLogo from "../images/cv_corp_logo.png"
import Pinnacle from "../images/Pinnacle.png"
import Tick from "../images/tick.png"
import StudentPic from "../images/student-pic.png"
import cirtri from "../images/cirtri.png"
import InstBg from "../images/instbg.png"
import Square from "../images/square.png"
import Component from "../images/component.png"
import Triangle from "../images/triangle.png"
import 'bootstrap/dist/css/bootstrap.min.css';    
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import 'aos/dist/aos.css';
import { useState } from "react"




export default function Main(){

  const [active, setActive] = useState("");



    return(
    <div>
        
    <div class="main">

      <div class="container">
	  <div class="row">
	  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">

        <a class="navbar-brand " href="/">
          <img class="logo1"  src={FeemonkLogo} alt="logo" />
          <img class="logo2 d-none"  src={FeemonkLogo2} alt="logo" />
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

          <ul class="navbar-nav" style={{marginLeft: "auto"}}>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                For Institutes
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
				<a class="dropdown-item" href="feeManagement">Fee Management Platform</a>
                <div class="dropdown-divider"></div>
				
				<a class="dropdown-item" href="upfrontFees">Up Front Fees</a>
                <div class="dropdown-divider"></div>
				

              </div>
			 
            </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  For Students
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="payFees">Pay Fees In EMIs</a>
                  <div class="dropdown-divider"></div>

                  {/* <a class="dropdown-item" href="">EduPay Card</a> */}
                </div>
              </li>

			<li class="nav-item ">
				<a href="/apply/form" target="_blank" class="nav-link d-none d-sm-block">Login</a>
            </li>
          </ul>

        </div>
      </nav>
	  </div>
      <div class="row banner-section">
        

        <div class="col-lg-7 col-12">
          <h1 class="big-heading ">Make peace with your fee payments and collection</h1>
          <p class="para">The No.1 Platform that help students and institutes to solve financial hurdles to quality education </p>
        
		  <a href="https://www.feemonk.com/apply/form" target="_blank" class="nav-link apply-button w-25 text-center p-3 fs-5 ">Apply now</a>
        
        </div>

          <div class="col-lg-5 d-none d-sm-block">
              <img class="title-image " data-aos="fade-right" data-aos-duration="2000" src={Feemonk} alt="feemonk" width="500px"/>
          </div>
       
        </div>
  


      </div>
      {/* <!-- </div> --> */}
      </div>








    
    <div id="partners">
     
        <div class="container-fluid">
        <img class="circle" data-aos="fade-right" data-aos-easing="ease-in-sine" src={circle} alt="background circle"/>
        <h3 class="part-head">Trusted By India's Leading Educational Institutions</h3>
        </div>
        
        <div class="container">
            <OwlCarousel className="owl-carousel" 
              loop
              autoWidth = {false}
              items = {4}
              margin ={10}
              autoplay = {true}
              dots = {false}
              autoplayTimeout = {2000}
              autoplayHoverPause = {false}
              responsive= {
                {0: {
                  items: 2,
                  nav:false,
                },
                600: {
                  items: 3,
                  nav:false,
                },
                1000: {
                  items: 4,
                  nav:false,
                  loop:true
                  
                }
              }}
            >

            <div class="item" >
              <img class="" src={Aatreum}/>  
            </div>

            <div class="item" >
              <img src={Aashya}/>  
            </div>

            <div class="item"  >
              <img class="" src={Vainavi}/>  
            </div>

            <div class="item"  >
              <img class="" src={Vidyardi}/>  
            </div>

            <div class="item"  >
              <img class="" src={Wide}/>  
            </div>

            <div class="item"  >
              <img class="" src={Suryalogo}/>  
            </div>

            <div class="item"  >
              <img class="" src={StarFlyers}/>  
            </div>

            <div class="item"  >
              <img class="" src={ApolloLogo}/>  
            </div>

            <div class="item"  >
              <img class="" src={CvCorpLogo}/>  
            </div>

            <div class="item"  >
              <img class="" src={Pinnacle}/>  
            </div>
            </OwlCarousel>        

      </div>
    </div>


    

{/* <!-- trusted institues ends -->

<!-- for students --> */}
      
    
    <div  class="stu">
      <div class="container">
	  <div class="section-header">
        <h2>How it works for <span>Student</span></h2>
        <p class="stu-para">Just a quick 4 step process</p>
		</div>
        <div class="row ">
           <div class="col-lg-6 student-card" >
            <div class="card mt-5 border-0" data-aos="fade-up" data-aos-duration="1000">
              <img class="mt-3" src={Tick} width="40px"/>
              <dl>
                <dt>Check Eligibility</dt>
                <dd style={{fontSize:"14px"}}>Check if your institues and program are pre approved for loan</dd>
              </dl>
           </div>
           <br/>

           <div class="card border-0" data-aos="fade-up" data-aos-duration="1000">
              <img class="mt-3" src={Tick} width="40px"/>
              <dl>
              <dt>Apply On FeeMonk</dt>
              <dd style={{fontSize:"14px", paddingTop:"5px"}}>Submit the neccesary documents</dd>
            </dl>
         </div>
         <br/>

         <div class="card border-0" data-aos="fade-up" data-aos-duration="1000">
            <img class="mt-3" src={Tick} width="40px"/>
              <dl>
            <dt>Sign Digitally</dt>
            <dd style={{fontSize:"14px"}}>100% online process with instant processing</dd>
          </dl>
       </div>
       <br/>

       <div class="card mb-5 border-0" data-aos="fade-up" data-aos-duration="1000">
          <img class="mt-3" src={Tick} width="40px"/>
              <dl>
          <dt>Get Approval in minutes</dt>
          <dd style={{fontSize:"14px"}}>Fees will be disbursed on the same day for the approved students</dd>
        </dl>
     </div> 
     


    </div>
          
          <div class="col-lg-6">
            <img class="stu-logo float-end img-fluid" src={StudentPic} alt="students related logo" />
          </div>

      </div>
    </div>
    </div>
{/* 
    <!-- For students ends   -->
    

    <!-- For institues --> */}
    <div class="inst">
      <div class="container">
        <img class="cirtri" data-aos="zoom-in-up" data-aos-duration="1000" src={cirtri} width="200px"/>
		<div class="section-header">
		 <h2>How it works for <span>Institutes</span></h2>
        <p class="text-center inst-para">Just a quick 4 step process</p>
		</div>
       
        <div class="row">
          
        <div class="col-lg-6 mt-3">
          <img class="inst-logo img-fluid" src={InstBg} alt="for institutes bg" />
        </div>


        <div class="col-lg-6">

          <div class="card mt-4 border-0" data-aos="fade-up" data-aos-duration="1000">
              <img class="mt-3" src={Tick} width="40px"/>
              <dl>
              <dt>Onboard with FeeMonk</dt>
              <dd style={{fontSize:"14px"}}>Connect with us to onboard your institute and programs for easy application processing</dd>
            </dl>
         </div>

         <div class="card mt-4 border-0" data-aos="fade-up" data-aos-duration="1000">
            <img class="mt-3" src={Tick} width="40px"/>
              <dl>
            <dt>Collect Nominal Advance from Students</dt>

            <dd style={{fontSize:"14px"}}>Collect only Advance EMI from students</dd>
          </dl>
       </div>

       <div class="card mt-4 border-0" data-aos="fade-up" data-aos-duration="1000">
             <img class="mt-3" src={Tick} width="40px"/>
              <dl>
              <dt>Get Paid in Full</dt>
              <dd style={{fontSize:"14px"}}>Total Fees will be disbursed on the same day for approved students</dd>
            </dl>
         </div>

         <div class="card mt-4 border-0" data-aos="fade-up" data-aos-duration="1000">
           <img class="mt-3" src={Tick} width="40px"/>
              <dl>
            <dt>Customized Products</dt>
            <dd style={{fontSize:"14px"}}>100% Customizable solutions to your students</dd>
          </dl>
       </div>
       
         
        </div>
        </div>
      </div>
    </div>
{/* 
    <!-- for institues ends -->

    <!-- win-win for student and institutes -->  */}

     <div class="win">
	 
	 <div class="win-overlay"></div>
      {/* <!-- <img class="line" src="./images/line.png" width="300px"> --> */}
      <div class="container">
        <div class="row">

          <div class="col-lg-12 ">
		    <div class="card text-white bg-transparent border-0">
            <h2 class="win-head">A <span>win-win</span> for Students and Institutes</h2>
			</div>
          </div>

          <div class="col-lg-4 col-12">

            <div class="card text-white mx-auto bg-transparent border-0" data-aos="fade-up" data-aos-duration="1000">
              <h5 class="pb-4 pt-4" style={{fontWeight: "bold"}}>Students</h5>
			  <ul>
				<li data-aos="fade-up" data-aos-duration="500" class="aos-init aos-animate"> <p class="cpara">Pay any Fees on EMI</p></li>
				<li data-aos="fade-up" data-aos-duration="1000" class="aos-init aos-animate"> <p class="cpara">Like a Credit Card For Education. </p></li>
				<li data-aos="fade-up" data-aos-duration="1500" class="aos-init aos-animate"><p class="cpara">Take a Benefit of 0% EMI**</p></li>
			</ul>
             
            </div>
          </div>

          <div class="col-lg-6 col-12">

            <div class="card text-white bg-transparent border-0" data-aos="fade-up" data-aos-duration="1000">
              <h5 class="pb-4 pt-4" style={{fontWeight:"bold"}}>Institute</h5>
			<ul>
				<li data-aos="fade-up" data-aos-duration="500" class="aos-init aos-animate"><p class="ipara">Fastest Admission</p></li>
				<li data-aos="fade-up" data-aos-duration="1000" class="aos-init aos-animate"> <p class="ipara">Increased Student Retention </p></li>
				<li data-aos="fade-up" data-aos-duration="1500" class="aos-init aos-animate"> <p class="ipara">Simplified Cash Flow Management</p></li>
			</ul>
               
              </div>

          </div>





        </div>
      </div>
      <div>
    {/* <!-- <img class="bottom-line" src="./images/line.png" width="300px"> --> */}

      </div>
    </div> 

    {/* <!-- win-win ends -->

    <!-- Frequently Questions Starts --> */}

    {/* <!-- <div class="question" >
      <div class="container">
        <h3 class="text-center">Frequently Asked <span style="color: orange;">Questions</span></h3>

        <div class="ques" id="accordion">

        <div class="card mt-5 quest-card">
          <h6 class="mt-2" style="font-weight: bold;">What is Feemonk?<span class="caret"><i class="fa-solid fa-caret-down"></i></span></h6>
          <div>
          <p class="ques-para">Feemonk is an EduFintech Platform that facilitates monthly paymeny option for Students/Parents at Schools, Colleges and Upskilling Institutes. </p>
         </div>
        </div>

        <div class="card mt-3 quest-card">
          <h6 class="mt-2"  style="font-weight: bold;">What is the most used version?<span class="caret"><i class="fa-solid fa-caret-down"></i></span></h6>
        </div>

        
        <div class="card mt-3 quest-card">
          <h6 class="mt-2"  style="font-weight: bold;">What is the Lorem Ipsum Dolor Sit Amet?<span class="caret"><i class="fa-solid fa-caret-down"></i></span></h6>
        </div>
        
        <div class="card mt-3 quest-card">
          <h6 class="mt-2"  style="font-weight: bold;">What is the meaning of Lorem Ipsum?<span class="caret"><i class="fa-solid fa-caret-down"></i></span></h6>
        </div>

      </div> --> */}

      
    
       
  

    {/* <!-- Frequently asked question ends --> */}

      <div class="question mt-5" >
      <div class="container">
	  
      <div class="section-header">
		<h2>Frequently Asked <span>Questions</span></h2>
	  </div>
	  
	  
	  
        <div class="mt-5">
          <button class="accordion" onClick={() => active === "1" ? setActive("") : setActive("1")}>What is Feemonk?<span class="caret"><i class="fa-solid fa-caret-down"></i></span></button>
          <div class="panel collapse" style={{display : active==="1"? "block" : "none"}}>
            <p class="mt-4">Feemonk is an EduFintech Platform that facilitates monthly payment option for Students/Parents at Schools, Colleges and Upskilling Institutes. </p>
          </div>
        </div>

        <div class="mt-2">
          <button class="accordion" onClick={() => active === "2" ? setActive("") : setActive("2")}>Who are the lending partners at Feemonk?<span class="caret"><i class="fa-solid fa-caret-down"></i></span></button>
          <div class="panel" style={{display : active==="2"? "block" : "none"}}>
            <p class="mt-4">Our lending partner is Glaze Barter Private Limited, an RBI Registered NBFC (Non Banking Finance Company)</p>
          </div>
        </div>

        <div class="mt-2">
          <button class="accordion" onClick={() => active === "3" ? setActive("") : setActive("3")}>What is a zero interest EMI option?<span class="caret"><i class="fa-solid fa-caret-down"></i></span></button>
          <div class="panel" style={{display : active==="3"? "block" : "none"}}>
            <p class="mt-4">Zero interest EMI option essentially converts the same fees payable to the Institute into monthly payments at no additional interest cost. If you are offered a 0% interest facility at your Institute, it usually means your Institute is bearing the interest cost of the facility.</p>
          </div>
        </div>

        <div class="mt-2">
          <button class="accordion" onClick={() => active === "4" ? setActive("") : setActive("4")}>Does Feemonk cover all Institutes?<span class="caret"><i class="fa-solid fa-caret-down"></i></span></button>
          <div class="panel" style={{display : active==="4"? "block" : "none"}}>
            <p class="mt-4">Feemonk has a large network of Institutes that it partnered with. If your Institute or Course you want to pursuse is not in this list, we can still offer a loan facility to you. Please write to hello@feemonk.com with your requirement and we will be happy to help. </p>
          </div>
        </div>
        
        <div class="mt-2" onClick={() => active === "5" ? setActive("") : setActive("5")}>
          <button class="accordion">What other Types of Loans does Feemonk cover?<span class="caret"><i class="fa-solid fa-caret-down"></i></span></button>
          <div class="panel" style={{display : active==="5"? "block" : "none"}}>
            <p class="mt-4">Feemonk only works in the Education sector and covers School Fees, College Fees, Training Fees, Educational Consultancy payments etc. </p>
          </div>
        </div>
      </div>
      <img class="comp mt-3" data-aos="fade-right" data-aos-easing="ease-in-sine" src={Component} width="200px"/>
  </div>
        
      {/* </div>
        </div> */}
        {/* <!-- about -->
		
      <!-- testmonial --> */}
	<section id="testmonial" class="testimonials">
	<div class="container">
      <div class="row">
 <div class="section-header">
		<h2>Dont take <span>our word</span> for it. </h2>
        <p class="inst-para">Join our users who love us already!</p>
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
            {/* <!--END OF TESTIMONIAL 1 -->
            <!--TESTIMONIAL 2 --> */}
            <div class="item">
              <div class="shadow-effect">
				<div class="details">
					<span class="name">Prasad</span>
				</div>
                <p>All the services I received from you were excellent. What I liked was that the entire procedure was an online one. In this era, technology is the biggest advantage as it makes the entire process very easy.</p>
				<span class="sign"><em>Student - Bonfire</em></span>
              </div>
            </div>
            {/* <!--END OF TESTIMONIAL 2 -->
            <!--TESTIMONIAL 3 --> */}
            <div class="item">
              <div class="shadow-effect">
				<div class="details">
					<span class="name">Suresh Kumar</span>
				</div>
                <p>when i heard about Feemonk financial services rendering loans for education, they completed the process in a single day and granted me loan with easy EMI's and very reasonable interest rate. I am always thankful to Feemonk.</p>
				<span class="sign"><em>Student - Planet Finance</em></span>
              </div>
            </div>
            {/* <!--END OF TESTIMONIAL 3 -->
			 <!--TESTIMONIAL 4 --> */}
            <div class="item">
              <div class="shadow-effect">
				<div class="details">
					<span class="name">Sai Teja</span>
				</div>
                <p>A pretty well service for backward students ... I think you people created the hope for some economically backward class students... really a very good step! Thank you Feemonk…</p>
				<span class="sign"><em>Student- Bonfire</em></span>
              </div>
            </div>
            {/* <!--END OF TESTIMONIAL 4 -->
			 <!--TESTIMONIAL 5 --> */}
            <div class="item">
              <div class="shadow-effect">
				<div class="details">
					<span class="name">Sreevardhan</span>
				</div>
                <p>Coordination and communication was pretty good it was an amazing journey no cons for this.The rate of interest was nominal.Thank you Feemonk.</p>
				<span class="sign"><em>Student- Bonfire</em></span>
              </div>
            </div>
            {/* <!--END OF TESTIMONIAL 5 -->
			 <!--TESTIMONIAL 6 --> */}
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
    
     {/* <!-- about-us  --> */}

       <div class="about-us" id="aboutus">
        <div class="conatiner">
        <img class="tri" data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" src={Triangle} />
		<div class="section-header">
          <h2 class="about-head">About Us</h2>
		 </div>
          <p class="about-para">FeeMonk is a registered TradeMark owned by RBI Registered NBFC Glaze Barter Private Limited and represents the Education Vertical of the NBFC. Headquartered in Hydereabad, FeeMonk has been catering to Educational Institutes across K-12, Higher Ed and Skill Development domains. 
          </p>
          <img class="square" data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500" src={Square} />
        </div>
      </div>

        {/* <!-- about-us ends --> */}


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
                <a href="terms">Terms Conditions</a>
                <br/><br/>
                <a  href="privacy">Privacy Policy</a>
                <br/><br/>
                <a  href="interest">Intrest Rate Policy</a>
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
					<p class="mt-3 ml-3">© Copyright 2022 All Rights Reserved.</p>
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