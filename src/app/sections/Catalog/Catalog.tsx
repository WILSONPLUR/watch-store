"use client";
import React, { useState } from "react";
import MockWatch from "../../../../public/catalog-section/mock.jpg";
import styles from "./Catalog.module.css";
import { Card } from "./components/Card/Card";
import { Button } from "@/app/components/Button/Button";

export const Catalog = () => {
  const [limit, setLimit] = useState<number>(4);
  const mockData = [
    {
      title: "Rolex Submariner Oyster Perpetual Date 41mm 126610LV-0002",
      image: MockWatch.src,
      price: 19500,
      id: 1,
    },
    {
      title: "Rolex Submariner Oyster Perpetual Date 41mm 126610LV-0002",
      image: MockWatch.src,
      price: 19500,
      id: 2,
    },
    {
      title: "Rolex Submariner Oyster Perpetual Date 41mm 126610LV-0002",
      image: MockWatch.src,
      price: 19500,
      id: 3,
    },
    {
      title: "Rolex Submariner Oyster Perpetual Date 41mm 126610LV-0002",
      image: MockWatch.src,
      price: 19500,
      id: 4,
    },
    {
      title: "Rolex Submariner Oyster Perpetual Date 41mm 126610LV-0002",
      image: MockWatch.src,
      price: 19500,
      id: 5,
    },
    {
      title: "Rolex Submariner Oyster Perpetual Date 41mm 126610LV-0002",
      image: MockWatch.src,
      price: 19500,
      id: 6,
    },
    {
      title: "Rolex Submariner Oyster Perpetual Date 41mm 126610LV-0002",
      image: MockWatch.src,
      price: 19500,
      id: 7,
    },
  ];
  const showMore = () => {
    if (limit === 4) {
      setLimit(mockData.length);
    } else {
      setLimit(4);
    }
  };
  const btnStyles = {
    margin: "0 auto",
  };
  return (
    <section id="about" className={styles.catalog}>
      <div className={styles.catalogContainer}>
        <div className={styles.catalogContent}>
          <div className={styles.catalogText}>
            <h2 className={styles.catalogHeading}>Каталог</h2>
            <div className={styles.catalogCards}>
              {mockData.slice(0, limit).map(({ id, title, image, price }) => (
                <Card key={id} title={title} image={image} price={price} />
              ))}
            </div>
            <Button
              variant="text"
              color="#000"
              style={btnStyles}
              onClick={showMore}
            >
              {limit === 4 ? "Більше" : "Менше"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
