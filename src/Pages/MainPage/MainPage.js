import BestPlace from "../../components/BestPlace";
import BookExprerens from "../../components/BookExperens";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import MainSlider from "../../components/MainSlider/MainSlider";
import MainVideo from "../../components/MainVideo";
import NatureSlider from "../../components/NatureSlider";
import NavoiMap from "../../components/NavoiMap";
import Newsletter from "../../components/Newsletter";
import Packages from "../../components/Packages/Packages";
import UpComing from "../../components/Upcoming/UpComing";
import UsefulBlogPage from "../UsufulBlogPage";
const MainPage = () => {
  return (
    <div>
      <Header />
      <MainSlider />
      <MainVideo />
      <NatureSlider />
      <BestPlace />
      <NavoiMap />
      <UpComing />
      <Packages />
      <UsefulBlogPage />
      <Newsletter />
      <BookExprerens />
      <Footer />
    </div>
  );
};

export default MainPage;
