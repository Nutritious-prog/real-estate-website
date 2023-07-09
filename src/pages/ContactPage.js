import React, {useState, useEffect} from 'react'

import Preloader from "../components/Preloader";
import Navigation from "../components/Navigation";
import TopContactInfo from "../components/TopContactInfo";
import Footer from "../components/Footer";
import Map from '../components/contact/Map';
import ContactPanel from '../components/contact/ContactPanel';
import Breadcrumb from '../components/contact/Breadcrumb';

function ContactPage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <TopContactInfo />
          <Navigation />
          <Breadcrumb />
          <Map />
          <ContactPanel />
          <Footer />
        </>
      )}
    </>
  );
}

export default ContactPage