import React from "react";
import { Triangle } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="flex justify-center items-center mt-64">
      <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
