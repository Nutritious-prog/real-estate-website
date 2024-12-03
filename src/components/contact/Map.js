import React from 'react'

import './Map.css'
function Map() {
  return (
    <div className='map-responsive'>
        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2458.7875780318855!2d20.1290483!3d51.956064999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47196053478cb007%3A0x7293ddf58a035721!2sZwierzyniecka%205B%2C%2096-100%20Skierniewice!5e0!3m2!1spl!2spl!4v1688050693346!5m2!1spl!2spl" width="1440" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map
