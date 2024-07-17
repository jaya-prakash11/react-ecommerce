import { Button, Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { AiOutlineMail, AiOutlineKey } from "react-icons/ai";
import { authContext } from "../../context/authContext";
import useAuth from "../../hooks/useAuth";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { AxiosPrivate } from "../../Redux/Api/api";

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const { auth, setAuth } = useAuth(authContext);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("john@mail.com");
  const [passsword, setPassword] = useState("changeme");
  const [signup, setSignUp] = useState(false);

  useEffect(() => {
    navigate("/login");
  }, []);

  const onSignUpHandeled = async () => {
    try {
      let response = await axios.post(
        "https://api.escuelajs.co/api/v1/users/",
        {
          name: "Nicolas",
          email: "nico@gmail.com",
          password: "1234",
          avatar: "https://picsum.photos/800",
        }
      );

      console.log("responseere", response);
    } catch (err) {}
  };

  const onLoginHandel = async () => {
    try {
      let response = await AxiosPrivate.post("/login", {
        email: "john@mail.com",
        password: "changeme",
      });

      console.log("responseere", response);

      setAuth({
        user: { email, passsword },
        accesstoken: response.data.access_token,
        refreshtoken: response.data.refresh_token,
      });

      navigate(from, { replace: true });
    } catch (err) {}
  };

  return (
    <div className="flex flex-col w-full h-[100vh]  xl:px-[15px] 2xl:px-[16%] font-titleFont">
      <h1>{!!auth.accesstoken ? "Logout" : "SingedIn"}</h1>
      <div className="flex flex-col w-full h-full items-center justify-center">
        <div className="flex flex-col w-[40%] h-[50vh] p-3 pt-8  items-center ">
          {signup ? (
            <>
              <p className="text-3xl ">Signup</p>
              <Form
                className=" flex w-[50%] flex-col  mt-5"
                onFinish={onSignUpHandeled}
                autoComplete="off"
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => setUserName(e.target.value)}
                    size="large"
                    value={username}
                    placeholder="username"
                    prefix={<UserOutlined />}
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    size="large"
                    type="email"
                    value={email}
                    placeholder="Email"
                    prefix={<AiOutlineMail />}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    size="large"
                    value={passsword}
                    type="password"
                    placeholder="password"
                    prefix={<AiOutlineKey />}
                  />
                </Form.Item>
                <Button size="large" type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form>
            </>
          ) : (
            <>
              <p className="text-3xl ">Login</p>
              <Form
                fields={[
                  { name: "email", value: email },
                  { name: "password", value: passsword },
                ]}
                className=" flex w-[50%] flex-col  mt-5"
                onFinish={onLoginHandel}
                autoComplete="off"
              >
                <Form.Item
                  name="email"
                  rules={[
                    {
                      // required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    prefix={<AiOutlineMail />}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      // required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    type="password"
                    value={passsword}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    prefix={<AiOutlineKey />}
                  />
                </Form.Item>
                <Button size="large" type="primary" htmlType="submit">
                  Submit
                </Button>
                <div className="flex flex-col cursor-pointer">
                  <p onClick={() => setSignUp(true)}>create a new account</p>
                  <p>Forgot your password</p>
                </div>
              </Form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
