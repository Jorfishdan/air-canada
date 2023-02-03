import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import ExclusiveOffersBar from "./components/ExclusiveOffersBar/ExclusiveOffersBar";


function App() {
	return (
		<>
			<Header />
      <ExclusiveOffersBar />
      <Card />
			<Footer />
		</>
	);
}

export default App;
