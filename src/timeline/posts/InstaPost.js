import React from 'react'
import './InstaPost.css'
import profileImg from '../../images/profile01.png'
import moreImg from '../../images/more1.png'
import post1 from '../../images/post1.jpg'
import heart from '../../images/notification.png'
import comments from '../../images/comments.png'
import share from '../../images/share.png'
import saved from '../../images/saved.png'
export default function InstaPost() {
  return (
    <div className='instaPost'>
      <div className="profile">
        <div className='pdisplay'>
        <img src={profileImg} alt="" />
        <span>arshil.1610  • 2d</span>
        </div>
        <div className="moreImg">
          <img src={moreImg} alt="" />
        </div>
      </div>
      <div className="mainPhoto">
        <img src={post1} alt="" />
      </div>
      <div className="likeShareDiv">
        <div className="threefunctions">
          <div className='likeCommentShare'>
          <img src={heart} alt="" />
          <img src={comments} alt="" />
          <img src={share} alt="" />
          </div>
          
          <img src={saved} alt="" className='saved'/>
          
        </div>
        <div className="noOfLikes">
          <span><img src={profileImg}/>Liked by the_march_boy_23 and 2,059 others</span>
        </div>
        <div className="usernamepost">
          <b>arshil.1610</b> <span> A beautiful sunset</span>

        </div>
        <div className="comments">
          <span className='curssor'>View all 29 Comments</span>
          <div>
            <input type="text" placeholder='Add a comment...' />
            <hr />
          </div>
        </div>
      </div>

    </div>
  )
}
