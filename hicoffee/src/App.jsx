import { LangProvider } from "./i18n/LangContext";
import { useState } from "react";
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
  const [cartItems, setCartItems] = useState([]); {/*passo as funções para o app.jsx pois ele tem acesso aos dois arquivos responsaveis*/}

  const addToCart = (product) => {
    setCartItems([...cartItems,product]); 
  }
  const esvaziarCarrinho = () => {
        setCartItems([]);
    };

  return (
    <LangProvider>
      <Header cartItems={cartItems}  esvaziarCarrinho={esvaziarCarrinho}/> {/*o header recebe os items do carrinho para mostrar no visual*/}
      <Hero />
      <Hub />
      <Menu />
      <About />
      <Experience />
      <Shop addToCart={addToCart}/> {/*o shop recebe a funcao de adicionar ao carrinho*/}
      <Footer />
    </LangProvider>
  );
}
