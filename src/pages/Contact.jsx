import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [notifier, setNotifier] = useState("Send");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tgnpbeh', 'template_twruvi8', form.current, {
        publicKey: 'egv1iLa5aLCJCcjbV',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setNotifier("Success!");
        },
        (error) => {
          console.log('FAILED...', error.text);
          setNotifier("Failed");
        },
      );
  };

  return (
    <div className="contact-wrapper">
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input 
        type="email" 
        name="user_email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value={notifier} />
    </form>
    </div>
  );
}

export default Contact;
