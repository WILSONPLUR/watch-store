"use client";
import React, { useContext } from "react";
import styles from "./page.module.css";
import { ChatButton } from "../components/Chat/components/ChatButton/ChatButton";
import { ChatMenu } from "../components/Chat/ChatMenu";
import { MainContext } from "../context";
import { Search } from "../components/Search/Search";
import { mockData } from "../mock/watch";

const Catalog = () => {
  const { menuOpened, setMenuOpened } = useContext(MainContext);
  const handleOpening = () => {
    setMenuOpened(true);
  };
  return (
    <>
      <section className={styles.catalog}>
        <div
          className={
            styles.catalogContainer +
            " " +
            (menuOpened && styles.catalogMenuContainer)
          }
        >
          <div
            className={
              styles.catalogContent +
              " " +
              (menuOpened && styles.catalogMenuContent)
            }
          >
            <div className={styles.catalogText}>
              <h1 className={styles.catalogTitle}>Каталог</h1>
              <p
                className={
                  styles.catalogSubtitle +
                  " " +
                  (menuOpened && styles.catalogMenuSubtitle)
                }
              >
                Інтернет-магазин годинників, де стиль зустрічається з точністю.
                Ми пропонуємо широкий вибір чоловічих, жіночих та дитячих
                годинників{" "}
              </p>
            </div>
          </div>
          <Search type="catalog" searchList={mockData} />
        </div>
      </section>
      {menuOpened ? null : <ChatButton onClick={handleOpening} />}
      {menuOpened && <ChatMenu />}
    </>
  );
};

export default Catalog;
