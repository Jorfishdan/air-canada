import './Navbar.scss';

export default function Navbar() {
    return (
        <nav className="navbar">
            <span className="navbar__link-active">My offers</span>
            <span className="navbar__link">Activity</span>
            <span className="navbar__link">Family sharing</span>
            <span className="navbar__link">Status</span>
            <span className="navbar__link">Benefits</span>
        </nav>
    )
}