import BestPlace from "../../components/BestPlaceCard";
import BookExprerens from "../../components/BookExperens";
import Footer from "../../components/Footer/Footer";
import MainSlider from "../../components/MainSlider/MainSlider";
import MainVideo from "../../components/MainVideo";
import Navbar from "../../components/Navbar";
import NavoiMap from "../../components/NavoiMap";
import Newsletter from "../../components/Newsletter";
import PlayQuiz from "../../components/PlayQuiz";
import UpComing from "../../components/UpComing";
import UsefulBlogPage from "../UsufulBlogPage";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <MainSlider />
      <MainVideo />
      <BestPlace />
      <NavoiMap />
      <UsefulBlogPage />
      <PlayQuiz />
      <BookExprerens />
      <UpComing />
      <Newsletter />
      <Footer />
    </>
  );
};

export default MainPage;
