import React from "react";
import ContactForm from "./ContactForm";
import * as api from "../../api/api";
import useApi from "../../hooks/useApi";

const initialValues = {
  message: "",
};

const Contact = () => {
  const { data, error, request } = useApi(api.addContactMessage);
  async function handleSubmit({ formValues }) {
    console.log("form", formValues);
    try {
      await request({ ...formValues });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <ContactForm
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        data={data}
        error={error}
      />
    </div>
  );
};

export default Contact;
