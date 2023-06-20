import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Outlet } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

function Navbar() {
  const [showResources, setShowResources] = useState(false);
  const [toggle, setToggle] = useState(true);
  const toggleResources = () => {
    setShowResources(!showResources);
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };
  
  return (
    <>
      <nav className="navbar_container">
        {toggle && (
          <div className="nav_links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/trainers" >Our Trainers</NavLink>
            <button onClick={toggleResources}>
              Resources <FaAngleDown />
            </button>
            {showResources && (
              <div className="resources_link">
                <NavLink to="/">Resource 1</NavLink>
                <NavLink to="/">Resource 2</NavLink>
                <NavLink to="/">Resource 3</NavLink>
              </div>
            )}
          </div>
        )}
        <div className="logo_container">
          <img
            src="https://uploads-ssl.webflow.com/6470f486d88df1dd87238a7e/6470f5234d227457690f99ea_logo.png"
            alt="Logo"
            width="60px"
          />
        </div>
        <div className="toggle-btn" onClick={handleToggle}>
          {!toggle && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="48"
            >
              <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
            </svg>
          )}
          {toggle && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="48"
            >
              <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
            </svg>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;