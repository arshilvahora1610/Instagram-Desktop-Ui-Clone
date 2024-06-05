import React from 'react'
import './Timeline.css'
import Post from './posts/Post'
import profile1 from '../images/profile01.png'
import InstaPost from './posts/InstaPost'
import Suggestions from './Suggestions'
function Timeline() {
  return (
    <div className='timeline'>
     
      <div className="right">
        <div className="timeline__stories">
          <Post img={profile1} username={"arshil.1610"}/>
          <Post img={profile1} username={"_techav.co"}/>
          <Post img={profile1} username={"__nikkhil__"}/>
          <Post img={profile1} username={"mithillesh_"}/>
          <Post img={profile1} username={"jordan_io"}/>
          <Post img={profile1} username={"shanice.17"}/>
          <Post img={profile1} username={"nikita_16"}/>
          <Post img={profile1} username={"alia_bhatt"}/>
          
        </div>
        <div className="timeline__posts">
          <InstaPost/>
          <InstaPost/>
        </div>
      </div>
     
    </div>
  )
}

export default Timeline
