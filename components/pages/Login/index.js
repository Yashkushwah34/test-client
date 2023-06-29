import React, { useState } from "react";
import { Button, Col, Input, Row } from "antd";
import { useRouter } from "next/router";
import styles from "../../../styles/pages/loginPage.module.css";
import {
  emailValidator,
  textValidator,
} from "../../helperFunction/validations";
import ErrorLine from "../../reusableComponents/ErrorLine";
import { loggingInUser } from "../../../redux/actions/authentication";

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const [loader, setLoader] = useState(false);

  const router = useRouter();

  const validation = () => {
    setError({
      ...error,
      email: "",
      password: "",
    });
    let errorValue = false;
    const errorObj = {
      email: "",
      password: "",
    };
    const emailValidation = emailValidator(form.email);
    if (!emailValidation) {
      (errorValue = true), (errorObj.email = "Please provide a valid email");
    }
    const passwordValidation = textValidator(form.password);
    if (!passwordValidation || form.password.length < 8) {
      (errorValue = true),
        (errorObj.password = "Please provide a valid password");
    }
    setError({
      ...error,
      email: errorObj.email,
      password: errorObj.password,
    });
    return errorValue;
  };

  const onSubmitHandler = async () => {
    setLoader(true);
    const validate = validation();
    if (!validate) {
      await loggingInUser(form);
    }
    setLoader(false);
  };

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
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
                  <h2>Login</h2>
                </Col>
              </Row>
            </Col>
            <Col span="24">
              <form>
                <Row gutter={[24, 24]}>
                  <Col span="24">
                    <Input
                      placeholder="Email"
                      name="email"
                      value={form.email}
                      onChange={onChangeHandler}
                      disabled={loader}
                    />
                    <ErrorLine message={error.email} />
                  </Col>
                  <Col span="24">
                    <Input.Password
                      placeholder="Password"
                      name="password"
                      value={form.password}
                      onChange={onChangeHandler}
                      disabled={loader}
                    />
                    <ErrorLine message={error.password} />
                  </Col>
                  <Col span="24">
                    <Row gutter={[24, 24]} justify="center">
                      <Col>
                        <Button
                          type="primary"
                          onClick={onSubmitHandler}
                          disabled={loader}
                        >
                          Login
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </form>
            </Col>
            <Col span="24" className={styles.switchStatement}>
              <p>
                Don&apos;t have an account ?{" "}
                <span onClick={() => router.push("/signup")}>Signup</span>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
