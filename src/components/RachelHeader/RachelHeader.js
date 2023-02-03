import "./RachelHeader.scss";
import HeaderLogo from "../../assets/images/header-logo-dark.PNG";
import GlobeImage from "../../assets/images/language_white_24dp.svg";
import AccountImage from "../../assets/images/perm_identity_white_24dp.svg";
import MenuIcon from "../../assets/images/menu_white_24dp.svg";
import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";

export default function RachelHeader() {
  return (
    <>
      <header className="rachelheader">
        <div className="rachelheader__logo-container">
          <img
            className="rachelheader__menu-logo"
            src={MenuIcon}
            alt="menu icon"
          ></img>
          <img
            className="rachelheader__logo"
            src={HeaderLogo}
            alt="air canada logo"
          ></img>
        </div>
        <nav className="rachelheader-nav">
          <section className="rachelheader-nav__links">
            <button className="rachelheader-nav__search">Search</button>
            <button className="rachelheader-nav__access">Accessibility</button>
            <div className="rachelheader-nav__language-container">
              <img
                className="rachelheader-nav__globe"
                alt="globe logo"
                src={GlobeImage}
              ></img>
              <button className="rachelheader-nav__language">English</button>
            </div>
          </section>
          <section className="rachelheader-nav__account">
            <img
              className="rachelheader-nav__account-logo"
              alt="account logo"
              src={AccountImage}
            ></img>
            <NavLink to="/michael">
              <span className="rachelheader-nav__info">Rachel</span>
            </NavLink>
            <span className="rachelheader-nav__info">10,000 pts</span>
          </section>
        </nav>
      </header>
      <Navbar />
    </>
  );
}
