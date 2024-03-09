import React,{ useEffect} from 'react'
import Form from './Form/Form';
import Header from './Header/Header';
import Links from './Links/Links';
import '../../assets/js/isotope.min.js';
import '../../assets/js/owl-carousel.js';
import '../../assets/js/counter.js';
import '../../assets/js/custom.js';
import $ from 'jquery';
// import '../../jquery';
import './contact.scss';
function Contact() {
  


  return (
    <>
   
    <Header/>
    <div className="container con">
    <div className="contact-page section">
    
    <div className="row">
    <div className="col-lg-6"> 
    <Links/>
    </div>
    <div className="col-lg-6"> 
    <Form/>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Contact