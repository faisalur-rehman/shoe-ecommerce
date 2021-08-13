import React, { useEffect } from "react";
import useApi from "../../../hooks/useApi";
import ContactMessageScreen from "./ContactMessageScreen";
import * as api from "../../../api/api";
const ContactMessage = () => {
  const { data, request } = useApi(api.allContactMessages);
  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (error) {}
    }
    fetchData();
  }, []);
  return <div>{data && <ContactMessageScreen data={data} />}</div>;
};

export default ContactMessage;
