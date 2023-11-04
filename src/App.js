import React from 'react';
import './App.css'
import Navigation from './Components/NavBar/NavBar';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import ServicesList from './Components/pages/Services';
import PortfolioList from './Components/pages/Portfolio';
import Contact from './Components/pages/Contact';
import CertificationsList from './Components/pages/Certifications';
import Footer from './Components/pages/Footer';


function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <CertificationsList/>
      <ServicesList />
      <PortfolioList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
