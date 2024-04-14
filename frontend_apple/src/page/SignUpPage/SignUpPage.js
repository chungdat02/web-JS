import React, { useEffect, useState } from "react";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Col, Row } from "antd";
import animateLogin from "../../assets/animate_login.json";
// import Loading from "../../components/LoadingComponent/Loading";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
// import background_register from "../../assets/images/background_dangky.jpg";
import * as UserService from "../../services/UserService";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextHello,
  WrapperTextLight,
} from "../SignUpPage/Style";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useMutationHooks } from "../../hooks/useMultationHook";
import * as message from "../../components/Message/Message";
const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setisShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const mutation = useMutationHooks((data) => UserService.signUpUser(data));
  const { data } = mutation;

  useEffect(() => {
    if (data?.status === "OK") {
      message.success("Register Successfull!");
      // handleNavigateSignIn();
      window.location.href = "/";
    } else if (data?.status === "ERR") {
      message.error("Register Failed");
    }
  }, [data]);

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnchangePassword = (value) => {
    setPassword(value);
  };
  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value);
  };
  const handleSignUp = () => {
    mutation.mutate({ email, password, confirmPassword });
    console.log("sign up", email, password, confirmPassword);
  };
  const handleNavigateSignIn = () => {
    navigate("/sign-in");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        background: `black `,
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          width: "1000px",
          height: "480px",
          borderRadius: "6px",
          background: "#fff",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Row className="sm:flex h-full w-full justify-center items-center flex-col md:flex-row  lg:flex-row w-1000 h-480px ">
          <Col span={14} className="sm:hidden lg:block">
            <WrapperContainerLeft>
              <Lottie animationData={animateLogin} loop={true} />
            </WrapperContainerLeft>
          </Col>
          <Col
            span={10}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                padding: "20px",
              }}
            >
              <WrapperContainerRight className="center-content space-y-5">
                <WrapperTextHello>Register Account</WrapperTextHello>
                <p>Đăng ký tài khoản</p>

                <div className="space-y-4" style={{ position: "relative" }}>
                  <span
                    onClick={() => setIsShowPassword(!isShowPassword)}
                    style={{
                      zIndex: 10,
                      position: "absolute",
                      top: "55px",
                      right: "8px",
                    }}
                  >
                    {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
                  </span>
                  <span
                    onClick={() =>
                      setisShowConfirmPassword(!isShowConfirmPassword)
                    }
                    style={{
                      zIndex: 10,
                      position: "absolute",
                      top: "85px",
                      right: "8px",
                    }}
                  >
                    {isShowConfirmPassword ? (
                      <EyeFilled />
                    ) : (
                      <EyeInvisibleFilled />
                    )}
                  </span>
                  <InputForm
                    placeholder="abc@gmail.com"
                    value={email}
                    onChange={handleOnchangeEmail}
                    style={{ marginBotton: "20px" }}
                  />
                  <InputForm
                    value={password}
                    onChange={handleOnchangePassword}
                    style={{ marginBotton: "40px" }}
                    placeholder="password"
                    type={isShowPassword ? "text" : "password"}
                  />
                  <InputForm
                    value={confirmPassword}
                    onChange={handleOnchangeConfirmPassword}
                    placeholder="confirm password"
                    type={isShowConfirmPassword ? "text" : "password"}
                  />
                </div>
                <div>
                  {data?.status === "ERR" && (
                    <span style={{ color: "red" }}>{data?.message}</span>
                  )}
                </div>
                <ButtonComponent
                  disabled={
                    !email.length || !password.length || !confirmPassword.length
                  }
                  onClick={handleSignUp}
                  size={20}
                  styleButton={{
                    marginTop: "30px",
                    backgroundColor: "#318CE7",
                    height: "48px",
                    border: "none",
                    borderRadius: "4px",
                    padding: "10px 20px",
                    width: "220px",
                  }}
                  styleTextButton={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                  textButton={"Đăng Ký"}
                />
                <p>
                  <WrapperTextLight>
                    Bạn đã có tài khoản?
                    <span
                      className="pl-2 text-black"
                      style={{ cursor: "pointer" }}
                      onClick={handleNavigateSignIn}
                    >
                      Đăng nhập
                    </span>
                  </WrapperTextLight>
                </p>
              </WrapperContainerRight>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SignUpPage;
