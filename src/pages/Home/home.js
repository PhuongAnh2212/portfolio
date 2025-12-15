import React from "react";
import styles from "./home.module.css";

const Home = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.stars}></div>
      <h1 className={styles.name}>Aerin</h1>
    </section>
  );
});

export default Home;
