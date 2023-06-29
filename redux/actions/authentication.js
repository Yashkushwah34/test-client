import { toast } from "react-toastify";
import axios from "../../instance";

export const GET_USER_INFO = "GET_USER_INFO";

export const loggingInUser = async (data) => {
  try {
    const res = await axios.post("/authentication/login", data);
    if (res.status === 200) {
      localStorage.setItem("token", res.data.data.token);
      window.location.href = "/";
    }
  } catch (err) {
    toast.error(err?.response?.data?.message || "Something went wrong");
  }
};

export const signupUser = async (data) => {
  try {
    const res = await axios.post("/authentication/signup", data);
    if (res.status === 200) {
      localStorage.setItem("token", res.data.data.token);
      window.location.href = "/";
    }
  } catch (err) {
    toast.error(err?.response?.data?.message || "Something went wrong");
  }
};

const getUserInfo = (data) => {
  return {
    type: GET_USER_INFO,
    data,
  };
};

export const gettingUserInfo = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/user");
      if (res.status === 200) {
        dispatch(getUserInfo(res.data.data));
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    }
  };
};
