"use client";
import React, { useContext, useState } from "react";
import MockWatch from "../../../../public/catalog-section/mock.jpg";
import styles from "./Catalog.module.css";
import { Card } from "./components/Card/Card";
import { Button } from "@/app/components/Button/Button";
import { Banner } from "@/app/components/Banner/Banner";
import { MainContext } from "@/app/context";
import { IWatch } from "@/app/interfaces";

export const Catalog = () => {
  const { menuOpened } = useContext(MainContext);
  const [limit, setLimit] = useState<number>(4);
  const mockData: IWatch[] = [
    {
      title: "Rolex Submariner Oyster Perpetual Date 41mm 126610LV-0002",
      image: MockWatch.src,
      price: 19500,
      slug: "rolex-submariner-1",
      id: 1,
    },
    {
      title: "Rolex Submariner Oyster Perpetual Date 41mm 126610LV-0002",
      image: MockWatch.src,
      price: 19500,
      slug: "rolex-submariner-2",
      id: 2,
    },
    {
      title: "Rolex Submariner Oyster Perpetual Date 41mm 126610LV-0002",
      image: MockWatch.src,
      price: 19500,
      slug: "rolex-submariner-3",
      id: 3,
    },
    {
      title: "Rolex Submariner Oyster Perpetual Date 41mm 126610LV-0002",
      image: MockWatch.src,
      price: 19500,
      slug: "rolex-submariner-4",
      id: 4,
    },
    {
      title: "Rolex Submariner Oyster Perpetual Date 41mm 126610LV-0002",
      image: MockWatch.src,
      price: 19500,
      slug: "rolex-submariner-5",
      id: 5,
    },
    {
      title: "Rolex Submariner Oyster Perpetual Date 41mm 126610LV-0002",
      image: MockWatch.src,
      price: 19500,
      slug: "/rolex-submariner-6",
      id: 6,
    },
    {
      title: "Rolex Submariner Oyster Perpetual Date 41mm 126610LV-0002",
      image: MockWatch.src,
      price: 19500,
      slug: "/rolex-submariner-7",
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
