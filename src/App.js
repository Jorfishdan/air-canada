import "./App.scss";
import CardFavorite from "./components/CardFavorite/CardFavorite";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ExclusiveOffersBar from "./components/ExclusiveOffersBar/ExclusiveOffersBar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ExclusiveOffersBar />
      <CardFavorite />
      <Footer />
    </>
  );
}

export default App;
