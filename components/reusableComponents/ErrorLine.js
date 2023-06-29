import React from "react";
import styles from "../../styles/reusableComponent/errorLine.module.css";

const ErrorLine = ({ message }) => {
  return message ? (
    <>
      <p className={styles.errorText}>* {message}</p>
    </>
  ) : (
    <></>
  );
};

export default ErrorLine;
