import React, { useEffect } from "react";
import useApi from "../../hooks/useApi";
import RaffleScreen from "./RaffleScreen";
import * as api from "../../api/api";
import { useHistory } from "react-router-dom";

const Raffle = () => {
  const { data, request } = useApi(api.getRaffle);
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/signin");
    }
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
