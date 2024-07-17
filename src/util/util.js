export const getTotal = (res = []) => {
  console.log("inside Util", res);

  return res.reduce((acum, current) => acum + current.price * current.count, 0);
};
