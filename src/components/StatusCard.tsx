import React from "react";

const StatusCard = ({ Icon, title, value }) => {
  return (
    <div className="">
      <div className="grid grid-rows-[auto_auto] grid-cols-[40px_auto] place-items-center gap-1 ">
        {Icon}
        <p className="place-self-start text-lg lg:text-xl">{title}</p>
        <p className=" col-start-2 place-self-start text-xl lg:text-2xl text-slate-200">
          {value}
        </p>
      </div>
    </div>
  );
};

export default StatusCard;
