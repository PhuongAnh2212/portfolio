import React from "react";
import styles from "./home.module.css";

const Home = React.forwardRef((props, ref) => {
  return (
    <section className={styles.section}>
      <div className={styles.stage}>
        <h1 className={`${styles.word} ${styles.in}`}>In the</h1>
        <h1 className={`${styles.word} ${styles.mess}`}>Mess</h1>
        <h1 className={`${styles.word} ${styles.of}`}>of</h1>

        <div className={styles.line}>
          <span className={styles.code}>Code</span>
          <span className={styles.amp}>&</span>
          <span className={styles.art}>Art</span>
        </div>
      </div>
    </section>


  );
});

export default Home;
