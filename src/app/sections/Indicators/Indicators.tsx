import React, { useContext } from "react";
import styles from "./Indicators.module.css";
import PieChart from "@/app/components/Chart/PieChart/PieChart";
import { MainContext } from "@/app/context";

export const Indicators = () => {
  const { menuOpened } = useContext(MainContext);
  return (
    <div className={styles.indicators}>
      <div
        className={
          styles.indicatorsContainer +
          " " +
          (menuOpened && styles.indicatorsMenuContainer)
        }
      >
        <div className={styles.indicatorsText}>
          <h3 className={styles.pieChartTitle}>Індикатор Rolex 92</h3>
          <p className={styles.pieChartDescription}>
            Надійність, статус і безпеганна якість — головні причини, чому 92%
            покупців обирають Rolex.
          </p>
          <p className={styles.pieChartSubtext}>
            80% позитивних відгуків, лише 20% мають зауваження — здебільшого до
            ціни або очікування доставки.
          </p>
        </div>
        <div className={styles.pieChartSection}>
          <PieChart />
        </div>
      </div>
    </div>
  );
};
