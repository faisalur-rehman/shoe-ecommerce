import React from "react";
import Slider from "react-slick";
import sneaker from "../../image/sneaker_one.png";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
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
        <div>
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
      </Slider>
    </div>
  );
};

export default SliderComponent;
