import React from "react";
import { Link } from "react-router-dom";
import styles from "./ItemBox.module.css";
const ItemBox = ({ item }) => {
  // const goToDetail = ()=>{
  //   history.push("/detail:")
  // }
  return (
    <Link className={styles.item} to={"/detail/" + item.id}>
      <img className={styles.image} src={item.img_path}></img>
      <p className={styles.title}>{item.name}</p>
      <p className={styles.price}>{item.price}</p>
    </Link>
  );
};

export default ItemBox;
