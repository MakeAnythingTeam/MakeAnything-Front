// 헤더 컴포넌트 - 클레어
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <ul className={styles.menu_one}>
        <li>
          <Link className={styles.home} to="/">
            Make anything
          </Link>
        </li>
        <li>
          <Link to="/category">카테고리</Link>
        </li>
        <li>
          <Link to="/qna">QnA</Link>
        </li>
        <li>
          <Link to="/community">커뮤니티</Link>
        </li>
      </ul>
      <div className={styles.input}>
        <input  type="search" placeholder="Search.." />
        <button className={styles.searchBtn} type="submit">
          <img
            className={styles.buttonImg}
            src="/images/search.png"
            alt="search"
          />
        </button>
      </div>

      <ul className={styles.menu_two}>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/mypage">마이페이지</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
