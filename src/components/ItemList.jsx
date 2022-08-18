import React from "react";
import styles from "./ItemList.module.css";
import ItemBox from "./ItemBox";

const ItemList = ({ items }) => {
  return (
    <div className={styles.items}>
      {items.map((item) => (
        <ItemBox key={item.id} item={item}></ItemBox>
      ))}
    </div>
  );
};

export default ItemList;
