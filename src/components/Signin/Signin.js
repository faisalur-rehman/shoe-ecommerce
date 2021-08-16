import React from "react";
import { useHistory } from "react-router-dom";
import useApi from "../../hooks/useApi";
import * as api from "../../api/api";
import SigninForm from "./SigninForm";

const initialValues = {
  email: "",
  password: "",
};

const Signin = () => {
  const { error, request } = useApi(api.loginUser);
  const history = useHistory();
  async function handleSubmit({ formValues }) {
    console.log("values", formValues);

    try {
      const { data } = await request({
        ...formValues,
      });
      console.log("data", data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("isAdmin", data.isAdmin);
      data.isAdmin
        ? history.push("/add-product")
        : history.push("/allProducts");
    } catch (error) {
      console.log(error.response);
    }
  }
  return (
    <div>
      <SigninForm
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        error={error}
      />
    </div>
  );
};

export default Signin;
