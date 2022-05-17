import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1`,
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.data.message) {
      return Promise.reject(error.response.data.message);
    }

    return Promise.reject(error);
  }
);

export default instance;
