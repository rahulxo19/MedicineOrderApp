import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>Order Medicine</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </>
  );
}

export default Header;
