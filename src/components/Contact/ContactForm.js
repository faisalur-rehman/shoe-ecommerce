import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import mobileLogo from "../../image/mobile_logo.png";
import "./Contact.css";
import AppForm from "../AppForm/AppForm";

const ContactForm = ({ initialValues, handleSubmit, data, error }) => {
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

export default ContactForm;

function FormFields({ state, handleClose, handleClick, data, error }) {
  console.log("error", error);
  return (
    <div>
      <section id="greater_then_mobile">
        <section class="contact_page_section">
          <Sidebar
            state={state}
            handleClick={handleClick}
            handleClose={handleClose}
          />

          <div class="contact_footer_section">
            <div class="contact_footer">
              <div class="contact_footer_list">
                <Link to="/impressum">impressum</Link>
              </div>
              <div class="contact_footer_list">
                <Link to="/shipping">shipping</Link>
              </div>
              <div class="contact_footer_list">
                <Link to="/contact">contact</Link>
              </div>
            </div>
          </div>

          <section class="contact_us_section">
            <div class="contact_us_form">
              <h3>contact</h3>
              <div class="contact_form_info">
                <p>you want to ask us something?</p>
                <p>
                  then please fill out the contact form and we will get back to
                  you as soon as possible.
                </p>
              </div>
              <div class="contact_us_container">
                <form>
                  <div class="contact_us_fields">
                    <div class="contact_us_input_field">
                      <label>text</label>
                      <textarea></textarea>
                    </div>
                    <div class="contact_us_submit_btn">
                      <button type="submit">send</button>
                    </div>
                  </div>
                </form>
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

        <section class="contact_us_section">
          <div class="contact_us_form">
            <h3>
              contact
              <a href="index.html">
                <i class="fas fa-arrow-left"></i>
              </a>
            </h3>
            <div class="contact_form_info">
              <p>you want to ask us something?</p>
              <p>
                then please fill out the contact form and we will get back to
                you as soon as possible.
              </p>
            </div>
            <div class="contact_us_container">
              <form>
                <div class="contact_us_fields">
                  <div class="contact_us_input_field">
                    <label>text</label>
                    <textarea></textarea>
                  </div>
                  <div class="contact_us_submit_btn">
                    <button type="submit">send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
