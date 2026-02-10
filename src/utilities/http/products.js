import Axios from "axios";

const getProducts = async (sheet) => {
  const urlId = '1miocWg1VyMxwLn7p3VCtEJtKq38PqxqT9nigHBqKpCI'
  const url = `https://opensheet.elk.sh/${urlId}/${sheet}`

  return Axios.get(url)
    .then((res) => res)
    .catch((error) => error);
};

const ProductsHttp = {
  getProducts,
};

export default ProductsHttp;
