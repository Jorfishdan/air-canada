import "./App.scss";
import magnify from "../src/assets/images/magnify.svg";
import logoDark from "../src/assets/images/logoDark.svg";
import logoLight from "../src/assets/images/logoLight.svg";
import logoLong from "../src/assets/images/logoLong.svg";
import arrows from "../src/assets/images/arrows.svg";
import info from "../src/assets/images/info.svg";
import star from "../src/assets/images/star.svg";
import plane from "../src/assets/images/plane.svg";
import calendar from "../src/assets/images/calendar.svg";
import socials from "../src/assets/images/socials.svg";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
    <Header />
      <div className="App">
        <p className="App__test1">normal font</p>
        <p className="App__test2">bold font</p>
        <p className="App__test3">semi-bold font</p>
        <img src={magnify} alt="this is a test" />
        <img src={logoDark} alt="this is a test" />
        <img src={logoLight} alt="this is a test" />
        <img src={logoLong} alt="this is a test" />
        <img src={arrows} alt="this is a test" />
        <img src={info} alt="this is a test" />
        <img src={star} alt="this is a test" />
        <img src={plane} alt="this is a test" />
        <img src={calendar} alt="this is a test" />
        <img src={socials} alt="this is a test" />
      </div>
      <Footer />
    </>
  );
}

export default App;
