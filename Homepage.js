import React from 'react'
import './Homepage.css'
import Snav from './navigate/Snav'
import Timeline from './timeline/Timeline'

function Homepage() {
  return (
    <div className='homepage'>
      <div className='homepage__nav'>
        <Snav/>
      </div>
      <div className='homepage__timeline'>
        <Timeline/>
      </div>
    </div>

  )
}

export default Homepage
