import apiClient from "./apiClient";

export const fetchProducts = async () => {
  const response = await apiClient.get(
    "https://api.escuelajs.co/api/v1/products"
  );
  return response.data;
};
