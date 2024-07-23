import React, { Fragment } from "react";
import Divider from "./Divider";

const SearchResponse = ({ citiesData, setCoord }) => {
  const handleClick = (data) => {
    setCoord({
      lat: data.lat,
      lon: data.lon,
    });
  };
  return (
    <div className=" hidden peer-focus-within:block hover:block w-full bg-slate-300 mt-2 rounded-2xl py-3 px-2 absolute top-full">
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
              {citiesData.length - 1 !== ind && <Divider />}
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResponse;
