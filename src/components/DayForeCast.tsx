import React, { Fragment } from "react";
import WeatherCard from "./WeatherCard";
import Divider from "./Divider";
import useForeCastHourly from "../utils/useForeCastHourly";
import { fetch, select } from "../utils/ForeCastHourlyUtils";

import { useQuery } from "react-query";
import axios from "axios";

const DayForeCast = ({ coord }) => {
  const { data, isLoading } = useQuery(
    ["forecast", coord],
    () => fetch(coord.lat, coord.lon),
    {
      select: (data) => select(data.data),
    }
  );
  if (isLoading) return <></>;
  return (
    <div className=" flex flex-col h-full">
      <h2>TODAY'S WEATHER</h2>
      <div className="flex flex-col md:flex-row justify-between items-center mt-2 group divider-vertical h-full">
        {data.map((data, ind) => (
          <Fragment key={data.time}>
            <WeatherCard data={data} responsive />
            {data.length - 1 !== ind && <Divider />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default DayForeCast;
