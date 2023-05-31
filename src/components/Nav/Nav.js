// Goes across all visable pages
import "./Nav.scss";
import logo from "../../assets/images/logo-no-background.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="nav__background">
      <nav className="nav">
        <img src={logo} alt="Logo" className="nav__logo" />
        <div className="nav__internal">
          <input className="nav__input" placeholder="Discover" type="text" />
          <Link to={"/"} className="nav__link">
            Home
          </Link>
          <Link to={"/EventForm"} className="nav__link">
            New Event
          </Link>
          <Link to={"/404"} className="nav__link">
            My Events
          </Link>
          <img
            src="https://placehold.jp/100x100.png"
            alt="placeholder"
            className="nav__icon"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
