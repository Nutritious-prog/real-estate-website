import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

import Preloader from "../../components/Preloader";
import Hero from "../../components/propertyShowcase/Hero";
import HouseDescription from "../../components/propertyShowcase/HouseDescription";
import HousePlan from "../../components/propertyShowcase/HousePlan";
import Advantages from "../../components/propertyShowcase/Advantages";
import TopContactInfo from "../../components/TopContactInfo";
import Meeting from "../../components/propertyShowcase/Meeting";
import Breadcrumb from "../../components/propertyShowcase/Breadcrumb";

function B() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <TopContactInfo />
          <Navigation />
          <Breadcrumb houseName="Dom B" />
          <Hero />
          <Advantages />
          <HousePlan houseLetter='B'/>
          <HouseDescription
            houseName="domu B"
            roomsNumber="4"
            homeSurface="103.40"
            lotSurface="154"
          />
          <Meeting />
          <Footer />
        </>
      )}
    </>
  );
}

export default B;
