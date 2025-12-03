import React from "react";
import styles from "./about.css";

const About = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className={styles.section}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.text}>
        Hi, I'm Zoe — a developer who loves solving problems and creating smooth, interactive experiences.
      </p>
    </section>
  );
});

export default About;
