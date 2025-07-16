"use client";
import React, { useContext, useState } from "react";
import styles from "./Catalog.module.css";
import { Card } from "./components/Card/Card";
import { Button } from "@/app/components/Button/Button";
import { Banner } from "@/app/components/Banner/Banner";
import { MainContext } from "@/app/context";
import { mockData } from "@/app/mock/watch";

export const Catalog = () => {
  const { menuOpened } = useContext(MainContext);
  const [limit, setLimit] = useState<number>(4);
  const showMore = () => {
    if (limit === 4) {
      setLimit(mockData.length);
    } else {
      setLimit(4);
    }
  };
  return (
    <>
      <section id="catalog" className={styles.catalog}>
        <div
          className={
            styles.catalogContainer +
            " " +
            (menuOpened && styles.catalogMenuContainer)
          }
        >
          <div className={styles.catalogContent}>
            <div className={styles.catalogText}>
              <h2 className={styles.catalogHeading}>Каталог</h2>
              <div className={styles.catalogCards}>
                {mockData
                  .slice(0, limit)
                  .map(({ id, title, image, price, slug }) => (
                    <Card
                      key={id}
                      title={title}
                      image={image}
                      price={price}
                      slug={slug}
                    />
                  ))}
              </div>
              <Button
                variant="text"
                color="#000"
                classNames={styles.catalogBtn}
                onClick={showMore}
              >
                {limit === 4 ? "Більше" : "Менше"}
              </Button>
            </div>
          </div>
        </div>
        <Banner />
      </section>
    </>
  );
};
