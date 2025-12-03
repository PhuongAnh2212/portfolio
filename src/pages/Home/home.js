import React from "react";
import styles from "./home.css";

const Home = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className={styles.section}>
      <h1 className={styles.title}>Welcome to My Portfolio</h1>
      <p className={styles.text}>
        I'm a passionate developer who enjoys building clean, functional, and creative digital experiences.
      </p>
    </section>
  );
});

export default Home;
