import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../Api/apiWrapper";

let initialState = {
  productDetails: {},
  otherProducts: [],
  loading: false,
};
