import React from 'react';
import './App.css'
import Navigation from './Components/NavBar/NavBar';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Services from './Components/pages/Services';
import Portfolio from './Components/pages/Portfolio';
import Contact from './Components/pages/Contact';
import Footer from './Components/pages/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
