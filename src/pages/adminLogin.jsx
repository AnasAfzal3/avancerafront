import axios from "axios";
import React, { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const redirectPage = useNavigate();
  let token = localStorage.getItem("token");
  useEffect(() => {}, []);
  let { decodedToken } = useJwt(token);
  if (decodedToken) {
    redirectPage("/admin");
  }
  const [email, setEmail] = useState("");
  const [password, Setpassword] = useState("");
  const [responseMessage, SetResponse] = useState("");
  const [tokenVerify, setToken] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const LoggedIn = async () => {
    await axios
      .post("http://localhost:3000/admin/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response);

        let tokenVerify = localStorage.setItem("token", response.data.token);
        setToken(tokenVerify);
        redirectPage("/admin");
      })
      .catch((err) => {
        console.log(err);
        SetResponse(err.response.data);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">
                Sign In
              </h5>
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    onChange={(e) => Setpassword(e.target.value)}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="rememberPasswordCheck"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="rememberPasswordCheck"
                  >
                    Remember password
                  </label>
                </div>
                <div className="d-grid">
                  <button
                    className="btn btn-primary btn-login text-uppercase fw-bold"
                    type="submit"
                    onClick={LoggedIn}
                  >
                    Sign in
                  </button>
                </div>
                <hr className="my-4" />
                <div className="d-grid mb-2">
                  <h4>{responseMessage}</h4>
                  <p>this is test admin</p>
                  <p>email:anasmemon@gmail.com || password:anas123</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
