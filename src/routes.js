// import {lolosArrowDown, lolosArrowUp} from 'react-icons'
import Logo from "./assets/Images/logo.png";
import img1 from "./assets/Images/UseImg1.png";
import img2 from "./assets/Images/UseImg2.png";
import img3 from "./assets/Images/UseImg3.png";
const routes = [
  {
    id: 1,
    title: "About",
    logged: true,
    isActive: true,
    icon: true,
  },
  {
    id: 2,
    title: "Destinations",
    // icon: downIcon ? false : true,
    logged: false,
    isActive: false,
    icon: true,
    children: [
      {
        id: 11,
        title: "Art and culture",
        img_url: img3,
      },
      {
        id: 12,
        title: "Coasts and breaches0",
        img_url: img1,
      },
      {
        id: 13,
        title: "City tourism",
        img_url: img2,
      },
      {
        id: 14,
        title: "Nature",
        img_url: img3,
      },
      {
        id: 15,
        title: "National food",
        img_url: img1,
      },
      {
        id: 16,
        title: "Sport and anventure",
        img_url: img2,
      },
      {
        id: 17,
        title: "Shopping",
        img_url: img3,
      },
      {
        id: 18,
        title: "Routes",
        img_url: img1,
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
    title: "Packages",
    logged: true,
    isActive: false,
  },
  {
    id: 5,
    title: "Blog",
    logged: true,
    isActive: false,
  },
  {
    id: 6,
    title: "Feedback",
    logged: true,
    isActive: false,
  },
];

export default routes;
