import React, { useState } from "react";
import data from "../../db";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const NatureSlider = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {data.naturedata.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <div
              className={`w-[100vw] h-[100vh] ${
                item.green
                  ? "bg-[#279768]"
                  : item.blue
                  ? "bg-[#25979E]"
                  : item.orenge
                  ? "bg-[#F2A761]"
                  : ""
              } p-[4rem_7rem] flex items-center`}
            >
              <div className="float-left justify-center">
                <img src={item.natureWord} alt={item.text} />
                <p className="w-[28rem] mt-[12px] font-normal text-normal leading-[2rem] text-[#fff] text-[26px]">
                  {item.text}
                </p>
              </div>
              <div className="ml-[10rem]">
                <img
                  src={item.image}
                  className="w-[500px] h-[400px]"
                  alt={item.text}
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default NatureSlider;
