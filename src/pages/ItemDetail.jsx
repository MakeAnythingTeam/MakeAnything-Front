import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ItemDetail.module.css";
const ItemDetail = () => {
  const { id } = useParams();
  // Todo
  // 서버에서 해당 상품 id에 대한 정보 받아옴.

  console.log("상세페이지");
  return (
    <div className={styles.container}>
      <div className={styles.itemImg}>
        <img></img>
        <div className={styles.slide}>
          <ul>
            <li className={styles.smallImg}></li>
            <li className={styles.smallImg}></li>
            <li className={styles.smallImg}></li>
            <li className={styles.smallImg}></li>
            <li className={styles.smallImg}></li>
          </ul>
        </div>
      </div>
      <div className={styles.itemContent}>
        <h1 className={styles.title}>F/A-18E Super Hornet</h1>
        <h2 className={styles.owner}>Seojune Lee</h2>
        <div className={styles.line}></div>
        <div className={styles.fileInfo}>
          <p>File size 500MB</p>
          <p>download : 13,000</p>
          <p>see : 45,000</p>
        </div>
        <p className={styles.tag}>Tag</p>
        <div className={styles.tagContainer}>
          <p className={styles.tagName}>#bomber</p>
          <p className={styles.tagName}>#airplane</p>
          <p className={styles.tagName}>#F-117</p>
          <p className={styles.tagName}>#stealth</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.price}>
          <p className={styles.priceTitle}>Price</p>
          <p>&#8361; 2,000</p>
        </div>
        <div className={styles.buy}>
          <button className={styles.buyBtn}>BUY</button>
          <img></img>
        </div>

      </div>
    </div>
  );
};

export default ItemDetail;
