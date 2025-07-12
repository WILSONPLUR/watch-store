import { ISearchProps, IWatch } from "@/app/interfaces";
import React, { useState } from "react";
import styles from "./Search.module.css";
import { Filter, Search as SearchIcon } from "../../../../public/icons";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { mockData } from "@/app/mock/watch";
import Navigation from "./components/Navigation/Navigation";

export const Search = ({
  type,
  classNames,
  searchList,
  ...props
}: ISearchProps) => {
  const [searchVal, setSearchVal] = useState("");
  const [searchResults, setSearchResults] = useState<IWatch[]>(mockData);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchVal(e.target.value);
    setTimeout(() => {
      const result = searchList.filter((item) =>
        item.title.includes(e.target.value)
      );
      if (result) {
        setSearchResults([...result]);
      } else {
        setSearchResults(mockData);
      }
    }, 2000);
  };
  return (
    <div className={styles.search}>
      {type === "catalog" && (
        <div className={styles.catalogSearch}>
          <div className={styles.catalogSearchWrapper}>
            <input
              type="text"
              value={searchVal}
              className={styles.catalogSearchInput + " " + classNames}
              onChange={handleSearch}
              {...props}
            />
            <button className={styles.catalogSearchBtn}>
              <img
                src={SearchIcon.src}
                alt="search"
                className={styles.catalogSearchIcon}
              />
            </button>
          </div>
          <button className={styles.catalogFilterBtn}>
            <img
              src={Filter.src}
              alt="search"
              className={styles.catalogFilterIcon}
            />
          </button>
        </div>
      )}
      <SearchResults items={searchResults} />
      <Navigation totalPages={3} initialPage={1} />
    </div>
  );
};
