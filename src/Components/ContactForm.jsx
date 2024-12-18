import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { LiaEnvelopeOpenTextSolid } from 'react-icons/lia';

function ContactForm({bgcolor, darkmode}) {
  const [state, handleSubmit] = useForm("xgveoezw");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form action='https://formspree.io/f/xgveoezw' method='POST' onSubmit={handleSubmit} className='flex flex-col'>
    <label  htmlFor="name">
        Name
      </label>
      <input className='p-2 mt-2 rounded-lg'
        id="name"
        type="text" 
        name="name"
        required
      />

      <label className='mt-2'  htmlFor="email">
        Email Address
      </label>
      <input className='p-2 mt-2 rounded-lg'
        id="email"
        type="email" 
        name="email"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      
      <label className='mt-2 text-black dark:text-white' htmlFor='message'>
       Enter Your Message
      </label>
      <textarea className='p-3 mt-2 rounded-lg'
        id="message"
        name="message"
        required
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='mt-2 p-2 text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;