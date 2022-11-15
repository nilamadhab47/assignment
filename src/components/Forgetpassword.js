import React, {useState} from "react";
import logo from "../media/logo.png"
import "./Forgetpassword.css";
import {useNavigate} from "react-router-dom"




const Forgetpassword = () => {
  const navigate = useNavigate();
const [data , setData] = useState({
  email : "",
  subject : "OTP FOR RESET PASSWORD",
  body : {OTP :Math.floor(Math.random() * (5000 - 1000) + 100)}
})

const handleChange = (e) => {
setData({...data, 
  [e.target.id]: e.target.value,

})

console.log(data)
console.log(data.subject)
console.log(data.body.OTP)
  
}

console.log(data)

const handleSubmit = (e) => {
  e.preventDefault();
  
  setData({...data, 
    [e.target.id]: e.target.value,
  
  })
  localStorage.setItem("OTP", data.body.OTP)
  
  navigate("/otprequest")
}


  return (
    <div className="container">
      <div className="d-flex flex-row-reverse mb-5">
        <img src={logo} alt="" className="img-fluid w-25" />
      </div>
      <div className="card login-form">
        <div className="card-body">
          <h2 className="card-title text-center mb-3">Forget your password?</h2>
          <p className="reset_text text-center">Please enter the Email address associated with the account, And we'll email you a link to reset your password</p>

          <div className="card-text">
            <form>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter your email address"
                  id="email"
                
                  onChange = {handleChange}
                  
                />
              
              </div>

             <button type="submit" className="btn btn-lg btn-primary btn-block w-100"
              style={{fontSize: "20px"}}  onClick = {handleSubmit}>
                 <a href="mailto:`{data.email}`?subject={subject}&body={body}">Reset Password </a>
              </button>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>
              <a
                className="btn btn-primary btn-lg btn-block w-100"
                style={{ backgroundColor: "#fff", color: "gray", border: "none", fontSize: "20px", marginTop: "-13px" }}
                href="#!"
                role="button"
              >
                Back
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgetpassword;
