export const emailValidator = (data = "") => {
  const emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!data || !emailRegx.test(data)) {
    return false;
  } else {
    return true;
  }
};

export const textValidator = (data = "") => {
  if (!data || !data.trim()) {
    return false;
  } else {
    return true;
  }
};

const numberValidator = (data) => {
  if (!data && data !== 0) {
    return false;
  } else {
    return true;
  }
};

export const patientDataValidation = (data) => {
  let errorObject = {
    total_cholestrol: "",
    hdl_cholestrol: "",
    vldl: "",
    ldl_cholestrol: "",
    non_hdl_cholestrol: "",
    triglycerides: "",
    total_cholestrol_hdl_ratio: "",
    tg_hdl_ratio: "",
  };

  let errorValue = false;

  const total_cholestrol = numberValidator(data.total_cholestrol);
  if (!total_cholestrol) {
    errorValue = true;
    errorObject.total_cholestrol = "Please provide a";
  }
  const hdl_cholestrol = numberValidator(data.hdl_cholestrol);
  if (!hdl_cholestrol) {
    errorValue = true;
    errorObject.hdl_cholestrol = "Please provide a";
  }
  const vldl = numberValidator(data.vldl);
  if (!vldl) {
    errorValue = true;
    errorObject.vldl = "Please provide a";
  }
  const ldl_cholestrol = numberValidator(data.ldl_cholestrol);
  if (!ldl_cholestrol) {
    errorValue = true;
    errorObject.ldl_cholestrol = "Please provide a";
  }
  const non_hdl_cholestrol = numberValidator(data.non_hdl_cholestrol);
  if (!non_hdl_cholestrol) {
    errorValue = true;
    errorObject.non_hdl_cholestrol = "Please provide a";
  }
  const triglycerides = numberValidator(data.triglycerides);
  if (!triglycerides) {
    errorValue = true;
    errorObject.triglycerides = "Please provide a";
  }
  const total_cholestrol_hdl_ratio = numberValidator(
    data.total_cholestrol_hdl_ratio
  );
  if (!total_cholestrol_hdl_ratio) {
    errorValue = true;
    errorObject.total_cholestrol_hdl_ratio = "Please provide a";
  }
  const tg_hdl_ratio = numberValidator(data.tg_hdl_ratio);
  if (!tg_hdl_ratio) {
    errorValue = true;
    errorObject.tg_hdl_ratio = "Please provide a";
  }
  return { errorObject, errorValue };
};
