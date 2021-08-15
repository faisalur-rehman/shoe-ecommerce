import React, { useEffect } from "react";
import useApi from "../../hooks/useApi";
import MyShoesScreen from "./MyShoesScreen";
import * as api from "../../api/api";

const MyShoes = () => {
  const getProfile = useApi(api.getProfile);
  const { data, request } = useApi(api.allOrderHistories);

  useEffect(() => {
    async function fetchData() {
      try {
        await request();
      } catch (_) {}
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        await getProfile.request();
      } catch (_) {}
    }
    fetchData();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      {data && <MyShoesScreen data={data} profileData={getProfile.data} />}
    </div>
  );
};

export default MyShoes;
