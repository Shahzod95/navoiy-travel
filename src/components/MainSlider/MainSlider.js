import Nature from "../../assets/Images/travel2.png";
import Sumbol from "../../assets/Images/sumbol.png";
import Sumbol2 from "../../assets/Images/sumbol2.png";
import { useEffect } from "react";

const MainSlider = () => {
  useEffect(() => {
    const onScroll = (event) => console.info("scrolling", event);

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <div className="header text-center">
        <p className="text-[4.25rem] pt-[5rem] leading-[5rem] text-[#fff]">
          Unforgettable travel experience <br /> in Navoi city
        </p>
        <img className="m-[2rem_auto]" src={Nature} />
        <img className="m-[15rem_auto] cursor-pointer" src={Sumbol} />
      </div>
      <div className="header-2 text-center">
        <img
          className="pt-[15rem] m-[0rem_auto] cursor-pointer"
          src={Sumbol2}
        />
        <p className="font-normal text-[3.125rem] leading-[3.5rem] text-[#fff] text-[center]">
          Watch Navoi <br /> in Action
        </p>
      </div>
    </div>
  );
};

export default MainSlider;
