import React, { useEffect } from "react";
import useApi from "../../hooks/useApi";
import * as api from "../../api/api";
import RaffleFormScreen from "./RaffleFormScreen";
const RaffleForm = () => {
  const { data, request } = useApi(api.getRaffle);
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
  return (
    <div>
      <RaffleFormScreen data={data} />
    </div>
  );
};

export default RaffleForm;
