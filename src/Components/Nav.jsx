import React from "react";

const Nav = ({ handleThemeToggle }) => {
  return (
    <nav>
      <div className="logo">
        <img src="/images/logo.svg" alt="" />
      </div>

      <div className="switch" onClick={() => handleThemeToggle()}>
        <img src="/images/icon-sun.svg" alt="" />
      </div>
    </nav>
  );
};

export default Nav;
