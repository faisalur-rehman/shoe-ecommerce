import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Shippinig.css";
import mobileLogo from "../../image/mobile_logo.png";
import ResponsiveNavbar from "../ResponsiveNavbar/ResponsiveNavbar";

const Shipping = () => {
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
        <section class="shipping_page_section">
          <Sidebar
            state={state}
            handleClick={handleClick}
            handleClose={handleClose}
          />

          <div class="shipping_footer_section_two">
            <div class="shipping_footer">
              <div class="shipping_footer_list_two">
                <Link to="/impressum">impressum</Link>
              </div>
              <div class="shipping_footer_list_two">
                <Link to="/shipping">shipping</Link>
              </div>
            </div>
          </div>

          <section class="shipping_body_section">
            <div class="shipping_container">
              <div class="shipping_section_heading">
                <h3>shipping</h3>
              </div>
              <div class="shipping_section_contact_detail">
                <div class="shipping_section_contact_fields">
                  <p>
                    shipping terms
                    <br />
                    delivery time.
                  </p>
                </div>
                <div class="shipping_section_contact_fields">
                  <p>
                    in liechtenstein you will receive the products on the same
                    working day.
                  </p>
                </div>
                <div class="shipping_section_contact_fields">
                  <p>
                    (switzerland and eu-foreign countries correspondigle longer)
                  </p>
                </div>
                <div class="shipping_section_contact_fields">
                  <p>
                    shipping costs:
                    <br />
                    switzerland
                  </p>
                </div>
                <div class="shipping_section_contact_fields">
                  <p>the post office :10 chf</p>
                </div>

                <div class="shipping_section_contact_fields">
                  <p>
                    shipping zone 1-3 (within eu)
                    <br />
                    ups: 20 to 25 chf
                  </p>
                </div>
                <div class="shipping_section_contact_fields">
                  <p>
                    for all deliveries within the eu, taxes and customs duties
                    are included in the product price.
                  </p>
                  <p>shipping zone 4-9 (outside eu)</p>
                  <p>fedex: 35 CHF</p>
                </div>
                <div class="shipping_section_contact_fields">
                  <p>
                    for all deliveries outside europe, import duties may be
                    charged (fees, import duties, vat), which are determined by
                    the destination country. they are calculated according to
                    the country of manufacture/origin and the classification of
                    the goods and will be charged once your package reaches your
                    country. RYHL does not withhold duties and taxes during the
                    payment process and cannot predict what your possible duties
                    will be: in case such additional duties are incurred, they
                    must be paid in order for your package to be cleared. In
                    this case, the customer is responsible for the costs
                    incurred. please contact your local customs office for more
                    information on your country's policies.
                  </p>
                </div>
                <div class="shipping_section_contact_fields">
                  <p>(shipping and returns)</p>
                  <p>letstrasse 24</p>
                  <p>9490 vaduz</p>
                  <p>liechtenstein fl</p>
                </div>
              </div>
            </div>
          </section>
          <div class="shipping_footer_section_one">
            <div class="shipping_footer_section_one_list">
              <Link to="/contact">contact</Link>
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

        <section class="shipping_body_section">
          <div class="shipping_container">
            <div class="shipping_section_heading">
              <a href="index.html">
                <i class="fas fa-arrow-left"></i>
              </a>
              <h3>shipping</h3>
            </div>
            <div class="shipping_section_contact_detail">
              <div class="shipping_section_contact_fields">
                <p>
                  shipping terms
                  <br />
                  delivery time.
                </p>
              </div>
              <div class="shipping_section_contact_fields">
                <p>
                  in liechtenstein you will receive the products on the same
                  working day.
                </p>
              </div>
              <div class="shipping_section_contact_fields">
                <p>
                  (switzerland and eu-foreign countries correspondigle longer)
                </p>
              </div>
              <div class="shipping_section_contact_fields">
                <p>
                  shipping costs:
                  <br />
                  switzerland
                </p>
              </div>
              <div class="shipping_section_contact_fields">
                <p>the post office :10 chf</p>
              </div>

              <div class="shipping_section_contact_fields">
                <p>
                  shipping zone 1-3 (within eu)
                  <br />
                  ups: 20 to 25 chf
                </p>
              </div>
              <div class="shipping_section_contact_fields">
                <p>
                  for all deliveries within the eu, taxes and customs duties are
                  included in the product price.
                </p>
                <p>shipping zone 4-9 (outside eu)</p>
                <p>fedex: 35 CHF</p>
              </div>
              <div class="shipping_section_contact_fields">
                <p>
                  for all deliveries outside europe, import duties may be
                  charged (fees, import duties, vat), which are determined by
                  the destination country. they are calculated according to the
                  country of manufacture/origin and the classification of the
                  goods and will be charged once your package reaches your
                  country. RYHL does not withhold duties and taxes during the
                  payment process and cannot predict what your possible duties
                  will be: in case such additional duties are incurred, they
                  must be paid in order for your package to be cleared. In this
                  case, the customer is responsible for the costs incurred.
                  please contact your local customs office for more information
                  on your country's policies.
                </p>
              </div>
              <div class="shipping_section_contact_fields">
                <p>(shipping and returns)</p>
                <p>letstrasse 24</p>
                <p>9490 vaduz</p>
                <p>liechtenstein fl</p>
              </div>
            </div>
          </div>
        </section>

        <div class="shipping_mobile_footer">
          <div class="shipping_mobile_footer_list">
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

export default Shipping;
