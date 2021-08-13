import React from "react";
function UpdateProductScreen() {
  return (
    <>
      <section class="profile_section" id="admin_edit_new_product">
        <div class="add_product_container">
          <div class="cancle_edit_product_page">
            <a>
              <i class="fas fa-times"></i>
              <span>cancle</span>
            </a>
          </div>
          <div class="profile_section_data">
            <h2>Edit Product</h2>

            <form>
              <div class="profile_form">
                <div class="profile_section_one">
                  <figure>
                    <img src="" alt="product_Img" />
                  </figure>
                  <div class="upload_pic">
                    <input type="file" placeholder="change" />
                  </div>
                </div>
                <div class="profile_section_two">
                  <div class="profile_name">
                    <label>Product Name</label>
                    <input type="text" value="" placeholder="" />
                  </div>
                </div>

                <div class="profile_section_two">
                  <div class="profile_name">
                    <label>Product Style</label>
                    <input type="text" value="" placeholder="" />
                  </div>
                </div>
                <div class="profile_section_two">
                  <div class="profile_name">
                    <label>Product Type</label>
                    <select>
                      <option selected disabled>
                        Product Type
                      </option>
                      <option>raffle</option>
                      <option>sneakers</option>
                    </select>
                  </div>
                </div>
                <div class="profile_section_two">
                  <div class="profile_name">
                    <label>Product Description</label>
                    <textarea name=""></textarea>
                  </div>
                </div>
                <div class="profile_section_two">
                  <div class="profile_name">
                    <label>Release Date</label>
                    <input type="date" value="" placeholder="" />
                  </div>
                </div>
                <div class="profile_section_two">
                  <div class="profile_name">
                    <label>price</label>
                    <input type="number" value="" placeholder="" />
                  </div>
                </div>

                <div class="profile_section_two">
                  <div class="profile_name">
                    <label>Product Size</label>
                    <div class="product_size_box">
                      <div class="size_check_box">
                        <label>6</label>
                        <input type="checkbox" />
                      </div>
                      <div class="size_check_box">
                        <label>7</label>
                        <input type="checkbox" />
                      </div>
                      <div class="size_check_box">
                        <label>8</label>
                        <input type="checkbox" />
                      </div>
                      <div class="size_check_box">
                        <label>9</label>
                        <input type="checkbox" />
                      </div>
                      <div class="size_check_box">
                        <label>10</label>
                        <input type="checkbox" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="profile_save_btn">
                <button>Save</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default UpdateProductScreen;
