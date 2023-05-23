import React, { Fragment } from "react";
import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>TavaszMeals</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="Healthy food" />
      </div>
    </Fragment>
  );
};

export default Header;
