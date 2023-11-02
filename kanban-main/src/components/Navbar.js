import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DropdownMenu() {

  return (
    <>
    <nav>
      <div className="dropdown">
        <button className="dropbtn">Display</button>
        <div className= "dropdown-content">
        <button className="dropdownbtn">Grouping </button>
        <div className="grouping-content">
            <Link to="/status">Status</Link>
            <Link to="/user">User</Link>
            <Link to="/">Priority</Link>
        </div>
        {/* <button className="dropdownbtn">Ordering &gt;</button>
        <div className="ordering-content">
            <a to="/">Priority</a>
            <a to="/">Title</a>
        </div> */}
        </div>
      </div>
    </nav>
    </>
  );
}