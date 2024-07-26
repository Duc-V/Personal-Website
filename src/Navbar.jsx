import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {

  return (
<nav>
  <ul>
    <li>
      <NavLink exact activeClassName='active' className='link' to="/Personal-Website/about">About</NavLink>
    </li>
    <li>
      <NavLink exact activeClassName='active' className='link' to="/Personal-Website/work">Work</NavLink>
    </li>
    <li>
      <NavLink exact activeClassName='active' className='link' to="/Personal-Website/contact">{`Let's talk`}</NavLink>
    </li>
  </ul>
</nav>
  );
};