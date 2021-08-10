import React, { useState } from "react";
import raffle from "../../image/raffle_one.png";
import mobileLogo from "../../image/mobile_logo.png";
import "./Raffle.css";
import { Link } from "react-router-dom";
import ResponsiveNavbar from "../ResponsiveNavbar/ResponsiveNavbar";

const Raffle = () => {
  const [state, setstate] = useState("");
  function handleClick() {
    setstate("responsive_bar");
  }
  function handleClose() {
    setstate("");
  }
  return (
    <div>
      <section id="greater_then_mobile">
        <section class="raffle_page_section">
          <header>
            <div class="nav_plus_shooping">
              <div class="nav_icon">
                <a class="open_close_nav">
                  <i class="fas fa-bars" onClick={handleClick}></i>
                </a>
              </div>
              <div class="shopping_cart">
                <i class="fas fa-shopping-bag"></i>
              </div>
            </div>
            <div class="logo">
              <span>REACH YOUR</span>
              <span class="logo_middle_part">
                <a href="index.html">
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

          <section class="raffle_body_section">
            <div class="raffle_container">
              <div class="raffle_section_heading">
                <h3>raffle</h3>
              </div>
              <div class="raffle_section_contact_detail">
                <figure>
                  <img src={raffle} alt="" />
                </figure>

                <div class="reffle_product_name">
                  <h4>air jordan 1 university blue</h4>
                </div>
                <div class="reffle_product_size">
                  <h5>199.90 chf</h5>
                </div>
                <div class="buy_reffle_product">
                  <a href="raffle_form.html">enter</a>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>

      <section class="Mobile_home_section">
        <div class="mobile_header">
          <div class="shopping_cart">
            <i class="fas fa-shopping-bag"></i>
          </div>
          <div class="logo">
            <a href="index.html">
              <img src={mobileLogo} alt="" />
            </a>
          </div>
          <div class="nav_icon">
            <a class="open_close_nav">
              <i class="fas fa-bars" onClick={handleClick}></i>
            </a>
          </div>
        </div>

        <section class="raffle_body_section">
          <div class="raffle_container">
            <div class="raffle_section_heading">
              <h3>raffle</h3>
            </div>
            <div class="raffle_section_contact_detail">
              <figure>
                <img src={raffle} alt="" />
              </figure>

              <div class="reffle_product_name">
                <h4>air jordan 1 university blue</h4>
              </div>
              <div class="reffle_product_size">
                <h5>199.90 chf</h5>
              </div>
              <div class="buy_reffle_product">
                <a href="raffle_form.html">enter</a>
              </div>
            </div>
          </div>
        </section>
      </section>
      <ResponsiveNavbar state={state} handleClose={handleClose} />
    </div>
  );
};

export default Raffle;
