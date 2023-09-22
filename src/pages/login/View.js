import React from "react";
import "./login.css";
import LoginScreen from "../../components/login/LoginScreen";
import UserScreen from "../../components/UserScreen/UserScreen";
import { useSelector } from "react-redux";

const Login = () => {
  const user = useSelector((state) => state.logUser);

  return user.online ? <UserScreen /> : <LoginScreen />;
};

export default Login;
