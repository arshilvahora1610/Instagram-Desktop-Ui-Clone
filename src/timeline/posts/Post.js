
import React from 'react'
import './Post.css'

function Post({img,username}) {
  return (
    <div className='post'>
      <div className="story">
       <div className="displayStories">
        <img src={img} alt="image" className='profileImg'/>
        
       </div>
       
      </div>
      <div className="username">
        {/* Use a div to wrap the span and apply styles */}
    
          <span>{username}</span>
        
      </div>
      
     
    </div>
  )
}

export default Post
