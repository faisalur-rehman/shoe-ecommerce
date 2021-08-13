import React from "react";
import { useHistory } from "react-router-dom";

function AllProductScreen({ data, handleDelete }) {
  const history = useHistory();
  console.log("data", data);
  function handleEdit(id) {
    history.push(`/update-product/${id}`);
  }
  return (
    <>
      <section
        class="purchase_product_history"
        id="all_product_listing"
        style={{ display: "block", visibility: "visible" }}
      >
        <div class="admin_container">
          <div class="purchase_product_history_table">
            <strong>Product Listing:</strong>
            <div class="table_wrapper_scroll_x my_custom_scrollbar">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Style</th>
                    <th>Type</th>
                    <th>size</th>
                    <th>Release Date</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                  {data.articles.map((article) => (
                    <tr>
                      <td>{article.name}</td>
                      <td>{article.style}</td>
                      <td>{article.type}</td>
                      <td>{article.availableSizes}</td>
                      <td>{new Date(article.releaseDate).toDateString()}</td>
                      <td>{article.description}</td>
                      <td>{article.price}</td>
                      <td>
                        <a>
                          <i
                            class="fas fa-edit"
                            onClick={() => handleEdit(article._id)}
                          ></i>
                        </a>
                      </td>
                      <td>
                        <a>
                          <i
                            class="fas fa-trash-alt"
                            onClick={() => handleDelete(article._id)}
                          ></i>
                        </a>
                      </td>
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
export default AllProductScreen;
