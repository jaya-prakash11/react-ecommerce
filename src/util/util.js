export const getTotal = (res = []) => {
  return res.reduce((acum, current) => acum + current.price * current.count, 0);
};
