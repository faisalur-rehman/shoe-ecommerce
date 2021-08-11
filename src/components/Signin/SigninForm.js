import React, { useState } from "react";
import "./Signin.css";
import mobileLogo from "../../image/mobile_logo.png";
import AppForm from "../AppForm/AppForm";
import ResponsiveNavbar from "../ResponsiveNavbar/ResponsiveNavbar";
import { Field } from "formik";
import { Link } from "react-router-dom";

const SigninForm = ({ initialValues, handleSubmit, response, error }) => {
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

export default SigninForm;

function FormFields({ state, handleClose, handleClick, response, error }) {
  return (
    <div>
      <section id="greater_then_mobile">
        <section class="login_page_section">
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

          <section class="login_section">
            <div class="login_container">
              <div class="login_form">
                <h3>Login</h3>
                <div class="login_fields">
                  <div class="input_field">
                    <label>mail</label>
                    <Field name="email" type="email" placeholder="" />
                  </div>
                  <div class="input_field">
                    <label>Password</label>
                    <Field name="password" type="password" placeholder="" />
                  </div>
                  <div class="forget_password">
                    <span>forgot password?</span>
                  </div>
                  <p style={{ color: "red" }}>{response}</p>
                  <p style={{ color: "red" }}>
                    {error.data && error.data.message}
                  </p>
                  <div class="submit_btn">
                    <button type="submit">Login</button>
                  </div>
                  <div class="submit_btn">
                    <span>new to ryhl?</span>
                  </div>
                  <div class="submit_btn">
                    <a href="sign_up.html">create account</a>
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

        <section class="login_section">
          <div class="login_container">
            <div class="login_form">
              <h3>Login</h3>
              <div class="login_fields">
                <div class="input_field">
                  <label>mail</label>
                  <Field name="email" type="email" placeholder="" />
                </div>
                <div class="input_field">
                  <label>Password</label>
                  <Field name="password" type="password" placeholder="" />
                </div>
                <div class="forget_password">
                  <span>forgot password?</span>
                </div>
                <div class="submit_btn">
                  <button type="submit">Login</button>
                </div>
                <div class="submit_btn">
                  <span>new to ryhl?</span>
                </div>
                <div class="submit_btn">
                  <Link to="signup">create account</Link>
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
