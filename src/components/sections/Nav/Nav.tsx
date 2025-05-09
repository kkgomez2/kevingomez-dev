import "./Nav.scss";

const Nav = () => {
  const scrollToSection = (id: string) => {
    document.location.hash === ""
      ? document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      : (document.location.hash = "");
  };

  return (
    <div className="nav-container">
      <nav className="nav">
        <div
          className="nav-item"
          onClick={() => {
            scrollToSection("header");
          }}
        >
          About
        </div>
        <div
          className="nav-item"
          onClick={() => {
            scrollToSection("experience");
          }}
        >
          Experience
        </div>
        <div
          className="nav-item"
          onClick={() => {
            scrollToSection("projects");
          }}
        >
          Projects
        </div>
        <div
          className="nav-item"
          onClick={() => {
            scrollToSection("contact");
          }}
        >
          Contact
        </div>
      </nav>
    </div>
  );
};

export default Nav;
