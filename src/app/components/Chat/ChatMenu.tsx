"use client";
import React, { RefObject, useContext, useRef, useState, useEffect } from "react";
import { Close, Robot } from "../../../../public/icons";
import styles from "./ChatMenu.module.css";
import { Button } from "../Button/Button";
import { useClickOutside } from "@/app/utils/useClickOutside";
import { MainContext } from "@/app/context";
import Link from "next/link";

export const ChatMenu = () => {
  const { setMenuOpened } = useContext(MainContext);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  
  useClickOutside(ref as RefObject<HTMLDivElement>, () => {
    closeMenu();
  });

  useEffect(() => {
    // Start animation when component mounts
    setIsAnimating(true);
  }, []);

  const closeMenu = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setMenuOpened(false);
    }, 300); // Wait for animation to complete
  };
  
  return (
    <div 
      className={`${styles.chatMenu} ${isAnimating ? styles.open : ''}`} 
      ref={ref}
    >
      <button className={styles.chatMenuClose} onClick={closeMenu}>
        <img
          src={Close.src}
          alt="close menu button"
          className={styles.chatMenuCloseIcon}
        />
      </button>
      <div className={styles.chatMenuContainer}>
        <img src={Robot.src} alt="ai robot" className={styles.chatMenuIcon} />
        <h3 className={styles.chatMenuTitle}>AI-агент</h3>
        <p className={styles.chatMenuDescription}>
          Швидко, точно та без нав’язливих порад. Просто запитайте.
        </p>
        <div className={styles.chatMenuButtons}>
          <Button variant="solid" classNames={styles.chatMenuBtn}>
            <Link href="/chat">Підібрати годинник</Link>
          </Button>
          <Button variant="solid" classNames={styles.chatMenuBtn}>
            <Link href="/chat">Порівняти моделі</Link>
          </Button>
          <Button variant="solid" classNames={styles.chatMenuBtn}>
            <Link href="/chat"> Показати хіти продажу</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
