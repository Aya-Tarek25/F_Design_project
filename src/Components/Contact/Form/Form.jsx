import React from 'react'
import { axiosInstance } from '../../../axios/instance';
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom';
import './Form.scss';
function Form() {
    const loc = useLocation();
    const nav = useNavigate();
    const form = useForm();
    const { register, handleSubmit, formState} = form;
    // function onSubmit(values) {
    //    
      
    //         //  nav('/home');
    // }


    const onSubmit = async (data) => {
      try {
       console.log(data)
        const response = await axiosInstance.post(
          'https://iti-final-be.onrender.com/messages/send/65cddc2bb3a2a89a62c70cc0',
          data,
        );
        console.log('Form submitted successfully:', response.data);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };

  return (
    <>
   {/* <!-- ***** Preloader Start ***** --> */}
  {/* <div id="js-preloader" className="js-preloader">
    <div className="preloader-inner">
      <span className="dot"></span>
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div> */}
  {/* <!-- ***** Preloader End ***** --> */}



  <div className="contact-page section">
    <div className="container">
      {/* <div className="row">
    <div className="col-lg-6"> */}
    <form id="contact-form"  method="post"  onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-lg-12">
          <fieldset>
            <label htmlFor="userName">Full Name</label>
            <input
                        {...register('name', {
                            required: {
                                value: true,
                                message: "Fill Name Field"
                            },
                            minLength:{
                                value:10,
                                message:'Name  must be at least 10 characters long'                 
                                       },
                            
                        })}
                        type="text"
                        className={`form-control`}
                        id="userName"
                        aria-describedby="nameHelp"
                        placeholder="Enter Name ...."
                        autoComplete='on'

                    />
                     
                    <small id="nameHelp" className="form-text text-danger">
                    <p className='err'>{formState.errors.name?.message}</p>
                    </small>
            {/* <input type="name" name="name" id="name" placeholder="Your Name..." autoComplete="on" required /> */}
          </fieldset>
        </div>
      
        <div className="col-lg-12">
          <fieldset>
            <label htmlFor="email">Email Address</label>
            <input
                        {...register('email', {
                            required: {
                                value: true,
                                message: "Fill Email Field"
                            },
                            pattern:{
                                value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message:'must be example@gmail.com'
                            },
                            minLength:{
                                value:10,
                                message:'must be more than 10'                 
                                       },
                             maxLength:{
                                        value:50,
                                        message:'must be less than 50'                 
                                    }

                        })}
                        type="text"
                        className={`form-control`}
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email ..."

                    />
                   
                    <small id="emailHelp" className="form-text text-danger">
                    <p className='err'>{formState.errors.email?.message}</p>
                    </small>
            {/* <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required /> */}
          </fieldset>
        </div>
        <div className="col-lg-12">
          <fieldset>
            <label htmlFor="subject">Subject</label>
            <input
                        {...register('subject', {
                            required: {
                                value: true,
                                message: "Fill Subject Field"
                            },
                            minLength:{
                                value:10,
                                message:' Subject must be at least 10 characters long'                 
                                       },
                             maxLength:{
                                        value:20,
                                        message:' Subject must be at least 10 characters long'                 
                                    }

                        })}
                        type="text"
                        className={`form-control`}
                        id="subject"
                        aria-describedby="subjectHelp"
                        placeholder="Enter Subject ..."

                    />
                    
                    <small id="subjectHelp" className="form-text text-danger">
                    <p className='err'>{formState.errors.subject?.message}</p>
                    </small>
            {/* <input type="subject" name="subject" id="subject" placeholder="Subject..." autoComplete="on" /> */}
          </fieldset>
        </div>
        <div className="col-lg-12">
          <fieldset>
            <label htmlFor="message">Message</label>
            <textarea
                 {...register('message', {
                     required: {
                         value: true,
                         message: "Fill Message Field"
                        },
                     minLength:{
                         value: 10,
                         message: 'Message must be at least 10 characters long'
                       },
                     maxLength:{
                       value: 200, // Adjusted maxLength value
                       message: 'Message must be less than 200 characters'
                  }
               })}
              className={`form-control `}
              id="message"
              aria-describedby="messageHelp"
               placeholder="Enter Message ..."
           />

        <small id="messageHelp" className="form-text">
          <p className='err'>{formState.errors.message?.message}</p>
        </small>
            {/* <textarea name="message" id="message" placeholder="Your Message" defaultValue={""} /> */}
          </fieldset>
        </div>
        <div className="col-lg-12">
          <fieldset>
            <button type="submit" id="form-submit" className="orange-button" >Send Message</button>
          </fieldset>
        </div>
      </div>
    </form>
  </div>
  </div>
  {/* </div>
  </div> */}
  </>
  )
}

export default Form