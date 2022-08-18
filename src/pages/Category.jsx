import React, { Component, useState, useRef } from "react";
import styles from "./Category.module.css";
import ItemList from "../components/ItemList";
import App2 from "./App2.css";
import {
  categoryAllDummy,
  categoryHomeDummy,
  categoryRobotDummy,
  categoryArchitectureDummy,
} from "./DummyData";
import ItemBox from "../components/ItemBox";
import { Link, Outlet, NavLink } from "react-router-dom";
import CategoryItem from "../components/CategoryItem";

const Category = () => {
  const [data, setData] = useState(categoryAllDummy);
  const [select, setSelect] = useState("All");
  console.log(data);

  const selectCategory = (e) => {
    const name = e.target.innerText;
    console.log(e.target.classList);
    if (name === "All") {
      setData(categoryAllDummy);
      setSelect("All");
    } else if (name === "Home") {
      setData(categoryHomeDummy);
      setSelect("Home");
    } else if (name === "Robot") {
      setData(categoryRobotDummy);
      setSelect("Robot");
    } else if (name === "Architecture") {
      setData(categoryArchitectureDummy);
      setSelect("Architecture");
    }
  };

  const activeStyle = {
    color: "#2f3eff",
  };

  return (
    <>
      <div className={styles.banner}></div>
      <section className={styles.container}>
        <div className={styles.list}>
          <p className={styles.title}>목록</p>
          <p className={styles.line}></p>
          <ul>
            <li className={styles.active} onClick={selectCategory}>
              <NavLink
                to="/category/All"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                All
              </NavLink>
            </li>
            <li onClick={selectCategory} name="Home">
              <NavLink
                to="/category/Home"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li onClick={selectCategory}>
              <NavLink
                to="/category/Robot"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Robot
              </NavLink>
            </li>
            <li onClick={selectCategory}>
              <NavLink
                to="/category/Architecture"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Architecture
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          {/* <Outlet items={data} select={select} /> */}
          <p className={styles.title}>{select}</p>
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
