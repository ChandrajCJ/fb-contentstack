import React from 'react'
import "./LoginPage.css"
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        <div className='LoginPage'>
            <div className="facebook">
                <div className="fbtext">
                    facebook
                </div>
                <div className="title">
                    Facebook helps you connect and share<br></br> with the people in your life.
                </div>
            </div>
            <div className="right">
                <div className="LoginContainer">
                    <div className="Logindetails">
                        <input required className='email' type="email" placeholder='Email Address or Phone Number' name="" id="" /><br></br>
                        <input required className='password' type="password" placeholder='Password' name="" id="" /><br></br>
                        <Link to="/Main"><button className='btn'>
                            Login
                        </button></Link>
                    </div>
                    <div className="forgetpassword">
                        <a href="forgetpassword">Forgot Password</a>
                        <br />
                        <button className='btns'>
                            Create New Account
                        </button>
                    </div>
                    <br />
                    
                </div>
                <div className="page" style={{textAlign:"center"}}><a href="createpage">Create a page </a>for a celebrity, brand or business</div>
            </div>
        </div>
    )
}

export default LoginPage