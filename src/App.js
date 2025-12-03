import { useRef } from "react";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Works from "./pages/Works/works";
import Contact from "./pages/Contact/contact"

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav style={styles.nav}>
        <button style={styles.btn} onClick={() => scrollTo(homeRef)}>Home</button>
        <button style={styles.btn} onClick={() => scrollTo(aboutRef)}>About</button>
        <button style={styles.btn} onClick={() => scrollTo(workRef)}>Works</button>
        <button style={styles.btn} onClick={() => scrollTo(contactRef)}>Contact</button>
      </nav>

      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Works ref={workRef} />
      <Contact ref={contactRef} />
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
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
  },
  btn: {
    marginRight: 20,
    border: "none",
    background: "transparent",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default App;
