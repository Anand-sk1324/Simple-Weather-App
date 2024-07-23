import React, { Fragment } from "react";
import WeatherCard from "./WeatherCard";
import Divider from "./Divider";
import { useQuery } from "react-query";
import { fetch, select } from "../utils/ForeCastDailyUtils";

const DayForeCast = ({ coord }) => {
  console.log(coord.lat);
  const { data, isLoading } = useQuery(
    ["forecast-daily", coord],
    () => fetch(coord.lat, coord.lon),
    {
      select: (data) => select(data.data),
    }
  );

  if (isLoading) return <></>;
  return (
    <div>
      <h2>DAILY WEATHER</h2>
      <div className="flex flex-col justify-between items-center mt-2  ">
        {data.map((data, ind) => (
          <Fragment key={data.time}>
            <WeatherCard data={data} additional />
            {data.length - 1 !== ind && <Divider />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default DayForeCast;
