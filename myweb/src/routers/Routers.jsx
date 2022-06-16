import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignInForm from "../components/SignInForm/SignInForm";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import ProductView from "../components/ProductView/ProductView";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signIn" element={<SignInForm />} />
      <Route path="/signUp" element={<SignUpForm />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/productView" element={<ProductView />} />
    </Routes>
  );
};

export default Routers;
