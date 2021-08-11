import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useApi from "../../hooks/useApi";
import * as api from "../../api/api";
import AccountForm from "./AccountForm";

const initialValues = {
  deliveryAddress: "",
  billingAddress: "",
  masterCardNumber: "",
};

const Account = () => {
  const [, setValue] = useState();

  const getProfile = useApi(api.getProfile);
  const updateProfile = useApi(api.updateProfile);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getProfile.request();
        console.log("profile", data);
        initialValues.masterCardNumber = data.masterCardNumber;
        initialValues.billingAddress = data.billingAddress;
        initialValues.deliveryAddress = data.deliveryAddress;
        setValue(initialValues);
      } catch (error) {
        console.log(error.response);
      }
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  const history = useHistory();
  async function handleSubmit({ formValues }) {
    console.log("values", formValues);

    try {
      const { data } = await updateProfile.request({
        ...formValues,
      });
      console.log("data", data);

      data && history.push("/");
    } catch (error) {
      console.log(error.response);
    }
  }
  return (
    <div>
      <AccountForm
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        data={updateProfile.data}
        error={updateProfile.error}
      />
    </div>
  );
};

export default Account;
