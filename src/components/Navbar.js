// components/Navbar/Navbar.js
import { useEffect, useState } from "react";
import "./Navbar.css";

const sections = ["home", "about", "work", "contact"];

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Bottom navbar */}
      <nav className="nav-container">
        <button
          className={`nav-btn ${active === "home" ? "active" : ""}`}
          onClick={() => scrollTo("home")}
        >
          Aerin
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

      {/* Right-side social bar */}
      <div className="social-bar">
        <a
          href="https://github.com/PhuongAnh2212"
          target="_blank"
          rel="noopener noreferrer"
        >
          GTHB
        </a>

        <a
          href="https://www.linkedin.com/in/pham-doan-phuong-anh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LKND
        </a>

        {/* <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          IG
        </a> */}
      </div>
    </>
  );
}

export default Navbar;
