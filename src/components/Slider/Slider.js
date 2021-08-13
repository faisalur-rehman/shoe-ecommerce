import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const SliderComponent = ({ data }) => {
  console.log("data", data);
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
        <div>
          <section class="sneakers_list">
            {data.articles.map((article) => (
              <div class="single_sneaker">
                <a href="single_sneaker.html">
                  <img
                    src={`https://shoe-e-store-restapi.herokuapp.com/${article.image}`}
                    alt=""
                  />
                </a>
                <p>{article.name}</p>
                <small> {article.price}chf</small>
              </div>
            ))}
          </section>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
