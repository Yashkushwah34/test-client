import React from "react";
import styles from "../../../styles/pages/HomePage/addReportCard.module.css";

import { AiOutlinePlus } from "react-icons/ai";

import { useRouter } from "next/router";

const AddReportCard = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles.container} onClick={() => router.push("/form")}>
        <AiOutlinePlus size={60} />
        <h2>Click to add new Report</h2>
      </div>
    </>
  );
};

export default AddReportCard;
