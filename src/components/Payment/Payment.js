import React, { useState } from "react";
import raffle from "../../image/raffle_one.png";
import mobileLogo from "../../image/mobile_logo.png";
import "./Payment.css";

const Payment = () => {
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
        <section class="payment_page_section">
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

          <section class="payment_page_section_body">
            <div class="product_purchased_section">
              <figure>
                <img src={raffle} alt="" />
              </figure>
              <div class="product_purchased">
                <span> STYLE</span>
                <p>AQ0818-148</p>
              </div>
              <div class="product_purchased">
                <span>COLORWAY</span>
                <p>WHITE/DARK POWDER BLUE-CONE</p>
              </div>
              <div class="product_purchased">
                <span>RELEASE-DATUM</span>
                <p>23.06.2018</p>
              </div>
            </div>

            <section class="product_purchased_detail_section">
              <div class="product_purchased_container">
                <div class="product_purchased_form">
                  <h3>RECEIPT</h3>
                  <div class="receipt_detail_section">
                    <div class="receipt_detail">
                      <p>U.S. Men‘s Size:</p>
                      <span>10</span>
                    </div>
                    <div class="receipt_detail">
                      <p>Colorway:</p>
                      <span>Pink Foam/White/University Red-Pine Green</span>
                    </div>
                    <div class="receipt_detail">
                      <p>Style:</p>
                      <span> CU6312-600</span>
                    </div>
                    <div class="receipt_detail">
                      <p>Condition:</p>
                      <span>New; 100% authentic</span>
                    </div>

                    <div class="receipt_detail">
                      <p>Purchase Price</p>
                      <span>5’000.00 CHF</span>
                    </div>
                    <div class="receipt_detail">
                      <p>Import Duties (incl.above)</p>
                      <span>0.00 CHF</span>
                    </div>
                    <div class="receipt_detail">
                      <p>Tax (incl. above)</p>
                      <span>0.00 CHF</span>
                    </div>
                    <div class="receipt_detail">
                      <p>Processing Fee</p>
                      <span>5.00 CHF</span>
                    </div>
                    <div class="receipt_detail">
                      <p>Shipping</p>
                      <span>0.00 CHF</span>
                    </div>
                  </div>
                  <div class="receipt_detail_total">
                    <p>Total</p>
                    <span>5’005.00 CHF</span>
                  </div>

                  <div class="credit_detail_section">
                    <div class="credit_detail">
                      <i class="fab fa-cc-stripe"></i>
                      <p>MasterCard ends with 8922</p>
                      <a href="#">
                        <i class="fas fa-pen"></i>
                      </a>
                    </div>
                    <div class="credit_detail">
                      <i class="fas fa-map-marker-alt"></i>
                      <p>Arinstrasse 9</p>
                      <a href="#">
                        <i class="fas fa-pen"></i>
                      </a>
                    </div>
                  </div>
                  <div class="purchased_btn">
                    <button>buy</button>
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

        <section class="payment_page_section_body">
          <div class="product_purchased_section">
            <figure>
              <img src={raffle} alt="" />
            </figure>
            <div class="product_purchased">
              <span> STYLE</span>
              <p>AQ0818-148</p>
            </div>
            <div class="product_purchased">
              <span>COLORWAY</span>
              <p>WHITE/DARK POWDER BLUE-CONE</p>
            </div>
            <div class="product_purchased">
              <span>RELEASE-DATUM</span>
              <p>23.06.2018</p>
            </div>
          </div>

          <section class="product_purchased_detail_section">
            <div class="product_purchased_container">
              <div class="product_purchased_form">
                <h3>RECEIPT</h3>
                <div class="receipt_detail_section">
                  <div class="receipt_detail">
                    <p>U.S. Men‘s Size:</p>
                    <span>10</span>
                  </div>
                  <div class="receipt_detail">
                    <p>Colorway:</p>
                    <span>Pink Foam/White/University Red-Pine Green</span>
                  </div>
                  <div class="receipt_detail">
                    <p>Style:</p>
                    <span> CU6312-600</span>
                  </div>
                  <div class="receipt_detail">
                    <p>Condition:</p>
                    <span>New; 100% authentic</span>
                  </div>

                  <div class="receipt_detail">
                    <p>Purchase Price</p>
                    <span>5’000.00 CHF</span>
                  </div>
                  <div class="receipt_detail">
                    <p>Import Duties (incl.above)</p>
                    <span>0.00 CHF</span>
                  </div>
                  <div class="receipt_detail">
                    <p>Tax (incl. above)</p>
                    <span>0.00 CHF</span>
                  </div>
                  <div class="receipt_detail">
                    <p>Processing Fee</p>
                    <span>5.00 CHF</span>
                  </div>
                  <div class="receipt_detail">
                    <p>Shipping</p>
                    <span>0.00 CHF</span>
                  </div>
                </div>
                <div class="receipt_detail_total">
                  <p>Total</p>
                  <span>5’005.00 CHF</span>
                </div>

                <div class="credit_detail_section">
                  <div class="credit_detail">
                    <i class="fab fa-cc-stripe"></i>
                    <p>MasterCard ends with 8922</p>
                    <a href="#">
                      <i class="fas fa-pen"></i>
                    </a>
                  </div>
                  <div class="credit_detail">
                    <i class="fas fa-map-marker-alt"></i>
                    <p>Arinstrasse 9</p>
                    <a href="#">
                      <i class="fas fa-pen"></i>
                    </a>
                  </div>
                </div>
                <div class="purchased_btn">
                  <button>buy</button>
                </div>
              </div>
            </div>
          </section>
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

export default Payment;
