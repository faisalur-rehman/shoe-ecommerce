import React, { useState } from "react";
import mobileLogo from "../../image/mobile_logo.png";
import sneaker from "../../image/sneaker_one.png";
import Sidebar from "../Sidebar/Sidebar";
import SliderComponent from "../Slider/Slider";
import "./AllProducts.css";

const AllProducts = () => {
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
                <h3>sneakers</h3>
              </div>
              <SliderComponent />

              {/* <div
                id="carouselExampleControls"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <section class="sneakers_list">
                      <div class="single_sneaker">
                        <a href="single_sneaker.html">
                          <img src={sneaker} alt="" />
                        </a>
                        <p>Jordan 1 Retro High Dior</p>
                        <small> 7.800 chf</small>
                      </div>
                      <div class="single_sneaker">
                        <a href="single_sneaker.html">
                          <img src={sneaker} alt="" />
                        </a>
                        <p>Jordan 1 Retro High Dior</p>
                        <small> 7.800 chf</small>
                      </div>
                      <div class="single_sneaker">
                        <a href="single_sneaker.html">
                          <img src={sneaker} alt="" />
                        </a>
                        <p>Jordan 1 Retro High Dior</p>
                        <small> 7.800 chf</small>
                      </div>
                      <div class="single_sneaker">
                        <a href="single_sneaker.html">
                          <img src={sneaker} alt="" />
                        </a>
                        <p>Jordan 1 Retro High Dior</p>
                        <small> 7.800 chf</small>
                      </div>
                      <div class="single_sneaker">
                        <a href="single_sneaker.html">
                          <img src={sneaker} alt="" />
                        </a>
                        <p>Jordan 1 Retro High Dior</p>
                        <small> 7.800 chf</small>
                      </div>
                      <div class="single_sneaker">
                        <a href="single_sneaker.html">
                          <img src={sneaker} alt="" />
                        </a>
                        <p>Jordan 1 Retro High Dior</p>
                        <small> 7.800 chf</small>
                      </div>
                    </section>
                  </div>
                  <div class="carousel-item">
                    <section class="sneakers_list">
                      <div class="single_sneaker">
                        <a href="single_sneaker.html">
                          <img src={sneaker} alt="" />
                        </a>
                        <p>Jordan 1 Retro High Dior</p>
                        <small> 7.800 chf</small>
                      </div>
                      <div class="single_sneaker">
                        <a href="single_sneaker.html">
                          <img src={sneaker} alt="" />
                        </a>
                        <p>Jordan 1 Retro High Dior</p>
                        <small> 7.800 chf</small>
                      </div>
                      <div class="single_sneaker">
                        <a href="single_sneaker.html">
                          <img src={sneaker} alt="" />
                        </a>
                        <p>Jordan 1 Retro High Dior</p>
                        <small> 7.800 chf</small>
                      </div>
                      <div class="single_sneaker">
                        <a href="single_sneaker.html">
                          <img src={sneaker} alt="" />
                        </a>
                        <p>Jordan 1 Retro High Dior</p>
                        <small> 7.800 chf</small>
                      </div>
                      <div class="single_sneaker">
                        <a href="single_sneaker.html">
                          <img src={sneaker} alt="" />
                        </a>
                        <p>Jordan 1 Retro High Dior</p>
                        <small> 7.800 chf</small>
                      </div>
                      <div class="single_sneaker">
                        <a href="single_sneaker.html">
                          <img src={sneaker} alt="" />
                        </a>
                        <p>Jordan 1 Retro High Dior</p>
                        <small> 7.800 chf</small>
                      </div>
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
              </div> */}
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
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <section class="sneakers_list">
                    <div class="single_sneaker">
                      <a href="single_sneaker.html">
                        <img src={sneaker} alt="" />
                      </a>
                      <p>Jordan 1 Retro High Dior</p>
                      <small> 7.800 chf</small>
                    </div>
                    <div class="single_sneaker">
                      <a href="single_sneaker.html">
                        <img src={sneaker} alt="" />
                      </a>
                      <p>Jordan 1 Retro High Dior</p>
                      <small> 7.800 chf</small>
                    </div>
                    <div class="single_sneaker">
                      <a href="single_sneaker.html">
                        <img src={sneaker} alt="" />
                      </a>
                      <p>Jordan 1 Retro High Dior</p>
                      <small> 7.800 chf</small>
                    </div>
                    <div class="single_sneaker">
                      <a href="single_sneaker.html">
                        <img src={sneaker} alt="" />
                      </a>
                      <p>Jordan 1 Retro High Dior</p>
                      <small> 7.800 chf</small>
                    </div>
                    <div class="single_sneaker">
                      <a href="single_sneaker.html">
                        <img src={sneaker} alt="" />
                      </a>
                      <p>Jordan 1 Retro High Dior</p>
                      <small> 7.800 chf</small>
                    </div>
                    <div class="single_sneaker">
                      <a href="single_sneaker.html">
                        <img src={sneaker} alt="" />
                      </a>
                      <p>Jordan 1 Retro High Dior</p>
                      <small> 7.800 chf</small>
                    </div>
                  </section>
                </div>
                <div class="carousel-item">
                  <section class="sneakers_list">
                    <div class="single_sneaker">
                      <a href="single_sneaker.html">
                        <img src={sneaker} alt="" />
                      </a>
                      <p>Jordan 1 Retro High Dior</p>
                      <small> 7.800 chf</small>
                    </div>
                    <div class="single_sneaker">
                      <a href="single_sneaker.html">
                        <img src={sneaker} alt="" />
                      </a>
                      <p>Jordan 1 Retro High Dior</p>
                      <small> 7.800 chf</small>
                    </div>
                    <div class="single_sneaker">
                      <a href="single_sneaker.html">
                        <img src={sneaker} alt="" />
                      </a>
                      <p>Jordan 1 Retro High Dior</p>
                      <small> 7.800 chf</small>
                    </div>
                    <div class="single_sneaker">
                      <a href="single_sneaker.html">
                        <img src={sneaker} alt="" />
                      </a>
                      <p>Jordan 1 Retro High Dior</p>
                      <small> 7.800 chf</small>
                    </div>
                    <div class="single_sneaker">
                      <a href="single_sneaker.html">
                        <img src={sneaker} alt="" />
                      </a>
                      <p>Jordan 1 Retro High Dior</p>
                      <small> 7.800 chf</small>
                    </div>
                    <div class="single_sneaker">
                      <a href="single_sneaker.html">
                        <img src={sneaker} alt="" />
                      </a>
                      <p>Jordan 1 Retro High Dior</p>
                      <small> 7.800 chf</small>
                    </div>
                  </section>
                </div>
              </div>
              <div class="next_btn">
                <a
                  class="carousel-control-next"
                  href="#/#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* <section class={`responsive_nav_bar ${state}`}>
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
      </section> */}
    </div>
  );
};

export default AllProducts;
