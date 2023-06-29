import React, { useState, useRef } from "react";

import { connect } from "react-redux";

import styles from "../../../styles/pages/FormPage/index.module.css";
import FormRange from "./FromRange";
import { Button, Col, Row } from "antd";

import { useRouter } from "next/router";
import { patientDataValidation } from "../../helperFunction/validations";
import { addingReportData } from "../../../redux/actions/report";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import InfoButtons from "./InfoButtons";

const FormPage = ({ data, saveData }) => {
  const reportTemplateRef = useRef(null);

  const handleGeneratePdf = async () => {
    const doc = new jsPDF({
      format: "a4",
    });

    const canvas = await html2canvas(reportTemplateRef.current);

    const contentWidth = canvas.width;
    const contentHeight = canvas.height;
    const aspectRatio = contentWidth / contentHeight;

    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = pdfWidth / aspectRatio;

    const scale = 1;

    const adjustedWidth = pdfWidth * scale;
    const adjustedHeight = pdfHeight * scale;

    const positionX = (pdfWidth - adjustedWidth) / 2;
    const positionY = (pdfHeight - adjustedHeight) / 2;

    doc.addImage(
      canvas,
      "PNG",
      positionX,
      positionY,
      adjustedWidth,
      adjustedHeight
    );

    doc.save("document.pdf");
  };

  const router = useRouter();

  const { userInfo } = data || {};

  const { name, email, number } = userInfo || {};

  const [loader, setLoader] = useState(false);

  const [form, setForm] = useState({
    total_cholestrol: null,
    hdl_cholestrol: null,
    vldl: null,
    ldl_cholestrol: null,
    non_hdl_cholestrol: null,
    triglycerides: null,
    total_cholestrol_hdl_ratio: null,
    tg_hdl_ratio: null,
  });

  const [error, setError] = useState({
    total_cholestrol: "",
    hdl_cholestrol: "",
    vldl: "",
    ldl_cholestrol: "",
    non_hdl_cholestrol: "",
    triglycerides: "",
    total_cholestrol_hdl_ratio: "",
    tg_hdl_ratio: "",
  });

  const validation = () => {
    const data = patientDataValidation(form);
    setError({
      ...data.errorObject,
    });
    return data.errorValue;
  };

  const onSubmitHandler = async () => {
    setLoader(true);
    const validate = validation();
    if (!validate) {
      const res = await saveData(form);
      if (res === 200) {
        handleGeneratePdf();
        router.push("/");
      }
    }
    setLoader(false);
  };

  return (
    <>
      <div ref={reportTemplateRef}>
        <div className={styles.container}>
          <div className={styles.rowContainer}>
            <div className={styles.textContainer}>
              <h2>Patient Name : {name}</h2>
            </div>
            <div>
              <p>Email : {email}</p>
              <p>Phone Number : {number} </p>
            </div>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <InfoButtons color="red" text="Not Well" />
          <InfoButtons color="green" text="Danger Free" />
        </div>
        <div className={styles.contentContainer}>
          <FormRange
            form={form}
            setForm={setForm}
            edit={true}
            error={error}
            loader={loader}
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Row
          gutter={[24, 24]}
          justify="center"
          className={styles.buttonContentContainer}
        >
          <Col>
            <Button type="primary" onClick={onSubmitHandler} disabled={loader}>
              Save and Download
            </Button>
          </Col>
          <Col>
            <Button
              type="default"
              onClick={() => router.push("/")}
              disabled={loader}
            >
              Back
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.authentication.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveData: (data) => dispatch(addingReportData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormPage);
