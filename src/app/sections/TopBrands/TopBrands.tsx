"use client";
import React from "react";
import styles from "./TopBrands.module.css";
import { Rolex, Patek, Omega, TagHeuer } from "../../../../public/icons";
import { CustomAreaChart } from "@/app/components/Chart/AreaChart/AreaChart";
import { Indicators } from "../Indicators/Indicators";
import { Slider } from "@/app/components/Slider/Slider";

const brands = [
  { name: "Rolex", logo: Rolex.src, id: 1 },
  { name: "Patek Philippe", logo: Patek.src, id: 2 },
  { name: "Omega", logo: Omega.src, id: 3 },
  { name: "TAG Heuer", logo: TagHeuer.src, id: 4 },
  { name: "TAG Heuer", logo: TagHeuer.src, id: 5 },
  { name: "TAG Heuer", logo: TagHeuer.src, id: 6 },
  { name: "TAG Heuer", logo: TagHeuer.src, id: 7 },
  { name: "TAG Heuer", logo: TagHeuer.src, id: 8 },
  { name: "TAG Heuer", logo: TagHeuer.src, id: 9 },
];

export const TopBrands = () => {
  return (
    <section className={styles.topBrands}>
      <div className={styles.topBrandsContainer}>
        <div className={styles.topBrandsContent}>
          <h2 className={styles.topBrandsHeading}>Топ 5 брендів</h2>
          <Slider items={brands} />
          <CustomAreaChart />
          <Indicators />
        </div>
      </div>
    </section>
  );
};
