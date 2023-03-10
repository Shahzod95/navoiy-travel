import playQuizBg from "../../assets/Images/quiz_card_imgs/play__quiz-bg.png";
import kizilkum from "../../assets/Images/quiz_card_imgs/kizilkum.png";
import sarmishsoy from "../../assets/Images/quiz_card_imgs/sarmishsoy.png";
import nurota from "../../assets/Images/quiz_card_imgs/nurota.png";

const quiz_cards = [
  {
    id: 1,
    img: kizilkum,
    name: "Kizilkum",
  },
  {
    id: 2,
    img: sarmishsoy,
    name: "Sarmishsoy",
  },
  {
    id: 3,
    img: nurota,
    name: "Nurota",
  },
];

const PlayQuiz = () => {
  return (
    <div className="play__quiz">
      <div className="play__quiz-container">
        <img
          className="play__quiz-bg"
          src={playQuizBg}
          alt={`play_quiz_bg_image`}
        />
        <div className="play__quiz-body">
          <h2 className="play__quiz-title">
            Suggestions for <br /> your trip
          </h2>
          <p className="play__quiz-description">
            Play and find best recommendations
          </p>
          <button className="play__quiz-btn">Play</button>
          <div className="play__quiz-cards">
            {quiz_cards.map((item) => {
              return (
                <div className="play__quiz-card" key={item.id}>
                  <img src={item.img} alt={`${item.title}_image`} />
                  <button className="play__quiz-card-btn">{item.name}</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayQuiz;
