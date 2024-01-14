import React from "react";
import Logo from "./Logo";

function Navigation() {
  return (
    <div className="nav__bar">
      <ul className="nav__list">
        <li className="nav__item">
          <Logo />
        </li>{" "}
        <li className="nav__item"> item </li>{" "}
        <li className="nav__item"> item </li>{" "}
        <li className="nav__item"> item </li>{" "}
        <li className="nav__item"> item </li>{" "}
      </ul>{" "}
    </div>
  );
}

export default Navigation;
