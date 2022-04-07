import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Data from '../Data';
import { useState } from 'react';
import Home from './Home';
import { Navigation} from 'swiper';
import 'swiper/css/navigation';

export default function Slider()
{
    const [info,setInfo]= useState(Data[0].home)
    return(
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Navigation]}
      navigation
    >
      {
        info.map((box,index)=><SwiperSlide><Home {...box} key={index}/></SwiperSlide>)
      }
    </Swiper>
    )
}