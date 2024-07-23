import React, { Fragment } from "react";
import WeatherCard from "./WeatherCard";
import Divider from "./Divider";
import { useQuery } from "react-query";
import { fetch, select } from "../utils/ForeCastDailyUtils";
import SubHeading from "./SubHeading";

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
      <SubHeading>DAILY WEATHER</SubHeading>
      <div className="flex flex-col md:flex-row lg:flex-col justify-between items-center mt-2  ">
        {data.map((data, ind) => (
          <Fragment key={data.time}>
            {ind != 0 && <Divider responsive />}
            <WeatherCard data={data} additional responsive />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default DayForeCast;
