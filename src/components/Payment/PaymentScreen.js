import React, { useState } from "react";
import raffle from "../../image/raffle_one.png";
import mobileLogo from "../../image/mobile_logo.png";
import "./Payment.css";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

const PaymentScreen = ({ data, id }) => {
  console.log("data", data);
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
          <Sidebar
            state={state}
            handleClick={handleClick}
            handleClose={handleClose}
          />

          <section class="payment_page_section_body">
            <div class="product_purchased_section">
              <figure>
                <img
                  src={`http://localhost:8000/${data.orderhistory.articleId.image}`}
                  alt=""
                />
              </figure>
              <div class="product_purchased">
                <span> STYLE</span>
                <p>{data.orderhistory.articleId.style}</p>
              </div>
              <div class="product_purchased">
                <span>COLORWAY</span>
                <p>{data.orderhistory.articleId.description}</p>
              </div>
              <div class="product_purchased">
                <span>RELEASE-DATUM</span>
                <p>
                  {new Date(
                    data.orderhistory.articleId.releaseDate
                  ).toDateString()}
                </p>
              </div>
            </div>

            <section class="product_purchased_detail_section">
              <div class="product_purchased_container">
                <div class="product_purchased_form">
                  <h3>RECEIPT</h3>
                  <div class="receipt_detail_section">
                    <div class="receipt_detail">
                      <p>U.S. Size:</p>
                      <span>{data.orderhistory.sizeSelected}</span>
                    </div>
                    <div class="receipt_detail">
                      <p>Colorway:</p>
                      <span>{data.orderhistory.articleId.description}</span>
                    </div>
                    <div class="receipt_detail">
                      <p>Style:</p>
                      <span>{data.orderhistory.articleId.style}</span>
                    </div>
                    <div class="receipt_detail">
                      <p>Condition:</p>
                      <span>New; 100% authentic</span>
                    </div>

                    <div class="receipt_detail">
                      <p>Purchase Price</p>
                      <span>{data.orderhistory.articleId.price} CHF</span>
                    </div>
                    <div class="receipt_detail">
                      <p>Import Duties (incl.above)</p>
                      <span>{data.orderhistory.importDuties} CHF</span>
                    </div>
                    <div class="receipt_detail">
                      <p>Tax (incl. above)</p>
                      <span>0.00 CHF</span>
                    </div>
                    <div class="receipt_detail">
                      <p>Processing Fee</p>
                      <span>{data.orderhistory.processingFee} CHF</span>
                    </div>
                    <div class="receipt_detail">
                      <p>Shipping</p>
                      <span>{data.orderhistory.shippingPrice} CHF</span>
                    </div>
                    <div class="receipt_detail">
                      <p>Shipping Address</p>
                      <span>{data.orderhistory.shippingAddress}</span>
                    </div>
                  </div>
                  <div class="receipt_detail_total">
                    <p>Total</p>
                    <span>{data.orderhistory.totalPrice} CHF</span>
                  </div>

                  <Link to={`/stripe/${id}`} class="purchased_btn">
                    <button>buy</button>
                  </Link>
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
                  <button>Buy</button>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default PaymentScreen;
