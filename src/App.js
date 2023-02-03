import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import ExclusiveOffersBar from "./components/ExclusiveOffersBar/ExclusiveOffersBar";
import CurrentDealsCard from "./components/CurrentDealsCard/CurrentDealsCard";


function App() {
	return (
		<>
			<Header />
      <ExclusiveOffersBar />
      <Card />
      <CurrentDealsCard />
			<Footer />
		</>
	);
}

export default App;
