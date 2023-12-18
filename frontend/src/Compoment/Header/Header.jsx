import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div id="header">
      <div className="container">
        <nav>
          <img src="/assets/logo.png" className="logo" alt="logo" />
          <ul id="sidemenu" style={{ right: showMenu ? "0" : "-240px" }}>
            <li>
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#mywork">My Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            {showMenu ? (
              <i className="fa-solid fa-x" onClick={closeMenu}></i>
            ) : (
              <i className="fa-solid fa-bars" onClick={openMenu}></i>
            )}
          </ul>
          <i className="fa-solid fa-bars" onClick={openMenu}></i>
        </nav>
        <div className="header-text">
          <p>Lorem ipsum dolor</p>
          <h1>
            Lorem <span>ipsum</span> <br /> dolor sit amet
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
