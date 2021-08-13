import React, { useEffect } from "react";
import useApi from "../../../hooks/useApi";
import OrderHistoryScreen from "./OrderHistoryScreen";
import * as api from "../../../api/api";
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
  return <div>{data && <OrderHistoryScreen data={data} />}</div>;
};

export default OrderHistory;
