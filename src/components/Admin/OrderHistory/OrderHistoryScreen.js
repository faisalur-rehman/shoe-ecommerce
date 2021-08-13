import React from "react";

function OrderHistoryScreen({ data }) {
  console.log("data", data);
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
                  {data.orderhistory.map((history) => (
                    <tr>
                      <td>{history.userId.name}</td>
                      <td>{history.userId.email}</td>
                      <td>{history.articleId.name}</td>
                      <td>{history.shippingAddress}</td>
                      <td>{history.totalPrice}</td>
                      <td>{history.isPaid ? "Paid" : "Not Paid"}</td>
                    </tr>
                  ))}
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
