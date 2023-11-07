import React from "react";
import "./loginPage.scss";
// import { Button, card, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loginApiCall } from "./logic";
import { session } from "../../../utils";
import { apiFailureAction } from "../../../commonApilogic";
import notifyUtil from "../../../utils/notifyUtil";
import { Navigate, useNavigate } from "react-router-dom";
import { setHeader } from "../../../utils/apiClient";

const LoginPage = () => {
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const loading = useSelector((state) => state?.loginData?.loading);

  const onFinish = (values) => {
    dispatch(loginApiCall(values))
      .unwrap()
      .then(({ data }) => {
        session.addSession(data);
        setHeader(data);
        Navigate("/search");
      })
      .catch((err) => {
        notifyUtil(err?.response?.data?.message || err?.message, "error");
        console.log("err", err);
        dispatch(apiFailureAction.apiFailure(err));
      });
  };

  const onFinishFailed = (errorInfo) => {
    notifyUtil("Please input Email and password", "error");
  };

  return (
    <div className="loginpage">
      <div className=""></div>
    </div>
  );
};
