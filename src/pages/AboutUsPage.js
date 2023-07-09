import React from 'react'
import { useEffect } from 'react'
import ClientsCarousel from '../components/aboutUs/ClientsCarousel'
import Description from '../components/aboutUs/Description'
import Title from '../components/aboutUs/Title'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import TopContactInfo from '../components/TopContactInfo'

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div>
      <TopContactInfo />
      <Navigation />
      <Title />
      <Description />
      <ClientsCarousel />
      <Footer/>
    </div>
  )
}

export default AboutUs