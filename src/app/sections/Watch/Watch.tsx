import React from "react";
import { Watch as WatchBg } from "../../../../public/watch-section";
import styles from "./Watch.module.css";
import { Button } from "@/app/components/Button/Button";

export const Watch = () => {
  const btnStyles = {
    padding: "0.5rem 5rem",
    borderRadius: "5px",
  };
  return (
    <section className={styles.watch}>
      <div className={styles.watchContainer}>
        <div className={styles.watchContent}>
          <div className={styles.watchLeft}>
            <div className={styles.watchText}>
              <h2 className={styles.watchHeading}>
                Годинник, що говорить за вас
              </h2>
              <p className={styles.watchSubtitle}>
                Вибрані моделі від легендарних брендів. Стиль, точність, статус
                — у кожній деталі.
              </p>
            </div>
            <Button
              variant="solid"
              color="#000"
              bgColor="#fff"
              style={btnStyles}
              classNames={styles.watchBtn}
            >
              Переглянути каталог
            </Button>
          </div>
          <div className={styles.watchRight}>
            <img src={WatchBg.src} alt="watch bg" className={styles.watchImg} />
          </div>
        </div>
      </div>
    </section>
  );
};
