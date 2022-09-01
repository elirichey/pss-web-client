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
  const { name, manufacturer, type } = queries;

  let queryString = `?`;
  if (name) {
    queryString = `${queryString}name=${encodeURIComponent(name)}`;
  }
  if (manufacturer) {
    const hasQueries = queryString !== `?` ? `${queryString}&` : queryString;
    queryString = `${hasQueries}manufacturer=${encodeURIComponent(
      manufacturer
    )}`;
  }
  if (type) {
    const hasQueries = queryString !== `?` ? `${queryString}&` : queryString;
    queryString = `${hasQueries}type=${encodeURIComponent(type)}`;
  }

  if (queryString === `?`) return alert("Search Query Cannot Be Empty");

  return Axios.get(`${API_URL}/products/search${queryString}`)
    .then((res) => res)
    .catch((error) => error);
};

const getProductById = async (id) => {
  return Axios.get(`${API_URL}/product/${id}`)
    .then((res) => res)
    .catch((error) => error);
};

const getTotalNumberOfProducts = async () => {
  return Axios.get(`${API_URL}/products/count`)
    .then((res) => res)
    .catch((error) => error);
};

const ProductsHttp = {
  getProducts,
  searchProducts,
  getProductById,
  getTotalNumberOfProducts,
};

export default ProductsHttp;
