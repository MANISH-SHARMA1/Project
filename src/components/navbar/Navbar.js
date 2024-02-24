import React from "react";
import "./Navbar.scss"
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <div className="navbar">
      <div className="search">
        <CiSearch />
        <input type="text" />
      </div>
      <p>Categories</p>
      <p>Website Builders</p>
      <p>Today's deals</p>
    </div>
  );
}

export default Navbar;
