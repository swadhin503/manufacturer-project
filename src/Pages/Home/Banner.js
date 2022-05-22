import React from 'react';
import img1 from '../../images/banner-1.webp'
import img2 from '../../images/banner-2.webp'
import img3 from '../../images/banner-3.webp'

const Banner = () => {
    return (
        <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
                <img src={img1} alt='' class="w-full"/>
               
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                
                <a href="#slide4" class="btn btn-circle">❮</a> 
                <a href="#slide2" class="btn btn-circle">❯</a>  
                </div>
            </div> 
            <div id="slide2" class="carousel-item relative w-full">
                <img src={img2} alt='' class="w-full"/>
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-circle">❮</a> 
                <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" class="carousel-item relative w-full">
                <img src={img3} alt='' class="w-full"/>
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-circle">❮</a> 
                <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>  
         </div>
    );
};

export default Banner;