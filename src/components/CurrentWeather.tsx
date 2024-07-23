import React, { useEffect, useState } from "react";

const CurrentWeather = ({ data, isLoading }) => {
  if (isLoading) return <></>;
  return (
    <div className=" flex justify-between items-center px-4 md:px-10 h-full gap-6 ">
      <div>
        <h2 className=" text-2xl md:text-3xl xl:text-4xl font-bold text-slate-300">
          {data.main}
        </h2>
        <h5 className=" xl:text-lg text-slate-500 mb-4 text-nowrap">
          {data.desc}
        </h5>
        <h3 className=" text-3xl md:text-4xl xl:text-5xl font-extrabold text-slate-200">
          {data.temp}°C
        </h3>
      </div>
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${data.iconId}@4x.png`}
          alt="Weather Icon"
          width="200"
          className="md:w-[250px] xl:w-[300px]"
        />
      </div>
    </div>
  );
};

export default CurrentWeather;
