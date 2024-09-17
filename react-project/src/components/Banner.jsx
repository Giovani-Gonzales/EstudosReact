import React from 'react'

import './BannerStyled.css'

const Banner = () => {
  return (
    <div className='BodyBanner'>
        <div className='overlay'></div>
        <div className='container content'>
            <h1>LOREM IPSUM</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odio inventore eaque repellat reiciendis eius totam hic provident, culpa, molestiae quas accusantium laborum autem nostrum atque sapiente suscipit necessitatibus fugiat?</p>
            <button>Test</button>
        </div>
    </div>
  )
}

export default Banner