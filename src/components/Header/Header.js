import "./Header.scss";
import HeaderLogo from "../../assets/images/header-logo-dark.PNG";
import GlobeImage from "../../assets/images/language_white_24dp.svg";
import AccountImage from "../../assets/images/perm_identity_white_24dp.svg";
import MenuIcon from "../../assets/images/menu_white_24dp.svg";
import Navbar from "../Navbar/Navbar";

export default function Header() {
	return (
        <>
		<header className="header">
			<div className="header__logo-container">
                <img className="header__menu-logo" src={MenuIcon} alt="menu icon"></img>
				<img className="header__logo" src={HeaderLogo} alt="air canada logo"></img>
			</div>
			<nav className="header-nav">
				<section className="header-nav__links">
					<button className="header-nav__search">Search</button>
					<button className="header-nav__access">
						Accessibility
					</button>
					<div className="header-nav__language-container">
						<img
							className="header-nav__globe"
                            alt="globe logo"
							src={GlobeImage}
						></img>
						<button className="header-nav__language">
							English
						</button>
					</div>
				</section>
                <section className="header-nav__account">
                    <img className="header-nav__account-logo" alt="account logo" src={AccountImage}></img>
                    <span className="header-nav__info">Michael</span>
                    <span className="header-nav__info">150,000 pts</span>
                </section>
			</nav>
		</header>
        <Navbar />
        </>
	);
}
