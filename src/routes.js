import img1 from "./assets/Images/UseImg1.png";
import img2 from "./assets/Images/UseImg2.png";
import img3 from "./assets/Images/UseImg3.png";
const routes = [
  {
    id: 1,
    title: "Destinations",
    logged: false,
    isActive: false,
    icon: true,
    children: [
      {
        id: 21,
        title: "Art and culture",
        img_url: img3,
      },
      {
        id: 22,
        title: "Water",
        img_url: img1,
      },
      {
        id: 23,
        title: "Gastronomy",
        img_url: img2,
      },
      {
        id: 24,
        title: "Sport and adventure",
        img_url: img3,
      },
      {
        id: 25,
        title: "Safari",
        img_url: img1,
      },
      {
        id: 26,
        title: "Nature",
        img_url: img2,
      },
      {
        id: 27,
        title: "Routes",
        img_url: img1,
      },
    ],
  },
  {
    id: 2,
    title: "Trip planer",
    logged: false,
    isActive: false,
    icon: true,
    children: [
      {
        id: 11,
        title: "About",
        img_url: img3,
      },
      {
        id: 12,
        title: "Practical info",
        img_url: img1,
      },
      {
        id: 13,
        title: "Route planner",
        img_url: img2,
      },
      {
        id: 14,
        title: "The weather",
        img_url: img3,
      },
    ],
  },
  {
    id: 3,
    title: "Events",
    logged: true,
    isActive: false,
  },
  {
    id: 4,
    title: "Virtual tours",
    logged: true,
    isActive: false,
  },
];

export default routes;
