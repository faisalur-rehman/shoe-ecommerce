import { Field } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import mobileLogo from "../../image/mobile_logo.png";
import AppForm from "../AppForm/AppForm";
import ResponsiveNavbar from "../ResponsiveNavbar/ResponsiveNavbar";
import "./Signup.css";

const SignupForm = ({ initialValues, handleSubmit, response, error }) => {
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
        response={response}
        error={error}
      />
    </AppForm>
  );
};

export default SignupForm;

function FormFields({ state, handleClose, handleClick, response, error }) {
  return (
    <div>
      <section id="greater_then_mobile">
        <section class="sign_up_page_section">
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

          <section class="sign_up_section">
            <div class="sign_up_container">
              <div class="sign_up_form">
                <h3>sign up</h3>
                <div class="sign_up_fields">
                  <div class="sign_up_input_field">
                    <label>Full name</label>
                    <Field name="name" placeholder="" />
                  </div>
                  <div class="sign_up_input_field">
                    <label>Mail</label>
                    <Field name="email" type="email" placeholder="" />
                  </div>
                  <div class="sign_up_input_field">
                    <label>Password</label>
                    <Field name="password" type="password" placeholder="" />
                  </div>
                  <div class="sign_up_input_field">
                    <label>Confirm password</label>
                    <Field
                      name="confirmPassword"
                      type="password"
                      placeholder=""
                    />
                  </div>
                  <div class="sign_up_remember_me">
                    <Field type="checkbox" />
                    <label>I agree to the terms and conditions of RYHL</label>
                  </div>
                  <p style={{ color: "red" }}>{response}</p>
                  <p style={{ color: "red" }}>
                    {error.data && error.data.message}
                  </p>
                  <div class="sign_up_submit_btn">
                    <button type="submit">create account</button>
                  </div>
                  <div class="sign_up_submit_btn">
                    <span>already have a account?</span>
                  </div>
                  <div class="sign_up_submit_btn">
                    <Link to="/signin">Login</Link>
                  </div>
                </div>
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

        <section class="sign_up_section">
          <div class="sign_up_container">
            <div class="sign_up_form">
              <h3>sign up</h3>
              <div class="sign_up_fields">
                <div class="sign_up_input_field">
                  <label>full name</label>
                  <Field name="name" type="text" placeholder="" />
                </div>
                <div class="sign_up_input_field">
                  <label>mail</label>
                  <Field name="email" type="email" placeholder="" />
                </div>
                <div class="sign_up_input_field">
                  <label>Password</label>
                  <Field name="password" type="password" placeholder="" />
                </div>
                <div class="sign_up_input_field">
                  <label>confirm password</label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    placeholder=""
                  />
                </div>
                <div class="sign_up_remember_me">
                  <input type="checkbox" />
                  <label>i agree to the terms and conditions of RYHL</label>
                </div>
                <div class="sign_up_submit_btn">
                  <button type="submit">create account</button>
                </div>
                <div class="sign_up_submit_btn">
                  <span>already have a account?</span>
                </div>
                <div class="sign_up_submit_btn sign_up_page_login">
                  <Link to="/signin">Login</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <ResponsiveNavbar state={state} handleClose={handleClose} />
    </div>
  );
}
