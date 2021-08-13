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
              <Link class="btn">
                <span onclick="Order_history()">Order History</span>
              </Link>
              <Link to="/all-products" class="btn">
                <span onclick="All_Product()">All Product</span>
              </Link>
              <Link class="btn">
                <span onclick="raffle_products()">Raffle Products</span>
              </Link>
              <Link to="/add-product" class="btn">
                <span onclick="add_product()">Add Product</span>
              </Link>
              <Link class="btn">
                <span onclick="Contact_Messages()">Contact Messages</span>
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
