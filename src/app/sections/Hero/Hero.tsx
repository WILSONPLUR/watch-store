"use client";
// import React, { useContext } from "react";
// import { Watch } from "../../../../public/hero-section";
import styles from "./Hero.module.css";
import Link from "next/link";
import { Button } from "@/app/components/Button/Button";
// import { MainContext } from "@/app/context";

export const Hero = () => {
  // const { menuOpened } = useContext(MainContext);
  return (
    <section
      className={`${styles.hero} bg-[url('/hero-section/watch-small.png')] md:bg-[url('/hero-section/watch-medium.png')] xl:bg-[url('/hero-section/watch-big.png')] bg-opacity-10 bg-no-repeat bg-[150%_auto] xl:bg-[50%] bg-[-18%_58%] md:bg-[102%] md:bg-contain `}
    >
      <div>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>Обери свій годинник</h1>
              <p className={styles.heroSubtitle}>
                Годинники від світових брендів. Якість, точність і
                безкомпромісна елегантність.
              </p>
            </div>
            <Link href="/catalog" className={styles.heroLink}>
              <Button
                variant="solid"
                color="#000"
                bgColor="#fff"
                classNames={styles.heroBtn}
              >
                Каталог
              </Button>
            </Link>
          </div>

          {/* <div
          className={
            styles.heroRight + " " + (menuOpened && styles.heroRightMenu)
          }
        >
          <img src={Watch.src} alt="watch bg" className={styles.heroImg} />
        </div> */}
        </div>
      </div>
    </section>
  );
};
