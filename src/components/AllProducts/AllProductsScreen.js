import React, { useState } from "react";
import { Link } from "react-router-dom";
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

          {/* <SliderComponent data={data} /> */}
          <section class="sneaker_form_body_section">
            <div class="sneaker_form_container">
              <div class="sneaker_section_heading">
                <h3>sneakers</h3>
              </div>
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <section class="sneakers_list">
                      {data.articles.map((article) => (
                        <div class="single_sneaker">
                          <Link to={`/raffle-product/${article._id}`}>
                            <img
                              src={`https://shoe-e-store-restapi.herokuapp.com/${article.image}`}
                              alt=""
                            />
                          </Link>
                          <p>{article.name}</p>
                          <small> {article.price}chf</small>
                        </div>
                      ))}
                    </section>
                  </div>
                  <div class="carousel-item">
                    <section class="sneakers_list">
                      {data.articles.map((article) => (
                        <div class="single_sneaker">
                          <Link to={`/raffle-product/${article._id}`}>
                            <img
                              src={`https://shoe-e-store-restapi.herokuapp.com/${article.image}`}
                              alt=""
                            />
                          </Link>
                          <p>{article.name}</p>
                          <small> {article.price}chf</small>
                        </div>
                      ))}
                    </section>
                  </div>
                </div>
                <div class="next_btn">
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span class="carousel-control-next-icon" aria-hidden="true">
                      <i class="fas fa-arrow-right"></i>
                    </span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
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

        {/* <SliderComponent data={data} /> */}
        <section class="sneaker_form_body_section">
          <div class="sneaker_form_container">
            <div class="sneaker_section_heading">
              <h3>sneakers</h3>
            </div>
            <div id="my-carousel" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <section class="sneakers_list">
                    {data.articles.map((article) => (
                      <div class="single_sneaker">
                        <Link to={`/raffle-product/${article._id}`}>
                          <img
                            src={`https://shoe-e-store-restapi.herokuapp.com/${article.image}`}
                            alt=""
                          />
                        </Link>
                        <p>{article.name}</p>
                        <small> {article.price}chf</small>
                      </div>
                    ))}
                  </section>
                </div>
                <div class="carousel-item">
                  <section class="sneakers_list">
                    {data.articles.map((article) => (
                      <div class="single_sneaker">
                        <Link to={`/raffle-product/${article._id}`}>
                          <img
                            src={`https://shoe-e-store-restapi.herokuapp.com/${article.image}`}
                            alt=""
                          />
                        </Link>
                        <p>{article.name}</p>
                        <small> {article.price}chf</small>
                      </div>
                    ))}
                  </section>
                </div>
              </div>
              <div class="next_btn">
                <a
                  class="carousel-control-next"
                  href="#my-carousel"
                  role="button"
                  data-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
            </div>
          </div>
        </section>
      </section>
      <ResponsiveNavbar state={state} handleClose={handleClose} />
    </div>
  );
};

export default ProductsScreen;
