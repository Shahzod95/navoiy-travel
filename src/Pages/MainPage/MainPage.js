import BestPlace from "../../components/BestPlace";
import Header from "../../components/Header";
import MainSlider from "../../components/MainSlider/MainSlider";
import NatureSlider from "../../components/NatureSlider";
import UsefulBlogPage from "../UsufulBlogPage";
const MainPage = () => {
  return (
    <div>
      <Header />
      <MainSlider />
      <NatureSlider />
      <UsefulBlogPage />
      <BestPlace />
    </div>
  );
};

export default MainPage;
