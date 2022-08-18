import React from "react";
import styles from "./Search.module.css";
import {useLocation} from 'react-router-dom';

const Search = () => {
    const { state } = useLocation();

  

  return (
    <>
      <div className={styles.banner}></div>
      <div className={styles.search}>
        <h1><span className={styles.title}>'{state}'</span>에 대한 검색결과</h1>
        <div className={styles.line}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.child}></div>
        <div className={styles.child}></div>
        <div className={styles.child}></div>
     
      </div>


    </>
  );
};

export default Search;
