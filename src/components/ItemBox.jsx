import React from "react";
import styles from "./ItemBox.module.css";
import ItemList from "./ItemList";
const ItemBox = ({ item }) => {
  return (
    <div className={styles.item}>
      <img className={styles.image} src={item.img_path}></img>
      <p className={styles.title}>{item.name}</p>
      <p className={styles.price}>{item.price}</p>
    </div>
  );
};

export default ItemBox;
