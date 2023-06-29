import React from "react";
import { Col, Input, Row } from "antd";

import styles from "../../../styles/pages/FormPage/formRange.module.css";
import TimelineGraph from "./TimelineGraph";

const FormRange = ({ form, setForm, edit, error, loader }) => {
  const onChangeHandler = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setForm({
      ...form,
      [e.target.name]: numericValue,
    });
  };

  return (
    <>
      <Row gutter={[16, 16]} className={styles.contentContainer}>
        <Col span="24">
          <Row gutter={[24, 24]}>
            <Col span="4" className={styles.colContainer}>
              <h4>Total Cholestrol</h4>
            </Col>
            <Col span="8" className={styles.colContainer}>
              {edit ? (
                <>
                  <Input
                    disabled={loader}
                    name="total_cholestrol"
                    onChange={onChangeHandler}
                    value={form.total_cholestrol}
                    status={error.total_cholestrol && "error"}
                  />
                </>
              ) : (
                form.total_cholestrol
              )}
              mg/dl
            </Col>
            <Col span="12">
              <TimelineGraph value={form.total_cholestrol} />
            </Col>
            <Col span="4" className={styles.colContainer}>
              <h4>HDL Cholestrol</h4>
            </Col>
            <Col span="8" className={styles.colContainer}>
              {edit ? (
                <>
                  <Input
                    disabled={loader}
                    name="hdl_cholestrol"
                    onChange={onChangeHandler}
                    status={error.hdl_cholestrol && "error"}
                    value={form.hdl_cholestrol}
                  />
                </>
              ) : (
                form.hdl_cholestrol
              )}
              mg/dl
            </Col>
            <Col span="12">
              <TimelineGraph value={form.hdl_cholestrol} />
            </Col>
            <Col span="4" className={styles.colContainer}>
              <h4>VLDL Cholestrol</h4>
            </Col>
            <Col span="8" className={styles.colContainer}>
              {edit ? (
                <>
                  <Input
                    disabled={loader}
                    name="vldl"
                    onChange={onChangeHandler}
                    status={error.vldl && "error"}
                    value={form.vldl}
                  />
                </>
              ) : (
                form.vldl
              )}
              mg/dl
            </Col>
            <Col span="12">
              <TimelineGraph value={form.vldl} />
            </Col>
            <Col span="4" className={styles.colContainer}>
              <h4>LDL Cholestrol</h4>
            </Col>
            <Col span="8" className={styles.colContainer}>
              {edit ? (
                <>
                  <Input
                    disabled={loader}
                    name="ldl_cholestrol"
                    onChange={onChangeHandler}
                    value={form.ldl_cholestrol}
                    status={error.ldl_cholestrol && "error"}
                  />
                </>
              ) : (
                form.ldl_cholestrol
              )}
              mg/dl
            </Col>
            <Col span="12">
              <TimelineGraph value={form.ldl_cholestrol} />
            </Col>
            <Col span="4" className={styles.colContainer}>
              <h4>Non-HDL Cholestrol</h4>
            </Col>
            <Col span="8" className={styles.colContainer}>
              {edit ? (
                <>
                  <Input
                    disabled={loader}
                    name="non_hdl_cholestrol"
                    onChange={onChangeHandler}
                    value={form.non_hdl_cholestrol}
                    status={error.non_hdl_cholestrol && "error"}
                  />
                </>
              ) : (
                form.non_hdl_cholestrol
              )}
              mg/dl
            </Col>
            <Col span="12">
              {" "}
              <TimelineGraph value={form.non_hdl_cholestrol} />
            </Col>
            <Col span="4" className={styles.colContainer}>
              <h4>Triglycerides</h4>
            </Col>
            <Col span="8" className={styles.colContainer}>
              {edit ? (
                <>
                  <Input
                    disabled={loader}
                    name="triglycerides"
                    onChange={onChangeHandler}
                    status={error.triglycerides && "error"}
                    value={form.triglycerides}
                  />
                </>
              ) : (
                form.triglycerides
              )}
              mg/dl
            </Col>
            <Col span="12">
              {" "}
              <TimelineGraph value={form.triglycerides} />
            </Col>
            <Col span="4" className={styles.colContainer}>
              <h4>Total Cholestrol : HDL ratio</h4>
            </Col>
            <Col span="8" className={styles.colContainer}>
              {edit ? (
                <>
                  <Input
                    disabled={loader}
                    name="total_cholestrol_hdl_ratio"
                    onChange={onChangeHandler}
                    value={form.total_cholestrol_hdl_ratio}
                    status={error.total_cholestrol_hdl_ratio && "error"}
                  />
                </>
              ) : (
                form.total_cholestrol_hdl_ratio
              )}
            </Col>
            <Col span="12">
              {" "}
              <TimelineGraph value={form.total_cholestrol_hdl_ratio} />
            </Col>
            <Col span="4" className={styles.colContainer}>
              <h4>TG : HDL ratio</h4>
            </Col>
            <Col span="8" className={styles.colContainer}>
              {edit ? (
                <>
                  <Input
                    disabled={loader}
                    name="tg_hdl_ratio"
                    onChange={onChangeHandler}
                    status={error.tg_hdl_ratio && "error"}
                    value={form.tg_hdl_ratio}
                  />
                </>
              ) : (
                form.tg_hdl_ratio
              )}
            </Col>
            <Col span="12">
              {" "}
              <TimelineGraph value={form.tg_hdl_ratio} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default FormRange;
