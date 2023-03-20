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
        <div className = 'links'>m m - data analysis</div>
      </a>
      <a href = {'http://188.210.223.71:8051/'}>
        <div className = 'links_faro'>betri deildin </div>
      </a>
    </div>
  )
}

export default App
