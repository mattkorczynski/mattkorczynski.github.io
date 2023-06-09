import React from 'react';
import background from './IMG_0532_rs.png';
import './index.css'

const App = () => {
  return (
    <div className = 'bg'>
      <div className = 'linkedin_logo'></div>
      <div className = 'github_logo'></div>
      <div className = 'name'>matt korczynski</div>
      <div className = 'cloud'>
      </div>
      <a href = {'http://mattkorczynski.eu:8052/'}>
        <div className = 'links'>mine master - flp</div>
      </a>
      <a href = {'http://mattkorczynski.eu:8051/'}>
        <div className = 'links_faro'>betri deildin </div>
      </a>
      <a href = {'http://mattkorczynski.eu:8050/'}>
        <div className = 'links_green_house'>greenhouse 71 SE </div>
      </a>
    </div>
  )
}

export default App
