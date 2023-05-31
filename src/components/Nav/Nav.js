// Goes across all visable pages
import "./Nav.scss";

const Nav = () => {
  return (
    <header className="nav__background">
      <nav className="nav">
        <img
          src="https://placehold.jp/100x100.png"
          alt="placeholder"
          className="nav__logo"
        />
        <div className="nav__internal">
          <input className="nav__input" placeholder="Discover" type="text" />
          <div className="nav__link">Home</div>
          <div className="nav__link">Create</div>
          <div className="nav__link">My Events</div>
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
