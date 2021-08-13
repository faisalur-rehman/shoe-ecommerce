import React from "react";
import "../../Admin/Header/AdminStyle.css";
function ContactMessageScreen() {
  return (
    <>
      <section
        class="purchase_product_history"
        id="contact_history"
        style={{ visibility: "visible", display: "block" }}
      >
        <div class="admin_container">
          <div class="purchase_product_history_table">
            <strong>Contact Messages:</strong>
            <div class="table_wrapper_scroll_x my_custom_scrollbar">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                  </tr>
                  <tr>
                    <td>this</td>
                    <td></td>
                    <td></td>
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
export default ContactMessageScreen;
