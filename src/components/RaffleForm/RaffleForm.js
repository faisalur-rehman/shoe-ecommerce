import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import * as api from "../../api/api";
import RaffleFormScreen from "./RaffleFormScreen";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  size: "",
  address: "",
  postCode: "",
  city: "",
  country: "",
  gender: "",
  instagram: "",
};

const RaffleForm = () => {
  const [response, setResponse] = useState("");
  const { data, request } = useApi(api.getRaffle);
  const fillRaffle = useApi(api.fillRaffle);
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

  async function handleSubmit({ formValues }) {
    console.log(formValues);
    try {
      const response = await fillRaffle.request({
        ...formValues,
        articleId: data.articles[0]._id,
      });
      setResponse(response.data.message);
    } catch (_) {}
  }

  return (
    <div>
      {data && (
        <RaffleFormScreen
          data={data}
          initialValues={initialValues}
          handleSubmit={handleSubmit}
          error={fillRaffle.error}
          response={response}
        />
      )}
    </div>
  );
};

export default RaffleForm;
