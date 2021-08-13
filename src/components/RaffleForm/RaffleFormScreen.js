import React, { useState } from "react";
import "./RaffleForm.css";
import mobileLogo from "../../image/mobile_logo.png";
import { Field } from "formik";
import ResponsiveNavbar from "../ResponsiveNavbar/ResponsiveNavbar";
import AppForm from "../AppForm/AppForm";

const RaffleFormScreen = ({ data, initialValues, handleSubmit, error }) => {
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
        error={error}
        data={data}
      />
    </AppForm>
  );
};

export default RaffleFormScreen;

function FormFields({ state, handleClose, handleClick, data, error }) {
  console.log("error", error);
  return (
    <div>
      <section id="greater_then_mobile">
        <section class="raffle_form_page_section">
          <header>
            <div class="nav_plus_shooping">
              <div class="nav_icon">
                <a class="open_close_nav">
                  <i class="fas fa-bars" onClick={handleClick}></i>
                </a>
              </div>
              <div class="shopping_cart">
                <i class="fas fa-shopping-bag"></i>
              </div>
            </div>
            <div class="logo">
              <span>REACH YOUR</span>
              <span class="logo_middle_part">
                <a href="index.html">
                  <small>R</small>
                  <small>Y</small>
                  <small>H</small>
                  <small>L</small>
                </a>
              </span>
              <span>HIGHEST LEVEL</span>
            </div>
            <div class="insta_icon">
              <i class="fab fa-instagram"></i>
            </div>
          </header>

          {data && data.articles.length > 0 && (
            <section class="raffle_form_body_section">
              <div class="raffle_form_container">
                <div class="raffle_section_heading">
                  <h3>{data.articles[0].description}</h3>
                </div>
                <div class="raffle_form_img_detail">
                  <figure>
                    <img
                      src={`http://localhost:8000/${data.articles[0].image}`}
                      alt=""
                    />
                  </figure>
                </div>

                <div class="raffle_product_info">
                  <h3>RAFFLE INFORMATION & CONDITION</h3>

                  <div class="raffle_product_info_detail">
                    <div class="raffle_product_info_single_detail">
                      <p>
                        Join our raffle for the chance to buy one of the
                        upcoming NIKE DUNK HIGH «SYRACUSE» (DD1869-100).
                      </p>
                    </div>
                    <div class="raffle_product_info_single_detail">
                      <p>
                        Release:{" "}
                        {new Date(data.articles[0].releaseDate).toDateString()}
                      </p>
                      <p>
                        Raffle closing date: Sunday, March 7th 2021 – 8 PM CET
                      </p>
                    </div>
                    <div class="raffle_product_info_single_detail">
                      <p>How it works:</p>
                    </div>
                    <div class="raffle_product_info_single_detail">
                      <p>
                        1) follow @titoloshop on Instagram (if you don’t follow
                        us, you will be disqualified).
                      </p>
                      <p>
                        2) like the picture of the raffle shoe on instagram.
                      </p>
                      <p>
                        3) comment the picture of the raffle shoe by tagging 3
                        people that would rock these shoes
                      </p>
                      <p>
                        4) Register now for the chance to buy the upcoming
                        Release by filling out the form below.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="raffle_purchase_form">
                  <div class="raffle_purchase_form_container">
                    <div class="raffle_purchase_form_fields">
                      <div class="raffle_purchase_form_input_field">
                        <label>first name</label>
                        <Field name="firstName" type="text" placeholder="" />
                      </div>
                      <div class="raffle_purchase_form_input_field">
                        <label>last name</label>
                        <Field name="lastName" type="text" placeholder="" />
                      </div>
                      <div class="raffle_purchase_form_input_field">
                        <label>email(paypal)</label>
                        <Field name="email" type="email" placeholder="" />
                      </div>
                      <div class="raffle_purchase_form_input_field">
                        <label>adress and house number</label>
                        <Field name="address" type="text" placeholder="" />
                      </div>
                      <div class="raffle_purchase_form_input_field">
                        <label>post code</label>
                        <Field name="postCode" type="number" placeholder="" />
                      </div>
                      <div class="raffle_purchase_form_input_field">
                        <label>city</label>
                        <Field name="city" type="text" placeholder="" />
                      </div>
                      <div class="raffle_purchase_form_input_field">
                        <label>country</label>
                        <Field name="country" type="text" placeholder="" />
                      </div>
                      <div role="group" aria-labelledby="my-radio-group">
                        <div>Gender</div>
                        <label>
                          <Field type="radio" name="gender" value="male" />
                          Male
                        </label>
                        <br />
                        <label>
                          <Field type="radio" name="gender" value="female" />
                          Female
                        </label>
                      </div>
                      <div class="">
                        <label>size</label>
                        <br />
                        <Field as="select" name="size" className="form-control">
                          <option value="" selected disabled>
                            Select
                          </option>

                          {data.articles[0].availableSizes.map((size) => (
                            <>
                              <option value={size}>{size}</option>
                            </>
                          ))}
                        </Field>
                      </div>
                      <div class="raffle_purchase_form_input_field">
                        <label>instagram account name</label>
                        <Field name="instagram" type="text" placeholder="" />
                      </div>
                      <div class="raffle_purchase_form_check_box">
                        <a href="#">terms & conditions</a>
                      </div>

                      <div class="raffle_purchase_form_check_box">
                        <Field type="checkbox" />
                        <label>i agree</label>
                      </div>
                      <div class="raffle_purchase_form_check_box">
                        <a>Marketing Permissions</a>
                      </div>
                      <div class="raffle_purchase_form_check_box">
                        <a>
                          Please select all the ways you would like to hear from
                          RYHL AG:
                        </a>
                      </div>
                      <div class="raffle_purchase_form_check_box">
                        <Field type="checkbox" />
                        <label>RYHL newsletter</label>
                      </div>
                      <div class="raffle_purchase_form_check_box">
                        <Field type="checkbox" />
                        <label>raffle information</label>
                      </div>

                      <div class="raffle_purchase_form_submit_btn">
                        <button>Subscribe</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
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

        {data && data.articles.length > 0 && (
          <section class="raffle_form_body_section">
            <div class="raffle_form_container">
              <div class="raffle_section_heading">
                <h3>{data.articles[0].description}</h3>
              </div>
              <div class="raffle_form_img_detail">
                <figure>
                  <img
                    src={`http://localhost:8000/${data.articles[0].image}`}
                    alt=""
                  />
                </figure>
              </div>

              <div class="raffle_product_info">
                <h3>RAFFLE INFORMATION & CONDITION</h3>

                <div class="raffle_product_info_detail">
                  <div class="raffle_product_info_single_detail">
                    <p>
                      Join our raffle for the chance to buy one of the upcoming
                      NIKE DUNK HIGH «SYRACUSE» (DD1869-100).
                    </p>
                  </div>
                  <div class="raffle_product_info_single_detail">
                    <p>
                      Release:{" "}
                      {new Date(data.articles[0].releaseDate).toDateString()}
                    </p>
                    <p>
                      Raffle closing date: Sunday, March 7th 2021 – 8 PM CET
                    </p>
                  </div>
                  <div class="raffle_product_info_single_detail">
                    <p>How it works:</p>
                  </div>
                  <div class="raffle_product_info_single_detail">
                    <p>
                      1) follow @titoloshop on Instagram (if you don’t follow
                      us, you will be disqualified).
                    </p>
                    <p>2) like the picture of the raffle shoe on instagram.</p>
                    <p>
                      3) comment the picture of the raffle shoe by tagging 3
                      people that would rock these shoes
                    </p>
                    <p>
                      4) Register now for the chance to buy the upcoming Release
                      by filling out the form below.
                    </p>
                  </div>
                </div>
              </div>
              <div class="raffle_purchase_form">
                <div class="raffle_purchase_form_container">
                  <div class="raffle_purchase_form_fields">
                    <div class="raffle_purchase_form_input_field">
                      <label>first name</label>
                      <Field name="firstName" type="text" placeholder="" />
                    </div>
                    <div class="raffle_purchase_form_input_field">
                      <label>last name</label>
                      <Field name="lastName" type="text" placeholder="" />
                    </div>
                    <div class="raffle_purchase_form_input_field">
                      <label>email(paypal)</label>
                      <Field name="email" type="email" placeholder="" />
                    </div>
                    <div class="raffle_purchase_form_input_field">
                      <label>adress and house number</label>
                      <Field name="address" type="text" placeholder="" />
                    </div>
                    <div class="raffle_purchase_form_input_field">
                      <label>post code</label>
                      <Field name="postCode" type="number" placeholder="" />
                    </div>
                    <div class="raffle_purchase_form_input_field">
                      <label>city</label>
                      <Field name="city" type="text" placeholder="" />
                    </div>
                    <div class="raffle_purchase_form_input_field">
                      <label>country</label>
                      <Field name="country" type="text" placeholder="" />
                    </div>
                    <div class="">
                      <label>Gender</label>
                      <br />
                      <label>
                        <Field type="radio" name="gender" value="male" />
                        Male
                      </label>
                      <br />
                      <label>
                        <Field type="radio" name="gender" value="female" />
                        Female
                      </label>
                    </div>
                    <div class="">
                      <label>size</label>
                      <br />
                      <Field as="select" name="size" className="form-control">
                        <option value="" selected disabled>
                          Select
                        </option>

                        {data.articles[0].availableSizes.map((size) => (
                          <>
                            <option value={size}>{size}</option>
                          </>
                        ))}
                      </Field>
                    </div>
                    <div class="raffle_purchase_form_input_field">
                      <label>instagram account name</label>
                      <Field name="instagram" type="text" placeholder="" />
                    </div>
                    <div class="raffle_purchase_form_check_box">
                      <a href="#">terms & conditions</a>
                    </div>

                    <div class="raffle_purchase_form_check_box">
                      <Field type="checkbox" />
                      <label>i agree</label>
                    </div>
                    <div class="raffle_purchase_form_check_box">
                      <a>Marketing Permissions</a>
                    </div>
                    <div class="raffle_purchase_form_check_box">
                      <a>
                        Please select all the ways you would like to hear from
                        RYHL AG:
                      </a>
                    </div>
                    <div class="raffle_purchase_form_check_box">
                      <Field type="checkbox" />
                      <label>RYHL newsletter</label>
                    </div>
                    <div class="raffle_purchase_form_check_box">
                      <Field type="checkbox" />
                      <label>raffle information</label>
                    </div>

                    <div class="raffle_purchase_form_submit_btn">
                      <button>subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </section>

      <ResponsiveNavbar state={state} handleClose={handleClose} />
    </div>
  );
}
