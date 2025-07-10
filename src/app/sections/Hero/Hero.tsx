"use client";
import React, { useContext } from "react";
import { Watch } from "../../../../public/hero-section";
import styles from "./Hero.module.css";
import { Button } from "@/app/components/Button/Button";
import { MainContext } from "@/app/context";

export const Hero = () => {
  const { menuOpened } = useContext(MainContext);
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
          <Button
            variant="solid"
            color="#000"
            bgColor="#fff"
            classNames={styles.heroBtn}
          >
            Каталог
          </Button>
        </div>
        <div
          className={
            styles.heroRight + " " + (menuOpened && styles.heroRightMenu)
          }
        >
          <img src={Watch.src} alt="watch bg" className={styles.heroImg} />
        </div>
      </div>
    </section>
  );
};
