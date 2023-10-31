import React, { useState } from "react";
import emailjs from 'emailjs-com';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

// Contact section component
function Contact() {
  const [messageContent, setMessageContent] = useState({name:'', phone:' ', email:'', subject:'', textContent:''})

  function changeHandler(event){
    const {name, value} = event.target
    setMessageContent((prevMessageContent)=>
      ({...prevMessageContent, [name]:value})
    )
    
  }



function submitHandler(event){
  event.preventDefault()
  console.log(messageContent)
    emailjs.send(
    process.env.SERVICE_ID, process.env.TEMPLATE_ID,{
        to_name:'Okoko Godwin-Jnr',
        from_name:messageContent.name,
        from_email:messageContent.email,
        message:messageContent.textContent,
        subject:messageContent.subject,
        from_phone:messageContent.phone
    }, process.env.PUBLIC_KEY
)
}

    return (
      <section id="contact">
        <div className="container mt-3 contactContent">
          <h1 className="text-center section-heading">Contact Me</h1>
          <div className="row mt-4">
                <div className="col-lg-6">
                    <form onSubmit={submitHandler}>
                        <input type="text" className="form-control form-control-lg" name="name" value={messageContent.name} onChange={changeHandler} placeholder="Name"/>
                        <input type="email" className="form-control mt-3" name="email" value={messageContent.email} onChange={changeHandler} placeholder="Email"/>
                        <input type="text" className="form-control mt-3" name="subject" value={messageContent.subject} onChange={changeHandler} placeholder="Subject"/>
  
                        <input type="tel" className="form-control mt-3" placeholder="Phone Number" name='phone' value={messageContent.phone}  onChange={changeHandler}   />
                        <div className="mb-3 mt-3">
                            <textarea className="form-control" rows="5" id="comment" name="textContent" value={messageContent.textContent} onChange={changeHandler} placeholder="Message"></textarea>
                        </div>
                    <button type="submit" className="btn btn-success mt-3">Contact Me</button>                    
                    </form>
                </div>
            </div>
        </div>
      </section>
    );
  }

  export default Contact


     