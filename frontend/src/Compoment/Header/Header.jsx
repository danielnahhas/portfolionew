import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
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
              <Link to={"/Login"}>Login</Link>
            </li>

            <li>
              <Link to={"/"}>About</Link>
            </li>
            <li>
              <Link to={"/ExperienceList"}>Experience</Link>
            </li>
            <li>
              <Link to={"/MyWork"}>Work</Link>
            </li>
            <li>
              <Link to={"/Contact"}>Contact</Link>
            </li>

            {showMenu ? (
              <i className="fa-solid fa-x" onClick={closeMenu}></i>
            ) : (
              <i className="fa-solid fa-bars" onClick={openMenu}></i>
            )}
          </ul>
          <i className="fa-solid fa-bars" onClick={openMenu}></i>
        </nav>
        
      </div>
    </div>
  );
}

export default Header;
