import React from "react";

const Header = () => {
  return (
    <div class="mobile_header">
      <div class="shopping_cart">
        <i class="fas fa-shopping-bag"></i>
      </div>
      <div class="logo">
        <a href="index.html">
          <img src="image/mobile_logo.png" />
        </a>
      </div>
      <div class="nav_icon">
        <a class="open_close_nav">
          <i class="fas fa-bars"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
