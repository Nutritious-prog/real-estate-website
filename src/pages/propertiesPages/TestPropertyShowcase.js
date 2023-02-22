import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

import Preloader from "../../components/Preloader";
import Hero from "../../components/propertyShowcase/Hero";
import HousePlan from "../../components/propertyShowcase/HousePlan";
import TopContactInfo from "../../components/TopContactInfo";

function TestPropertyShowcase() {
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
            <Hero />
            <HousePlan />
            <Footer />
          </>
        )}
      </>
    );
  }

export default TestPropertyShowcase