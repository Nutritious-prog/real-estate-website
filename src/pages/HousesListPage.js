import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Title from "../components/offer/Title";
import HousesTable from "../components/offer/Table";
import Preloader from "../components/Preloader";
import TopContactInfo from "../components/TopContactInfo";


function HousesListPage() {
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
          <Title />
          <HousesTable />
          <Footer />
        </>
      )}
    </>
  );
}

export default HousesListPage