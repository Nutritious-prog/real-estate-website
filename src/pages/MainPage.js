import React, { useState, useEffect } from "react";
import Advantages from "../components/Advantages";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Preloader from "../components/Preloader";
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
        </>
      )}
    </>
  );
}

export default MainPage;
