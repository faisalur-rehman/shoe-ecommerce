import React, { useEffect } from "react";
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
};

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

  function handleSubmit({ formValues }) {
    console.log(formValues);
  }

  return (
    <div>
      <RaffleFormScreen
        data={data}
        initialValues={initialValues}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default RaffleForm;
