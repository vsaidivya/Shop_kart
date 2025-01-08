import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero' >
      <div className='hero-left'>
        <img className='hero-img' src="/Assets/hero_image.png" alt=""/>
      </div>
      <div className='hero-right'>
        <h2>NEW ARRIVALS</h2>
        <img src="/Assets/hand_icon.png" alt=""/>
        <p className='hero-right-text'>Timeless fashion </p>
        <p>for the modern era</p>
        <div className='shop-now'>
        <h2>Shop Now</h2>
        <img src="/Assets/arrow.png" alt=""/>
        </div>
      </div>

    </div>
  )
}

export default Hero
