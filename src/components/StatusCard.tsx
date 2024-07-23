import React from "react";

const StatusCard = ({ Icon, title, value }) => {
  return (
    <div className="">
      <div className="grid grid-rows-[30px_1fr] grid-cols-[40px_1fr] place-items-center gap-1 ">
        {Icon}
        <p className="place-self-start text-xl">{title}</p>
        <p className=" col-start-2 place-self-start text-2xl md:text-3xl text-slate-100">
          {value}
        </p>
      </div>
    </div>
  );
};

export default StatusCard;
