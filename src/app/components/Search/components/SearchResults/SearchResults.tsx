import { IWatch } from "@/app/interfaces";
import { Card } from "@/app/sections/Catalog/components/Card/Card";
import styles from "./SearchResults.module.css";
import { mockData } from "@/app/mock/watch";
import { useContext } from "react";
import { MainContext } from "@/app/context";

export const SearchResults = ({ items = mockData }: { items: IWatch[] }) => {
  const { menuOpened } = useContext(MainContext);
  return (
    <div
      className={
        styles.searchResults + " " + (menuOpened && styles.searchMenuResults)
      }
    >
      {items.map((item: IWatch) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};
