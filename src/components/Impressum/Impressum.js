import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Impressum.css";
import mobileLogo from "../../image/mobile_logo.png";
import { Link } from "react-router-dom";
import ResponsiveNavbar from "../ResponsiveNavbar/ResponsiveNavbar";

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
          <Sidebar
            state={state}
            handleClick={handleClick}
            handleClose={handleClose}
          />

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

      <ResponsiveNavbar state={state} handleClose={handleClose} />
    </div>
  );
};

export default Impressum;
