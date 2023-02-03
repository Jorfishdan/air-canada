import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import RachelHomepage from "./pages/RachelHomepage/RachelHomepage";
import Michael from "./pages/Michael/Michael";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/rachel" element={<RachelHomepage />} />
          <Route path="/michael" element={<Michael />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
