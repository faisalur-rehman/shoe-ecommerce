import React from "react";

function OrderHistoryScreen() {
  return (
    <>
      <section class="purchase_product_history" id="purchase_product_history">
        <div class="admin_container">
          <div class="purchase_product_history_table">
            <strong>Order History:</strong>
            <div class="table_wrapper_scroll_x my_custom_scrollbar">
              <table>
                <tbody>
                  <tr>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Article Name</th>
                    <th>Shipping Address</th>
                    <th>Total Price</th>
                    <th>Payment Status</th>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
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
export default OrderHistoryScreen;
