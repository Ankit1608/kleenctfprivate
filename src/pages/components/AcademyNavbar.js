import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Dropdown from "./Dropdown";
import "./AcademyNavbar.css";

import logo from "../images/logo.png";

function AcademyNavbar({ authenticated }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [dropdown, setDropdown] = useState(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link
              to="/"
              offset={0}
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-logo"
              onClick={closeMobileMenu}
            >
              <img src={logo} />
            </Link>
            <div className="nav-bar-search">
              <input type="text" placeholder="Search any course or path here" />
            </div>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            {authenticated ? (
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li
                  className="nav-items"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <Link
                    className="nav-links"
                    activeClass="active"
                    onClick={closeMobileMenu}
                  >
                    <div>
                      <div className="academynavbar-logo" />
                    </div>
                  </Link>
                  {dropdown && <Dropdown />}
                </li>
              </ul>
            ) : (
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-items">
                  <Link
                    className="nav-links"
                    activeClass="active"
                    to="/ctfmain"
                    onClick={closeMobileMenu}
                  >
                    CTF
                  </Link>
                </li>
                <li className="nav-items">
                  <Link
                    className="nav-links"
                    activeClass="active"
                    to="/myteams"
                    onClick={closeMobileMenu}
                  >
                    My Teams
                  </Link>
                </li>
                <li className="nav-items">
                  <Link
                    className="nav-links"
                    activeClass="active"
                    to="/settings"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={closeMobileMenu}
                  >
                    <button className="navbar-signup">Settings</button>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default AcademyNavbar;
