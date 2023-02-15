import React from "react";
import footerImage from "../../assets/Images/natures/footer_image.png";
import Logo from "../../assets/Images/logo_light.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#000] pb-8">
      <div className={`w-full h-[70vh]`}>
        <img
          src={footerImage}
          alt="Footer_image"
          className="w-full h-full bg-cover bg-center"
        />
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <img src={Logo} alt="Logo" className="w-20" />
          <div className="contact flex justify-between">
            <div className="phone">
              <span className="text-[#2BAA4D]">Call us</span>
              <br />
              <a href="+99871234567" className="text-white">
                +998 (71) 123-45-67
              </a>
            </div>
            <div className="email ml-14">
              <span className="text-[#2BAA4D]">E-mail us</span> <br />
              <a href="mail:navoitravel@gmail.com" className="text-white">
                navoitravel@gmail.com
              </a>
            </div>
          </div>
        </div>
        <hr className="text-gray-700 my-4" />
        <div className="flex justify-between mt-8">
          <p className="text-white text-sm">
            © 2023 Navoi Travel. All Rights Reserved
          </p>
          <div className="social text-white flex justify-between text-xl">
            <a
              href="#"
              className="cursor-pointer trasition ease-in-out duration-500 hover:text-[#2BAA4D]"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="cursor-pointer trasition ease-in-out duration-500 hover:text-[#2BAA4D]"
            >
              <FaFacebookF className="ml-7" />
            </a>
            <a
              href="#"
              className="cursor-pointer trasition ease-in-out duration-500 hover:text-[#2BAA4D]"
            >
              <FaYoutube className="ml-7" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
