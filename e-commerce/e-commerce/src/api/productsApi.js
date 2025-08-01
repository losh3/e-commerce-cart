import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products; // muy importante acceder a `.products`
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
  }
};
