import { createSlice, asyncThunkCreator } from "@reduxjs/toolkit";

let initialState = {
  token: "",
  refreshToken: "",
  loading: false,
  user: {},
};
