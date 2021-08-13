import React, { useEffect } from "react";
import useApi from "../../hooks/useApi";
import RaffleScreen from "./RaffleScreen";
import * as api from "../../api/api";

const Raffle = () => {
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
  return <div>{data && <RaffleScreen data={data} />}</div>;
};

export default Raffle;
