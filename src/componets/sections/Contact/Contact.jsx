import React from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs, { sendForm } from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bs45wa9', 'template_en8baes', e.target, '_bT1wmgDS2E-Xnt8d')
      .then((result) => {
          console.log(result.text);
          alert("message sent successfully")
      }, (error) => {
          console.log(error.text);
          alert("error")
      });
      e.target.reset();
  };
  return (
    <div id='contact-route'>
    
    <div className=' contact'>
      <form ref={form} onSubmit={sendEmail}>
        <h1>Let's Connect</h1>

        <label>Name</label><br />
        <input type="text" name="user_name" id="" /><br />
        <label>Email</label><br />
        <input type="email" name="user_email" id="" /><br />
        <label>Message</label><br />
        <textarea name="message" id="" cols="20" rows="5"></textarea>
        <button className='btn' value="Send">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Contact