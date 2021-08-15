import React, { useEffect } from "react";
import useApi from "../../hooks/useApi";
import ProductRaffle from "./ProductRaffle";
import * as api from "../../api/api";
import { useHistory, useParams } from "react-router-dom";

const initialValues = {
  articleId: "",
  sizeSelected: "",
  shippingAddress: "",
  shippingState: "",
};

const SingleProduct = () => {
  const { id } = useParams();
  const getArticle = useApi(api.getSingleArticle);
  const createOrder = useApi(api.createOrder);
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/signin");
    }
    async function fetchData() {
      try {
        await getArticle.request({ articleId: id });
      } catch (_) {}
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  async function handleSubmit({ formValues }) {
    console.log("form", formValues);
    try {
      const { data } = await createOrder.request({
        ...formValues,
        articleId: id,
      });
      console.log("data", data.client_secret);
      localStorage.setItem("cs", data.client_secret);
      history.push(`/payment/${data.newOrderHistory._id}`);
    } catch (_) {}
  }
  return (
    <div>
      {getArticle.data && (
        <ProductRaffle
          data={getArticle.data}
          initialValues={initialValues}
          handleSubmit={handleSubmit}
          error={createOrder.error}
        />
      )}
    </div>
  );
};

export default SingleProduct;
