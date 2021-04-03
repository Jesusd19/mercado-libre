import axios from "axios";

export const getAllProducts = async (word) => {
  const data = await axios.get(
    `http://localhost:3000/api/items?q=${word}`
  );
  return data;
};

export const getProduct = async (id) => {
  const data = await axios.get(
    `http://localhost:3000/api/items/${id}`
  );
  return data;
};
