import React, { useState } from "react";
import "./Signin.css";
import mobileLogo from "../../image/mobile_logo.png";

const Signin = () => {
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
        <section class="login_page_section">
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

          <section class="login_section">
            <div class="login_container">
              <div class="login_form">
                <h3>Login</h3>
                <form>
                  <div class="login_fields">
                    <div class="input_field">
                      <label>mail</label>
                      <input type="email" placeholder="" />
                    </div>
                    <div class="input_field">
                      <label>Password</label>
                      <input type="password" placeholder="" />
                    </div>
                    <div class="forget_password">
                      <span>forgot password?</span>
                    </div>
                    <div class="submit_btn">
                      <button type="submit">Login</button>
                    </div>
                    <div class="submit_btn">
                      <span>new to ryhl?</span>
                    </div>
                    <div class="submit_btn">
                      <a href="sign_up.html">create account</a>
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

        <section class="login_section">
          <div class="login_container">
            <div class="login_form">
              <h3>Login</h3>
              <form>
                <div class="login_fields">
                  <div class="input_field">
                    <label>mail</label>
                    <input type="email" placeholder="" />
                  </div>
                  <div class="input_field">
                    <label>Password</label>
                    <input type="password" placeholder="" />
                  </div>
                  <div class="forget_password">
                    <span>forgot password?</span>
                  </div>
                  <div class="submit_btn">
                    <button type="submit">Login</button>
                  </div>
                  <div class="submit_btn">
                    <span>new to ryhl?</span>
                  </div>
                  <div class="submit_btn">
                    <a href="sign_up.html">create account</a>
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

export default Signin;
