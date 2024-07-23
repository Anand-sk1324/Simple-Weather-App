import React, { useEffect, useState } from "react";

const CurrentWeather = ({ data, isLoading }) => {
  if (isLoading) return <></>;
  return (
    <div className=" flex justify-between items-center px-4 md:px-10 h-full">
      <div>
        <h2 className=" text-4xl font-extrabold mb-1">{data.main}</h2>
        <h5 className=" text-md text-slate-400 mb-4">{data.desc}</h5>
        <h3 className=" text-4xl font-extrabold ">{data.temp}°C</h3>
      </div>
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${data.iconId}@4x.png`}
          alt="Weather Icon"
          width="200"
        />
      </div>
    </div>
  );
};

export default CurrentWeather;
