import React from "react";
import bookExperents from "../../assets/Images/book_experents.jpg";
const BookExprerens = () => {
  return (
    <div className="w-full h-[80vh] my-7 relative">
      <img
        src={bookExperents}
        alt="Book_experens"
        className="w-full h-full bg-cover bg-center"
      />
      <div className="absolute top-0 w-full h-full backdrop-contrast-50 bg-black/30"></div>
      <div
        className={`absolute top-1/3 w-full h-full flex jutify-center flex-col items-center`}
      >
        <h2 className="text-[50px] text-white experents font-normal">
          Book your experence
        </h2>
        <p className="text-white tracking-widest text-[20px] font-light">
          Thousands of activities thought out for you
        </p>
        <button className="flex bg-[#42A469] my-7 text-[#fff] justify-center gap-[10px] p-[8px_16px] rounded-[5px] items-center hover:bg-[#4ebe7b] ease-in-out duration-500">
          Search for trips
        </button>
      </div>
    </div>
  );
};

export default BookExprerens;
