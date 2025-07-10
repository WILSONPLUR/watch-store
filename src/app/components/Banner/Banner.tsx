"use client";
import React, { useContext } from "react";
import styles from "./Banner.module.css";
import { MainContext } from "@/app/context";

export const Banner = () => {
  const { menuOpened } = useContext(MainContext);
  return (
    <div className={styles.banner + " " + (menuOpened && styles.bannerMenu)}>
      <div className={styles.bannerContent}>
        <h4 className={styles.bannerTitle}>Банер</h4>
      </div>
    </div>
  );
};
