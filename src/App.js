import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Techstacks from './components/Techstacks';
import Connect from './components/connect';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Projects />
      <Techstacks/>
      <Connect />
      <Footer />
    </div>
  );
};

export default App;
