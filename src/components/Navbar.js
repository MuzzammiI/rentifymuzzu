import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileDropDown from "./ProfileDropDown";
const Navbar = () => {
  const auth = localStorage.getItem("user");
  const email = localStorage.getItem("email")
  const navigate = useNavigate();
  
  const LogoutHandle=()=>{
    localStorage.clear();
    return navigate("/login");
  }
  

  return (
    <>
      <div className="nav-container fixed-top" >
        {auth ? (
          <div className="left">
            <ul>
            <li>
                <Link to="/showproperty">Property</Link>
              </li>
              <li>
                <Link to="/addproperty">AddProperty</Link>
              </li>
              
              <li>
                <Link to="/register" onClick={LogoutHandle}>Logout</Link>
              </li>
          <li>
            <ProfileDropDown name="name" email="example@gmail.com"/>
          </li>
            </ul>
          </div>
        ) : (
          <div className="right">
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
          
        )}
      </div>
    </>
  );
};

export default Navbar;
