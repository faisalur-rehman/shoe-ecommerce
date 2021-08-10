import React, { useState } from "react";
import "./RaffleForm.css";
import raffleOne from "../../image/raffle_detail_one.png";
import raffleTwo from "../../image/raffle_detail_two.png";
import raffleThree from "../../image/raffle_detail_three.png";
import mobileLogo from "../../image/mobile_logo.png";

const RaffleForm = () => {
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
        <section class="raffle_form_page_section">
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

          <section class="raffle_form_body_section">
            <div class="raffle_form_container">
              <div class="raffle_section_heading">
                <h3>air jordan 1 university blue</h3>
              </div>
              <div class="raffle_form_img_detail">
                <figure>
                  <img src={raffleOne} alt="" />
                </figure>
                <figure>
                  <img src={raffleTwo} alt="" />
                </figure>
                <figure>
                  <img src={raffleThree} alt="" />
                </figure>
              </div>

              <div class="raffle_product_info">
                <h3>RAFFLE INFORMATION & CONDITION</h3>

                <div class="raffle_product_info_detail">
                  <div class="raffle_product_info_single_detail">
                    <p>
                      Join our raffle for the chance to buy one of the upcoming
                      NIKE DUNK HIGH «SYRACUSE» (DD1869-100).
                    </p>
                  </div>
                  <div class="raffle_product_info_single_detail">
                    <p>Release: Thursday, March 11th 2021</p>
                    <p>
                      Raffle closing date: Sunday, March 7th 2021 – 8 PM CET
                    </p>
                  </div>
                  <div class="raffle_product_info_single_detail">
                    <p>How it works:</p>
                  </div>
                  <div class="raffle_product_info_single_detail">
                    <p>
                      1) follow @titoloshop on Instagram (if you don’t follow
                      us, you will be disqualified).
                    </p>
                    <p>2) like the picture of the raffle shoe on instagram.</p>
                    <p>
                      3) comment the picture of the raffle shoe by tagging 3
                      people that would rock these shoes
                    </p>
                    <p>
                      4) Register now for the chance to buy the upcoming Release
                      by filling out the form below.
                    </p>
                  </div>
                </div>
              </div>
              <div class="raffle_purchase_form">
                <form>
                  <div class="raffle_purchase_form_container">
                    <div class="raffle_purchase_form_fields">
                      <div class="raffle_purchase_form_input_field">
                        <label>first name</label>
                        <input type="text" placeholder="" />
                      </div>
                      <div class="raffle_purchase_form_input_field">
                        <label>last name</label>
                        <input type="text" placeholder="" />
                      </div>
                      <div class="raffle_purchase_form_input_field">
                        <label>email(paypal)</label>
                        <input type="email" placeholder="" />
                      </div>
                      <div class="raffle_purchase_form_input_field">
                        <label>adress and house number</label>
                        <input type="text" placeholder="" />
                      </div>
                      <div class="raffle_purchase_form_input_field">
                        <label>post code</label>
                        <input type="number" placeholder="" />
                      </div>
                      <div class="raffle_purchase_form_input_field">
                        <label>city</label>
                        <input type="text" placeholder="" />
                      </div>
                      <div class="raffle_purchase_form_input_field">
                        <label>country</label>
                        <input type="text" placeholder="" />
                      </div>
                      <div class="raffle_purchase_form_input_field">
                        <label>gender</label>
                        <input type="text" placeholder="" />
                      </div>
                      <div class="raffle_purchase_form_input_field">
                        <label>size</label>
                        <input type="number" placeholder="" />
                      </div>
                      <div class="raffle_purchase_form_input_field">
                        <label>instagram account name</label>
                        <input type="text" placeholder="" />
                      </div>
                      <div class="raffle_purchase_form_check_box">
                        <a href="#">terms & conditions</a>
                      </div>

                      <div class="raffle_purchase_form_check_box">
                        <input type="checkbox" />
                        <label>i agree</label>
                      </div>
                      <div class="raffle_purchase_form_check_box">
                        <a>Marketing Permissions</a>
                      </div>
                      <div class="raffle_purchase_form_check_box">
                        <a>
                          Please select all the ways you would like to hear from
                          RYHL AG:
                        </a>
                      </div>
                      <div class="raffle_purchase_form_check_box">
                        <input type="checkbox" />
                        <label>RYHL newsletter</label>
                      </div>
                      <div class="raffle_purchase_form_check_box">
                        <input type="checkbox" />
                        <label>raffle information</label>
                      </div>

                      <div class="raffle_purchase_form_submit_btn">
                        <button>subscribe</button>
                      </div>
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

        <section class="raffle_form_body_section">
          <div class="raffle_form_container">
            <div class="raffle_section_heading">
              <h3>air jordan 1 university blue</h3>
            </div>
            <div class="raffle_form_img_detail">
              <figure>
                <img src={raffleOne} />
              </figure>
              <figure>
                <img src={raffleTwo} />
              </figure>
              <figure>
                <img src={raffleThree} />
              </figure>
            </div>

            <div class="raffle_product_info">
              <h3>RAFFLE INFORMATION & CONDITION</h3>

              <div class="raffle_product_info_detail">
                <div class="raffle_product_info_single_detail">
                  <p>
                    Join our raffle for the chance to buy one of the upcoming
                    NIKE DUNK HIGH «SYRACUSE» (DD1869-100).
                  </p>
                </div>
                <div class="raffle_product_info_single_detail">
                  <p>Release: Thursday, March 11th 2021</p>
                  <p>Raffle closing date: Sunday, March 7th 2021 – 8 PM CET</p>
                </div>
                <div class="raffle_product_info_single_detail">
                  <p>How it works:</p>
                </div>
                <div class="raffle_product_info_single_detail">
                  <p>
                    1) follow @titoloshop on Instagram (if you don’t follow us,
                    you will be disqualified).
                  </p>
                  <p>2) like the picture of the raffle shoe on instagram.</p>
                  <p>
                    3) comment the picture of the raffle shoe by tagging 3
                    people that would rock these shoes
                  </p>
                  <p>
                    4) Register now for the chance to buy the upcoming Release
                    by filling out the form below.
                  </p>
                </div>
              </div>
            </div>
            <div class="raffle_purchase_form">
              <form>
                <div class="raffle_purchase_form_container">
                  <div class="raffle_purchase_form_fields">
                    <div class="raffle_purchase_form_input_field">
                      <label>first name</label>
                      <input type="text" placeholder="" />
                    </div>
                    <div class="raffle_purchase_form_input_field">
                      <label>last name</label>
                      <input type="text" placeholder="" />
                    </div>
                    <div class="raffle_purchase_form_input_field">
                      <label>email(paypal)</label>
                      <input type="email" placeholder="" />
                    </div>
                    <div class="raffle_purchase_form_input_field">
                      <label>adress and house number</label>
                      <input type="text" placeholder="" />
                    </div>
                    <div class="raffle_purchase_form_input_field">
                      <label>post code</label>
                      <input type="number" placeholder="" />
                    </div>
                    <div class="raffle_purchase_form_input_field">
                      <label>city</label>
                      <input type="text" placeholder="" />
                    </div>
                    <div class="raffle_purchase_form_input_field">
                      <label>country</label>
                      <input type="text" placeholder="" />
                    </div>
                    <div class="raffle_purchase_form_input_field">
                      <label>gender</label>
                      <input type="text" placeholder="" />
                    </div>
                    <div class="raffle_purchase_form_input_field">
                      <label>size</label>
                      <input type="number" placeholder="" />
                    </div>
                    <div class="raffle_purchase_form_input_field">
                      <label>instagram account name</label>
                      <input type="text" placeholder="" />
                    </div>
                    <div class="raffle_purchase_form_check_box">
                      <a href="#">terms & conditions</a>
                    </div>

                    <div class="raffle_purchase_form_check_box">
                      <input type="checkbox" />
                      <label>i agree</label>
                    </div>
                    <div class="raffle_purchase_form_check_box">
                      <a>Marketing Permissions</a>
                    </div>
                    <div class="raffle_purchase_form_check_box">
                      <a>
                        Please select all the ways you would like to hear from
                        RYHL AG:
                      </a>
                    </div>
                    <div class="raffle_purchase_form_check_box">
                      <input type="checkbox" />
                      <label>RYHL newsletter</label>
                    </div>
                    <div class="raffle_purchase_form_check_box">
                      <input type="checkbox" />
                      <label>raffle information</label>
                    </div>

                    <div class="raffle_purchase_form_submit_btn">
                      <button>subscribe</button>
                    </div>
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

export default RaffleForm;
