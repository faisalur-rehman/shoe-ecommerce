import axios from "axios";
import React from "react";
import { useState } from "react";
import AddproductScreen from "./AddProductScreen";

const initialValues = {
  name: "",
  description: "",
  style: "",
  type: "",
  availableSizes: [],
  releaseDate: "",
  price: "",
};

const AddProduct = () => {
  const [file, setFile] = useState();
  const [response, setResponse] = useState("");
  async function handleSubmit({ formValues }) {
    let formData = new FormData();
    console.log("form", formValues);
    formData.append("price", formValues.price);
    formData.append("image", file);
    formData.append("releaseDate", formValues.releaseDate);
    formData.append("description", formValues.description);
    formData.append("availableSizes", formValues.availableSizes);
    formData.append("type", formValues.type);
    formData.append("style", formValues.style);
    formData.append("name", formValues.name);
    try {
      const { data } = await axios.post(
        `http://localhost:8000/article/add`,
        formData,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": `multipart/form-data`,
          },
        }
      );
      console.log(data);
      setResponse(data.message);
    } catch (error) {
      console.log(error.response);
    }
  }

  function handleImage({ target }) {
    setFile(target.files[0]);
  }
  return (
    <div>
      <AddproductScreen
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        handleImage={handleImage}
        response={response}
      />
    </div>
  );
};

export default AddProduct;
