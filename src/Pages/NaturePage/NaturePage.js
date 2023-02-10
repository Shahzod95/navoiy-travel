import React from 'react'
import Nature from '../../components/Nature/Nature'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const NaturePage = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><Nature nature1={true} text={`Swim  in crystal-clear lakes, climb tall mountains and wander through dreamlike gorges.`} /></SwiperSlide>
                <SwiperSlide><Nature nature2={true} text={'Swim  in crystal-clear lakes, climb tall mountains and wander through dreamlike gorges.'} /></SwiperSlide>
                <SwiperSlide><Nature text={'Swim  in crystal-clear lakes, climb tall mountains and wander through dreamlike gorges.'} /></SwiperSlide>
            </Swiper>
        </div >
    )
}

export default NaturePage
