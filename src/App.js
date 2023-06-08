import React from 'react';
import Map from './components/map/Map';
import IntroSection from './components/introduction/Intro'
import ContactSection from './components/contact-section/ContactSection'
import DisclaimerSection from './components/disclaimer/Disclaimer'
import FooterSection from './components/footer/Footer'

import './App.css'

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

const App = () => {
  return (
    <div>
      <IntroSection/>
      <DisclaimerSection/>
      <ContactSection/>
      <Map location={location} zoomLevel={17} /> {/* include it here */}
   <FooterSection/>
    </div>
  );
};

export default App;
