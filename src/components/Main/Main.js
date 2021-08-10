import React from "react";
import homeBanner from "../../image/home_banner.png";
import homeArrow from "../../image/home_page_arrow.png";
import mobileLogo from "../../image/mobile_logo.png";
import Sidebar from "../Sidebar/Sidebar";

const Main = () => {
  return (
    <div>
      <section class="loading_secreen" id="loader">
        <div class="load">
          <span class="animate-bottom">R</span>
          <span class="animate-bottom2">Y</span>
          <span class="animate-bottom3">H</span>
          <span class="animate-bottom4">L</span>
        </div>
      </section>
      <section id="greater_then_mobile">
        <section class="home_page_section">
          <Sidebar />

          <div class="slide_container">
            <section class="home_page_body">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      src={homeBanner}
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100 h-100"
                      src={homeBanner}
                      alt="Second slide"
                    />
                  </div>
                </div>
              </div>
              <div class="explore_new">
                <a href="sneaker.html">
                  <span>explore new sneakers</span>
                  <figure>
                    <img src={homeArrow} alt="" />
                  </figure>
                </a>
              </div>
            </section>
          </div>
          <div class="home_page_footer">
            <div class="footer_content">
              <a href="impressum.html">impressum</a>
            </div>
            <div class="footer_content">
              <a href="shipping.html">shipping</a>
            </div>
            <div class="footer_content">
              <a href="contact.html">contact</a>
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
            <a href="index.html">
              <img src={mobileLogo} alt="" />
            </a>
          </div>
          <div class="nav_icon">
            <a class="open_close_nav">
              <i class="fas fa-bars"></i>
            </a>
          </div>
        </div>
        <div class="mobile_banner">
          <h2>Reach Your Highest Level</h2>

          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src={homeBanner} alt="First slide" />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100 h-100"
                  src={homeBanner}
                  alt="Second slide"
                />
              </div>
            </div>
          </div>
          <div class="mobile_explore">
            <a href="sneaker.html">
              <span>explore new sneakers</span>
              <div class="figure">
                <img src={homeArrow} alt="" />
              </div>
            </a>
          </div>
        </div>

        <div class="mobile_footer">
          <a class="mobile_footer_content" href="impressum.html">
            <div class="mobile_footer_field">
              <span>impressum</span>
              <small>impressum</small>
            </div>
          </a>
          <a class="mobile_footer_content" href="shipping.html">
            <div class="mobile_footer_field">
              <span>Shipping</span>
              <small>Shipping</small>
            </div>
          </a>
          <a class="mobile_footer_content" href="contact.html">
            <div class="mobile_footer_field">
              <span>contact</span>
              <small>contact</small>
            </div>
          </a>
          <a class="mobile_footer_content" href="#">
            <div class="mobile_footer_field">
              <div class="insta_icon">
                <i class="fab fa-instagram"></i>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Main;