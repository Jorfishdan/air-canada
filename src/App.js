import "./App.scss";
import CardFavorite from "./components/CardFavorite/CardFavorite";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ExclusiveOffersBar from "./components/ExclusiveOffersBar/ExclusiveOffersBar";

function App() {
  return (
    <>
      <Header />
      <ExclusiveOffersBar />
      <CardFavorite />
      <Footer />
    </>
  );
}

export default App;
