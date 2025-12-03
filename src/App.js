// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from '../src/components/Navbar';
// import Homepage from '../src/pages/Home/home';
// import Contact from './pages/Contact/contact';
// import About from './pages/About/about';
// import Work from './pages/Works/works';

import { useRef } from "react";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);


  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav style={styles.nav}>
        <button style={styles.btn} onClick={() => scrollTo(homeRef)}>Home</button>
        <button style={styles.btn} onClick={() => scrollTo(aboutRef)}>About</button>
        <button style={styles.btn} onClick={() => scrollTo(projectsRef)}>Projects</button>
        <button style={styles.btn} onClick={() => scrollTo(contactRef)}>Contact</button>

      </nav>

      <section ref={homeRef} style={{...styles.section, background:"#f3f3f3"}}>
        <h1>Home</h1>
      </section>

      <section ref={aboutRef} style={{...styles.section, background:"#e3f2fd"}}>
        <h1>About</h1>
      </section>

      <section ref={projectsRef} style={{...styles.section, background:"#ffe0b2"}}>
        <h1>Projects</h1>
      </section>

      <section ref={contactRef} style={{...styles.section, background:"#ffb2b2ff"}}>
        <h1>Contact</h1>
      </section>
    </>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    background: "white",
    padding: "12px 20px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    zIndex: 10
  },
  btn: {
    marginRight: 20,
    border: "none",
    background: "transparent",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold"
  },
  section: {
    height: "100vh",
    paddingTop: 80
  }
};

export default App;

