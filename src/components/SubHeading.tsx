import React from "react";

const SubHeading = ({ children }) => {
  return (
    <h3 className="text-base md:text-lg tracking-wider text-slate-400">
      {children}
    </h3>
  );
};

export default SubHeading;
