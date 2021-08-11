import React from "react";
import ResponsiveNavbar from "../ResponsiveNavbar/ResponsiveNavbar";

const Sidebar = ({ state, handleClick, handleClose }) => {
  return (
    <>
      <header>
        <div class="nav_plus_shooping">
          <div class="nav_icon">
            <a class="open_close_nav">
              <i
                class="fas fa-bars"
                onClick={handleClick}
                style={{ color: "black" }}
              ></i>
            </a>
          </div>
          <div class="shopping_cart">
            <i class="fas fa-shopping-bag"></i>
          </div>
        </div>
        <div class="logo">
          <span>REACH YOUR</span>
          <span class="logo_middle_part">
            <a href="#">
              <small>R</small>
              <small>Y</small>
              <small>H</small>
              <small>L</small>
            </a>
          </span>
          <span>HIGHEST LEVEL</span>
        </div>
        <div class="insta_icon">
          <i class="fab fa-instagram"></i>
        </div>
      </header>
      <ResponsiveNavbar handleClose={handleClose} state={state} />
    </>
  );
};

export default Sidebar;
