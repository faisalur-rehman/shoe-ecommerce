import React, { useState } from "react";
import mobileLogo from "../../image/mobile_logo.png";
import sneaker from "../../image/sneaker_one.png";
import ResponsiveNavbar from "../ResponsiveNavbar/ResponsiveNavbar";
import Sidebar from "../Sidebar/Sidebar";
import SliderComponent from "../Slider/Slider";
import "./AllProducts.css";

const ProductsScreen = ({ data }) => {
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
        <section class="sneaker_form_page_section">
          <Sidebar
            state={state}
            handleClick={handleClick}
            handleClose={handleClose}
          />

          <section class="sneaker_form_body_section">
            <div class="sneaker_form_container">
              <div class="sneaker_section_heading">
                <h3>Sneakers</h3>
              </div>
              <SliderComponent data={data} />
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

        <section class="sneaker_form_body_section">
          <div class="sneaker_form_container">
            <div class="sneaker_section_heading">
              <h3>sneakers</h3>
            </div>
            <SliderComponent data={data} />
          </div>
        </section>
      </section>
      <ResponsiveNavbar state={state} handleClose={handleClose} />
    </div>
  );
};

export default ProductsScreen;
