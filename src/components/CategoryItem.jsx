import React from "react";
import styles from "./CategoryItem.module.css";
import ItemList from './ItemList';

const CategoryItem = ({data,select}) => {
  return (
    <>
      <p className={styles.title}>{select}</p>
      <p className={styles.line}></p>
      <div className={styles.item_container}>
        <ItemList items={data} />
      </div>
    </>
  );
};

export default CategoryItem;
