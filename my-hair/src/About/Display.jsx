import React from 'react'
import"./Display.css"
import { Link } from 'react-router-dom'
const Display = () => {
  return (
    <div className='display'>
        <img src="./big/pexels-cottonbro-studio-3993293.jpg" alt="non-exist"className='displayimage' />
        <div className="content"><p className="displayhead">Have a date with us to transform you to be the cuttest in town</p>
      <Link to="/service"><button  className='btwn'>Book Now</button></Link>  </div>
    </div>
  )
}

export default Display