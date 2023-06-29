import React, { useEffect, useState } from "react";
import styles from "../../../styles/pages/HomePage/homePage.module.css";

import { connect } from "react-redux";
import { Button, Col, Row, Spin } from "antd";
import AddReportCard from "./AddReportCard";
import {
  deletingReport,
  gettingAllReports,
} from "../../../redux/actions/report";
import ReportCard from "./ReportCard";

const HomePage = ({ data, getData, reports, deleteReport }) => {
  const { userInfo } = data || {};

  const { name, email, number } = userInfo || {};

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getAllReports();
  }, []);

  const getAllReports = async () => {
    setLoader(true);
    await getData();
    setLoader(false);
  };

  return (
    <>
      {loader ? (
        <div className={styles.spinnerContainer}>
          <Spin />
        </div>
      ) : (
        <>
          <div className={styles.container}>
            <div className={styles.rowContainer}>
              <div className={styles.textContainer}>
                <h2>{name}</h2>
                <p>
                  Email : {email} , Phone Number : {number}
                </p>
              </div>
              <div>
                <h1>Total Reports : {reports.length || 0}</h1>
              </div>
              <div className={styles.logoutButtonnContainer}>
                <Button
                  type="primary"
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "/login";
                  }}
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
          <Row className={styles.contentContainer} gutter={[24, 24]}>
            <Col xs={24} sm={12} md={8} xl={6}>
              <AddReportCard />
            </Col>
            {reports &&
              reports.length > 0 &&
              reports.map((el, index) => {
                return (
                  <Col xs={24} sm={12} md={8} xl={6} key={index}>
                    <ReportCard
                      data={el}
                      reportIndex={index}
                      deleteReport={deleteReport}
                    />
                  </Col>
                );
              })}
          </Row>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.authentication.userInfo,
    reports: state.report.allReports,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(gettingAllReports()),
    deleteReport: (id) => dispatch(deletingReport(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
