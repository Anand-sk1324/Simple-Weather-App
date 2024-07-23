import React from "react";

const Divider = ({ responsive = false }) => {
  return (
    <div
      className={` w-full h-1 md:w-4 md:h-52 ${
        responsive && "lg:h-1 lg:w-full"
      } bg-slate-500 opacity-10 rounded-3xl`}
    ></div>
  );
};

export default Divider;
