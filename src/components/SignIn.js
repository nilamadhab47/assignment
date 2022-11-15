import React from "react";
import logo from "../media/logo.png";
import "./Signin.css";

import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <section className="vh-100">
      <div className="h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6 h-100 left_section">
            {/* <img src={group} className="img-fluid " alt="Phone image" />
            <img src={black} className="img-fluid " alt="Phone image" /> */}
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 mb-5">
            <div className="d-flex flex-row-reverse mb-5">
                <img src={logo} alt="" className="img-fluid w-50" />
            </div>
            <div className="form_text text-center mb-3 side_padding">
                <h2>Welcome Back!</h2>
            </div>
            <form className="side_padding form_wraper">
                <h5 style={{color: "#000"}}>Sign-In</h5>
              <div className="form-outline mb-4">
                <label className="form-label" for="form1Example13" style={{color: "gray"}}>
                  Email address
                </label>
                <input
                  type="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" for="form1Example23" style={{color: "gray"}}>
                  Password
                </label>
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                  />
                  <label className="form-check-label" for="form1Example3">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
                <Link to="/Forgetpassword">Forgot password?</Link>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block w-100"
              >
                Sign in
              </button>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>

              <a
                className="btn btn-primary btn-lg btn-block w-100"
                style={{ backgroundColor: "#fff" }}
                href="#!"
                role="button"
              >
                <FcGoogle />
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
