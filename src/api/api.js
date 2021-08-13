import axios from "axios";

// const DEV_URL = "http://localhost:8000";
const PROD_URL = "https://shoe-e-store-restapi.herokuapp.com/";

const api = axios.create({
  baseURL: PROD_URL,
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

export function getArticles() {
  return api.get(`/article/get-all-sneakers`, config);
}

export function forgotPassword(data) {
  return api.patch(`/user/forget-password`, { ...data }, config);
}
export function getRaffle() {
  return api.get(`/article/get-raffle`, config);
}
export function getSingleArticle(data) {
  return api.post(`/article/get-single`, { ...data }, config);
}
export function createOrder(data) {
  return api.post(`/order-history/add`, { ...data }, config);
}
export function getSingleOrder(data) {
  return api.post(`/order-history/get-single`, { ...data }, config);
}
export function confirmPayment(data) {
  return api.patch(`/order-history/confirm-payment`, { ...data }, config);
}
export function fillRaffle(data) {
  return api.post(`/raffle/add-form`, { ...data }, config);
}
export function addContactMessage(data) {
  return api.post(`/contact/add`, { ...data }, config);
}

export function allOrderHistories() {
  return api.get(`/order-history/get-all-for-auth-user`, config);
}
export function allContactMessages() {
  return api.get(`/contact/get-all`, config);
}
export function orderHistory() {
  return api.get(`/order-history/get-all`, config);
}
export function deleteArticle(id) {
  return api.delete("/article/delete", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
    data: {
      articleId: id,
    },
  });
}
export function updateArticles(data) {
  return api.patch(`/article/update`, { ...data }, config);
}
export function getAllRaffleAdmin() {
  return api.get(`/raffle/get-all-for-admin`, config);
}
export function declareWinner(data) {
  return api.patch(`/raffle/declare-winner`, { ...data }, config);
}
export function getAllRaffleUser() {
  return api.get(`/raffle/get-all-for-user`, config);
}
export function createPaymentIntent(data) {
  return api.post(`/raffle/create-payment-intend`, { ...data }, config);
}
