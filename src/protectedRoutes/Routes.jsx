import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";
const Protected = (props) => {
  const { Component } = props;
  useEffect(() => {
});
  const tokenVerify = localStorage.getItem("token");
  const { decodedToken } = useJwt(tokenVerify);
  const redirectPage = useNavigate();
 
  if (!decodedToken) {
    redirectPage("/admin/login");
  }
  return <Component />;
};

export default Protected;
