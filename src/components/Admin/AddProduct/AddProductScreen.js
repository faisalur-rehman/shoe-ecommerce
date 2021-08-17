import { Field } from "formik";
import React from "react";
import AppForm from "../../AppForm/AppForm";

function AddproductScreen({
  initialValues,
  handleSubmit,
  handleImage,
  response,
}) {
  return (
    <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
      <FormFields handleImage={handleImage} response={response} />
    </AppForm>
  );
}
export default AddproductScreen;

function FormFields({ handleImage, response }) {
  return (
    <div>
      <section
        class="profile_section"
        id="add_new_product"
        style={{ visibility: "visible", display: "block" }}
      >
        <div class="add_product_container">
          <div class="profile_section_data">
            <h2>Add New Product</h2>
            <div class="profile_form">
              <div class="profile_section_one">
                <div class="upload_pic">
                  <input
                    type="file"
                    placeholder="change"
                    onChange={handleImage}
                    required
                  />
                </div>
              </div>
              <div class="profile_section_two">
                <div class="profile_name">
                  <label>Product Name</label>
                  <Field name="name" type="text" placeholder="" required />
                </div>
              </div>

              <div class="profile_section_two">
                <div class="profile_name">
                  <label>Product Style</label>
                  <Field name="style" type="text" placeholder="" required />
                </div>
              </div>
              <div class="profile_section_two">
                <div class="profile_name">
                  <label>Product Type</label>
                  <Field as="select" name="type" required>
                    <option selected={true} disabled value="">
                      Product Type
                    </option>
                    <option value="raffle">raffle</option>
                    <option value="sneakers">sneakers</option>
                  </Field>
                </div>
              </div>
              <div class="profile_section_two">
                <div class="profile_name">
                  <label>Product Description</label>
                  <Field name="description" as="textarea" required />
                </div>
              </div>
              <div class="profile_section_two">
                <div class="profile_name">
                  <label>Release Date</label>
                  <Field
                    name="releaseDate"
                    type="date"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <div class="profile_section_two">
                <div class="profile_name">
                  <label>price</label>
                  <Field name="price" type="number" placeholder="" required />
                </div>
              </div>

              <div class="profile_section_two">
                <div class="profile_name">
                  <label>Product Size</label>
                  <div class="product_size_box">
                    <div class="size_check_box">
                      <label>
                        <Field
                          type="checkbox"
                          name="availableSizes"
                          value="6"
                        />
                        6
                      </label>
                    </div>
                    <div class="size_check_box">
                      <label>
                        <Field
                          type="checkbox"
                          name="availableSizes"
                          value="7"
                        />
                        7
                      </label>
                    </div>
                    <div class="size_check_box">
                      <label>
                        <Field
                          type="checkbox"
                          name="availableSizes"
                          value="8"
                        />
                        8
                      </label>
                    </div>
                    <div class="size_check_box">
                      <label>
                        <Field
                          type="checkbox"
                          name="availableSizes"
                          value="9"
                        />
                        9
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p style={{ color: "green" }}>{response}</p>
            <div class="profile_save_btn">
              <button type="submit">Save</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
