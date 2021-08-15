import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import homeBanner from "../../image/home_banner.png";
import homeArrow from "../../image/home_page_arrow.png";
import mobileLogo from "../../image/mobile_logo.png";
import ResponsiveNavbar from "../ResponsiveNavbar/ResponsiveNavbar";
import Sidebar from "../Sidebar/Sidebar";

const Main = () => {
  const [state, setstate] = useState("");
  function handleClick() {
    setstate("responsive_bar");
  }
  function handleClose() {
    setstate("");
  }
  useEffect(() => {
    // const reloadCount = sessionStorage.getItem("reloadCount");
    // if (reloadCount < 2) {
    //   sessionStorage.setItem("reloadCount", String(reloadCount + 1));
    //   window.location.reload();
    // } else {
    //   sessionStorage.removeItem("reloadCount");
    // }
  }, []);
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
          <Sidebar
            state={state}
            handleClick={handleClick}
            handleClose={handleClose}
          />

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
                <Link to="/allProducts">
                  <span>explore new sneakers</span>
                  <figure>
                    <img src={homeArrow} alt="" />
                  </figure>
                </Link>
              </div>
            </section>
          </div>
          <div class="home_page_footer">
            <div class="footer_content">
              <Link to="/impressum">impressum</Link>
            </div>
            <div class="footer_content">
              <Link to="/shipping">shipping</Link>
            </div>
            <div class="footer_content">
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
          <Link to="/impressum" class="mobile_footer_content">
            <div class="mobile_footer_field">
              <span>impressum</span>
              <small>impressum</small>
            </div>
          </Link>
          <Link to="/shipping" class="mobile_footer_content">
            <div class="mobile_footer_field">
              <span>Shipping</span>
              <small>Shipping</small>
            </div>
          </Link>
          <Link to="/contact" class="mobile_footer_content">
            <div class="mobile_footer_field">
              <span>contact</span>
              <small>contact</small>
            </div>
          </Link>
          <a class="mobile_footer_content" href="#">
            <div class="mobile_footer_field">
              <div class="insta_icon">
                <i class="fab fa-instagram"></i>
              </div>
            </div>
          </a>
        </div>
      </section>
      <ResponsiveNavbar state={state} handleClose={handleClose} />
    </div>
  );
};

export default Main;
