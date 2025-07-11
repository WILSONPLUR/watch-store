import React from "react";
import styles from "./page.module.css";

const Catalog = () => {
  return (
    <section className={styles.catalog}>
      <div className={styles.catalogContainer}>
        <div className={styles.catalogContent}>
          <div className={styles.catalogText}>
            <h1>Каталог</h1>
            <p>
              Інтернет-магазин годинників, де стиль зустрічається з точністю. Ми
              пропонуємо широкий вибір чоловічих, жіночих та дитячих годинників{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
