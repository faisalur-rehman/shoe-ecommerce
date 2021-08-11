import axios from "axios";

const DEV_URL = "http://localhost:8000";

const api = axios.create({
  baseURL: DEV_URL,
});

const config = {
  headers: {
    Authorization: localStorage.getItem("token"),
  },
};

export function loginUser(data) {
  return api.post(`/user/login`, { ...data });
}
export function signup(data) {
  return api.post(`/user/register`, { ...data });
}

export function getProfile() {
  return api.get(`/user/profile`, config);
}
export function updateProfile(data) {
  return api.patch(`/user/update-profile`, { ...data }, config);
}
export function resetPassword(data) {
  return api.patch(`/user/send-verification-code`, { ...data }, config);
}
export function forgotPassword(data) {
  return api.patch(`/user/forget-password`, { ...data }, config);
}
