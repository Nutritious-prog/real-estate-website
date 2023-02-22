import React from 'react'

import './Map.css'
function Map() {
  return (
    <div className='map-responsive'>
        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2458.7791278749132!2d20.125928815680115!3d51.95621908560869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719605361b1c6cb%3A0xb45dcc0f5ddb4ddd!2sZwierzyniecka%207%2C%2096-100%20Skierniewice!5e0!3m2!1spl!2spl!4v1677079152406!5m2!1spl!2spl" width="1440" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map