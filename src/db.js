import nature1 from "./assets/Images/natures/Rectangle1.png";
import nature2 from "./assets/Images/natures/Rectangle2.png";
import nature3 from "./assets/Images/natures/Rectangle3.png";
import img1 from "./assets/Images/nature1.png";
import img2 from "./assets/Images/nature2.png";
import img3 from "./assets/Images/nature3.png";
import natureWord from "./assets/Images/natureWord.png";
import UpComingImage1 from "./assets/Images/uncomingImg.png";
import UpComingImage2 from "./assets/Images/upcomingImg2.png";
import packImg1 from "./assets/Images/pack1.png";
import packImg2 from "./assets/Images/pack2.png";
import packImg3 from "./assets/Images/pack3.png";
import packImg4 from "./assets/Images/pack4.png";

const data = {
  natures: [
    {
      id: 1,
      img_url: nature1,
      description: "Kizilkum",
    },
    {
      id: 2,
      img_url: nature2,
      description: "Sarmishsoy",
    },
    {
      id: 3,
      img_url: nature3,
      description: "Sardoba Malik",
    },
    {
      id: 4,
      img_url: nature3,
      description: "Sardoba Malik",
    },
    {
      id: 5,
      img_url: nature3,
      description: "Sardoba Malik",
    },
  ],
  naturedata: [
    {
      id: 1,
      image: img1,
      green: true,
      natureWord: natureWord,
      text: "Swim  in crystal-clear lakes, climb tall mountains and wander through dreamlike gorges.",
    },
    {
      id: 2,
      image: img2,
      blue: true,
      natureWord: natureWord,
      text: "Swim  in crystal-clear lakes, climb tall mountains and wander through dreamlike gorges.",
    },
    {
      id: 3,
      image: img3,
      orenge: true,
      natureWord: natureWord,
      text: "Swim  in crystal-clear lakes, climb tall mountains and wander through dreamlike gorges.",
    },
  ],
  upcoming: [
    {
      image: UpComingImage1,
      logged: true,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
    },
    {
      image: UpComingImage2,
      logged: true,
      transform: true,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
    },
  ],
  packages: [
    {
      image: packImg1,
      cost: "98",
      title: "Kizilkum",
      text: "Our passion people,travel and our country,it`s what makes us get our of bed in the morning",
    },
    {
      image: packImg2,
      cost: "98",
      title: "Sardoba Malik",
      text: "Our passion people,travel and our country,it`s what makes us get our of bed in the morning",
    },
    {
      image: packImg3,
      cost: "98",
      title: "Sarmishsoy",
      text: "Our passion people,travel and our country,it`s what makes us get our of bed in the morning",
    },
    {
      image: packImg4,
      cost: "98",
      title: "Fortres",
      text: "Our passion people,travel and our country,it`s what makes us get our of bed in the morning",
    },
  ],
};

export default data;
