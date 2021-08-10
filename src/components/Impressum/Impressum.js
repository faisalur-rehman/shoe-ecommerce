import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Impressum.css";
import mobileLogo from "../../image/mobile_logo.png";
import { Link } from "react-router-dom";

const Impressum = () => {
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
        <section class="impressum_page_section">
          <Sidebar />

          <div class="impressum_footer_section_one">
            <div class="impressum_footer_section_one_list">
              <Link to="/impressum">impressum</Link>
            </div>
          </div>

          <section class="impressum_body_section">
            <div class="impressum_section_heading">
              <h3>impressum</h3>
            </div>
            <div class="impressum_section_contact_detail">
              <div class="impressum_section_contact_fields">
                <p>the ryhl.ch website is offered by</p>
              </div>
              <div class="impressum_section_contact_fields">
                <p>
                  reach your highest level clothing ag
                  <br />
                  country road 24
                  <br />
                  9490 vaduz
                  <br />
                  liechtesntein fl
                </p>
              </div>
              <div class="impressum_section_contact_fields">
                <p>managing director: alban krasniqi</p>

                <p>
                  phone:<a href="#"> +41 211 69 99 28 92</a>
                </p>

                <p>
                  e-mail:<a href="#"> info@ryhl.li</a>
                </p>

                <p>
                  internet:<a href="#"> www.ryhl.li</a>
                </p>
              </div>
              <div class="impressum_section_contact_fields">
                <p>register court: county court vaduz</p>
                <p>registration number: hrb 69399</p>
                <p>sales tax identification number: fl 287686637</p>
              </div>
            </div>
          </section>

          <div class="impressum_footer_section_two">
            <div class="impressum_footer">
              <div class="impressum_footer_list_two">
                <Link to="/shipping">shipping</Link>
              </div>
              <div class="impressum_footer_list_two">
                <Link to="/contact">contact</Link>
              </div>
            </div>
          </div>
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

        <section class="impressum_body_section">
          <div class="impressum_section_heading">
            <a href="index.html">
              <i class="fas fa-arrow-left"></i>
            </a>
            <h3>impressum</h3>
          </div>
          <div class="impressum_section_contact_detail">
            <div class="impressum_section_contact_fields">
              <p>the ryhl.ch website is offered by</p>
            </div>
            <div class="impressum_section_contact_fields">
              <p>
                reach your highest level clothing ag
                <br />
                country road 24
                <br />
                9490 vaduz
                <br />
                liechtesntein fl
              </p>
            </div>
            <div class="impressum_section_contact_fields">
              <p>managing director: alban krasniqi</p>

              <p>
                phone:<a href="#"> +41 211 69 99 28 92</a>
              </p>

              <p>
                e-mail:<a href="#"> info@ryhl.li</a>
              </p>

              <p>
                internet:<a href="#"> www.ryhl.li</a>
              </p>
            </div>
            <div class="impressum_section_contact_fields">
              <p>register court: county court vaduz</p>
              <p>registration number: hrb 69399</p>
              <p>sales tax identification number: fl 287686637</p>
            </div>
          </div>
        </section>

        <div class="impressum_mobile_footer">
          <div class="impressum_mobile_footer_list">
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>

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
                <a href="index.html">start</a>
              </span>
              <span>
                <a href="raffle.html">RAFFLE</a>
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

export default Impressum;
