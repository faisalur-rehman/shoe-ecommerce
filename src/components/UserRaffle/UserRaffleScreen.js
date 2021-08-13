import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const UserRaffleScreen = ({ data, handleBuy }) => {
  const [state, setstate] = useState("");
  function handleClick() {
    setstate("responsive_bar");
  }
  function handleClose() {
    setstate("");
  }
  return (
    <section id="greater_then_mobile">
      <section class="sneaker_form_page_section">
        <Sidebar
          state={state}
          handleClick={handleClick}
          handleClose={handleClose}
        />

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
                      <th>Name</th>
                      <th>Style</th>

                      <th>Release Date</th>

                      <th>Price</th>
                      <th>Winning Status</th>
                      <th>Buy</th>
                    </tr>
                    {data.raffle &&
                      data.raffle.map((raffle) => (
                        <tr>
                          <td>{raffle.firstName}</td>
                          <td>{raffle.articleId && raffle.articleId.style}</td>
                          <td>
                            {raffle.articleId &&
                              new Date(
                                raffle.articleId.releaseDate
                              ).toDateString()}
                          </td>

                          <td>
                            {raffle.articleId && raffle.articleId.price} CHF
                          </td>

                          <td>
                            {raffle.isWinner === null ? "Loser" : "Winner"}
                          </td>
                          <td onClick={() => handleBuy(raffle._id)}>Buy</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default UserRaffleScreen;
