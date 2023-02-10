import React from 'react'
import natureData from '../../naturedata'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Nature = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {
                natureData.map((item) => {
                    return <SwiperSlide>
                        <div key={item.id} className={`w-[100vw] h-[100vh] ${item.green ? 'bg-[#279768]' : item.blue ? 'bg-[#25979E]' : item.orenge ? 'bg-[#F2A761]' : ''} p-[4rem_7rem] flex items-center`}>
                            <div className='float-left justify-center'>
                                <img src={item.natureWord} />
                                <p className='w-[28rem] mt-[12px] font-normal text-normal leading-[2rem] text-[#fff] text-[26px]'>{item.text}</p>
                            </div>
                            <div className='ml-[10rem]'>
                                <img src={item.image} className='w-[500px] h-[550px]' />
                            </div>
                        </div>
                    </SwiperSlide>
                })
            }
        </Swiper>
    )
}

export default Nature
