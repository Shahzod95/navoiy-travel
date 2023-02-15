import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import PlaceCard from "../PlaceCard";
import data from "../../db";
import { useState } from "react";

const BestPlaces = () => {
  const [placeBg, setPlaceBg] = useState(1);

  const mouseEnterHandler = (id) => {
    setPlaceBg(id);
  };
  return (
    <div className={`w-full p-[50px_0] text-center`}>
      <img
        className={`w-full h-full absolute bg-cover bg-center`}
        src={data.natures[placeBg].img_url}
        alt={data.natures[placeBg].description}
      />
      <div className="w-full h-full backdrop-blur-sm">
        <p className="up-class font-normal text-[50px] my-[25px] leading-[59px] text-[#FCCF06]">
          Best places to visit
        </p>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper px-10 pb-14 mx-auto"
        >
          {data.natures.map((item, idx) => {
            return (
              <SwiperSlide
                key={idx}
                onMouseEnter={() => mouseEnterHandler(idx)}
              >
                <PlaceCard item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default BestPlaces;
