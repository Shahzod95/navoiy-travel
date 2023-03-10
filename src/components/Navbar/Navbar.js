import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Logo from "../../assets/Images/logo.png";
import LogoLight from "../../assets/Images/logo_light.png";
import routes from "../../routes";
import { map, uniqueId } from "lodash";
import { Link } from "react-router-dom";
import CustomSelect from "../CustomSelect/CustomSelect";

const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState([]);
  const [transparent, setTransparent] = useState(false);
  const [image, setImage] = useState(0);
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, []);
  const subMenuOnMouseEnterHandler = (subMenuId) => {
    setShowSubMenu(() => {
      let arr = [];
      arr[subMenuId] = true;
      return arr;
    });
    setTransparent(true);
  };
  const subMenuOnMouseLeaveHandler = (subMenuId) => {
    setShowSubMenu(() => {
      let arr = [];
      arr[subMenuId] = false;
      return arr;
    });
    setTransparent(false);
  };

  const mouseEnterHandler = (id) => {
    setImage(id);
  };

  return (
    <div
      className={`navbar ${
        showSubMenu[0] || transparent || navbar
          ? "fixed-navbar"
          : "static-navbar"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-[5.4rem]">
          <img
            src={navbar || showSubMenu[1] ? Logo : LogoLight}
            alt={"Navoiy Travel logo"}
            className={`w-[7.256rem] h-[4rem] d-block cursor-pointer`}
          />
          <ul className="flex items-center gap-[24px]">
            {map(routes, (item) => {
              if (!item.children) {
                return (
                  <li
                    key={uniqueId("menu_list_wChildren_")}
                    onMouseEnter={() => subMenuOnMouseLeaveHandler(item.id)}
                  >
                    <Link to="#" className={`navbar-link`}>
                      {item.title}
                    </Link>
                  </li>
                );
              }
              return (
                <li
                  onMouseEnter={() => subMenuOnMouseEnterHandler(item.id)}
                  key={uniqueId("menu_list_")}
                  className={`navbar-link`}
                >
                  <div className="header-nav-div">
                    <span className={`mr-1 navbar-link`}>{item.title}</span>
                    {showSubMenu[item.id] ? (
                      <BsChevronUp className="inline navbar-link" />
                    ) : (
                      <BsChevronDown className="inline navbar-link" />
                    )}
                  </div>
                  {showSubMenu[item.id] && (
                    <motion.div
                      onMouseEnter={() => subMenuOnMouseEnterHandler(item.id)}
                      onMouseLeave={() => subMenuOnMouseLeaveHandler(item.id)}
                      className={`w-full h-[90vh] absolute mt-20 top-[0] left-[0] bg-[#fff] transition-all ease-in-out duration-700 pt-10`}
                    >
                      <div className="container mx-auto w-full">
                        <div className="flex flex-row justify-around items-center py-6">
                          <img
                            src={item.children[image].img_url}
                            className={`inline-block w-56 rotate-6 sub-image transition-all ease-in-out duration-500`}
                            alt={item.children[image].title}
                          />
                          <ul className="inline-block destination">
                            {map(item?.children, (elem, idx) => {
                              return (
                                <li
                                  key={uniqueId("sub_menu_")}
                                  onMouseEnter={() => mouseEnterHandler(idx)}
                                >
                                  <Link
                                    to={"#"}
                                    className={`navbar-link hover:text-green-400 sub-menu`}
                                  >
                                    {elem.title}
                                  </Link>
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
          <CustomSelect fixedNavbar={navbar} />
          <button className="flex bg-color-main-green text-[#fff] justify-center gap-[10px] p-[8px_16px] rounded-[20px] items-center hover:bg-teal-400 ease-in-out duration-500">
            Book trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
