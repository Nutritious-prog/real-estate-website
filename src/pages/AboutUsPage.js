import React from 'react'
import Breadcrumb from '../components/aboutUs/Breadcrumb'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import TopContactInfo from '../components/TopContactInfo'

function AboutUs() {
  return (
    <div>
      <TopContactInfo />
      <Navigation />
      <Breadcrumb />
      <Footer/>
    </div>
  )
}

export default AboutUs