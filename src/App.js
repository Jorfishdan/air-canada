import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import ExclusiveOffersBar from "./components/ExclusiveOffersBar/ExclusiveOffersBar";
import Hero from "./components/Hero/Hero";


function App() {
	return (
		<>
			<Header />
      <Hero />
      <ExclusiveOffersBar />
      <Card />
			<Footer />
		</>
	);
}

export default App;
