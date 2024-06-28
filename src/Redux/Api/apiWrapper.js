import api from "./api";

const get = async (url) => {
  console.log("inside getkk");
  try {
    let res = await api.get(url);
    if (res && res.data) {
      return res.data;
    }
    return [];
  } catch (err) {
    console.log("err", err);
  }
};
const post = async (url, payload) => {
  try {
    let res = await api.post(url);
    return res;
  } catch (err) {
    console.log(err);
  }
};
const put = async () => {};
const _delete = async () => {};

export const Axios = {
  get,
  post,
  put,
  delete: _delete,
};
