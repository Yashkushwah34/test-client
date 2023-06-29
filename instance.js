import axios from "axios";

let token = "";
if (typeof window !== "undefined") {
  token = localStorage.getItem("token") || "";
}

const interceptor = axios.create({
  baseURL: "http://127.0.0.1:4000/api/v1",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default interceptor;
