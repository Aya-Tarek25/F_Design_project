import React from 'react'
import profimg from '../../assets/images/designerprofile.jpg';
function General() {
  return (
    <>
      
      <div className="contain active show" id="account-general">
       <div className="card-body media align-items-center">
    
              <img src={profimg} alt='no image' className="d-block ui-w-80 " />
              <div className="media-body ml-4">
                <label className="btn btn-outline-primary addimgbtn">
                <i className="fa-solid fa-plus ">
                  <input type="file" className="account-settings-fileinput"  placeholder='+' />
                  </i>
                </label> &nbsp;
                <button type="button" className="btn btn-default md-btn-flat">Reset</button>
                {/* <div className="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div> */}
                
              </div>
              
            </div>
             {/* <hr className="border-light m-0" /> */}
             
             <div className="card-body body-card">
              <div className="form-group first">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control mb-0" defaultValue="Your  Name" />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" defaultValue="Aya Tarek" />
              </div>
              <div className="form-group ">
                <label>Gender:</label><br/>
              <select   className="gender">
               <option>Male</option>
               <option>Female</option>
                </select>
                </div>
              <div className="form-group">
                <label className="form-label">E-mail</label>
                <input type="text" className="form-control mb-1" defaultValue="example@mail.com" />
                {/* <div className="alert alert-warning mt-3">
                  Your email is not confirmed. Please check your inbox.<br />
                  <a href="" className='text-secondary'>Resend confirmation</a>
                </div>
               */}
                
              <div className="form-group">
                <label className="form-label mt-1">Skills</label>
                <input type="text" className="form-control" defaultValue=" " />
              </div>
              </div>
             
              <div className="form-group">
                <label className="form-label">Company</label>
                <input type="text" className="form-control" defaultValue="Company " />
              </div>
            
              
                <div className="savebtn">
                 <button type="button" className="btn me-1">Save</button>&nbsp;
                 <button type="button" className="btn ">Cancel</button>
                </div>
            </div>
            
          </div>
         
             </>
  )
}

export default General