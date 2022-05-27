import React from 'react';
import banner1 from '../../Images/Banner image/banner1.jpg'
import banner2 from '../../Images/Banner image/banner2.jpg'
import banner3 from '../../Images/Banner image/banner3.jpg'
import banner4 from '../../Images/Banner image/banner4.jpg'
import banner5 from '../../Images/Banner image/banner5.jpg'
import banner6 from '../../Images/Banner image/banner6.jpg'
import banner7 from '../../Images/Banner image/banner7.jpeg'

const Banner = () => {
    return (
        <div>
            <div class="carousel carousel-end rounded-box">
  <div class="carousel-item">
    <img src={banner1} className='h-80' alt="Drink" />
  </div> 
  <div  class="carousel-item">
    <img className='h-80' src={banner2} alt="Drink" />
  </div> 
  <div class="carousel-item">
    <img className='h-80' src={banner3} alt="Drink" />
  </div> 
  <div class="carousel-item">
    <img className='h-80' src={banner5} alt="Drink" />
  </div> 
  <div class="carousel-item">
    <img className='h-80' src={banner1} alt="Drink" />
  </div> 
  <div class="carousel-item">
    <img className='h-80' src={banner2} alt="Drink" />
  </div> 
  <div class="carousel-item">
    <img className='h-80' src={banner3} alt="Drink" />
  </div>
</div>
        </div>
    );
};

export default Banner;