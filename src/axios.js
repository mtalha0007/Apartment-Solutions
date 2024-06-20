import axios from "axios";

const server = process.env.REACT_APP_BASE_URL
console.log(server);
const instance = axios.create({
  baseURL: server + "/api"
});

instance.interceptors.request.use((request) => {
  let user = JSON.parse(localStorage.getItem("user"));
  let token = user?.token;
  request.headers = {
    Accept: "application/json, text/plain, */*",
    Authorization: `Bearer ${token}`
  };
  return request;
});

instance.interceptors.response.use((response) => {
  if (response) {
    return response;
  }
},
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;