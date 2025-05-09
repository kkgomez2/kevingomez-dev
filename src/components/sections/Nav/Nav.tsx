import { useState, useEffect } from "react";
import "./Nav.scss";

const Nav = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const segments = document.querySelectorAll(".segment");

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      threshold: 0.5,
    });
    segments.forEach((segment) => observer.observe(segment));
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="nav-container">
      <nav className="nav">
        <div
          className={`nav-item ${
            active === "about" || active === "header" ? "active" : ""
          }`}
          onClick={() => {
            scrollToSection("header");
          }}
        >
          About
        </div>
        <div
          className={`nav-item ${active === "experience" ? "active" : ""}`}
          onClick={() => {
            scrollToSection("experience");
          }}
        >
          Experience
        </div>
        <div
          className={`nav-item ${active === "projects" ? "active" : ""}`}
          onClick={() => {
            scrollToSection("projects");
          }}
        >
          Projects
        </div>
        <div
          className={`nav-item ${active === "contact" ? "active" : ""}`}
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
