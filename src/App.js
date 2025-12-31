import { useRef } from "react";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Works from "./pages/Works/works";
import Contact from "./pages/Contact/contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="work"><Works /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}

export default App;