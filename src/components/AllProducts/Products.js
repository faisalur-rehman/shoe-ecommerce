import React, { useEffect } from "react";
import useApi from "../../hooks/useApi";
import ProductsScreen from "./AllProductsScreen";
import * as api from "../../api/api";

const Products = () => {
  const { data, request } = useApi(api.getArticles);
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (error) {
        console.log(error.response);
      }
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  return <div>{data && <ProductsScreen data={data} />}</div>;
};

export default Products;
