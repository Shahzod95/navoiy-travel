import { useEffect } from "react";
import Sarmishsoy from "../../assets/Images/sarmishsoy.jpg";
import Nature from "../../assets/Images/travel2.png";
import Sumbol from "../../assets/Images/sumbol.png";
import Sumbol2 from "../../assets/Images/sumbol2.png";

const MainSlider = () => {
  return (
    <div className="header text-center relative w-full h-full">
      <img src={Sarmishsoy} alt="sarmishsoy" className="w-full h-[100vh]" />
    </div>
  );
};

export default MainSlider;
