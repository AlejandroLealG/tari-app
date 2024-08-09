import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = 'service_ua2zqpq';
    const templateId = 'template_rq5ut1t';
    const publicKey = 'YbLYetRsNXKZF3sL_';

    const template_params = {
      to_email: email,
    };

    emailjs.send(serviceId, templateId, template_params, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setStatus('Email sent successfully!');
        setEmail('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setStatus(`Error sending email: ${error.text}`);
      });
  };

   return (
    <div>
      <form onSubmit={sendEmail}>
        <input 
          type="email" 
          placeholder="Your Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border px-4 md:w-full lg:w-2/3 py-2 m-4 focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
        <button type="submit" className="bg-[#ff7a59] rounded-md text-white px-4 py-2">Sign up</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};