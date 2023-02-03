import "./App.scss";
import CardFavorite from "./components/CardFavorite/CardFavorite";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ExclusiveOffersBar from "./components/ExclusiveOffersBar/ExclusiveOffersBar";
import Hero from "./components/Hero/Hero";
import CardUnlock from "./components/CardUnlock/CardUnlock";
import CurrentDealsCard from "./components/CurrentDealsCard/CurrentDealsCard";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ExclusiveOffersBar />
      <CardFavorite />
      <CurrentDealsCard />
      <CardUnlock />
      <Footer />
    </>
  );
}

export default App;
