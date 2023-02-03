import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ExclusiveOffersBar from "./components/ExclusiveOffersBar/ExclusiveOffersBar";
import Hero from "./components/Hero/Hero";
import DoMore from "./components/DoMore/DoMore";
import EveryDay from "./components/EveryDay/EveryDay";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ExclusiveOffersBar />
      <EveryDay />
      <DoMore />
      <Footer />
    </>
  );
}

export default App;
