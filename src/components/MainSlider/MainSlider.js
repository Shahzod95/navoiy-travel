import Logo from "../../assets/Images/logo2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/Images/mainslider/mainslider-image1.png";
import image2 from "../../assets/Images/mainslider/mainslider-image2.png";
import image3 from "../../assets/Images/mainslider/mainslider-image3.png";
import image4 from "../../assets/Images/mainslider/mainslider-image4.png";
import Typed from "react-typed";

const MainSlider = () => {
  return (
    <header className="header">
      <div className="header__left-side">
        <img src={Logo} alt="logo" className="w-[16rem] d-block" />
        <Typed
          strings={[
            "Say yes to new\n" + "adventures",
            "Search for categories",
            "Search for brands",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
          showCursor={false}
        >
          <h2
            className={
              "header-title text-color-main-blue text-[2rem] leading-[4rem]"
            }
          ></h2>
        </Typed>
      </div>
      <div className="header-bg">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          dynamicHeight={true}
          emulateTouch={true}
          swipeable={true}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
        >
          <div>
            <img src={image1} alt="image1" />
          </div>
          <div>
            <img src={image2} alt="image2" />
          </div>
          <div>
            <img src={image3} alt="image3" />
          </div>
          <div>
            <img src={image4} alt="image4" />
          </div>
        </Carousel>
      </div>
    </header>
  );
};

export default MainSlider;
