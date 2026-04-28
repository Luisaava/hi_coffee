import { LangProvider } from "./i18n/LangContext";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Hub from "./components/Hub";
import Menu from "./components/Menu";
import About from "./components/About";
import Experience from "./components/Experience";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
  return (
    <LangProvider>
      <Header />
      <Hero />
      <Hub />
      <Menu />
      <About />
      <Experience />
      <Shop />
      <Footer />
    </LangProvider>
  );
}
