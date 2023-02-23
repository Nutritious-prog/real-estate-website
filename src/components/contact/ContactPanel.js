import React from 'react'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

function ContactPanel() {
  return (
    <div className='w-full flex xl:my-20 my-0 mb-20'> 
        <div className='w-[100%] lg:w-[90%] md:w-[80%] mx-auto flex flex-col lg:flex-row'>
            <ContactInfo />
            <ContactForm />
        </div>
    </div>
  )
}

export default ContactPanel