import { IWatch } from "@/app/interfaces";
import { Card } from "@/app/sections/Catalog/components/Card/Card";
import styles from "./SearchResults.module.css";
import { mockData } from "@/app/mock/watch";

export const SearchResults = ({ items = mockData }: { items: IWatch[] }) => {
  return (
    <div className={styles.searchResults}>
      {items.map((item: IWatch) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};
