"use client";
import React from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import MockWatch from "../../../../public/catalog-section/mock.jpg";
import { ArrowLeftDark } from "../../../../public/icons";
import { Button } from "@/app/components/Button/Button";
import PieChart from "@/app/components/Chart/PieChart/PieChart";
import { CustomAreaChart } from "@/app/components/Chart/AreaChart/AreaChart";

const Product = () => {
  const { back } = useRouter();
  return (
    <div className={styles.product}>
      <div className={styles.productContainer}>
        <div className={styles.productBreadcrumbs}>
          <img src={ArrowLeftDark.src} alt="back to page" />
          <button onClick={back}>Назад</button>
        </div>
        <div className={styles.productContent}>
          <div className={styles.productLeft}>
            <img
              src={MockWatch.src}
              alt="mock watch"
              className={styles.productImg}
            />
          </div>
          <div className={styles.productRight}>
            <div className={styles.productText}>
              <h2 className={styles.productTitle}>
                Rolex Submariner Oyster Perpetual Date 41mm 126610LV-0002
              </h2>
              <div className={styles.productDescContent}>
                <p className={styles.productDesc}>
                  Корпус: Нержавіюча сталь Oystersteel (сплав 904L)
                </p>
                <p className={styles.productDesc}>
                  Скло: Сапфірове з циклоп-лінзою над датою
                </p>
                <p className={styles.productDesc}>
                  Категорія: Дайверський годинник
                </p>
                <p className={styles.productDesc}>Діаметр: 41 мм</p>
              </div>
            </div>
            <div className={styles.productPrice}>
              <Button variant="solid" classNames={styles.productPriceBtn}>
                Купити
              </Button>
              <span className={styles.productPriceText}>19 500 грн</span>
            </div>
          </div>
        </div>
        <div className={styles.productGraph}>
          <div className={styles.productGraphContent}>
            <div className={styles.productGraphText}>
              <h3 className={styles.productGraphTitle}>Графік цін</h3>
            </div>
            <div className={styles.productGraphSection}>
              <CustomAreaChart />
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
