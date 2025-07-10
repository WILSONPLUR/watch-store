import React from "react";
import styles from "./not-found.module.css";
import { WatchBg } from "../../public/not-found";

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <div className={styles.notFoundContainer}>
        <div className={styles.notFoundContent}>
          <div className={styles.notFoundText}>
            <h1 className={styles.notFoundTitle}>404</h1>
            <p className={styles.notFoundDescription}>
              Сторінку, яку ви шукаєте, не знайдено. Можливо, вона вже зникла,
              змінила адресу або ніколи не існувала.
            </p>
          </div>
          <img
            src={WatchBg.src}
            alt="watch background"
            className={styles.notFoundWatchIcon}
          />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
