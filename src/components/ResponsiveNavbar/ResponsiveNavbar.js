import React from "react";
import { Link } from "react-router-dom";

const ResponsiveNavbar = ({ state, handleClose }) => {
  return (
    <section class={`responsive_nav_bar ${state}`}>
      <section class="responsive_nav_page_section">
        <div class="responsive_header">
          <div class="responsive_nav_icon">
            <Link class="open_close_nav">
              <i class="fas fa-times" onClick={handleClose}></i>
            </Link>
          </div>

          <div class="responsive_logo">
            <span>REACH YOUR</span>
            <span class="responsive_logo_middle_part">
              <Link to="/">
                <small>R</small>
                <small>Y</small>
                <small>H</small>
                <small>L</small>
              </Link>
            </span>
            <span>HIGHEST LEVEL</span>
          </div>

          <div class="responsive_insta_icon">
            <i class="fab fa-instagram"></i>
          </div>
        </div>

        <section class="responsive_nav_details">
          <div class="responsive_nav_details_secion_one">
            <p>
              <Link to="/">start</Link>
            </p>
            <p>
              <Link to="/raffle">RAFFLE</Link>
            </p>
            <p>
              <Link to="/user-raffle">YOUR RAFFLE</Link>
            </p>
            <p>
              {" "}
              <Link to="/allProducts">SNEAKERS</Link>
            </p>
            <p>
              {" "}
              <Link to="/signup">Sign up</Link>
            </p>
            <p>
              {" "}
              <Link to="/account">Account</Link>
            </p>
            <p>
              <Link to="/signin">login</Link>
            </p>
          </div>
          <div class="responsive_nav_details_secion_two">
            <ul>
              <li>
                <Link to="/impressum">IMPRESSUM</Link>
              </li>
              <li>
                <Link to="/shipping">SHIPPING</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
          <div class="responsive_nav_details_secion_three">
            <ul>
              <li>
                <Link to="/privacy">privacy</Link>
              </li>
              <li>
                <Link to="/conditions">agb</Link>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </section>
  );
};

export default ResponsiveNavbar;
