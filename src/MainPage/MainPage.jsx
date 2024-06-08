import React from 'react'
import "./MainPage.css"
import {AiOutlineSearch, AiFillHome, AiOutlineWallet} from 'react-icons/ai'
import {MdOndemandVideo} from 'react-icons/md'
import {FaRegFlag,FaUsers,FaPlusCircle, FaFacebookMessenger, FaBell, FaToolbox} from 'react-icons/fa'
import MainFeed from '../MainFeed/MainFeed'

const MainPage = () => {
  return (
    <div className='MainPage'>
        <div className="header">
            <div className="first-header">
                <div className="logo">
                    <img src="/images/fblogo.png" alt="" style={{height:"50px", borderRadius:"50%"}}/>
                </div>
                <div className="search">
                <AiOutlineSearch style={{height:"4rem"}}/>
                <input type="search" placeholder='Search Facebook' name="" id="" />
                </div>
            </div>
            <div className="middle-header">
                <div className="icon">
                    <div className='navicons'><AiFillHome fontsize="3rem" color="1877F2"/></div>
                    <div  className='navicons'><FaRegFlag fontsize="3rem" /></div>
                    <div className='navicons'><MdOndemandVideo fontsize="3rem" /></div>
                    <div className='navicons'><FaUsers fontsize="3rem" /></div>
                    <div className='navicons'><AiOutlineWallet fontsize="3rem" /></div>

                </div>
            </div>
            <div className="third-header">
                
                <div className="plus">
                    <FaToolbox fontsize="2.3rem"/>
                </div>
                <div className="plus">
                    <FaFacebookMessenger fontsize="2.3rem"/>
                </div>
                <div className="plus">
                    <FaBell fontsize="2.3rem"/>
                </div>
                <div className="Pluss">
                    <img src="/images/1.jpg" alt="" className='plussImg' />
                </div>
            </div>
        </div>
        <MainFeed/>
    </div>
  )
}

export default MainPage