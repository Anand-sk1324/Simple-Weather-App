import React from 'react'

const WeatherCard = ({data, responsive = false, additional =false}) => {
  return (
    <div className= {`flex flex-row ${responsive && ' md:flex-col'} justify-between items-center w-full mb-5`}>
      <p className='md:text-xl tracking-widest'>{data.time}</p>
      <div className=' relative'>
      <img src={`https://openweathermap.org/img/wn/${data.iconId}@4x.png`} alt="icon" width='100px' />
      {additional && <p className='text-xl text-slate-600 tracking-wider absolute -bottom-1 left-1/2 -translate-x-1/2 '>{data.main}</p>}
      </div>
      <p className=' text-2xl text-slate-200 tracking-wider'>{data.temp}°C</p>
    </div>
  )
}

export default WeatherCard
