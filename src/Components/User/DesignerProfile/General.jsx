import React from 'react'
import profimg from '../../assets/images/designerprofile.jpg';
function General( ) {
  return (
    <>
      
      <div className="contain active show" id="account-general">
       <div className="card-body media align-items-center">
    
              <img src={profimg} alt='no image' className="d-block ui-w-80 " />
              <div className="media-body ml-4">
                <label className="btn btn-outline-primary addimgbtn">
                <h3 className='plusbtn'> <i className="fa-solid fa-plus "></i></h3>
                  <input type="file" className="account-settings-fileinput"  placeholder='+' />
                </label> &nbsp;
                <button type="button" className="btn btn-default md-btn-flat">Reset</button>
                {/* <div className="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div> */}
                
              </div>
              
            </div>
             {/* <hr className="border-light m-0" /> */}
             
             <div className="card-body body-card">
              <div className="form-group first">
                <label className="form-label">User Name</label>
               <h3>name</h3>
              </div>
              <div className="form-group ">
                <label>Gender:</label><br/>
              <select   className="gender">
               <option>Female</option>
                </select>
                </div>
              <div className="form-group">
                <label className="form-label">Name</label>
               <h3>aya tarek</h3>
              </div>
              
          
              <div className="form-group">
                <label className="form-label">E-mail</label>
                <h3>ayatarek@gmail.com</h3>
              
              
              </div>
              <div className="form-group">
                <label className="form-label">Company</label>
                <input type="text" className="form-control" defaultValue="Company " />
              </div>
          
              
                <div className="savebtn">
                 <button type="button" className="btn me-1">Edit</button>&nbsp;
                 <button type="button" className="btn ">Cancel</button>
                </div>
            </div>
            
          </div>
         
             </>
  )
}

export default General