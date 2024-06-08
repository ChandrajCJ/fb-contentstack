import React from 'react'
import './MainFeed.css'
import { FaAngleDown, FaFacebookMessenger, FaFontAwesomeFlag, FaGrin, FaLayerGroup, FaMedrt, FaSave, FaSearch, FaSuitcase, FaUserFriends } from 'react-icons/fa'
import { MdMoreHoriz, MdVideoCall } from 'react-icons/md'
import {AiFillFileImage} from 'react-icons/ai'
const MainFeed = () => {
    return (
        <div className='Main'>
            <div className="Rside">
                <div className="Profile">
                    <img src="/images/1.jpg" alt="" />
                    Chandraj N
                </div>
                <div className="Pro">
                    <FaUserFriends color='blue' fontSize="1.5rem" />
                    <div className="">Find Friends</div>
                </div>
                <div className="Pro">
                    <FaMedrt color='green' fontSize="1.5rem" />
                    <div className="">Memories</div>
                </div>
                <div className="Pro">
                    <FaLayerGroup color='blue' fontSize="1.5rem" />
                    <div className="">Groups</div>
                </div>
                <div className="Pro">
                    <FaSuitcase color='green' fontSize="1.5rem" />
                    <div className="">Events</div>
                </div>
                <div className="Pro">
                    <FaFacebookMessenger color='blue' fontSize="1.5rem" />
                    <div className="">Messenger</div>
                </div>
                <div className="Pro">
                    <FaSave color='green' fontSize="1.5rem" />
                    <div className="">Saved</div>
                </div>
                <div className="Pro">
                    <FaAngleDown color='gray' fontSize="1.5rem" />
                    <div className="">See More</div>
                </div>
                <br />
                <div className='shortcutsheader'>Your Shortcuts</div>
                <div className="shortcuts">
                    <img src="/images/2.jpg" alt="" />
                    Tourism
                </div>
                <div className="shortcuts">
                    <img src="/images/3.jpg" alt="" />
                    Gaming
                </div>
                <div className="Pro">
                    <FaAngleDown color='gray' fontSize="1.5rem" />
                    <div className="">See More</div>
                </div>
            </div>
            <div className="MainArea">
                <div className="addStory">
                    <div className="Story">
                        <img src="/images/1.jpg" alt="" style={{height:"40px", width:"40px", borderRadius:"50%"}} />
                        <br /><br /><br /><br /><br /><br />
                        Chandraj
                    </div>
                    <div className="Story">
                        <img src="/images/2.jpg" alt="" style={{height:"40px", width:"40px", borderRadius:"50%"}} />
                        <br /><br /><br /><br /><br /><br />
                        Sooraj
                    </div>
                    <div className="Story">
                        <img src="/images/3.jpg" alt="" style={{height:"40px", width:"40px", borderRadius:"50%"}} />
                        <br /><br /><br /><br /><br /><br />
                        Tushar
                    </div>
                    <div className="Story">
                        <img src="/images/4.jpg" alt="" style={{height:"40px", width:"40px", borderRadius:"50%"}} />
                        <br /><br /><br /><br /><br /><br />
                        Kathir
                    </div>
                    {/* <div className="message">
                        <div className="text">
                            <div className="post">
                                <img src="/images/4.jpg" alt="" />
                                <input type="mind" placeholder='Whats on your mind?' name="" id="" />
                                <div className="Call">
                                    <div className="ico">
                                        <div className="icone">
                                            <MdVideoCall fontSize="1.5rem" color='red'/>
                                            <div>Live</div>
                                        </div>
                                        <div className="icone">
                                            <AiFillFileImage fontSize="1.5rem" color='green'/>
                                            <div>Photo</div>
                                        </div>
                                        <div className="icone">
                                            <FaGrin fontSize="1.5rem" color='orange'/>
                                            <div>Feelings/activities</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="lside">
                {/* <div className="Contact">
                    
                </div> */}
            </div>
            <div className="concise">
                <div className="chaticon">
                    <div className="Contacts">
                        Contacts
                    </div>
                    <div className="icons">
                        <FaSearch fontSize="1.2rem" />
                    </div>
                    <div className="icons">
                        <MdMoreHoriz fontSize="1.2rem" />
                    </div>
                </div>
                <div className="Profilee">
                    <img src="/images/1.jpg" alt="" />
                    Chandraj N
                </div>
                <div className="Profilee">
                    <img src="/images/2.jpg" alt="" />
                    Sooraj
                </div>
                <div className="Profilee">
                    <img src="/images/3.jpg" alt="" />
                    Tushar
                </div>
                <div className="Profilee">
                    <img src="/images/4.jpg" alt="" />
                    Kathir
                </div>
                <div className="Profilee">
                    <img src="/images/5.jpg" alt="" />
                    Tharni
                </div>
            </div>
        </div>
    )
}

export default MainFeed