import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { GrFormNext } from "react-icons/gr";
import { useState } from "react";
import image from "../../assets/Images/image26.png";
import mosque from "../../assets/Images/QosimSheikh/qosim.png";
import mosque2 from "../../assets/Images/QosimSheikh/qosim2.png";
import mosque3 from "../../assets/Images/QosimSheikh/qosim3.png";
import mosque4 from "../../assets/Images/QosimSheikh/qosim4.png";
import sarmishsoy from "../../assets/Images/QosimSheikh/sarmishsoy.png";
import langar from "../../assets/Images/QosimSheikh/langar.png";
import sentop from "../../assets/Images/QosimSheikh/sentop.png";
import { IconContext } from "react-icons";

const MapHero = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div>
      <div className="map__hero">
        <img className="map__hero-bg" src={image} alt={`hero_image`} />
        <div className="container map__hero-content">
          <h1 className="map__hero-title">
            <span>Qosim sheikh</span> <br /> Jameh Mosque
          </h1>
        </div>
      </div>
      <div className="place__about">
        <div className="place__about-head">
          <h2 className="place__about-head-title">About Mosque</h2>
          <img
            className="place__about-img"
            src={mosque2}
            alt={`mosque_image`}
          />
        </div>
        <div className="place__head-body">
          <img
            className="place__head-body-img"
            src={mosque}
            alt={`mosque_image`}
          />
          <p className="place__about-text">
            Qasim Sheikh's mausoleum is an ancient monument located in the city
            of Navoi. This ancient monument includes a mosque, a hall for
            pilgrims and two. <br /> The mausoleum was built in 1571. According
            to the preserved chronicles, Kasim Sheikh Azizon Karminagiy
            (1500/1578-79) was one of the famous religious and political leaders
            of Central Asia, and his leader was Khoja Ahmed Yassavi.
          </p>
        </div>
      </div>
      <div className="place__history">
        <div className="place__history-container">
          <h2 className="place__history-title">Hazrat Qosim Sheikh</h2>
          <hr className="place__history-hr" />
          <div className="place__history-body">
            <p className="place__history-text">
              Hazrat Qasim Sheikh was famous among the people for his
              peace-loving activities during the struggle for the throne in
              Movarounnahr. He helps Abdullah Khan II in the battle against the
              army formed from the military forces of Samarkand, Tashkent and
              Turkestan. Hazrat Qasim Sheikh took part in military operations
              and hid his family members and servants under the castle.
            </p>
            <img src={mosque3} alt={`mosque_image`} />
          </div>
        </div>
      </div>
      <div className="place__history-end">
        <div className="place__history-end-container">
          <div className="place__history-end-body">
            <img
              className="place__history-end-image"
              src={mosque4}
              alt={`mosque_image`}
            />
            <p className="place__history-end-text">
              In 1579, Hazrat Qasim Sheikh died for unknown reasons and was
              buried in the Khazir center. A huge dahma made of marble is placed
              on their graves. Scientists say that the first building in the
              mausoleum area was built by Qasim Sheikh Azizon, and this building
              served as a madrasa until his death. There is also information
              that this building was used as a prayer hall. Mass prayers were
              held here during Ramadan-Hait and Kurban-Hait holidays. A year
              after the death of His Highness Qasim Sheikh, Abdulla Khan II came
              to visit the grave and held a rally there and started the
              construction of a khanaqah (shrine) next to it. Later, his
              followers were also buried next to Qasim Sheikh's grave. The
              mosque was built at the end of the 16th century. Bricks were used
              in the construction of the mosque. The mosque is square and has a
              large dome.
            </p>
          </div>
        </div>
      </div>
      <div className="explore__place">
        <div className="explore__place-container">
          <h2 className="explore__place-title">
            Explore other places of Navoi
          </h2>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3}
            centeredSlides={false}
            spaceBetween={30}
            // pagination={{
            //   type: "progressbar",
            // }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper map__slider"
          >
            <SwiperSlide className="map__slider-slide">
              <img src={sarmishsoy} alt={`sarmishsoy_image`} />
              <button className="map__slider-btn">
                Sarmishsoy
                <IconContext.Provider value={{ color: "white" }}>
                  <div>
                    <GrFormNext />
                  </div>
                </IconContext.Provider>
              </button>
            </SwiperSlide>
            <SwiperSlide className="map__slider-slide">
              <img src={langar} alt={`langar_image`} />
              <button className="map__slider-btn">
                Xatirchi Langar <GrFormNext style={{ color: "white" }} />
              </button>
            </SwiperSlide>
            <SwiperSlide className="map__slider-slide">
              <img src={sentop} alt={`sentop_image`} />
              <button className="map__slider-btn">
                Sentop village <GrFormNext style={{ color: "white" }} />
              </button>
            </SwiperSlide>
            <SwiperSlide className="map__slider-slide">
              <img src={sentop} alt={`sentop_image`} />
              <button className="map__slider-btn">
                Sentop village <GrFormNext style={{ color: "white" }} />
              </button>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MapHero;
