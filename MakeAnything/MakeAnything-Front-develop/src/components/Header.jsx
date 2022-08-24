// 헤더 컴포넌트 - 클레어
import axios from "axios";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const activeStyle = {
    color: "#2f3eff",
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    navigate("/search", { state: search });
    setSearch("");
  };
  return (
    <div className={styles.header}>
      <ul className={styles.menu_one}>
        <li>
          <Link className={styles.home} to="/">
            Make anything
          </Link>
        </li>
        <li>
          <NavLink
            to="/category/All"
            style={({ isActive }) => (isActive ? activeStyle : {color:'black'})}
          >
            카테고리
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/qna"
            style={({ isActive }) => (isActive ? activeStyle : {color:'black'})}
          >
            QnA
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/community"
            style={({ isActive }) => (isActive ? activeStyle : {color:'black'})}
          >
            커뮤니티
          </NavLink>
        </li>
      </ul>
      <div className={styles.input}>
        <input
          type="search"
          placeholder="Search.."
          value={search}
          onChange={handleInput}
          onKeyPress={onKeyPress}
        />
        <button
          className={styles.searchBtn}
          type="submit"
          onClick={handleSearch}
        >
          <img
            className={styles.buttonImg}
            src="/images/search.png"
            alt="search"
          />
        </button>
      </div>

      <ul className={styles.menu_two}>
        <li>
          <NavLink
            to="/login"
            style={({ isActive }) => (isActive ? activeStyle : {color:'black'})}
          >
            로그인
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mypage"
            style={({ isActive }) => (isActive ? activeStyle : {color:'black'})}
          >
            마이페이지
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
