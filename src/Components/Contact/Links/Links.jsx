import React from 'react'

function Links() {
  return (
    <div className="contact-page section">
    <div className="container">
      {/* <div className="">
         <div className="">  */}
          <div className="section-heading">
            <p className='section-title'>Get In Touch <br/><br/> With Our Agents</p>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut officiis aut voluptatum eos, 
            quos praesentium libero! Nesciunt vitae voluptatibus, juhum hbjn
            bbmhbv fcrxfcv  kmmjj jbvgt hbvhvh bhihbjb nnnnnnkknbjm 
            impedit laboriosam a soluta rerum! Molestiae recusandae quia esse ea nobis.</p>
          <div className="row">
            <div className="col-lg-12">
              <div className="item phone">
                {/* <img src="assets/images/phone-icon.png" alt="" style="max-width: 52px;"> */}
                <i className="fa-solid fa-phone-volume fa-3x" />
                <h6>010-020-0340<br /><span>Phone Number</span></h6>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="item email">
                {/* <img src="assets/images/email-icon.png" alt="" style="max-width: 52px;"> */}
                <i className="fa-solid fa-envelope fa-3x " />
                <h6>info@Design.com<br /><span>Business Email</span></h6>
              </div>
            </div>
          </div>
          <div className="sub-header">
            <div className="container">
              <div className="row">
                {/* <div class="col-lg-8 col-md-8">
              <ul class="info">
                <li><i class="fa fa-envelope"></i> info@company.com</li>
                <li><i class="fa fa-map"></i> Sunny Isles Beach, FL 33160</li>
              </ul>
            </div> */}
                <div className="col-lg-4 col-md-4  m-4">
                  <ul className="social-links">
                    <li><a href="#"><i className="fab fa-facebook" /></a></li>
                    <li><a href="https://x.com/minthu" ><i className="fab fa-twitter" /></a></li>
                    <li><a href="#"><i className="fab fa-linkedin" /></a></li>
                    <li><a href="#"><i className="fab fa-instagram" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end-links */}
      </div>
     
    
  )
}

export default Links