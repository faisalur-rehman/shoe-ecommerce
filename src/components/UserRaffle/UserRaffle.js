import React, { useEffect } from "react";
import useApi from "../../hooks/useApi";
import UserRaffleScreen from "./UserRaffleScreen";
import * as api from "../../api/api";
import { useHistory } from "react-router-dom";

const UserRaffle = () => {
  const { data, request } = useApi(api.getAllRaffleUser);
  const declareWinner = useApi(api.createPaymentIntent);
  const history = useHistory();

  // const deleteArticle = useApi(api.deleteArticle);
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (error) {}
    }
    fetchData();
  }, []);

  async function handleBuy(id) {
    try {
      const { data } = await declareWinner.request({ raffleId: id });
      console.log("data", data);
      localStorage.setItem("cs", data.client_secret);
      history.push(`/stripe/${id}`);
      //   window.location.reload();
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <div>{data && <UserRaffleScreen data={data} handleBuy={handleBuy} />}</div>
  );
};

export default UserRaffle;
