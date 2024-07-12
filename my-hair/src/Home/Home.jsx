import React from 'react'
import { Link } from 'react-router-dom'
import"./Home.css"
import Footer from '../Component/Footer'
const Home = () => {
  return (
    <div className='homepage'>
        <div className="bgimages">
            <img src="./ServiceImage/BarberImg2.JPG" alt="Not Found"className='bgimage' />
        </div>
        <h1 className='subtitle' >CleanShave Barbershop</h1>
        <h2 className='title'>Our Hairstyle makes you look elegance</h2>
        <div className="class">
        <section className="two">
        <div className="lefthome">
            <img src="./big/pexels-thgusstavo-santana-2040189.JPG" alt="Not found" className='homeimage'/>
        </div>
        <div className="righthome">
            <h4 className='caption'>About our company</h4>
            <h5 className='captionhead'>52 YEARS OF EXPERIENCE IN HAIR CUT!</h5>
            <p className='homepara'>Brook presents your services with flexible, convenient and cdpoe layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfreplication of the designers is intended.

Brook presents your services with flexible, convefnient and ent anipurpose layouts. You can select your favorite.</p>
        </div>
        </section>
        <section className='three'><div className="h1">
            <h1>Regain your Confidence<br/>Today</h1></div>
            <div className="button">
            <Link to='/service'><button className='homelink'>Make appointment</button></Link>
            </div>
        </section></div>
     
     
        <Footer/>
    </div>
  )
}

export default Home
