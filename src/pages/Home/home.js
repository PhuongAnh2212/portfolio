import React from "react";
import styles from "./home.module.css";

const Home = React.forwardRef((props, ref) => {
  return (
    <section className={styles.section}>
      <h1 className={`${styles.word} ${styles.in}`}>In the</h1>
      <h1 className={`${styles.word} ${styles.mess}`}>Mess</h1>
      <h1 className={`${styles.word} ${styles.of}`}>of</h1>
        <div className={styles.line}>
          <span className={`${styles.word} ${styles.code}`}>Code</span>
          <span className={`${styles.word} ${styles.amp}`}>&</span>
          <span className={`${styles.word} ${styles.art}`}>Art</span>
        </div>
    </section>

  );
});

export default Home;
