import React, { useEffect, useState } from "react";
import useApi from "../../../hooks/useApi";
import UpdateproductScreen from "./UpdateProductScreen";
import * as api from "../../../api/api";
import { useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";

const initialValues = {
  name: "",
  description: "",
  style: "",
  type: "",
  availableSizes: [],
  releaseDate: "",
  price: "",
};

const UpdateProduct = () => {
  const [, setValue] = useState();
  const { id } = useParams();
  const { request } = useApi(api.getSingleArticle);
  const updateArticles = useApi(api.updateArticles);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await request({ articleId: id });
        initialValues.name = data.article.name;
        initialValues.description = data.article.description;
        initialValues.style = data.article.style;
        initialValues.type = data.article.type;
        initialValues.releaseDate = new Date(
          data.article.releaseDate
        ).toDateString();
        initialValues.price = data.article.price;

        setValue(initialValues);
        console.log("datra", data);
      } catch (error) {}
    }
    fetchData();
  }, []);
  async function handleSubmit({ formValues }) {
    console.log("form", formValues);
    try {
      await updateArticles.request({ ...formValues, articleId: id });
    } catch (_) {}
  }
  return (
    <Layout>
      <UpdateproductScreen
        initialValues={initialValues}
        handleSubmit={handleSubmit}
      />
    </Layout>
  );
};

export default UpdateProduct;
