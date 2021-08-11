import React, { useState } from "react";
import mobileLogo from "../../image/mobile_logo.png";
import ResponsiveNavbar from "../ResponsiveNavbar/ResponsiveNavbar";
import "./Signup.css";

const Signup = () => {
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
        <section class="sign_up_page_section">
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

          <section class="sign_up_section">
            <div class="sign_up_container">
              <div class="sign_up_form">
                <h3>sign up</h3>
                <form>
                  <div class="sign_up_fields">
                    <div class="sign_up_input_field">
                      <label>full name</label>
                      <input type="text" placeholder="" />
                    </div>
                    <div class="sign_up_input_field">
                      <label>mail</label>
                      <input type="email" placeholder="" />
                    </div>
                    <div class="sign_up_input_field">
                      <label>Password</label>
                      <input type="password" placeholder="" />
                    </div>
                    <div class="sign_up_input_field">
                      <label>comfirm password</label>
                      <input type="password" placeholder="" />
                    </div>
                    <div class="sign_up_remember_me">
                      <input type="checkbox" />
                      <label>i agree to the terms and conditions of RYHL</label>
                    </div>
                    <div class="sign_up_submit_btn">
                      <button type="submit">create account</button>
                    </div>
                    <div class="sign_up_submit_btn">
                      <span>already have a account?</span>
                    </div>
                    <div class="sign_up_submit_btn">
                      <a href="login.html">Login</a>
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

        <section class="sign_up_section">
          <div class="sign_up_container">
            <div class="sign_up_form">
              <h3>sign up</h3>
              <form>
                <div class="sign_up_fields">
                  <div class="sign_up_input_field">
                    <label>full name</label>
                    <input type="text" placeholder="" />
                  </div>
                  <div class="sign_up_input_field">
                    <label>mail</label>
                    <input type="email" placeholder="" />
                  </div>
                  <div class="sign_up_input_field">
                    <label>Password</label>
                    <input type="password" placeholder="" />
                  </div>
                  <div class="sign_up_input_field">
                    <label>comfirm password</label>
                    <input type="password" placeholder="" />
                  </div>
                  <div class="sign_up_remember_me">
                    <input type="checkbox" />
                    <label>i agree to the terms and conditions of RYHL</label>
                  </div>
                  <div class="sign_up_submit_btn">
                    <button type="submit">create account</button>
                  </div>
                  <div class="sign_up_submit_btn">
                    <span>already have a account?</span>
                  </div>
                  <div class="sign_up_submit_btn sign_up_page_login">
                    <a href="login.html">Login</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>

      <ResponsiveNavbar state={state} handleClose={handleClose} />
    </div>
  );
};

export default Signup;
