import React from "react";

import styles from "../../../styles/pages/FormPage/infoButtons.module.css";

const InfoButtons = ({ color, text }) => {
  return (
    <>
      <div
        className={`${styles.container} ${
          color === "red" ? styles.red : styles.green
        }`}
      >
        {text}
      </div>
    </>
  );
};

export default InfoButtons;
