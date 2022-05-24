import TextField from '@mui/material/TextField'
import React, { useRef } from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert/Alert';
import { FaLessThan } from 'react-icons/fa';

const Contact = () => {
  

  const sendEmail = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailjs.sendForm('service_7bqczu3', 'template_lcmecck', event.currentTarget, 'EQZ3F0FRZwEQN3oJr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     
      alert("Bedankt voor uw bericht 📧" );
      event.currentTarget.reset()
  };
  return (
    
    <div className='container1'>
  
    <form action=""  onSubmit={sendEmail}>
<h1>Contact Us</h1>
    <label >Naam</label>
    <input type="text" id="naam" name="naam" placeholder="Voornaam.."/>

    <label >Email</label>
    <input type="email" id="email" name="email" placeholder="your email.."/>
    <label >Bericht</label>
    <textarea id="subject" name="subject" placeholder="Bericht.." ></textarea>

    <input type="submit" value="Verzend"/>
    </form>
    </div>


  )
}

export default Contact