import "./index.css"
import FeemonkLogo from "./../images/feemonk-logo.png"
import FeemonkLogo2 from "./../images/feemonk-logo2.png"
import Feebanner from "./../images/fee-banner.png"
import tick from "./../images/tick.png"
import realTime from "./../images/real-time.png"
import simpler from "./../images/simpler.png"
import component from "./../images/component.png"
import pricing3 from "./../images/pricing_icon_3.png"
import pricing2 from "./../images/pricing_icon_2.png"

import 'bootstrap/dist/css/bootstrap.min.css';    
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import 'aos/dist/aos.css';
import { useState } from "react"
import { readyException } from "jquery"

export default function FeeManagement(){

    return(

        <div>

<div id="fee-management">

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
          <a class="dropdown-item active" href="feeManagement">Fee Management Platform</a>
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

            {/* <a class="dropdown-item" href="">EduPay Card</a>
            <div class="dropdown-divider"></div> */}
          </div>
          </li>
        
        <li class="nav-item ">
          <a href="https://www.feemonk.com/apply/form" target="_blank" class="nav-link apply-button d-none d-sm-block">Apply now</a>
      </li>
      
      
    </ul>

  </div>

  
</nav>
</div>


<div class="row banner-section">

<div class="col-lg-7 col-12"  data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1400">
  <h1 class="big-heading mt-0">Fee Management Platform</h1>
  <h4 class="text-white">Best and Easiest Fees Management Platform at no cost</h4>
  <p class="para">Feemonk Fees management platform offers a free solution to any Education Provider to create, collect and manage fees payments with a unique offering of Pay in EMIs</p>
 <a href="https://www.feemonk.com/apply/form" target="_blank" class="nav-link apply-button w-25 text-center p-3 fs-5">Get In Touch</a>
</div>

  <div class="col-lg-5 d-none d-sm-block bg-gr">
      <img class="mx-auto d-block mt-5" width="73%" data-aos="fade-left" data-aos-duration="2000" src={Feebanner} alt="feemonk" />
  </div>

</div>
</div> 
</div>

<div id="benfits">
	<div class="container">
		<div class="row benfits-inner">
			<div class="col-md-3 col-12">
				<div class="card">
					<h4>UPI</h4>
					<p>0  Fees</p>
				</div>
			</div>
			<div class="col-md-3 col-12">
			<div class="card">
				<h4>Net Banking</h4>
				<p>Flat 15</p>
				</div>
			</div>
			<div class="col-md-3 col-12">
			<div class="card">
				<h4>Debit/Credit Card</h4>
				<p>Competitive rates</p>
			</div>
			</div>
			<div class="col-md-3 col-12  border-0">
			<div class="card">
				<h4>Pay in EMIs</h4>
				<p>Low/No cost EMI</p>
			</div>
			</div>
		</div>
	</div>
</div>

<div class="tips">	
	<div class="container">
		<div class="row">
			<div class="col-md-7 col-12">
				<div class="tip-card" data-aos="fade-up" data-aos-duration="2000">
					<h3>On an average more than <span class="badge bg-danger">20%</span> of students prefer an EMI Option</h3>
				</div>
			</div>
			<div class="col-md-5 col-12">
				<div class="tip-card" data-aos="fade-up" data-aos-duration="2000">
					<h4>Check if your institues and program are pre approved for loan</h4>
					 <a href="" class="btn btn-secondary">Contact Now</a>
				</div>
			</div>
		</div>
	</div>
 </div> 


        
          <div  class="stu" id="features">
            <div class="container">
            <div class="section-header">
                <h2>See our amazing <span>features</span></h2>
                </div>
                <div class="row mt-5">
                <div class="col-lg-7 col-12">
                    <div class="f-card" data-aos="fade-up" data-aos-duration="1000">
                    <div class="row">
                    <div class="col-6">
                        <img class="" src={tick} width="50px"/>
                        <h4>Real time dashboards</h4>
                        <p>Monitor in real time the status of payments and act on pending and overdues through automated reminders.</p>
                        </div>
                        <div class="col-6">
                        <img class="real-time img-fluid" src={realTime}/>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-5 col-12">
                    <div class="f-card" data-aos="fade-up" data-aos-duration="1000">
                    <img class="" src={tick} width="50px"/>
                    <div class="mt-2">
                        <h4>Pay in EMIs</h4>
                        <p>First ever payment gateway with Pay in EMI option for your Education Fees.</p>
                    </div>	
                    </div>

                </div>
                </div>



                <div class="row mt-4"> 
          <div class="col-lg-4">
	   <div class="f-card" data-aos="fade-up" data-aos-duration="1000">
            <img class="" src={tick} width="50px"/>
              <div class="mt-2">
                <h4>Cash and cheque payments</h4>
                <p>The platform removes the burden for reconciliation by mapping every transaction the the respective student. </p>
			</div>	
			</div>
			</div>
		<div class="col-lg-4">
	 <div class="f-card" data-aos="fade-up" data-aos-duration="1000">
            <img class="" src={tick} width="50px"/>
              <div class="mt-2">
                <h4>Customizable Fee structure</h4>
                <p>Add or remove any number of fee line items from your fee challan in each cycle in a jiffy.</p>
			</div>	
			</div>
     </div> 

     <div class="col-lg-4">
<div class="f-card" data-aos="fade-up" data-aos-duration="1000">
            <img class="" src={tick} width="50px"/>
              <div class="mt-2">
                <h4>Automatic Reminders</h4>
                <p>From the day you upload the fees due, platform ensures timely payments through reminders and convenient payment modes.</p>
			</div>	
			</div>
          </div>

        </div>
      </div>
    </div>

    <div id="simpler">
      <div class="container">
       
        <div class="row">
		<div class="col-md-6 col-12">
		 <h2>Fee Management has never been <span class="">simpler</span></h2>
			<p>From a small training Institute to running a large Educational Institution, fees management simplified across all payment modes including offline payments. </p>
			<ul>
				<li data-aos="fade-up" data-aos-duration="500">Automatic reminders</li>
				<li data-aos="fade-up" data-aos-duration="1000">Convert Fees into EMIs</li>
				<li data-aos="fade-up" data-aos-duration="1500">Easy to use interface</li>
			</ul>
		</div>
		<div class="col-lg-6">
            <img class="mx-auto d-block img-fluid" src={simpler} width=""/>
         </div>
        </div>
        </div>
      </div>
    

    <div class="question mt-5" id="faq-qut">
      <div class="container">
	  
      <div class="section-header">
		<h2>Frequently Asked <span>Questions</span></h2>
		<p>Platform is so intuitive that you will hardly need any support. </p>
	  </div>
	  
	  
	  
        <div class="mt-5">
          <button class="accordion">What is the cost of this Fee Management platform?<span class="caret"><i class="fa-solid fa-caret-down"></i></span></button>
          <div class="panel collapse">
            <p class="mt-4">Feemonk Fee management platform is free. However we charge a small convenience fee per transaction to the student or parent depending on their payment method.</p>
          </div>
        </div>

        <div class="mt-2">
          <button class="accordion">What payment methods are available for the students?<span class="caret"><i class="fa-solid fa-caret-down"></i></span></button>
          <div class="panel">
            <p class="mt-4">Students can pay their fees using UPI, Net Banking, Debit/Credit Cards and Feemonk EMI options.</p>
          </div>
        </div>

        <div class="mt-2">
          <button class="accordion">What is Feemonk EMI option?<span class="caret"><i class="fa-solid fa-caret-down"></i></span></button>
          <div class="panel">
            <p class="mt-4">Feemonk EMI option is a pay later option for the students. It allows the student to convert the fees payable into easy installments. Upon approval, Feemonk releases the payment to Institute and collects from the student in monthly installments.</p>
          </div>
        </div>

        <div class="mt-2">
          <button class="accordion">Who will pay the interest in EMI option?<span class="caret"><i class="fa-solid fa-caret-down"></i></span></button>
          <div class="panel">
            <p class="mt-4">If the institute is a client of Feemonk for EMI, Institute can offer a 0% EMI option to its students and Institute will pay interest in the form of discount to Feemonk. Where the Institute is not a Feemonk Client for EMIs, student will pay the interest directly to Feemonk.</p>
          </div>
        </div>
        
        <div class="mt-2">
          <button class="accordion">How do you support Cheques and Cash payments?<span class="caret"><i class="fa-solid fa-caret-down"></i></span></button>
          <div class="panel">
            <p class="mt-4">Feemonk will allow students to report and record their offline payments on the platform. When Institute makes this step mandatory, the Institute can enjoy monitoring fees collection status with out any reconciliation hassle.</p>
			
			<strong>Free platform, bundle of features</strong>

			<p>Feemonk platform is free forever without any set up fees or AMC. Institute can decide who will pay the payment gateway charges and convenience fees on each transaction and enjoy hassle free fees settlements.</p>

			<ul>
				<li>Free Email and SMS notifications</li>
				<li>Issue digital receipts by Email</li>
				<li>Minimize delayed fees with EMI facility</li>
				<li>Tally integration coming soon</li>
			</ul>
			<strong>Simple and flat fees</strong>

			<p>Flat INR 25/transaction</p>
			
			<p>NR25 is in addition to payment gateway charges if any.</p>


          </div>
        </div>
      </div>
      <img className="comp mt-3" data-aos="fade-right" data-aos-easing="ease-in-sine" src={component} width="200px"/>
  </div>

  <div  className="cycles">
      <div className="container">
	  <div className="section-header">
        <h2>All <span>fee cycles</span> in one place </h2>
		</div>
        <div className="row mt-5">
           <div className="col-lg-6 col-12" >
            <div className="card" data-aos="fade-up" data-aos-duration="1000">
              <img className="mt-4 " src={pricing3} width="50px"/>
              <dl className="mt-2">
                <dt>Easily create Fee collection cycle</dt>
                <dd style={{fontSize: "14px"}}>Just upload an excel file with dues list and see the magic happen with notifications, payment links, EMI options and many more</dd>
              </dl>
           </div>


          </div>
          
          <div class="col-lg-6 col-12">
           <div class="card" data-aos="fade-up" data-aos-duration="1000">
            <img class="mt-4 " src={pricing2} width="50px"/>
            <dl class="mt-2">
              <dt>Fees of all batches in one place</dt>
              <dd style={{fontSize: "14px"}}>You can track all your collections across multiple classes, programs and Institutes from one single place and better manage your cashflows. </dd>
            </dl>
         </div>
          </div>

        </div>
      </div>
    </div>


    <div class="footer-curve"></div>
		
        {/* </div> */}
        {/* //   </div> */}
  

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