import React, { useState } from "react";
import useApi from "../../hooks/useApi";
import SignupForm from "./SignupForm";
import * as api from "../../api/api";
import { useHistory } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
  name: "",
};

const Signup = () => {
  const [response, setResponse] = useState("");
  const { error, request } = useApi(api.signup);
  const history = useHistory();
  async function handleSubmit({ formValues }) {
    console.log("values", formValues);
    if (formValues.password !== formValues.confirmPassword) {
      setResponse("Password Does not match");
    } else {
      try {
        const data = await request({
          ...formValues,
        });
        console.log("data", data);
        data && history.push("/signin");
      } catch (error) {
        console.log(error.response);
      }
      setResponse("");
    }
  }
  console.log("error", error);
  return (
    <div>
      <SignupForm
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        response={response}
        error={error}
      />
    </div>
  );
};

export default Signup;
