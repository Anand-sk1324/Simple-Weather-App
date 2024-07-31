import React, { Fragment } from "react";
import Divider from "./Divider";

const SearchResponse = ({
  citiesData,
  setCoord,
  setSearchText,
  setCityName,
  isResponseOpen,
  setIsResponseOpen,
}) => {
  const handleClick = (data) => {
    setCityName(data.city);
    setCoord({
      lat: data.lat,
      lon: data.lon,
    });
    setIsResponseOpen(false);
    setSearchText("");
  };
  return (
    <div
      className={` ${
        isResponseOpen ? "block" : "hidden"
      } w-full bg-slate-200 mt-2 rounded-2xl py-3 px-2 absolute top-full lg:text-lg`}
    >
      {!citiesData ? (
        <div className="text-slate-400">Waiting For Input...</div>
      ) : (
        <div>
          {citiesData.map((cityData, ind) => (
            <Fragment key={cityData.id}>
              <button
                className=" py-2 text-slate-500 hover:text-slate-950 cursor-pointer w-full text-left"
                onClick={() => handleClick(cityData)}
              >
                <span>{cityData.city}</span>
                <span className="ml-2 text-sm text-slate-400">
                  {cityData.country}
                </span>
              </button>
              {ind !== citiesData.length - 1 && (
                <div className=" w-full h-1 bg-slate-300 "></div>
              )}
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResponse;
