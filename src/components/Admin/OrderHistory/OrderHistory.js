import React, { useEffect } from "react";
import useApi from "../../../hooks/useApi";
import OrderHistoryScreen from "./OrderHistoryScreen";
import * as api from "../../../api/api";
import Layout from "../../Layout/Layout";
const OrderHistory = () => {
  const { data, request } = useApi(api.orderHistory);
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (error) {}
    }
    fetchData();
  }, []);
  return <Layout>{data && <OrderHistoryScreen data={data} />}</Layout>;
};

export default OrderHistory;
