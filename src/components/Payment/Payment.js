import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PaymentScreen from "./PaymentScreen";
import * as api from "../../api/api";
import useApi from "../../hooks/useApi";

const Payment = () => {
  const { id } = useParams();
  const singleOrder = useApi(api.getSingleOrder);
  useEffect(() => {
    async function fetchData() {
      try {
        await singleOrder.request({ orderHistoryId: id });
      } catch (_) {}
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      {singleOrder.data && <PaymentScreen data={singleOrder.data} id={id} />}
    </div>
  );
};

export default Payment;
