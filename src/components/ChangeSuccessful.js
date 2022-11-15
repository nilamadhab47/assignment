import React from 'react'
import logo from "../media/logo.png"

const ChangeSuccessful = () => {
  return (
    <div className="card" style="width: 18rem;">
        <img src={logo} className="card-img-top" alt="..." />
        <div className="card-body align-items-center">
            <h2 className="card-title text-center">Password Change Successfully</h2>
            <a href="#" className="btn btn-lg btn-primary w-100">Go TO Homepage</a>
        </div>
    </div>
  )
}

export default ChangeSuccessful