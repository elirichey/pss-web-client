import Axios from "axios";
import config from "../../config/config";
const { API_URL } = config;

// CRUD

const getProducts = async (pg) => {
  const page = pg ? pg : 1;
  const accessToken = localStorage.getItem("accessToken");
  return Axios.get(`${API_URL}/admin/products/all/${page}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
    .then((res) => res)
    .catch((error) => error);
};
const getTotalNumberOfProducts = async () => {
  const accessToken = localStorage.getItem("accessToken");
  return Axios.get(`${API_URL}/admin/products/count`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
    .then((res) => res)
    .catch((error) => error);
};

const searchProducts = async (queries) => {
  const accessToken = localStorage.getItem("accessToken");

  const { name, manufacturer, type, active, hasImages } = queries;

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
  if (active) {
    const hasQueries = queryString !== `?` ? `${queryString}&` : queryString;
    queryString = `${hasQueries}active=true`;
  }
  if (hasImages) {
    const hasQueries = queryString !== `?` ? `${queryString}&` : queryString;
    queryString = `${hasQueries}hasImages=true`;
  }

  if (queryString === `?`) return alert("Search Query Cannot Be Empty");

  return Axios.get(`${API_URL}/admin/products/search${queryString}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
    .then((res) => res)
    .catch((error) => error);
};

const getProductById = async (id) => {
  const accessToken = localStorage.getItem("accessToken");
  return Axios.get(`${API_URL}/admin/product/${id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
    .then((res) => res)
    .catch((error) => error);
};

const createProduct = async (payload) => {
  const accessToken = localStorage.getItem("accessToken");
  return Axios.post(`${API_URL}/product`, payload, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
    .then((res) => res)
    .catch((error) => error);
};

const updateProduct = async (id, payload) => {
  const accessToken = localStorage.getItem("accessToken");
  return Axios.put(`${API_URL}/product/${id}`, payload, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
    .then((res) => res)
    .catch((error) => error);
};

const deleteProduct = async (id) => {
  const accessToken = localStorage.getItem("accessToken");
  return Axios.delete(`${API_URL}/product/${id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
    .then((res) => res)
    .catch((error) => error);
};

// Uploads

const uploadCSV = async (payload, updateUploadProgress) => {
  return new Promise(async (resolve) => {
    const accessToken = localStorage.getItem("accessToken");

    const formData = new FormData();
    formData.append("file", payload);

    return Axios({
      url: `${API_URL}/products/upload/csv`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
        "content-type": "multipart/form-data",
      },
      data: formData,
      onUploadProgress: ({ total, loaded }) => {
        const progress = (loaded / total) * 100;
        const percentage = Math.round(progress);
        console.log(`Uploading CSV: ${percentage}%`);
        return updateUploadProgress(percentage);
      },
    })
      .then((res) => resolve(res))
      .catch((error) => resolve(error));
  });
};

const uploadProductImage = async (id, payload, uploadProgress) => {
  return new Promise(async (resolve) => {
    const accessToken = localStorage.getItem("accessToken");

    const formData = new FormData();
    formData.append("file", payload);

    return Axios({
      url: `${API_URL}/product/${id}/image/upload`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
        "content-type": "multipart/form-data",
      },
      data: formData,
      onUploadProgress: ({ total, loaded }) => {
        const progress = (loaded / total) * 100;
        const percentage = Math.round(progress);
        console.log(`Uploading Product Image: ${percentage}%`);
        return uploadProgress(percentage);
      },
    })
      .then((res) => resolve(res))
      .catch((error) => resolve(error));
  });
};

const batchUploadProductImages = async (payload, uploadProgress) => {
  return new Promise(async (resolve) => {
    const accessToken = localStorage.getItem("accessToken");

    const formData = new FormData();
    payload.forEach((file) => formData.append("files", file));

    return Axios({
      url: `${API_URL}/product/images/upload`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
        "content-type": "multipart/form-data",
      },
      data: formData,
      onUploadProgress: ({ total, loaded }) => {
        const progress = (loaded / total) * 100;
        const percentage = Math.round(progress);
        console.log(`Batch Uploading Product Images: ${percentage}%`);
        return uploadProgress(percentage);
      },
    })
      .then((res) => resolve(res))
      .catch((error) => resolve(error));
  });
};

const ProductsHttp = {
  getProducts,
  getTotalNumberOfProducts,
  searchProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  uploadCSV,
  uploadProductImage,
  batchUploadProductImages,
};

export default ProductsHttp;
