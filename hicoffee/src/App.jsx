import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Menu } from './components/Menu/Menu';
import { Experience } from './components/Experience/Experience';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Experience />
      </main>
      <Footer />
    </>
  );
}

export default App;