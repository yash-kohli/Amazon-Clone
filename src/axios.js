import axios from "axios";

const instance = axios.create({
  baseUrl: "...", // cloud function api url
});
export default instance;
