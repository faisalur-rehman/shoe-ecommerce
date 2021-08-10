import React from "react";
import { Link } from "react-router-dom";

const ResponsiveNavbar = ({ state, handleClose }) => {
  return (
    <div>
      <section class={`responsive_nav_bar ${state}`}>
        <section class="responsive_nav_page_section">
          <div class="responsive_header">
            <div class="responsive_nav_icon">
              <a class="open_close_nav">
                <i class="fas fa-times" onClick={handleClose}></i>
              </a>
            </div>

            <div class="responsive_logo">
              <span>REACH YOUR</span>
              <span class="responsive_logo_middle_part">
                <a href="index.html">
                  <small>R</small>
                  <small>Y</small>
                  <small>H</small>
                  <small>L</small>
                </a>
              </span>
              <span>HIGHEST LEVEL</span>
            </div>

            <div class="responsive_insta_icon">
              <i class="fab fa-instagram"></i>
            </div>
          </div>

          <section class="responsive_nav_details">
            <div class="responsive_nav_details_secion_one">
              <span>
                <Link to="/">start</Link>
              </span>
              <span>
                <Link to="/raffle">RAFFLE</Link>
              </span>
              <span>
                {" "}
                <a href="sneaker.html">SNEAKERS</a>
              </span>
              <span>
                {" "}
                <a href="sign_up.html">Sign up</a>
              </span>
              <span>
                {" "}
                <a href="account_setting.html">Account</a>
              </span>
              <span>
                <a href="login.html">login</a>
              </span>
            </div>
            <div class="responsive_nav_details_secion_two">
              <ul>
                <li>
                  <a href="impressum.html">IMPRESSUM</a>
                </li>
                <li>
                  <a href="shipping.html">SHIPPING</a>
                </li>
                <li>
                  <a href="contact.html">CONTACT</a>
                </li>
              </ul>
            </div>
            <div class="responsive_nav_details_secion_three">
              <ul>
                <li>
                  <a href="privacy.html">privacy</a>
                </li>
                <li>
                  <a href="agb.html">agb</a>
                </li>
              </ul>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default ResponsiveNavbar;
