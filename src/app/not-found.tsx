import React from "react";
import styles from "./not-found.module.css";

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <div className={styles.notFoundContainer}>
        <div className={styles.notFoundContent}>
          <h1>404</h1>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
