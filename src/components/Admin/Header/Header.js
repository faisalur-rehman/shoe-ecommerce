import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminStyle.css";

function Header() {
  const [toggleSidebar, setToggleSidebar] = useState("");
  function handleClick() {
    setToggleSidebar("test");
  }
  return (
    <>
      <section class="dashboard">
        <section class="content">
          <section class={`side_bar ${toggleSidebar}`}>
            <a class="closebtn sidebar-btn">
              <i class="fas fa-times" onClick={() => setToggleSidebar("")}></i>
            </a>

            <div class="side_bar_logo">
              <span>Dashboard</span>
            </div>
            <div class="dashboard_buttons" id="change_active">
              <Link to="/orderHistory" class="btn">
                <span>Order History</span>
              </Link>
              <Link to="/all-products" class="btn">
                <span>All Product</span>
              </Link>
              <Link to="/admin-raffle" class="btn">
                <span>Raffle Products</span>
              </Link>
              <Link to="/add-product" class="btn">
                <span>Add Product</span>
              </Link>
              <Link to="/contact-message" class="btn">
                <span>Contact Messages</span>
              </Link>
              <Link to="/signin" class="btn">
                <span>Logout</span>
              </Link>
            </div>
          </section>

          <div class="admin_header-bar">
            <div class="sidebar-btn">
              <i class="fas fa-bars" onClick={handleClick}></i>
            </div>

            <div class="admin_page_logo">
              <Link>R Y H L</Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
export default Header;
