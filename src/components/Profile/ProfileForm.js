import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Profile.css";
import mobileLogo from "../../image/mobile_logo.png";
import { Link } from "react-router-dom";
import ResponsiveNavbar from "../ResponsiveNavbar/ResponsiveNavbar";
import AppForm from "../AppForm/AppForm";
import { Field } from "formik";

const ProfileForm = ({
  initialValues,
  handleSubmit,
  profileData,
  error,
  data,
}) => {
  console.log("data", data);
  console.log("error", error);
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
        profileData={profileData}
      />
    </AppForm>
  );
};

export default ProfileForm;

function FormFields({
  state,
  handleClose,
  handleClick,
  data,
  error,
  profileData,
}) {
  return (
    <div>
      <section id="greater_then_mobile">
        <section class="profile_page_section">
          <Sidebar
            state={state}
            handleClick={handleClick}
            handleClose={handleClose}
          />

          <div class="profile_nav_section">
            <div class="profile_page_list">
              <h2>{profileData.name}</h2>
            </div>
            <div class="profile_nav">
              <div class="profile_nav_list">
                <Link to="/account">setting</Link>
              </div>
              <div class="profile_nav_list">
                <Link to="/myshoes">my shoes</Link>
              </div>
              <div class="profile_nav_list">
                <Link to="/profile">profile</Link>
              </div>
            </div>
          </div>

          <section class="profile_section">
            <div class="profile_page_form">
              <h3>profile</h3>

              <div class="profile_page_container">
                <div class="profile_page_fields">
                  <div class="profile_page_input_field">
                    <label>
                      <span>name</span>
                    </label>
                    <div class="profile_fields">
                      <Field
                        className="profile_input_data_fields"
                        name="name"
                      />
                      <Link href="#">
                        <i class="fas fa-pen"></i>
                      </Link>
                    </div>
                  </div>
                  <div class="profile_page_input_field">
                    <label>
                      <span>email-address</span>
                    </label>
                    <div class="profile_fields">
                      <Field
                        className="profile_input_data_fields"
                        name="email"
                      />
                      <Link href="#">
                        <i class="fas fa-pen"></i>
                      </Link>
                    </div>
                  </div>
                  <div class="profile_page_input_field">
                    <label>
                      <span>address</span>
                    </label>
                    <div class="profile_fields">
                      <Field
                        className="profile_input_data_fields"
                        name="address"
                      />
                      <Link href="#">
                        <i class="fas fa-pen"></i>
                      </Link>
                    </div>
                  </div>

                  <div class="profile_page_input_field">
                    <label>
                      <span>password</span>
                    </label>
                    <div class="profile_fields">
                      <Field
                        className="profile_input_data_fields"
                        name="password"
                        type="password"
                      />
                      <Link href="#">
                        <i class="fas fa-pen"></i>
                      </Link>
                    </div>
                  </div>

                  {error.data ? (
                    <p style={{ color: "red" }}> {error.data.message}</p>
                  ) : (
                    <p style={{ color: "green" }}>{data && data.message}</p>
                  )}

                  <div class="profile_page_input_field">
                    <button type="submit">Update Profile</button>
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

        <div class="profile_nav_section">
          <div class="profile_page_list">
            <h2>{profileData.name}</h2>
          </div>
          <div class="profile_nav">
            <div class="profile_nav_list">
              <Link to="/account">setting</Link>
            </div>
            <div class="profile_nav_list">
              <Link to="/myshoes">my shoes</Link>
            </div>
            <div class="profile_nav_list">
              <Link to="/profile">profile</Link>
            </div>
          </div>
        </div>

        <section class="profile_section">
          <div class="profile_page_form">
            <h3>profil</h3>

            <div class="profile_page_container">
              <div class="profile_page_fields">
                <div class="profile_page_input_field">
                  <label>
                    <span>name</span>
                  </label>
                  <div class="profile_fields">
                    <Field className="profile_input_data_fields" name="name" />
                    <Link href="#">
                      <i class="fas fa-pen"></i>
                    </Link>
                  </div>
                </div>
                <div class="profile_page_input_field">
                  <label>
                    <span>email-address</span>
                  </label>
                  <div class="profile_fields">
                    <Field className="profile_input_data_fields" name="email" />
                    <Link href="#">
                      <i class="fas fa-pen"></i>
                    </Link>
                  </div>
                </div>
                <div class="profile_page_input_field">
                  <label>
                    <span>address</span>
                  </label>
                  <div class="profile_fields">
                    <Field
                      className="profile_input_data_fields"
                      name="address"
                    />
                    <Link href="#">
                      <i class="fas fa-pen"></i>
                    </Link>
                  </div>
                </div>

                <div class="profile_page_input_field">
                  <label>
                    <span>password</span>
                  </label>
                  <div class="profile_fields">
                    <Field
                      className="profile_input_data_fields"
                      name="password"
                      type="password"
                    />
                    <Link href="#">
                      <i class="fas fa-pen"></i>
                    </Link>
                  </div>
                </div>

                {error.data ? (
                  <p style={{ color: "red" }}> {error.data.message}</p>
                ) : (
                  <p style={{ color: "green" }}>{data && data.message}</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </section>
      <ResponsiveNavbar
        state={state}
        handleClick={handleClick}
        handleClose={handleClose}
      />
    </div>
  );
}
