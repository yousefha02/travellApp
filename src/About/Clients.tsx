import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Data from '../Data';
import { useState } from 'react';
import Client from './Client';

export default function Clients()
{
    const [info,setInfo] = useState(Data[0].clients)

    return(
    <div className='bg-light_bg'>
    <div className='py-10 container mx-auto xl:px-10 text-center'>
      <h2 className='uppercase font-bold text-4xl mb-8'>Clients Reviews</h2>
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {
        info.map((box,index)=><SwiperSlide><Client {...box} key={index}/></SwiperSlide>)
      }
    </Swiper>
    </div>
    </div>
    )
}