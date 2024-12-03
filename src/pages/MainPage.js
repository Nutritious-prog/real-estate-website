import React, { useState, useEffect } from "react";
import Advantages from "../components/Advantages";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HousesTable from "../components/HousesTable";
import Navigation from "../components/Navigation";
import Preloader from "../components/Preloader";
import Testimonials from "../components/Testimonials";
import TopContactInfo from "../components/TopContactInfo";
import Welcome from "../components/Welcome";

function MainPage() {
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
          <Welcome />
          <Advantages />
          <HousesTable />
          <Contact />
          <Testimonials />
          <Footer />
        </>
      )}
    </>
  );
}

export default MainPage;
