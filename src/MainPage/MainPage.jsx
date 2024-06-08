import React from 'react'
import "./MainPage.css"
import {AiOutlineSearch, AiFillHome, AiOutlineWallet} from 'react-icons/ai'
import {MdOndemandVideo} from 'react-icons/md'
import {FaRegFlag,FaUsers,FadumiconsCircle, FaFacebookMessenger, FaBell, FaToolbox} from 'react-icons/fa'
import MainFeed from '../MainFeed/MainFeed'

const MainPage = () => {
  return (
    <div className='MainPage'>
        <div className="header">
            <div className="firstHeader">
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
                    <div className='navigicons'><AiFillHome fontsize="3rem" color="1877F2"/></div>
                    <div  className='navigicons'><FaRegFlag fontsize="3rem" /></div>
                    <div className='navigicons'><MdOndemandVideo fontsize="3rem" /></div>
                    <div className='navigicons'><FaUsers fontsize="3rem" /></div>
                    <div className='navigicons'><AiOutlineWallet fontsize="3rem" /></div>

                </div>
            </div>
            <div className="third-header">
                
                <div className="dumicons">
                    <FaToolbox fontsize="2.3rem"/>
                </div>
                <div className="dumicons">
                    <FaFacebookMessenger fontsize="2.3rem"/>
                </div>
                <div className="dumicons">
                    <FaBell fontsize="2.3rem"/>
                </div>
                <div className="dumiconss">
                    <img src="/images/1.jpg" alt="" className='dumiconssImg' />
                </div>
            </div>
        </div>
        <MainFeed/>
    </div>
  )
}

export default MainPage