import React, { useState } from 'react';
import './Navbar.css';
import { NavLink, Outlet } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";

function Navbar() {
  const [showResources, setShowResources] = useState(false);

  const toggleResources = () => {
    setShowResources(!showResources);
  };

  return (
    <>
      <nav className='navbar_container'>
        <div className="nav_links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/trainers">Our Trainers</NavLink>
          <button onClick={toggleResources}>Resources <FaAngleDown/></button>
          {showResources && (
            <div className="resources_link">
              <NavLink to="/">Resource 1</NavLink>
              <NavLink to="/">Resource 2</NavLink>
              <NavLink to="/">Resource 3</NavLink>
            </div>
          )}
        </div>
        <div className="logo_container">
          <img src='https://uploads-ssl.webflow.com/6470f486d88df1dd87238a7e/6470f5234d227457690f99ea_logo.png' alt="Logo" width="60px" />
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
