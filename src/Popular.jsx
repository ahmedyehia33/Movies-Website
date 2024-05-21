import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css';
import './popular.css';
import SwiperCore, { Breakpoints } from 'swiper';

const Popular = () => {
    
    

  return ( 
     <div className="swiper-container">
  <h1 className="heading">Popular Movies</h1>
  <Swiper
      loop={true}
      modules={[Navigation]}
      navigation
      allowMouseEvents={false}
      spaceBetween={40}
      
      
      
      breakpoints={{
        // Define breakpoints for responsive design
        
        480: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
      }
    }}
  >
      
      <div className="slides-container">
      <SwiperSlide>
        <div className="box box-1">
        <div className="movie-text">
        <div> <p>SPIDER-MAN no way home <br/><span className='category'>Action</span></p></div>
        <div className='play-icon'><a href="#" target="_blank" ><i className="fa-solid fa-play"></i></a>
        </div>
        </div>
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="box box-2">
        <div className="movie-text">
        <div> <p>Jungle Cruise<br/><span className='category'>Family/Adventure</span> </p></div>
        <div className='play-icon'><a href="#" target="_blank" ><i className="fa-solid fa-play"></i></a>
        </div>
        </div>
        </div>
        </SwiperSlide>
      <SwiperSlide><div className="box box-3">
         <div className="movie-text">
      <div> <p>Loki <br/><span className='category'>Action</span></p></div>
        <div className='play-icon'><a href="#" target="_blank" ><i className="fa-solid fa-play"></i></a>
        </div>
        </div>
        </div>
        </SwiperSlide>
      <SwiperSlide><div className="box box-4"> 
      <div className="movie-text">
           <div> <p>Squid Game <br/><span className='category'>Thrill</span></p></div>
        <div className='play-icon'><a href="#" target="_blank" ><i className="fa-solid fa-play"></i></a>
        </div>
        </div>
        </div>
        </SwiperSlide>
      <SwiperSlide><div className="box box-5">
         <div className="movie-text">
          <div> <p>The Falcon and the Winter Soldier <br/><span className='category'>Action</span></p></div>
          <div className='play-icon'><a href="#" target="_blank" ><i className="fa-solid fa-play"></i></a>
        </div>
        </div>
        </div>
        </SwiperSlide>
      <SwiperSlide><div className="box box-6"> <div className="movie-text">
      <div> <p>Hawkeye<br/><span className='category'>Action</span></p></div>
        <div className='play-icon'><a href="#" target="_blank" ><i className="fa-solid fa-play"></i></a>
        </div>
        </div>
        </div>
        </SwiperSlide>
      <SwiperSlide><div className="box box-7"> <div className="movie-text">
        <p>Agents of S.H.I.E.L.D. <br/><span className='category'>Action</span></p>
        <div className='play-icon'><a href="#" target="_blank" ><i className="fa-solid fa-play"></i></a>
        </div>
        </div>
        </div>
        </SwiperSlide>
      <SwiperSlide><div className="box box-8"> <div className="movie-text">
        <p>The Flash: Armageddon<br/><span className='category'>Action</span></p>
        <div className='play-icon'><a href="#" target="_blank" ><i className="fa-solid fa-play"></i></a>
        </div>
        </div>
        </div>
        </SwiperSlide>
    
      </div>
  </Swiper>
</div>
);
};

export default Popular;