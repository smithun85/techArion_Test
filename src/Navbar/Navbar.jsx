import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assests/Logo.png";
import './Navbar.css'


const Navbar = () => {

  const navigate = useNavigate()

  const popup = () => {
    navigate('/login')
  }


  return (
    <>
     <div className="nav">
     <div className="left">
     
        <Link to="login">LOGIN</Link>
        <Link to="/reservation">RESERVATION</Link>
        <Link to="/privateParty">PRIVATE PARTIES</Link>
      </div>

      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="right">
        <Link to="/events">EVENTS</Link>
        <Link to="/contacts">CONTACTS</Link>
        <Link to="/aboutUs">ABOUT US</Link>
      </div>
     </div>
    </>
  );
};

export default Navbar;
