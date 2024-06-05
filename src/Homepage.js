import React from 'react'
import Sidenav from './navigation/Sidenav'
import Timeline from './timeline/Timeline'
import './Homepage.css'
import Suggestions from './timeline/Suggestions'
function Homepage() {
  return (
    <div className='homepage'>
      <div className="homepage--nav">
        <Sidenav/>
      </div>
      <div className="homepage--timeline">
        <Timeline/>
        
      </div>
      <div className="homepage--suggestions">
       <Suggestions/>
      </div>
    </div>
  )
}

export default Homepage
