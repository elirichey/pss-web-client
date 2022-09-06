import Axios from "axios";
import config from "./_config";
const { API_URL } = config;

const getProducts = async (pg) => {
  const page = pg ? pg : 1;
  return Axios.get(`${API_URL}/products/all/${page}`)
    .then((res) => res)
    .catch((error) => error);
};

const searchProducts = async (queries) => {
  const { keyword, manufacturer, type } = queries;

  let queryString = `?`;
  if (keyword) {
    queryString = `${queryString}keyword=${encodeURIComponent(keyword)}`;
  }
  if (manufacturer && manufacturer.trim() !== "(Select)") {
    const hasQueries = queryString !== `?` ? `${queryString}&` : queryString;
    queryString = `${hasQueries}manufacturer=${encodeURIComponent(
      manufacturer
    )}`;
  }
  if (type && type.trim() !== "(Select)") {
    const hasQueries = queryString !== `?` ? `${queryString}&` : queryString;
    queryString = `${hasQueries}type=${encodeURIComponent(type)}`;
  }

  return Axios.get(`${API_URL}/products/search${queryString}`)
    .then((res) => res)
    .catch((error) => error);
};

const getProductById = async (id) => {
  return Axios.get(`${API_URL}/product/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

const ProductsHttp = {
  getProducts,
  searchProducts,
  getProductById,
};

export default ProductsHttp;
