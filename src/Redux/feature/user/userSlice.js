import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let initialState = {
  isloading: false,
  userDetail: {},
  address: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUser(state, { payload }) {
      state.userDetail = payload;
    },
    editUsers(state, { payload }) {
      state.userDetail = payload;
    },
    removeUser(state, { payload }) {
      state.userDetail = {};
    },
    addAddress(state, { payload }) {
      state.address.push(payload);
    },
    editAddress(state, { payload }) {
      state.address = state.address.map((res) => {
        if (res.id == payload.id) {
          return payload;
        } else {
          return res;
        }
      });
    },
    removeAddress(state, { payload }) {
      let a = state.address.some((res) => res.id == payload.id);
      state.address = state.address.filter((res) => res.id !== payload.id);
    },
  },
});

export const {
  addUser,
  editUsers,
  removeUser,
  addAddress,
  editAddress,
  removeAddress,
} = userSlice.actions;

export default userSlice.reducer;
