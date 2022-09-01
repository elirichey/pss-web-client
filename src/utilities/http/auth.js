import Axios from "axios";
import config from "../../config/config";
const { API_URL } = config;

const login = async (values) => {
  return await Axios.post(`${API_URL}/auth/login`, values);
};

const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("userId");
  location.replace("/");
};

const userGetSelf = async () => {
  const accessToken = localStorage.getItem("accessToken");
  return await Axios.get(`${API_URL}/user`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

const AuthHttp = {
  login,
  logout,
  userGetSelf,
};

export default AuthHttp;
