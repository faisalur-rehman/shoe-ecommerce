import React from "react";

function RaffleProductScreen() {
  return (
    <>
      <section
        class="purchase_product_history"
        id="all_raffle_product_listing"
        style={{ visibility: "visible", display: "block" }}
      >
        <div class="admin_container">
          <div class="purchase_product_history_table">
            <strong>Raffle Product Listing:</strong>
            <div class="table_wrapper_scroll_x my_custom_scrollbar">
              <table>
                <tbody>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Style</th>
                    <th>Type</th>
                    <th>size</th>
                    <th>Release Date</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Winning Status</th>
                  </tr>
                  <tr>
                    <td>
                      <img
                        class="admin_page_product_img"
                        src="image/sneaker_one.png"
                        alt="image"
                      />
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <select class="admin_size_selection">
                        <option>4 </option>
                      </select>
                    </td>
                    <td></td>
                    <td>
                      <textarea class="admin_textarea"></textarea>
                    </td>
                    <td></td>
                    <td>
                      <select class="admin_size_selection">
                        <option selected="">Losser</option>
                        <option>Winner</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default RaffleProductScreen;
