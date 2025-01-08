import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src="/Assets/logo_big.png" alt=""/>
        <p>SHOPKART</p>
      </div>
      <ul className='list-items'>
        <li>Company</li>
        <li>Offices</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className='social-media'>
        <img src="/Assets/instagram_icon.png" alt=""/>
        <img src="/Assets/pinterest_icon.png" alt=""/>
        <img src="/Assets/whatsapp_icon.png" alt=""/>
      </div>
    </div>
  )
}

export default Footer
