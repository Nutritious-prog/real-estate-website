import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

import Preloader from "../../components/Preloader";
import Hero from "../../components/propertyShowcase/Hero";
import HouseDescriptionRightInn from "../../components/propertyShowcase/HouseDescriptionRightInn";
import HousePlanRightInn from "../../components/propertyShowcase/HousePlanRightInn";
import Advantages from "../../components/propertyShowcase/Advantages";
import TopContactInfo from "../../components/TopContactInfo";
import Meeting from "../../components/propertyShowcase/Meeting";
import Breadcrumb from "../../components/propertyShowcase/Breadcrumb";

function T() {
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
          <Breadcrumb houseName="Dom T" />
          <Hero />
          <Advantages />
          <HousePlanRightInn houseLetter='T'/>
          <HouseDescriptionRightInn
            houseName="domu T"
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

export default T;
