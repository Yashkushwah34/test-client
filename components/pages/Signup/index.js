import React, { useState } from "react";
import { Button, Col, Input, Row } from "antd";

import { useRouter } from "next/router";

import styles from "../../../styles/pages/loginPage.module.css";
import {
  emailValidator,
  textValidator,
} from "../../helperFunction/validations";
import { signupUser } from "../../../redux/actions/authentication";
import ErrorLine from "../../reusableComponents/ErrorLine";

const SignupPage = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });

  const validation = () => {
    const errorObject = {
      name: "",
      email: "",
      password: "",
      number: "",
    };

    let errorValue = false;

    const emailValidation = emailValidator(form.email);

    if (!emailValidation) {
      errorValue = true;
      errorObject.email = "Please provide a valid email";
    }
    const nameValidation = textValidator(form.name);
    if (!nameValidation) {
      errorValue = true;
      errorObject.name = "Please provide a valid name";
    }
    const passwordValidation = textValidator(form.password);
    if (!passwordValidation || form.password.length < 8) {
      errorValue = true;
      errorObject.password = "Password should be of minimum 8 characters";
    }
    if (!form.number || form.number.length < 10) {
      errorValue = true;
      errorObject.number = "Please provoide a valid number";
    }
    setError({
      ...errorObject,
    });
    return errorValue;
  };

  const onSubmitHandler = async () => {
    const validate = validation();
    if (!validate) {
      await signupUser(form);
    }
  };

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onNumberChangeHandler = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setForm({
      ...form,
      [e.target.name]: numericValue,
    });
  };

  return (
    <>
      <Row className={styles.container} justify="center" align="middle">
        <Col className={styles.formContainer} xs={24} lg={8}>
          <Row gutter={[24, 24]}>
            <Col span="24">
              <Row gutter={[24, 24]}>
                <Col span="24" className={styles.loginHeading}>
                  <h2>Signup</h2>
                </Col>
              </Row>
            </Col>
            <Col span="24">
              <form>
                <Row gutter={[24, 24]}>
                  <Col span="24">
                    <Input
                      placeholder="Name"
                      name="name"
                      value={form.name}
                      onChange={onChangeHandler}
                    />
                    <ErrorLine message={error.name} />
                  </Col>
                  <Col span="24">
                    <Input
                      placeholder="Mobile Number"
                      name="number"
                      value={form.number}
                      onChange={onNumberChangeHandler}
                      maxLength={10}
                    />
                    <ErrorLine message={error.number} />
                  </Col>
                  <Col span="24">
                    <Input
                      placeholder="Email"
                      name="email"
                      value={form.email}
                      onChange={onChangeHandler}
                    />
                    <ErrorLine message={error.email} />
                  </Col>
                  <Col span="24">
                    <Input.Password
                      placeholder="Password"
                      name="password"
                      value={form.password}
                      onChange={onChangeHandler}
                    />
                    <ErrorLine message={error.password} />
                  </Col>
                  <Col span="24">
                    <Row gutter={[24, 24]} justify="center">
                      <Col>
                        <Button type="primary" onClick={onSubmitHandler}>
                          Signup
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </form>
            </Col>
            <Col span="24" className={styles.switchStatement}>
              <p>
                Already have an account ?{" "}
                <span onClick={() => router.push("/login")}>Login</span>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default SignupPage;
