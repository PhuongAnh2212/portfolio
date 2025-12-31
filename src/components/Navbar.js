// components/Navbar/Navbar.js
import { useEffect, useState } from "react";
import "./Navbar.css";

const sections = ["home", "about", "work", "contact"];

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // trigger when section is centered
      }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav-container">
      <button
        className={`nav-btn ${active === "home" ? "active" : ""}`}
        onClick={() => scrollTo("home")}
      >
        AerinPham
      </button>

      <button
        className={`nav-btn ${active === "about" ? "active" : ""}`}
        onClick={() => scrollTo("about")}
      >
        (about)
      </button>

      <button
        className={`nav-btn ${active === "work" ? "active" : ""}`}
        onClick={() => scrollTo("work")}
      >
        (work)
      </button>

      <button
        className={`nav-btn ${active === "contact" ? "active" : ""}`}
        onClick={() => scrollTo("contact")}
      >
        (contact)
      </button>
    </nav>
  );
}

export default Navbar;
