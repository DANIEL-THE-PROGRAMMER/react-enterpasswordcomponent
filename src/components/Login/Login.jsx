import React from "react";
import Avatar from "../Avatar/Avatar";
import Input from "../Input/Input";
import Toggle from "../Toggle/Toggle";

const Login = () => {
  return (
    <main>
      <h1>Enter Your Password</h1>
      <Avatar />
      <Input />
      <Toggle />
      <a href="/#" target={"_blank"}>
        Reset Password
      </a>
    </main>
  );
};

export default Login;
