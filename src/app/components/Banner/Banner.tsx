import React from "react";
import styles from "./Banner.module.css";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContend}>
        <h4 className={styles.bannerTitle}>Банер</h4>
      </div>
    </div>
  );
};
