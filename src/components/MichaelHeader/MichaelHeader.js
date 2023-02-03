import "./MichaelHeader.scss";
import HeaderLogo from "../../assets/images/header-logo-dark.PNG";
import GlobeImage from "../../assets/images/language_white_24dp.svg";
import AccountImage from "../../assets/images/perm_identity_white_24dp.svg";
import MenuIcon from "../../assets/images/menu_white_24dp.svg";
import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";

export default function MichaelHeader() {
  return (
    <>
      <header className="michaelheader">
        <div className="michaelheader__logo-container">
          <img
            className="michaelheader__menu-logo"
            src={MenuIcon}
            alt="menu icon"
          ></img>
          <img
            className="michaelheader__logo"
            src={HeaderLogo}
            alt="air canada logo"
          ></img>
        </div>
        <nav className="michaelheader-nav">
          <section className="michaelheader-nav__links">
            <button className="michaelheader-nav__search">Search</button>
            <button className="michaelheader-nav__access">Accessibility</button>
            <div className="michaelheader-nav__language-container">
              <img
                className="michaelheader-nav__globe"
                alt="globe logo"
                src={GlobeImage}
              ></img>
              <button className="michaelheader-nav__language">English</button>
            </div>
          </section>
          <section className="michaelheader-nav__account">
            <img
              className="michaelheader-nav__account-logo"
              alt="account logo"
              src={AccountImage}
            ></img>
            <NavLink to="/rachel">
              <span className="michaelheader-nav__info">Michael</span>
            </NavLink>
            <span className="michaelheader-nav__info">142,068 pts</span>
          </section>
        </nav>
      </header>
      <Navbar />
    </>
  );
}
