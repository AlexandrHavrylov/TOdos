import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const regUser = createAsyncThunk("auth/regUser", async (user) => {
  try {
    const { data } = await axios.post("/users/signup", user);
    token.set(data.token);
    Notiflix.Notify.success(`Привет, ${data.user.name}`);
    return data;
  } catch (error) {
    throw new Error();
  }
});

export const logInUser = createAsyncThunk("auth/logInUser", async (user) => {
  try {
    const { data } = await axios.post("/users/login", user);
    token.set(data.token);
    Notiflix.Notify.success(`Привет, ${data.user.name}`);
    return data;
  } catch (error) {
    throw new Error();
  }
});

export const logOutUser = createAsyncThunk("auth/logOutUser", async () => {
  try {
    const { data } = await axios.post("/users/logout");
    token.unset();
    return data;
  } catch (error) {
    throw new Error();
  }
});
