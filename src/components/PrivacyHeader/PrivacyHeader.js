import React from "react";
import ResponsiveNavbar from "../ResponsiveNavbar/ResponsiveNavbar";
import "../../../src/index.css";

const PrivacyHeader = ({ state, handleClick, handleClose }) => {
  return (
    <>
      <header id="p-header">
        <div class="nav_plus_shooping">
          <div class="nav_icon">
            <a class="open_close_nav" id="p-icons">
              <i
                class="fas fa-bars"
                onClick={handleClick}
                style={{ color: "white" }}
              ></i>
            </a>
          </div>
          <div class="shopping_cart" id="p-icons">
            <i class="fas fa-shopping-bag" style={{ color: "white" }}></i>
          </div>
        </div>
        <div class="logo">
          <span id="p-text">REACH YOUR</span>
          <span class="logo_middle_part">
            <a href="#" id="p-icon">
              <small>R</small>
              <small>Y</small>
              <small>H</small>
              <small>L</small>
            </a>
          </span>
          <span id="p-text">HIGHEST LEVEL</span>
        </div>
        <div class="insta_icon">
          <i class="fab fa-instagram" id="p-icon"></i>
        </div>
      </header>
      <ResponsiveNavbar handleClose={handleClose} state={state} />
    </>
  );
};

export default PrivacyHeader;
