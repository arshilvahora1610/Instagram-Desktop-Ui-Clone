import React from 'react'
import './Sidenav.css'
import logo from '../images/Logo-Instagram.png';
import home from '../images/house-black-silhouette-without-door.png'
import search from '../images/search.png'
import explore from '../images/explore.png'
import reels from '../images/reel.png'
import messages from '../images/messages.png'
import notification from '../images/notification.png'
import create from '../images/create.png'
import profile from '../images/profile.png'
import threads from '../images/threads.png'
import more from '../images/more.png'
function Sidenav() {
  return (
    <div className='sidenav'>
      
      <img className="sidenav__logo" src={logo} alt="" />
      <div className="sidenav-buttons">
        <div className="side-button">
         <img src={home} className='home' alt="" />
          <b>Home</b>
        </div>
        <div className="side-button">
         <img src={search} className='home' alt="" />
          <span>Search</span>
        </div>
        <div className="side-button">
         <img src={explore} className='home' alt="" />
          <span>explore</span>
        </div>
        <div className="side-button">
         <img src={reels} className='home1' alt="" />
          <span>Reels</span>
        </div>
        <div className="side-button">
        <div class="badge" id="message-badge">6</div>
         <img src={messages} className='home2' alt="" />
         
          <span>Messages</span>
          
        </div>
        <div className="side-button">
         <img src={notification} className='home3' alt="" />
          <span>Notifications</span>
        </div>
        <div className="side-button">
         <img src={create} className='home4' alt="" />
          <span>Create</span>
        </div>
        <div className="side-button">
         <img src={profile} className='home4' alt="" />
          <span>Profile</span>
        </div>
        <div className="side-button2">
        <div class="badge2" id="message-badge2">10</div>
         <img src={threads} className='home6' alt="" />
          <span>Threads</span>
        </div>
        <div className="side-button">
         <img src={more} className='home5' alt="" />
          <span>More</span>
        </div>
      </div>

    </div>
    
  )
}

export default Sidenav
