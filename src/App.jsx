import React from 'react';
import ModeSwitch from './components/modeswitch/ModeSwitch';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import useStore from './store';
import './index.css';

const App = () => {
  const { isDarkMode } = useStore();

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <ModeSwitch />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

