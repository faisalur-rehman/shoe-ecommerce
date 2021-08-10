import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import mobileLogo from "../../image/mobile_logo.png";
import "./Contact.css";

const Contact = () => {
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
        <section class="contact_page_section">
          <Sidebar />

          <div class="contact_footer_section">
            <div class="contact_footer">
              <div class="contact_footer_list">
                <Link to="/impressum">impressum</Link>
              </div>
              <div class="contact_footer_list">
                <Link to="/shipping">shipping</Link>
              </div>
              <div class="contact_footer_list">
                <Link to="/contact">contact</Link>
              </div>
            </div>
          </div>

          <section class="contact_us_section">
            <div class="contact_us_form">
              <h3>contact</h3>
              <div class="contact_form_info">
                <p>you want to ask us something?</p>
                <p>
                  then please fill out the contact form and we will get back to
                  you as soon as possible.
                </p>
              </div>
              <div class="contact_us_container">
                <form>
                  <div class="contact_us_fields">
                    <div class="contact_us_input_field">
                      <label>name</label>
                      <input type="text" placeholder="" />
                    </div>
                    <div class="contact_us_input_field">
                      <label>mail</label>
                      <input type="email" placeholder="" />
                    </div>
                    <div class="contact_us_input_field">
                      <label>Phone</label>
                      <input type="number" placeholder="" />
                    </div>
                    <div class="contact_us_input_field">
                      <label>text</label>
                      <textarea></textarea>
                    </div>
                    <div class="contact_us_submit_btn">
                      <button type="submit">send</button>
                    </div>
                  </div>
                </form>
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

        <section class="contact_us_section">
          <div class="contact_us_form">
            <h3>
              contact
              <a href="index.html">
                <i class="fas fa-arrow-left"></i>
              </a>
            </h3>
            <div class="contact_form_info">
              <p>you want to ask us something?</p>
              <p>
                then please fill out the contact form and we will get back to
                you as soon as possible.
              </p>
            </div>
            <div class="contact_us_container">
              <form>
                <div class="contact_us_fields">
                  <div class="contact_us_input_field">
                    <label>name</label>
                    <input type="text" placeholder="" />
                  </div>
                  <div class="contact_us_input_field">
                    <label>mail</label>
                    <input type="email" placeholder="" />
                  </div>
                  <div class="contact_us_input_field">
                    <label>Phone</label>
                    <input type="number" placeholder="" />
                  </div>
                  <div class="contact_us_input_field">
                    <label>text</label>
                    <textarea></textarea>
                  </div>
                  <div class="contact_us_submit_btn">
                    <button type="submit">send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
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

export default Contact;
