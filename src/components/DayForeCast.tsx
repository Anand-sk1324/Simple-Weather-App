import React, { Fragment } from 'react'
import WeatherCard from './WeatherCard'
import Divider from './Divider'
import useForeCastHourly from '../hooks/useForeCastHourly'

const DayForeCast = () => {
  const [foreCastData] = useForeCastHourly()
  return (
    <div className=' flex flex-col h-full'>
      <h2>TODAY'S WEATHER</h2>
      <div className='flex flex-col md:flex-row justify-between items-center mt-2 group divider-vertical h-full'>

        {
          foreCastData.map((data, ind)=> (
            <Fragment key={data.time}>
              <WeatherCard data={data} responsive />
              {foreCastData.length - 1 !== ind && <Divider />}
            </Fragment>
          ))
        }
      </div>
    </div>
  )
}

export default DayForeCast
