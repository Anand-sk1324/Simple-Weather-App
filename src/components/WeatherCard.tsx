import React from "react";

const WeatherCard = ({ data, responsive = false, additional = false }) => {
  return (
    <div
      className={`flex flex-row md:flex-col ${
        responsive && "lg:flex-row"
      } justify-between items-center w-full mb-5`}
    >
      <p className=" text-lg tracking-widest text-slate-400">{data.time}</p>
      <div className=" relative">
        <img
          src={`https://openweathermap.org/img/wn/${data.iconId}@4x.png`}
          alt="icon"
          width="100px"
        />
        {additional && (
          <p className="text-lg text-slate-600 tracking-wider absolute -bottom-1 left-1/2 -translate-x-1/2 ">
            {data.main}
          </p>
        )}
      </div>
      <p className=" text-xl text-slate-200 tracking-wider ">{data.temp}°C</p>
    </div>
  );
};

export default WeatherCard;
