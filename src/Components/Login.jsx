import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import logo from "../Assests/Logo.png";
import './login.css'
import { ImFacebook2, ImMail } from 'react-icons/im'
import { FaTwitterSquare } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'


const Login = () => {

  const [phone, setPhone] = useState(null);
  const [otp, setOtp] = useState(null)

  const formSubmit = async(e)=>{
    e.preventDefault()

  }


  return (
    <div className='login'>

      <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        <h2>Welcome to Techarion</h2>
        <p>Please sign-in to your account and start the adventure</p>
       
       <div className="form">
       <form onSubmit={formSubmit}>
          <div className="phone">
            <label htmlFor="">Phone Number</label>
            <input type="number" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
            <button>GET OTP</button>
          </div>

          <div className="otp">
            <label htmlFor="">OTP</label>
             <input type="password" value={otp} onChange={(e)=>{setOtp(e.target.value)}}/>
          </div>

          <button>LOGIN</button>

          <div className="social">

            <ImFacebook2/>
            <FaTwitterSquare/>
            <ImMail/>
            <AiFillGithub/>
          </div>
        </form>
       </div>

    </div>
  )
}

export default Login