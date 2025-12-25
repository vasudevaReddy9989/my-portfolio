import React, { useState, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../assets/logo.png';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef(null);

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-100%";
  };

  return (
    <div className="navbar">
      {/* LEFT LOGO */}
      <img src={logo} alt="Logo" className="navbar-logo" />

      {/* RIGHT HAMBURGER */}
      <img
        src={menu_open}
        alt="Open Menu"
        className="nav-mob-open"
        onClick={openMenu}
      />

      {/* SLIDE MENU */}
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          alt="Close Menu"
          className="nav-mob-close"
          onClick={closeMenu}
        />

        <li>
          <AnchorLink href="#home" className="anchor-link">
            <p onClick={() => { setMenu("home"); closeMenu(); }}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink href="#about" className="anchor-link">
            <p onClick={() => { setMenu("about"); closeMenu(); }}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink href="#services" className="anchor-link">
            <p onClick={() => { setMenu("services"); closeMenu(); }}>Projects</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="" />}
        </li>

        <li>
          <AnchorLink href="#contact" className="anchor-link">
            <p onClick={() => { setMenu("contact"); closeMenu(); }}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="" />}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
