import { toast } from "react-toastify";
import axios from "../../instance";

export const ADD_REPORT = "ADD_REPORT";
export const GET_ALL_REPORTS = "GET_ALL_REPORTS";
export const DELETE_REPORT = "DELETE_REPORT";
export const GET_PARTICULAR_DATA = "GET_PARTICULAR_DATA";
export const UPDATE_REPORT = "UPDATE_REPORT";

const addingReport = (data) => {
  return {
    type: ADD_REPORT,
    data,
  };
};

export const addingReportData = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/user/report", data);
      if (res.status === 200) {
        dispatch(addingReport(res.data.data));
        toast.success("Report added successfully");
      }
      return res.status;
    } catch (err) {
      toast.error("Something went wrong, Please try again later");
      return 400;
    }
  };
};

const updateReport = (data) => {
  return {
    type: UPDATE_REPORT,
    data,
  };
};

export const updatingReport = (data, id) => {
  return async (dispatch) => {
    try {
      const res = await axios.patch(`/user/report/${id}`, data);
      console.log(res);
    } catch (err) {
      toast.error("Something went wrong, Please try again later");
      return 400;
    }
  };
};

const getAllReports = (data) => {
  return {
    type: GET_ALL_REPORTS,
    data,
  };
};

export const gettingAllReports = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/user/report");
      if (res.status === 200) {
        dispatch(getAllReports(res.data.data));
      }
      return res.status;
    } catch (err) {
      toast.error("Something went wrong, Please try again later");
      return 400;
    }
  };
};

const getReport = (data) => {
  return {
    type: GET_PARTICULAR_DATA,
    data,
  };
};

export const gettingParticularData = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/user/report/${id}`);
      if (res.status === 200) {
        dispatch(getReport(res.data.data));
      }
      return res.status;
    } catch (err) {
      toast.error("Something went wrong, Please try again later");
      return 400;
    }
  };
};

const deleteReport = (data) => {
  return {
    type: DELETE_REPORT,
    data,
  };
};

export const deletingReport = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`/user/report/${id}`);
      if (res.status === 200) {
        dispatch(deleteReport(id));
        toast.success("Report deleted successfully");
      }
    } catch (err) {
      toast.error("Something went wrong, Please try again later");
      return 400;
    }
  };
};
