import React, { useState } from "react";
import "./RequestSend.css";
import { useNavigate } from "react-router-dom";

const RequestSend = () => {
  const navigate = useNavigate();
  const OTP = localStorage.getItem("OTP");
  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    setOtp({ [e.target.id]: e.target.value });
  };
  console.log(otp);

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/success");
  };
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="card col-12 col-md-8 col-lg-7 p-4">
            <div className="card-body">
              <h4 className="card-title text-center">
                Request Send Successfully
              </h4>
              <p className="card-text text-center">
                We have sent a six digit confermation otp to your email. Please
                Enter the otp below.
              </p>
              <div className="card-text text-center mt-5">
                <form action="" className="otp-form">
                  <input
                    type="text"
                    id="otp"
                    className="form-control form-control-md"
                    placeholder="Write OTP"
                    onChange={handleChange}
                  />

                  {OTP === otp ? (
                    <div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form1Example23"
                          className="form-control form-control-md"
                          placeholder="New Password"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form1Example23"
                          className="form-control form-control-md"
                          placeholder="Confirm New Password"
                        />
                      </div>
                    </div>
                  ) : (
                    <h1></h1>
                  )}

                  <div className="d-block mt-4">
                    <button
                      className="btn btn-primary w-100"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Change Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestSend;
