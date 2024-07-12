import React from 'react'
import{Link} from"react-router-dom"
import"./Navbar.css"
const Navbar = () => {
  return (<div className="merge">
    <div className='nav'>
         <h3 className='navhead'> Clean Shave <span className="two">Barbershop</span></h3>
         <div className="navlink">
         <Link to="/" className='linknav'>Home</Link>
         <Link to="/service"className='linknav'>Service</Link>
         <Link to="/about"className='linknav'>About</Link>
         <Link to="/contact"className='linknav'>Contact</Link></div>
         </div></div>
  )
}

export default Navbar