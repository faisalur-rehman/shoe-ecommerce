import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Profile.css";
import mobileLogo from "../../image/mobile_logo.png";
import { Link } from "react-router-dom";

const Profile = () => {
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
        <section class="profile_page_section">
          <Sidebar />

          <div class="profile_nav_section">
            <div class="profile_page_list">
              <h2>Marius Müller</h2>
            </div>
            <div class="profile_nav">
              <div class="profile_nav_list">
                <Link to="/account">setting</Link>
              </div>
              <div class="profile_nav_list">
                <Link to="/myshoes">my shoes</Link>
              </div>
              <div class="profile_nav_list">
                <Link to="/profile">profile</Link>
              </div>
            </div>
          </div>

          <section class="profile_section">
            <div class="profile_page_form">
              <h3>profile</h3>

              <div class="profile_page_container">
                <div class="profile_page_fields">
                  <div class="profile_page_input_field">
                    <label>
                      <span>name</span>
                    </label>
                    <div class="profile_fields">
                      <p>Marius Müller</p>
                      <a href="#">
                        <i class="fas fa-pen"></i>
                      </a>
                    </div>
                  </div>

                  <div class="profile_page_input_field">
                    <label>
                      <span>adress</span>
                    </label>
                    <div class="profile_fields">
                      <p>Arinstrasse 17, 9805 Triesen</p>
                      <a href="#">
                        <i class="fas fa-pen"></i>
                      </a>
                    </div>
                  </div>

                  <div class="profile_page_input_field">
                    <label>
                      <span>email-adress</span>
                    </label>
                    <div class="profile_fields">
                      <p>ryhl@info.li</p>
                      <a href="#">
                        <i class="fas fa-pen"></i>
                      </a>
                    </div>
                  </div>
                  <div class="profile_page_input_field">
                    <label>
                      <span>benutzername</span>
                    </label>
                    <div class="profile_fields">
                      <p>snerkarers123048390028</p>
                      <a href="#">
                        <i class="fas fa-pen"></i>
                      </a>
                    </div>
                  </div>

                  <div class="profile_page_input_field">
                    <label>
                      <span>password</span>
                    </label>
                    <div class="profile_fields">
                      <p>reset password</p>
                      <a href="#">
                        <i class="fas fa-pen"></i>
                      </a>
                    </div>
                  </div>
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

        <div class="profile_nav_section">
          <div class="profile_page_list">
            <h2>Marius Müller</h2>
          </div>
          <div class="profile_nav">
            <div class="profile_nav_list">
              <a href="account_setting.html">setting</a>
            </div>
            <div class="profile_nav_list">
              <a href="myshoes.html">my shoes</a>
            </div>
            <div class="profile_nav_list">
              <a href="profile.html">profile</a>
            </div>
          </div>
        </div>

        <section class="profile_section">
          <div class="profile_page_form">
            <h3>profil</h3>

            <div class="profile_page_container">
              <div class="profile_page_fields">
                <div class="profile_page_input_field">
                  <label>
                    <span>name</span>
                  </label>
                  <div class="profile_fields">
                    <p>Marius Müller</p>
                    <a href="#">
                      <i class="fas fa-pen"></i>
                    </a>
                  </div>
                </div>

                <div class="profile_page_input_field">
                  <label>
                    <span>adress</span>
                  </label>
                  <div class="profile_fields">
                    <p>Arinstrasse 17, 9805 Triesen</p>
                    <a href="#">
                      <i class="fas fa-pen"></i>
                    </a>
                  </div>
                </div>

                <div class="profile_page_input_field">
                  <label>
                    <span>email-adress</span>
                  </label>
                  <div class="profile_fields">
                    <p>ryhl@info.li</p>
                    <a href="#">
                      <i class="fas fa-pen"></i>
                    </a>
                  </div>
                </div>
                <div class="profile_page_input_field">
                  <label>
                    <span>benutzername</span>
                  </label>
                  <div class="profile_fields">
                    <p>snerkarers123048390028</p>
                    <a href="#">
                      <i class="fas fa-pen"></i>
                    </a>
                  </div>
                </div>

                <div class="profile_page_input_field">
                  <label>
                    <span>password</span>
                  </label>
                  <div class="profile_fields">
                    <p>reset password</p>
                    <a href="#">
                      <i class="fas fa-pen"></i>
                    </a>
                  </div>
                </div>
              </div>
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

export default Profile;
