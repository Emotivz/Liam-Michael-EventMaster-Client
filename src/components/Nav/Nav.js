// Goes across all visable pages
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
          <input placeholder="Discover Events" type="text" />
          <div className="nav__link">Home</div>
          <div className="nav__link">Create Event</div>
          <div className="nav__link">My Events</div>
          <div>UserIcon</div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
