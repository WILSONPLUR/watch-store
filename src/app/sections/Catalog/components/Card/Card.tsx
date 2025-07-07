import React from "react";
import CardMock from "../../../../../../public/catalog-section/mock.jpg";
import styles from "./Card.module.css";
import { Button } from "@/app/components/Button/Button";

interface ICardProps {
  title: string;
  image: string;
  price: string | number;
}

export const Card = ({ title, image, price }: ICardProps) => {
  const btnStyles = {
    width: "100%",
    fontSize: "16px",
  };
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <img
          src={image || CardMock.src}
          alt="card image"
          className={styles.cardImg}
        />
        <div className={styles.cardText}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <span className={styles.cardPrice}>{price} грн</span>
        </div>
        <Button variant="solid" style={btnStyles} classNames={styles.cardBtn}>
          Купити
        </Button>
      </div>
    </div>
  );
};
