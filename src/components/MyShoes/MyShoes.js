import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./MyShoes.css";
import singleShoe from "../../image/single_myshoes_page.png";
import mobileLogo from "../../image/mobile_logo.png";
import { Link } from "react-router-dom";

const MyShoes = () => {
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
          <Sidebar />

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
                    <div class="myshoes_page_labels_fields">
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
                        <p>5’005.00 CHF</p>
                      </div>
                    </div>
                  </div>
                  <div class="myshoes_page_labels_fields">
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
                      <p>5’005.00 CHF</p>
                    </div>
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
              <a href="account_setting.html">setting</a>
            </div>
            <div class="myshoes_nav_list">
              <a href="myshoes.html">my shoes</a>
            </div>
            <div class="myshoes_nav_list">
              <a href="profile.html">profile</a>
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
                <div class="myshoes_page_labels_fields">
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
                    <p>5’005.00 CHF</p>
                  </div>
                </div>
              </div>
              <div class="myshoes_page_labels_fields">
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
                  <p>5’005.00 CHF</p>
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
    </>
  );
};

export default MyShoes;
