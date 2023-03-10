import "swiper/css";
import "swiper/css/pagination";
import photo from "../../assets/Images/UseImg1.png";

const BestPlacesCard = ({ img, title, text }) => {
  return (
    <div className={"best-places-card"}>
      <img src={photo} alt={`place_card_image`} />
      <div className="card-overlay">
        <h4 className={"card-overlay-title"}>Birnima birnima</h4>
        <p className={"card-overlay-text"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
          neque optio quam reiciendis sint tempora voluptate. Expedita quos rem
          tenetur.
        </p>
      </div>
    </div>
  );
};

export default BestPlacesCard;
