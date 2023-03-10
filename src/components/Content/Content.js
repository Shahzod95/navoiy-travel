import { useRef, useState, useEffect } from "react";
import bgImg from "../../assets/Images/book_experents.jpg";
import bgVideo from "../../assets/Video/navoi_travel.mp4";
import { FiPlayCircle } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import content_img from "../../assets/Images/content.png";

const Content = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [iconDisplay, setIconDisplay] = useState(true);
  const videoRef = useRef();
  const handlePlay = () => {
    setIconDisplay(false);
    videoRef.current.play();
  };
  // const videoPlay = () => {
  //   if (window.scrollY >= 600) {
  //     setIconDisplay(false);
  //     videoRef.current.play();
  //   }
  // };
  // useEffect(() => {
  //   videoPlay();
  //   window.addEventListener("scroll", videoPlay);
  // });

  const handlePause = () => {
    setIconDisplay(true);
    videoRef.current.pause();
  };
  console.log(window.scrollY);
  return (
    <div className="content">
      <img className="content__img" src={content_img} alt={`content_image`} />
      <div className="content__head">
        <div className="content__head-container">
          <h1 className="text-center content-event-title">EVENT TITLE</h1>
          <h2 className="text-center">General information</h2>
          <p className="text-justify">
            Arriving in a new country, everybody wants to feel the national
            colour of this or that country. So, one component that gives
            Uzbekistan a special ethnic flavour is Uzbek cuisine. It is an
            impossible task for a tourist to fully enjoy the Uzbek feast. The
            rich list of Uzbek dishes is amazing the untrained imagination of
            the traveler. Several nourishing Uzbek national dishes for a meal is
            the common hospitality for the Uzbek man. If you are eager to know
            Uzbek culture, taste the Uzbek cooking. A variety of Uzbek national
            dishes impresses with its unusual quantity and amazing taste.
            Everyone who has been in Uzbekistan, is immediately known such
            dishes as Uzbek pilaf, samsa, shashlik, manti, shurpa, lagman,
            khanum and many others. Arriving in a new country, everybody wants
            to feel the national colour of this or that country. So, one
            component that gives Uzbekistan a special ethnic flavour is Uzbek
            cuisine. It is an impossible task for a tourist to fully enjoy the
            Uzbek feast. The rich list of Uzbek dishes is amazing the untrained
            imagination of the traveler. Several nourishing Uzbek national
            dishes for a meal is the common hospitality for the Uzbek man. If
            you are eager to know Uzbek culture, taste the Uzbek cooking. A
            variety of Uzbek national dishes impresses with its unusual quantity
            and amazing taste. Everyone who has been in Uzbekistan, is
            immediately known such dishes as Uzbek pilaf, samsa, shashlik,
            manti, shurpa, lagman, khanum and many others. Arriving in a new
            country, everybody wants to feel the national colour of this or that
            country. So, one component that gives Uzbekistan a special ethnic
            flavour is Uzbek cuisine. It is an impossible task for a tourist to
            fully enjoy the Uzbek feast. The rich list of Uzbek dishes is
            amazing the untrained imagination of the traveler. Several
            nourishing Uzbek national dishes for a meal is the common
            hospitality for the Uzbek man. If you are eager to know Uzbek
            culture, taste the Uzbek cooking. A variety of Uzbek national dishes
            impresses with its unusual quantity and amazing taste. Everyone who
            has been in Uzbekistan, is immediately known such dishes as Uzbek
            pilaf, samsa, shashlik, manti, shurpa, lagman, khanum and many
            others.
          </p>
        </div>
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide style={{ height: "80vh" }}>
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt={`carusel_image`}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
          <SwiperSlide style={{ height: "80vh" }}>
            <img
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              alt={`carusel_image`}
              sstyle={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
          <SwiperSlide style={{ height: "80vh" }}>
            <img
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              alt={`carusel_image`}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
          <SwiperSlide style={{ height: "80vh" }}>
            <img
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              alt={`carusel_image`}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
          <SwiperSlide style={{ height: "80vh" }}>
            <img
              src="https://swiperjs.com/demos/images/nature-5.jpg"
              alt={`carusel_image`}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        </Swiper>
        <div className="w-full h-[100vh] relative pb-6">
          <img
            src={bgImg}
            alt="video_image"
            className={`absolute top-0 w-full h-full bg-cover bg-center ${
              iconDisplay ? "" : "hidden"
            }`}
          />
          <video
            src={bgVideo}
            loop
            muted
            className="w-[100vw] h-full object-cover"
            onClick={handlePause}
            ref={videoRef}
          />

          <FiPlayCircle
            className={`text-white text-8xl absolute top-[45%] hover:text-[#eee] left-[45%] z-10 cursor-pointer ${
              iconDisplay ? "inline" : "hidden"
            }`}
            onClick={handlePlay}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
