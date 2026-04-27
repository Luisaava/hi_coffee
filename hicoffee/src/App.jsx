import { Header } from './components/1_Header/Header';
import { Hero } from './components/2_Hero/Hero';
import { Hub } from './components/3_Hub/Hub';
import { Menu } from './components/4_Menu/Menu';
import { About } from './components/5_About/About';
import { Experience } from './components/6_Experience/Experience';
import { Footer } from './components/7_Footer/Footer';

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