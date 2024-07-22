import { useEffect, useState } from 'react'
import currentData from '../mockData/currentData'
export default () => {
    const [data, setData] = useState({})
    console.log(currentData)
    useEffect(() => {
        setData({
        main: currentData.weather[0].main,
        desc: currentData.weather[0].description,
        temp: currentData.main.temp.toString().slice(0, 4),
        iconId: currentData.weather[0].icon,

        wind: currentData.wind.speed,
        humidity: currentData.main.humidity,
        pressure: currentData.main.pressure,
        feelsLike: currentData.main.feels_like.toString().slice(0, 4),
        maxTemp: currentData.main.temp_max.toString().slice(0, 4),
        minTemp: currentData.main.temp_min.toString().slice(0, 4),
        })
    }, [])
    return [data, setData]
}