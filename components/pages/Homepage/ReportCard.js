import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../../styles/pages/HomePage/reportCard.module.css";
import moment from "moment";
import { Button, Spin } from "antd";

const ReportCard = ({ data, reportIndex, deleteReport }) => {
  const router = useRouter();

  const [loader, setLoader] = useState(false);

  const deleteHandler = async () => {
    setLoader(true);
    await deleteReport(data._id);
    setLoader(false);
  };

  return (
    <>
      <div className={styles.container}>
        {loader ? (
          <div className={styles.loaderContainer}>
            <Spin />
          </div>
        ) : (
          <div className={styles.content}>
            <div className={styles.headingContainer}>
              <h3>Report {reportIndex + 1}</h3>
            </div>
            <div className={styles.contentContainer}>
              <p>
                Report Created : {moment(data.createdAt).format("DD MMMM YYYY")}
              </p>
              {moment(data.createdAt).format() !==
                moment(data.updatedAt).format() && (
                <p>
                  Last Updated : {moment(data.updatedAt).format("DD MMMM YYYY")}
                </p>
              )}
              <p>Total Cholestrol : {data.total_cholestrol}</p>
              <p>
                Total HDL Cholestrol Ratio : {data.total_cholestrol_hdl_ratio}
              </p>
            </div>
            <div className={styles.buttonContainer}>
              <Button
                type="default"
                onClick={() => router.push(`/form/${data._id}`)}
              >
                View More
              </Button>
              <Button
                type="text"
                styles={{ color: "red" }}
                onClick={deleteHandler}
              >
                Delete Report
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ReportCard;
