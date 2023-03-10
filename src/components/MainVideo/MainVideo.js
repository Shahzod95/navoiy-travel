import { useRef, useState, useEffect } from "react";
import bgImg from "../../assets/Images/book_experents.jpg";
import bgVideo from "../../assets/Video/navoi_travel.mp4";
import { FiPlayCircle } from "react-icons/fi";

const MainVideo = () => {
  const [iconDisplay, setIconDisplay] = useState(true);
  // const [bgVideo, setBgVideo] = useState(true);
  const videoRef = useRef();
  const handlePlay = () => {
    setIconDisplay(false);
    videoRef.current.play();
  };
  const videoPlay = () => {
    if (window.scrollY >= 600) {
      setIconDisplay(false);
      videoRef.current.play();
    }
  };
  useEffect(() => {
    videoPlay();
    window.addEventListener("scroll", videoPlay);
  });

  const handlePause = () => {
    setIconDisplay(true);
    videoRef.current.pause();
  };
  return (
    <div className="w-full h-[100vh] relative">
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
  );
};

export default MainVideo;
