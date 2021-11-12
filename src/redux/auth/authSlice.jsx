import { regUser, logInUser, logOutUser } from "./authActions";
import Notiflix from "notiflix";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFechingCurrent: false,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [regUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [regUser.rejected]() {
      Notiflix.Notify.failure("Ошибка");
    },

    [logInUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },

    [logInUser.rejected]() {
      Notiflix.Notify.failure("Ошибка");
    },

    [logOutUser.fulfilled](state) {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export default auth.reducer;
