import React, { useEffect } from "react";
import useApi from "../../hooks/useApi";
import ProductsScreen from "./AllProductsScreen";
import * as api from "../../api/api";

const Products = () => {
  const { request } = useApi(api.getArticles);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await request();
        // console.log("profile", data);
      } catch (error) {
        console.log(error.response);
      }
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <ProductsScreen />
    </div>
  );
};

export default Products;
