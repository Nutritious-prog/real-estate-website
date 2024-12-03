import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

import Preloader from "../../components/Preloader";
import Hero from "../../components/propertyShowcase/Hero";
import HouseDescriptionLeftInn from "../../components/propertyShowcase/HouseDescriptionLeftInn";
import Advantages from "../../components/propertyShowcase/Advantages";
import TopContactInfo from "../../components/TopContactInfo";
import Meeting from "../../components/propertyShowcase/Meeting";
import Breadcrumb from "../../components/propertyShowcase/Breadcrumb";
import HousePlanLeftInn from "../../components/propertyShowcase/HousePlanLeftInn";

function F() {
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
          <Breadcrumb houseName="Dom D" />
          <Hero />
          <Advantages />
          <HousePlanLeftInn houseLetter='D'/>
          <HouseDescriptionLeftInn
            houseName="domu D"
            roomsNumber="5"
            homeSurface="128"
            lotSurface="320"
          />
          <Meeting />
          <Footer />
        </>
      )}
    </>
  );
}

export default F;
