import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {

  return (
<nav>
  <ul>
    <li>
      <NavLink exact activeClassName='active' className='link' to="/">About</NavLink>
    </li>
    <li>
      <NavLink exact activeClassName='active' className='link' to="/work">Work</NavLink>
    </li>
    <li>
      <NavLink exact activeClassName='active' className='link' to="/contact">{`Let's talk`}</NavLink>
    </li>
  </ul>
</nav>
  );
};