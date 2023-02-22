import React from 'react'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

function ContactPanel() {
  return (
    <div className='w-full flex my-20'> 
        <div className='w-[100%] lg:w-[90%] md:w-[80%] mx-auto flex flex-col xl:flex-row'>
            <ContactInfo />
            <ContactForm />
        </div>
    </div>
  )
}

export default ContactPanel