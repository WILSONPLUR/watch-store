import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { Globe } from "../../../../public/icons";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <nav>
          <Link href="/" className={styles.headerLogo}>
            WatchGenius
          </Link>
        </nav>
        <div className={styles.headerRightLinks}>
          <nav>
            <Link
              href="/about-us"
              className={styles.headerLink}
              prefetch={false}
            >
              Про нас
            </Link>
          </nav>
          <nav>
            <Link
              href="/catalog"
              className={styles.headerLink}
              prefetch={false}
            >
              Каталог
            </Link>
          </nav>
          <nav>
            <Link
              href="/contacts"
              className={styles.headerLink}
              prefetch={false}
            >
              Контакти
            </Link>
          </nav>
        </div>
        <button className={styles.headerLangSwitchBtn}>
          <img
            src={Globe.src}
            alt="globe icon"
            className={styles.headerLangSwitchIcon}
          />
        </button>
      </div>
    </header>
  );
};
