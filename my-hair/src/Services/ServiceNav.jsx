import React from 'react'
import { Link } from 'react-router-dom'
import"./ServiceNav.css"
const ServiceNav = () => {
  return (
    <div className='servicepage'>
      <div className="servicesbg">
        <video src="./ServiceImage/massagevideo.mp4"style={{maxHeight:"10%",height:"5%"}} alt="Video not found,Kindly reload...."loop autoPlay muted className='bgservice' />
      </div>
      <div className="mergeservice">
      <div className="servicenav">
        <Link to="/massage"className='servicelink'>Massage</Link>
        <Link to="/barber"className='servicelink'>Barber</Link>
        <Link to="/salon"className='servicelink'>Salon</Link>
             </div></div>
    </div>
    
  )
}

export default ServiceNav