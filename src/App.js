import React from 'react';
import background from './IMG_0532_rs.png';
import './index.css'

const App = () => {
  return (
    <div className = 'bg'>
      <div className = 'name'>matt korczynski</div>
      <div className = 'cloud'>
      </div>
      <a href = {'http://188.210.223.71:8050/'}>
        <div className = 'links'>mine master - flp</div>
      </a>
      <a href = {'http://188.210.223.71:8051/'}>
        <div className = 'links_faro'>betri deildin </div>
      </a>
      <a href = {'http://188.210.223.71:8051/'}>
        <div className = 'links_green_house'>greenhouse 71 SE </div>
      </a>
    </div>
  )
}

export default App
