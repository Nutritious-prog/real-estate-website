import React, {useState, useEffect} from 'react'

import Preloader from "../components/Preloader";
import Navigation from "../components/Navigation";
import TopContactInfo from "../components/TopContactInfo";
import Footer from "../components/Footer";
import Map from '../components/contact/Map';
import ContactPanel from '../components/contact/ContactPanel';

function ContactPage() {
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
          <Map />
          <ContactPanel />
          <Footer />
        </>
      )}
    </>
  );
}

export default ContactPage