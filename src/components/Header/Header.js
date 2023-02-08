import { useState } from "react";
import { motion } from "framer-motion";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Logo from "../../assets/Images/logo.png";
import routes from "../../routes";

const Header = ({ downIcon, logged }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [image, setImage] = useState(0);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const subMenuOnMouseEnterHandler = () => {
    console.log("running mouse enter");

    setShowSubMenu(true);
  };
  const subMenuOnMouseLeaveHandler = () => {
    console.log("running mouse leave");
    setShowSubMenu(false);
  };

  const mouseEnterHandler = (id) => {
    setImage(id);
  };
  console.log(image);

  return (
    <div
      className={`flex justify-around items-center py-6 z-20 fixed w-full ${
        showSubMenu ? "bg-[#fff]" : "bg-transparent"
      }`}
    >
      <div>
        <img src={Logo} alt={"logo"} className={`w-20 h-12 cursor-pointer`} />
      </div>
      <div>
        <ul className="flex items-center gap-[24px]">
          {routes.map((item, index) => {
            if (!item.children) {
              return (
                <li
                  key={item.id}
                  onMouseEnter={() => subMenuOnMouseLeaveHandler()}
                >
                  <a
                    href="#"
                    className={`cursor-pointer hover:text-teal-700 ease-in-out duration-500`}
                  >
                    {item.title}
                  </a>
                </li>
              );
            }
            return (
              <li
                onMouseEnter={() => subMenuOnMouseEnterHandler()}
                key={item.id}
                className={`cursor-pointer hover:text-teal-700 ease-in-out duration-500`}
              >
                <div className="header-nav-div">
                  <span className={`mr-1`}>{item.title}</span>
                  {showSubMenu ? (
                    <BsChevronUp className="inline" />
                  ) : (
                    <BsChevronDown className="inline" />
                  )}
                </div>
                {showSubMenu && (
                  <motion.div
                    onMouseEnter={() => subMenuOnMouseEnterHandler()}
                    onMouseLeave={() => subMenuOnMouseLeaveHandler()}
                    className={`w-full h-[90vh] absolute mt-24 top-[0] left-[0] bg-[#fff]`}
                  >
                    <div className="container mx-auto w-full">
                      <div className="flex flex-row justify-around items-center py-6">
                        <img
                          src={item.children[image].img_url}
                          className={`inline-block w-56 rotate-6 sub-image`}
                          alt={item.children[image].title}
                        />
                        <ul className="inline-block destination">
                          {item.children.map((elem, idx) => {
                            return (
                              <li
                                key={elem.id}
                                className={``}
                                onMouseEnter={() => mouseEnterHandler(idx)}
                              >
                                <a
                                  href={"#"}
                                  className={`transition ease-in-out duration-300 hover:text-green-400 sub-menu`}
                                >
                                  {elem.title}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center gap-[24px]">
        <select className="border-none outline-[0] bg-transparent cursor-pointer">
          <option value="eng" className="text-[#000] p-6">
            Eng
          </option>
          <option value="ru" className="text-[#000] p-6">
            Ru
          </option>
          <option value="uzb" className="text-[#000] p-6">
            Uzb
          </option>
        </select>
        <button className="flex bg-[#265C35] text-[#fff] justify-center gap-[10px] p-[8px_16px] rounded-[20px] items-center hover:bg-teal-400 ease-in-out duration-500">
          Book trip
        </button>
      </div>
    </div>
  );
};

export default Header;
