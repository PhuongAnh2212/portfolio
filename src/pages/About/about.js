import React, { useEffect, forwardRef } from "react";
import styles from "./about.module.css";

const About = forwardRef((props, ref) => {
  useEffect(() => {
    const interactive = document.querySelector(`.${styles.interactive}`);

    const onMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      if (interactive) {
        interactive.style.transform = `translate(${x * 100}px, ${y * 100}px)`;
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className={styles.about}
    >
      {/* GRID CONTENT */}
      <div className={styles.grid}>
        {/* LEFT — MAIN TEXT */}
        <div className={styles.mainText}>
          <h1>Aerin</h1>
          <h1>Pham</h1>
        </div>

        {/* RIGHT — SUBTEXT */}
        <div className={styles.subText}>
          <p>Creative Developer</p>
          <p>Focused on calm interfaces and systems</p>
          <p>React · Next.js · Motion</p>
        </div>
      </div>

      {/* BACKGROUND (unchanged) */}
      <div className={styles.gradientBg}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </svg>

        <div className={styles.gradientsContainer}>
          <div className={styles.g1} />
          <div className={styles.g2} />
          <div className={styles.g3} />
          <div className={styles.g4} />
          <div className={styles.g5} />
          <div className={styles.interactive} />
        </div>
      </div>
    </section>
  );
});

export default About;
