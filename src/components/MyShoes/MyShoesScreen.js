import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./MyShoes.css";
import singleShoe from "../../image/single_myshoes_page.png";
import mobileLogo from "../../image/mobile_logo.png";
import { Link } from "react-router-dom";
import ResponsiveNavbar from "../ResponsiveNavbar/ResponsiveNavbar";

const MyShoesScreen = ({ data }) => {
  const [state, setstate] = useState("");
  function handleClick() {
    setstate("responsive_bar");
  }
  function handleClose() {
    setstate("");
  }
  return (
    <>
      <section id="greater_then_mobile">
        <section class="myshoes_page_section">
          <Sidebar
            state={state}
            handleClick={handleClick}
            handleClose={handleClose}
          />

          <section class="myshoes_body">
            <div class="myshoes_nav_section">
              <div class="myshoes_page_list">
                <h2>Marius Müller</h2>
              </div>
              <div class="myshoes_nav">
                <div class="myshoes_nav_list">
                  <Link to="/account">setting</Link>
                </div>
                <div class="myshoes_nav_list">
                  <Link to="/myshoes">my shoes</Link>
                </div>
                <div class="myshoes_nav_list">
                  <Link to="/profile">profile</Link>
                </div>
              </div>
            </div>

            <section class="myshoes_section">
              <div class="myshoes_page_form">
                <h3>my shoes</h3>

                <div class="myshoes_page_container">
                  <div class="myshoes_page_fields">
                    <div class="myshoes_page_labels">
                      <label>
                        <span>name</span>
                      </label>
                      <label>
                        <span>buy date</span>
                      </label>
                      <label>
                        <span>price</span>
                      </label>
                    </div>
                    {data.orderhistory.length > 0 ? (
                      data.orderhistory.map((order) => (
                        <div class="myshoes_page_labels_fields" key={order._id}>
                          <div class="myshoes_name_field">
                            <figure>
                              <img src={singleShoe} alt="" />
                            </figure>
                            <div class="myshoes_name_field_detail">
                              <small>jordan 1 retro high</small>
                              <p>Dior x Nike</p>
                            </div>
                          </div>
                          <div class="myshoes_detail_field">
                            <p>27.05.2021</p>
                          </div>
                          <div class="myshoes_detail_field">
                            <p>{order.totalPrice} CHF</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No Order History Found</p>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
      </section>

      <section class="Mobile_home_section">
        <div class="mobile_header">
          <div class="shopping_cart">
            <i class="fas fa-shopping-bag"></i>
          </div>
          <div class="logo">
            <Link to="/">
              <img src={mobileLogo} alt="" />
            </Link>
          </div>
          <div class="nav_icon">
            <a class="open_close_nav">
              <i class="fas fa-bars" onClick={handleClick}></i>
            </a>
          </div>
        </div>
        <div class="myshoes_nav_section">
          <div class="myshoes_page_list">
            <h2>Marius Müller</h2>
          </div>
          <div class="myshoes_nav">
            <div class="myshoes_nav_list">
              <Link to="/account">setting</Link>
            </div>
            <div class="myshoes_nav_list">
              <Link to="/myshoes">my shoes</Link>
            </div>
            <div class="myshoes_nav_list">
              <Link to="/profile">profile</Link>
            </div>
          </div>
        </div>
        <section class="myshoes_section">
          <div class="myshoes_page_form">
            <h3>my shoes</h3>

            <div class="myshoes_page_container">
              <div class="myshoes_page_fields">
                <div class="myshoes_page_labels">
                  <label>
                    <span>name</span>
                  </label>
                  <label>
                    <span>buy date</span>
                  </label>
                  <label>
                    <span>price</span>
                  </label>
                </div>
                {data.orderhistory.length > 0 ? (
                  data.orderhistory.map((order) => (
                    <div class="myshoes_page_labels_fields" key={order._id}>
                      <div class="myshoes_name_field">
                        <figure>
                          <img src={singleShoe} alt="" />
                        </figure>
                        <div class="myshoes_name_field_detail">
                          <small>jordan 1 retro high</small>
                          <p>Dior x Nike</p>
                        </div>
                      </div>
                      <div class="myshoes_detail_field">
                        <p>27.05.2021</p>
                      </div>
                      <div class="myshoes_detail_field">
                        <p>{order.totalPrice} CHF</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No Order History Found</p>
                )}
              </div>
            </div>
          </div>
        </section>
        <ResponsiveNavbar state={state} handleClose={handleClose} />
      </section>
    </>
  );
};

export default MyShoesScreen;
