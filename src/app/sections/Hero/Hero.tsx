import React from "react";
import { Watch } from "../../../../public/hero-section";
import styles from "./Hero.module.css";
import { Button } from "@/app/components/Button/Button";

export const Hero = () => {
  const btnStyles = {
    padding: "0.5rem 5rem",
    borderRadius: "5px",
  };
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Обери свій годинник</h1>
            <p className={styles.heroSubtitle}>
              Годинники від світових брендів. Якість, точність і безкомпромісна
              елегантність.
            </p>
          </div>
          <Button variant="solid" color="#000" bgColor="#fff" style={btnStyles}>
            Каталог
          </Button>
        </div>
        <div className={styles.heroRight}>
          <img src={Watch.src} alt="watch bg" className={styles.heroImg} />
        </div>
      </div>
    </section>
  );
};
