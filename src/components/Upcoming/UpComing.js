import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

const UpComing = () => {
  return (
    <div>
      <div className="w-full bg-[#F6F6F6] pt-[2rem] text-center">
        <p className="pt-[1rem] up-class font-normal text-[50px] leading-[59px] text-[#1A4D65] text-center">
          Upcoming Events
        </p>
      </div>
      <div className="h-[80vh] w-4/5 mx-auto">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="w-2/6">
            <img
              className="w-[18rem]"
              src="https://swiperjs.com/demos/images/nature-1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="w-2/6">
            <img
              className="w-[18rem]"
              src="https://swiperjs.com/demos/images/nature-2.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="w-2/6">
            <img
              className="w-[18rem]"
              src="https://swiperjs.com/demos/images/nature-3.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="w-2/6">
            <img
              className="w-[18rem]"
              src="https://swiperjs.com/demos/images/nature-4.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="w-2/6">
            <img
              className="w-[18rem]"
              src="https://swiperjs.com/demos/images/nature-5.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="w-2/6">
            <img
              className="w-[18rem]"
              src="https://swiperjs.com/demos/images/nature-6.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="w-2/6">
            <img
              className="w-[18rem]"
              src="https://swiperjs.com/demos/images/nature-7.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="w-2/6">
            <img
              className="w-[18rem]"
              src="https://swiperjs.com/demos/images/nature-8.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="w-2/6">
            <img
              className="w-[18rem]"
              src="https://swiperjs.com/demos/images/nature-9.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default UpComing;
