import React, { useState } from "react";
import sneaker from "../../image/sneaker_one.png";
import mobileLogo from "../../image/mobile_logo.png";
import "./ProductRaffle.css";
import { Field } from "formik";
import Sidebar from "../Sidebar/Sidebar";
import AppForm from "../AppForm/AppForm";
import ResponsiveNavbar from "../ResponsiveNavbar/ResponsiveNavbar";
import { Link } from "react-router-dom";

const ProductRaffle = ({ data, initialValues, handleSubmit, error }) => {
  const [state, setstate] = useState("");
  function handleClick() {
    setstate("responsive_bar");
  }
  function handleClose() {
    setstate("");
  }
  return (
    <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
      <FormFields
        state={state}
        handleClose={handleClose}
        handleClick={handleClick}
        data={data}
        error={error}
      />
    </AppForm>
  );
};

export default ProductRaffle;

function FormFields({ state, handleClose, handleClick, data, error }) {
  console.log("error", error);
  return (
    <div>
      <section id="greater_then_mobile">
        <section class="single_sneaker_page_section">
          <Sidebar
            state={state}
            handleClick={handleClick}
            handleClose={handleClose}
          />

          <section class="single_sneaker_body_section">
            <div class="single_sneaker_container">
              <div class="single_sneaker_section_heading">
                <h3>{data.article.name}</h3>
              </div>

              <div class="select_single_sneaker">
                <img
                  class="gear"
                  src={`https://shoe-e-store-restapi.herokuapp.com/${data.article.image}`}
                  alt=""
                />
              </div>

              <div class="custom_scroll">
                <div class="scroll_section"></div>
              </div>

              <div class="select_single_sneaker_properties">
                <p>STYLE {data.article.style}</p>
                <p>{data.article.description}</p>
                <p>
                  RELEASE-DATE{"  "}
                  {new Date(data.article.releaseDate).toDateString()}
                </p>
              </div>
              <div class="select_single_sneaker_size">
                <h4>{data.article.price} CHF</h4>
              </div>

              <div class="single_raffle_complete_detail">
                <div class="raffle_size">
                  <label>Size</label>
                  <Field
                    as="select"
                    name="sizeSelected"
                    className="form-control"
                  >
                    <option value="" selected disabled>
                      Select
                    </option>

                    {data.article.availableSizes.map((size) => (
                      <>
                        <option value={size}>{size}</option>
                      </>
                    ))}
                  </Field>
                </div>
                <div class="raffle_purchase_form_input_field">
                  <label>Shipping Address</label>
                  <Field name="shippingAddress" type="text" placeholder="" />
                </div>
                <div class="raffle_purchase_form_input_field">
                  <label>Shipping State</label>
                  <Field name="shippingState" type="text" placeholder="" />
                </div>
              </div>
              <p style={{ color: "red" }}>{error.data && error.data.message}</p>
              <div class="single_sneaker_buy_button">
                <button type="submit">Add to bag</button>
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

        <section class="single_sneaker_body_section">
          <div class="single_sneaker_container">
            <div class="single_sneaker_section_heading">
              <h3>{data.article.name}</h3>
            </div>

            <div class="select_single_sneaker">
              <img
                class="gear"
                src={`https://shoe-e-store-restapi.herokuapp.com/${data.article.image}`}
                alt=""
              />
            </div>

            <div class="custom_scroll">
              <div class="scroll_section"></div>
            </div>

            <div class="select_single_sneaker_properties">
              <p>STYLE {data.article.style}</p>
              <p>{data.article.description}</p>
              <p>
                RELEASE-DATE{"  "}
                {new Date(data.article.releaseDate).toDateString()}
              </p>
            </div>
            <div class="select_single_sneaker_size">
              <h4>{data.article.price} CHF</h4>
            </div>
            <div class="single_raffle_complete_detail">
              <div class="raffle_size">
                <label>Size</label>
                <Field as="select" name="sizeSelected" className="form-control">
                  <option value="" selected disabled>
                    Select
                  </option>

                  {data.article.availableSizes.map((size) => (
                    <>
                      <option value={size}>{size}</option>
                    </>
                  ))}
                </Field>
              </div>
              <div class="raffle_purchase_form_input_field">
                <label>Shipping Address</label>
                <Field name="shippingAddress" type="text" placeholder="" />
              </div>
              <div class="raffle_purchase_form_input_field">
                <label>Shipping State</label>
                <Field name="shippingState" type="text" placeholder="" />
              </div>
            </div>
            <p style={{ color: "red" }}>{error.data && error.data.message}</p>
            <div class="single_sneaker_buy_button">
              <button type="submit">Add to bag</button>
            </div>
          </div>
        </section>
      </section>

      <ResponsiveNavbar state={state} handleClose={handleClose} />
    </div>
  );
}
