import React, { Fragment } from 'react'
import WeatherCard from './WeatherCard'
import Divider from './Divider'
import useForeCastDaily from '../hooks/useForeCastDaily'

const DayForeCast = () => {
  const [foreCastData] = useForeCastDaily()
  return (
    <div >
      <h2>DAILY WEATHER</h2>
      <div className='flex flex-col justify-between items-center mt-2  '>

        {
          foreCastData.map((data, ind)=> (
            <Fragment key={data.time}>
              <WeatherCard data={data} additional />
              {foreCastData.length - 1 !== ind && <Divider />}
            </Fragment>
          ))
        }
      </div>
    </div>
  )
}

export default DayForeCast
