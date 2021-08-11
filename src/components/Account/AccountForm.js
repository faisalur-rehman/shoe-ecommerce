import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Account.css";
import mobileLogo from "../../image/mobile_logo.png";
import { Link } from "react-router-dom";
import ResponsiveNavbar from "../ResponsiveNavbar/ResponsiveNavbar";
import AppForm from "../AppForm/AppForm";
import { Field } from "formik";

const AccountForm = ({ initialValues, handleSubmit, data, error }) => {
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

export default AccountForm;

function FormFields({ state, handleClose, handleClick, error, data }) {
  return (
    <div>
      <section id="greater_then_mobile">
        <section class="setting_page_section">
          <Sidebar
            state={state}
            handleClick={handleClick}
            handleClose={handleClose}
          />

          <div class="setting_nav_section">
            <div class="setting_page_list">
              <h2>Marius Müller</h2>
            </div>
            <div class="setting_nav">
              <div class="setting_nav_list">
                <Link to="/account">setting</Link>
              </div>
              <div class="setting_nav_list">
                <Link to="/myshoes">my shoes</Link>
              </div>
              <div class="setting_nav_list">
                <Link to="/profile">profile</Link>
              </div>
            </div>
          </div>

          <section class="setting_section">
            <div class="setting_page_form">
              <h3>Setting</h3>

              <div class="setting_page_container">
                <div class="setting_page_fields">
                  <div class="setting_page_input_field">
                    <label>
                      <span>buy information</span>
                    </label>
                    <div class="setting_fields">
                      <Field
                        className="profile_input_data_fields"
                        name="masterCardNumber"
                      />
                      <Link href="#">
                        <i class="fas fa-pen"></i>
                      </Link>
                    </div>
                  </div>

                  <div class="setting_page_input_field">
                    <label>
                      <span>bill adress</span>
                    </label>
                    <div class="setting_fields">
                      <Field
                        className="profile_input_data_fields"
                        name="billingAddress"
                        type="password"
                      />
                      <Link href="#">
                        <i class="fas fa-pen"></i>
                      </Link>
                    </div>
                  </div>

                  <div class="setting_page_input_field">
                    <label>
                      <span>delivery adress</span>
                    </label>
                    <div class="setting_fields">
                      <Field
                        className="profile_input_data_fields"
                        name="deliveryAddress"
                        type="password"
                      />
                      <Link href="#">
                        <i class="fas fa-pen"></i>
                      </Link>
                    </div>
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
            <Link to="/">
              <img src={mobileLogo} alt="" />
            </Link>
          </div>
          <div class="nav_icon">
            <a class="open_close_nav">
              <i class="fas fa-bars" onClick={handleClick}></i>
            </a>
          </div>
        </div>

        <div class="setting_nav_section">
          <div class="setting_page_list">
            <h2>Marius Müller</h2>
          </div>
          <div class="setting_nav">
            <div class="setting_nav_list">
              <Link to="/account">setting</Link>
            </div>
            <div class="setting_nav_list">
              <Link to="/myshoes">my shoes</Link>
            </div>
            <div class="setting_nav_list">
              <Link to="/profile">profile</Link>
            </div>
          </div>
        </div>

        <section class="setting_section">
          <div class="setting_page_form">
            <h3>Setting</h3>

            <div class="setting_page_container">
              <div class="setting_page_fields">
                <div class="setting_page_input_field">
                  <label>
                    <span>buy information</span>
                  </label>
                  <div class="setting_fields">
                    <p>MasterCard ends with 1445</p>
                    <a href="#">
                      <i class="fas fa-pen"></i>
                    </a>
                  </div>
                </div>

                <div class="setting_page_input_field">
                  <label>
                    <span>bill adress</span>
                  </label>
                  <div class="setting_fields">
                    <p>Arinstrasse 17, 9805 Triesen</p>
                    <a href="#">
                      <i class="fas fa-pen"></i>
                    </a>
                  </div>
                </div>

                <div class="setting_page_input_field">
                  <label>
                    <span>delivery adress</span>
                  </label>
                  <div class="setting_fields">
                    <p>Arinstrasse 17, 9805 Triesen</p>
                    <a href="#">
                      <i class="fas fa-pen"></i>
                    </a>
                  </div>
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
