import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import ProfileForm from "./ProfileForm";
import * as api from "../../api/api";

const initialValues = {
  name: "",
  email: "",
  password: "",
  address: "",
};

const Profile = () => {
  const [, setValue] = useState();
  const getProfile = useApi(api.getProfile);
  const updateProfile = useApi(api.updateProfile);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getProfile.request();
        console.log("profile", data);
        initialValues.email = data.email;
        initialValues.name = data.name;
        initialValues.address = data.address;
        setValue(initialValues);
      } catch (error) {
        console.log(error.response);
      }
    }
    fetchData();
    //eslint-disable-next-line
  }, []);

  async function handleSubmit({ formValues }) {
    console.log("values", formValues);

    try {
      await updateProfile.request({
        ...formValues,
      });
      // console.log("update profile", data);
      // data && history.push("/");
    } catch (error) {
      console.log(error.response);
    }
  }
  return (
    <div>
      <ProfileForm
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        data={updateProfile.data}
        error={updateProfile.error}
      />
    </div>
  );
};

export default Profile;
