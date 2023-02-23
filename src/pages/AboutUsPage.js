import React from 'react'
import Description from '../components/aboutUs/Description'
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
      <Description />
      <Footer/>
    </div>
  )
}

export default AboutUs