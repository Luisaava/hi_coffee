import 'styles.css'
import React from 'react'

import Header from './components/Header';
import Hero from './components/Hero';
import Hub from './components/Hub';
import Menu from './components/Menu';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Hub />
        <Menu />
        <About />
        <Experience />
      </main>
      <Footer />
    </>
  );
}

export default App;