import React from 'react'
import Breadcrumb from '../components/aboutUs/Breadcrumb'
import Title from '../components/aboutUs/Title'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import TopContactInfo from '../components/TopContactInfo'

function AboutUs() {
  return (
    <div>
      <TopContactInfo />
      <Navigation />
      <Title />
      <Footer/>
    </div>
  )
}

export default AboutUs