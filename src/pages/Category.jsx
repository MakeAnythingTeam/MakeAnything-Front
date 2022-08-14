import React, { Component, useState } from "react";
import styles from "./Category.module.css";
import ItemList from "../components/ItemList";
import {
  categoryAllDummy,
  categoryHomeDummy,
  categoryRobotDummy,
  categoryArchitectureDummy,
} from "./DummyData";
import ItemBox from "../components/ItemBox";

const Category = () => {
  const [data, setData] = useState([categoryAllDummy]);

  
  const selectCategory = (e) => {
    const name = e.target.innerText;
    if (name === "All") {
      setData(categoryAllDummy);
    } else if (name === "Home") {
      setData(categoryHomeDummy);
    } else if (name === "Robot") {
      setData(categoryRobotDummy);
    } else if (name === "Architecture") {
      setData(categoryArchitectureDummy);
    }
  };

  // ref 를 이용해서 클릭한 li에 active 클래스를 추가

  return (
    <>
      <div className={styles.banner}></div>
      <section className={styles.container}>
        <div className={styles.list}>
          <p className={styles.title}>목록</p>
          <p className={styles.line}></p>
          <ul>
            <li className={styles.active} onClick={selectCategory}>
              All
            </li>
            <li onClick={selectCategory} name="Home">
              Home
            </li>
            <li onClick={selectCategory}>Robot</li>
            <li onClick={selectCategory}>Architecture</li>
          </ul>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>All</p>
          <p className={styles.line}></p>
          <div className={styles.item_container}>
            <ItemList items={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
