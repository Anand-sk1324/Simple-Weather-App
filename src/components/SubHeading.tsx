import React from "react";

const SubHeading = ({ children }) => {
  return (
    <h3 className="text-base md:text-lg text-slate-200 font-extrabold tracking-widest">
      {children}
    </h3>
  );
};

export default SubHeading;
